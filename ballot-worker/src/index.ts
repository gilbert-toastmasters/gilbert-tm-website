export interface Env {
  BALLOT_KV: KVNamespace
  ADMIN_PASSWORD: string
}

const CATEGORIES = ['speaker', 'evaluator', 'tableTopics'] as const
type Category = (typeof CATEGORIES)[number]

type Meeting = {
  id: string
  date: string
  nominees: Record<Category, string[]>
  status: 'open' | 'closed'
  openedAt: string
  closedAt?: string
}

type Tally = Record<Category, Record<string, number>>

export default {
  async fetch(req: Request, env: Env): Promise<Response> {
    if (req.method === 'OPTIONS') return cors(new Response(null, { status: 204 }))

    const url = new URL(req.url)
    const path = url.pathname

    try {
      if (path === '/meeting' && req.method === 'GET') return cors(await getMeeting(env))
      if (path === '/meeting' && req.method === 'POST') return cors(await openMeeting(req, env))
      if (path === '/meeting/close' && req.method === 'POST') return cors(await closeMeeting(req, env))
      if (path === '/meeting/reset' && req.method === 'POST') return cors(await resetMeeting(req, env))
      if (path === '/vote' && req.method === 'POST') return cors(await submitVote(req, env))
      if (path === '/results' && req.method === 'GET') return cors(await getResults(req, env))
      return cors(new Response('Not found', { status: 404 }))
    } catch (e) {
      const err = e as Error & { status?: number }
      return cors(new Response(err.message, { status: err.status ?? 500 }))
    }
  },
}

function cors(res: Response): Response {
  const out = new Response(res.body, res)
  out.headers.set('Access-Control-Allow-Origin', '*')
  out.headers.set('Access-Control-Allow-Headers', 'authorization, content-type')
  out.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  return out
}

function requireAdmin(req: Request, env: Env): void {
  const auth = req.headers.get('authorization') || ''
  const token = auth.replace(/^Bearer /, '')
  if (!env.ADMIN_PASSWORD || token !== env.ADMIN_PASSWORD) {
    throw Object.assign(new Error('Unauthorized'), { status: 401 })
  }
}

async function getMeeting(env: Env): Promise<Response> {
  const meeting = await env.BALLOT_KV.get('meeting:current', 'json')
  return Response.json(meeting ?? null)
}

async function openMeeting(req: Request, env: Env): Promise<Response> {
  requireAdmin(req, env)
  const body = (await req.json()) as {
    date: string
    nominees: Record<Category, string[]>
  }
  if (!body.date || !body.nominees) {
    return new Response('Missing date or nominees', { status: 400 })
  }
  const id = `meeting-${Date.now()}`
  const meeting: Meeting = {
    id,
    date: body.date,
    nominees: {
      speaker: body.nominees.speaker || [],
      evaluator: body.nominees.evaluator || [],
      tableTopics: body.nominees.tableTopics || [],
    },
    status: 'open',
    openedAt: new Date().toISOString(),
  }
  await env.BALLOT_KV.put('meeting:current', JSON.stringify(meeting))
  return Response.json(meeting)
}

async function submitVote(req: Request, env: Env): Promise<Response> {
  const meeting = (await env.BALLOT_KV.get('meeting:current', 'json')) as Meeting | null
  if (!meeting || meeting.status !== 'open') {
    return new Response('No meeting open', { status: 400 })
  }
  const body = (await req.json()) as Partial<Record<Category, string>>
  for (const cat of CATEGORIES) {
    const nominee = body[cat]
    if (!nominee) continue
    if (!meeting.nominees[cat].includes(nominee)) continue
    const key = `meeting:${meeting.id}:vote:${cat}:${crypto.randomUUID()}`
    await env.BALLOT_KV.put(key, nominee)
  }
  return Response.json({ ok: true })
}

async function getResults(req: Request, env: Env): Promise<Response> {
  requireAdmin(req, env)
  const meeting = (await env.BALLOT_KV.get('meeting:current', 'json')) as Meeting | null
  if (!meeting) return Response.json(null)
  const tally = await tallyMeeting(env, meeting)
  return Response.json({ meeting, tally })
}

async function closeMeeting(req: Request, env: Env): Promise<Response> {
  requireAdmin(req, env)
  const meeting = (await env.BALLOT_KV.get('meeting:current', 'json')) as Meeting | null
  if (!meeting) return new Response('No meeting open', { status: 400 })
  meeting.status = 'closed'
  meeting.closedAt = new Date().toISOString()
  await env.BALLOT_KV.put('meeting:current', JSON.stringify(meeting))
  const tally = await tallyMeeting(env, meeting)
  await env.BALLOT_KV.put(
    `meeting:${meeting.id}:archive`,
    JSON.stringify({ meeting, tally }),
  )
  return Response.json({ meeting, tally })
}

async function resetMeeting(req: Request, env: Env): Promise<Response> {
  requireAdmin(req, env)
  await env.BALLOT_KV.delete('meeting:current')
  return Response.json({ ok: true })
}

async function tallyMeeting(env: Env, meeting: Meeting): Promise<Tally> {
  const tally: Tally = { speaker: {}, evaluator: {}, tableTopics: {} }
  for (const cat of CATEGORIES) {
    let cursor: string | undefined
    do {
      const list = await env.BALLOT_KV.list({
        prefix: `meeting:${meeting.id}:vote:${cat}:`,
        cursor,
      })
      const reads = await Promise.all(
        list.keys.map((k) => env.BALLOT_KV.get(k.name)),
      )
      for (const nominee of reads) {
        if (nominee) tally[cat][nominee] = (tally[cat][nominee] || 0) + 1
      }
      cursor = list.list_complete ? undefined : list.cursor
    } while (cursor)
  }
  return tally
}
