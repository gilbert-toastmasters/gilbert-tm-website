export const CATEGORIES = ['speaker', 'evaluator', 'tableTopics'] as const
export type Category = (typeof CATEGORIES)[number]

export const CATEGORY_LABELS: Record<Category, string> = {
  speaker: 'Best Speaker',
  evaluator: 'Best Evaluator',
  tableTopics: 'Best Table Topics',
}

export type Meeting = {
  id: string
  date: string
  nominees: Record<Category, string[]>
  status: 'open' | 'closed'
  openedAt: string
  closedAt?: string
}

export type Vote = Partial<Record<Category, string>>

export type Tally = Record<Category, Record<string, number>>

const BASE_URL =
  process.env.NEXT_PUBLIC_BALLOT_API_URL || 'http://localhost:8787'

async function call<T>(
  path: string,
  init: RequestInit = {},
  password?: string,
): Promise<T> {
  const headers = new Headers(init.headers)
  if (password) headers.set('Authorization', `Bearer ${password}`)
  if (init.body) headers.set('Content-Type', 'application/json')
  const res = await fetch(`${BASE_URL}${path}`, { ...init, headers })
  if (res.status === 401) {
    const err = new Error('Unauthorized')
    ;(err as Error & { status: number }).status = 401
    throw err
  }
  if (!res.ok) throw new Error(`${res.status}: ${await res.text()}`)
  return (await res.json()) as T
}

export const ballotApi = {
  getMeeting: () => call<Meeting | null>('/meeting'),
  openMeeting: (
    password: string,
    date: string,
    nominees: Record<Category, string[]>,
  ) =>
    call<Meeting>(
      '/meeting',
      { method: 'POST', body: JSON.stringify({ date, nominees }) },
      password,
    ),
  closeMeeting: (password: string) =>
    call<{ meeting: Meeting; tally: Tally }>(
      '/meeting/close',
      { method: 'POST' },
      password,
    ),
  resetMeeting: (password: string) =>
    call<{ ok: true }>('/meeting/reset', { method: 'POST' }, password),
  submitVote: (vote: Vote) =>
    call<{ ok: true }>('/vote', { method: 'POST', body: JSON.stringify(vote) }),
  getResults: (password: string) =>
    call<{ meeting: Meeting; tally: Tally } | null>('/results', {}, password),
}
