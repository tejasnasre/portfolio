# portfolio

Minimal, single-page portfolio for **Tejas Nasre** — full stack engineer building mobile and web products.

Built with [Next.js](https://nextjs.org) (App Router), [Tailwind CSS v4](https://tailwindcss.com), and [shadcn/ui](https://ui.shadcn.com). Optimized for both human visitors and AI agents via [Dualmark](https://dualmark.dev).

## Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| UI | shadcn/ui, Phosphor Icons |
| Theme | next-themes (light/dark/system) |
| AEO | Dualmark (markdown twin, `/llms.txt`) |
| Font | DM Sans |

## Sections

- Hero — bio, contact, social links, resume
- Things I Build — capability areas
- Experience — work timeline
- Projects — featured builds
- Open Source — PR contributions
- Skills — categorized tech stack
- Activities & Achievements

## Getting Started

```bash
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build

```bash
bun run build
```

### Lint

```bash
bun run lint
```

## AEO (AI Engine Optimization)

The site serves markdown twins for AI crawlers via Dualmark:

- `proxy.ts` — middleware rewrites AI bot and `.md` requests
- `app/md/[...path]/route.ts` — renders markdown versions of pages
- `app/llms.txt/route.ts` — `/llms.txt` for LLM context ingestion

Verify conformance:

```bash
bunx @dualmark/cli verify http://localhost:3000
```

## Deployment

Deployed on [Vercel](https://vercel.com). Connect the repo and it just works.

## License

MIT
