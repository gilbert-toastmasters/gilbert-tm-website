# Gilbert TM Ballot Worker

Cloudflare Worker that backs the `/ballot/` and `/ballot/admin/` pages on the Gilbert TM site. Stores votes in Workers KV. Stateless, single TS file.

## One-time setup

1. **Sign in to Cloudflare** (free account is fine):
   ```bash
   pnpm install
   pnpm exec wrangler login
   ```

2. **Create the KV namespace**:
   ```bash
   pnpm exec wrangler kv namespace create BALLOT_KV
   ```
   Copy the `id` from the output into `wrangler.toml` (replace `REPLACE_WITH_KV_ID`).

3. **Set the admin password**:
   ```bash
   pnpm exec wrangler secret put ADMIN_PASSWORD
   ```
   Paste the password when prompted. This is what the General Evaluator types into `/ballot/admin/`.

4. **Deploy**:
   ```bash
   pnpm run deploy
   ```
   Note the URL Wrangler prints (e.g. `https://gilbert-tm-ballot.<account>.workers.dev`).

5. **Wire the frontend** to the Worker URL by setting `NEXT_PUBLIC_BALLOT_API_URL` in the Gilbert TM site's environment before building/deploying:
   ```bash
   echo 'NEXT_PUBLIC_BALLOT_API_URL=https://gilbert-tm-ballot.<account>.workers.dev' >> ../.env.local
   ```

## Local dev

```bash
pnpm run dev   # serves the Worker at http://localhost:8787
```

The frontend defaults to `http://localhost:8787` when `NEXT_PUBLIC_BALLOT_API_URL` is unset, so running both `pnpm dev` (in `gilbert-tm/`) and `pnpm dev` (in `gilbert-tm/ballot-worker/`) is enough to test end-to-end.

For local dev, KV is a local SQLite file (Wrangler simulates it). The admin password is read from `.dev.vars`:

```
ADMIN_PASSWORD=dev-password
```

(Don't commit `.dev.vars`.)

## API

| Method | Path             | Auth  | Purpose                           |
| ------ | ---------------- | ----- | --------------------------------- |
| GET    | `/meeting`       | —     | Current meeting + nominees        |
| POST   | `/meeting`       | admin | Open a new meeting                |
| POST   | `/meeting/close` | admin | Close voting, freeze tally        |
| POST   | `/meeting/reset` | admin | Discard current meeting           |
| GET    | `/results`       | admin | Current tally                     |
| POST   | `/vote`          | —     | Submit `{ speaker?, evaluator?, tableTopics? }` |

Admin auth = `Authorization: Bearer <ADMIN_PASSWORD>`.

## KV layout

- `meeting:current` — current meeting JSON (or absent)
- `meeting:{id}:vote:{cat}:{uuid}` — single vote, value = nominee name
- `meeting:{id}:archive` — frozen `{ meeting, tally }` after close
