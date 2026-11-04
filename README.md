# Saksham — AI Engineer Portfolio

My personal portfolio. I build intelligent software that turns data and models into
products people can trust and enjoy using — with a focus on applied machine learning,
language models, and the systems around them.

🔗 **Live site:** _coming soon_

## Pages

- **Home** — intro and hero scene
- **Projects** — selected work, with a detail page for each project
- **Experience** — my experience and growth mindset, including two AI products I'm building:
  - **AI Interviewer** — learn from AI through realistic mock interviews and feedback
  - **AI Mentor** — one-on-one AI mentorship
- **About** — background, the tools I work with, and my skills
- **Contact** — reach me by email or WhatsApp

## Featured projects

| Project | What it is |
| --- | --- |
| [IntentFlow](https://github.com/sakshaaamm/IntentFlow) | Captures user behavior from AI chat providers (ChatGPT, Claude, Perplexity, Grok) via a Chrome extension and turns it into structured SEO campaign data. I built the backend and data pipelines. |
| [Chocolate Sales Analytics](https://github.com/sakshaaamm/SectionB_G-17_ChocolateSalesDataset) | A data visualization capstone: five raw retail datasets turned into Python + Tableau business intelligence dashboards. I was the Visualization Lead. |
| [SnapFree](https://github.com/sakshaaamm/SnapFree) | A fast, native macOS screenshot and screen-recording app built with SwiftUI and ScreenCaptureKit, with an annotation editor and OCR. |

## Tech stack

- **Framework:** Next.js 15 (App Router) + React 19
- **Styling:** Tailwind CSS v4
- **Animation:** GSAP + Lenis smooth scroll
- **Backend (optional):** Supabase (database), Resend (email)
- **Deployment:** Vercel

## Running locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

```bash
npm run build   # production build
npm run start   # run the production build
```

### Environment variables

The site runs fine without any configuration. To enable the optional features
(saved projects, working contact email, newsletter), copy the example file and
fill in the keys:

```bash
cp .env.example .env.local
```

| Variable | Used for |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL (SEO, sitemap) |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Public contact email |
| `NEXT_PUBLIC_CONTACT_PHONE` | Public contact phone |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp link on the contact form |
| `NEXT_PUBLIC_SUPABASE_URL` / `SUPABASE_SERVICE_ROLE_KEY` | Supabase (projects, analytics, admin) |
| `RESEND_API_KEY` / `RESEND_FROM` | Sending contact + newsletter email |
| `JWT_SECRET` / `ADMIN_EMAIL` | Admin panel login |

## Customising the content

Most of the text and data lives in small content files, so you can edit copy
without touching the components:

- `src/lib/site.js` — name, role, email, phone
- `src/app/about/content.js` — About bio, tech list, tools
- `src/app/experience/content.js` — Experience tabs and the AI Interviewer / AI Mentor cards
- `src/app/work/content.js` — the project list
- `src/lib/theme.js` — background tint and accent colours

## Credits

Built on the open-source [Nextjs cinematic portfolio](https://github.com/5araang/Nextjs-cinematic-portfolio)
template by Sarang, used under the MIT License (see [`LICENSE`](./LICENSE)).
The design, content, character, colour scheme, projects, and Experience page are my own.
