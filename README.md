# ReNewIt Floors — Website

Family-owned floor restoration in Miami. 30+ years of polished concrete, terrazzo, marble, and tile restoration across South Florida.

**Domain:** [renewitfloorsmiami.com](https://renewitfloorsmiami.com)
**Phone:** (305) 271-7119
**Email:** jobs@renewitfloorsmiami.com

---

## Tech Stack

- **Framework:** Next.js 16 (App Router) + React 19 + TypeScript
- **Styling:** Tailwind CSS v4 + custom brand design tokens
- **Animation:** Framer Motion (with `prefers-reduced-motion` respected globally)
- **Forms:** [FormSubmit](https://formsubmit.co) — submissions delivered straight to `jobs@renewitfloorsmiami.com`
- **Hosting:** Vercel-ready (Fluid Compute, Edge CDN)
- **Analytics:** GA4 + GTM + Microsoft Clarity (env-driven, all optional)
- **Fonts:** Satoshi (Fontshare) + Inter (Google Fonts)

## Site Map (32+ pages)

```
/
├── /services (hub)
│   ├── /services/concrete-epoxy + 9 detail pages
│   ├── /services/stone-specialty + 4 detail pages
│   ├── /services/hardwood-repair + 2 detail pages
│   └── /services/commercial-industrial + 1 detail page
├── /projects + 6 case studies
├── /about (Jose's story + Foundation-First Method)
├── /service-areas (4 counties + neighborhoods)
├── /testimonials
├── /faq (24 Q&As across 6 categories)
├── /contact (Free Assessment form)
├── /floor-care-guide (placeholder + email capture)
├── /blog (placeholder)
├── /privacy + /terms
└── 404 (custom on-brand)
```

## Brand System

| Token | Value |
|---|---|
| Rust (primary) | `#B04A2A` |
| Charcoal | `#2E343B` |
| Slate | `#4A5058` |
| Cream | `#F7F2EC` |
| Stone | `#E8E1D7` |
| Sand | `#C9B8A0` |
| Ink | `#1C1F23` |

Display type: **Satoshi** · Body: **Inter**

## Local Development

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Build & Type Check

```bash
npm run build       # production build
npx tsc --noEmit    # type check
npm run lint        # ESLint
```

## Environment Variables

Copy `.env.example` to `.env.local` and fill in the IDs as you provision each service. The analytics IDs are optional. The Anthropic key is required only if you want the "Ask Jose" support chat agent live.

```bash
cp .env.example .env.local
```

| Var | Required? | Where to get it |
|---|---|---|
| `NEXT_PUBLIC_GA4_ID` | Optional | [analytics.google.com](https://analytics.google.com) (looks like `G-XXXXXXXXX`) |
| `NEXT_PUBLIC_GTM_ID` | Optional | [tagmanager.google.com](https://tagmanager.google.com) (looks like `GTM-XXXXXXX`) |
| `NEXT_PUBLIC_CLARITY_ID` | Optional | [clarity.microsoft.com](https://clarity.microsoft.com) (project ID) |
| `ANTHROPIC_API_KEY` | Required for chat | [console.anthropic.com/settings/keys](https://console.anthropic.com/settings/keys) (starts with `sk-ant-api03-`) |

When deploying to Vercel, add `ANTHROPIC_API_KEY` to the project environment variables (Production scope) — without it, the chat widget gracefully shows an error message and the rest of the site keeps working.

## Customer Support Chat Agent ("Ask Jose")

A floating chat bubble in the bottom-right of every page lets visitors ask questions and get answers grounded in the site's content (services, cities, FAQs, projects, testimonials, site config — collectively the "master brain").

**How it works**
- Frontend: `components/global/ChatAgent.tsx` — bilingual (EN/ES based on the language toggle), streaming, with an escalation flow when the agent can't answer with high confidence.
- Backend: `app/api/chat/route.ts` — Vercel serverless function using the Vercel AI SDK + Anthropic provider, streaming `claude-sonnet-4-5` responses.
- System prompt: `lib/agent/systemPrompt.ts` — assembles every record from `lib/content/` into a grounded prompt. Every change you make to services, cities, FAQs, etc. is automatically picked up by the agent on the next request.

**Hard rails baked into the prompt**
- Never quotes prices (every floor is custom-quoted)
- Never promises specific dates or times
- Never invents services we don't offer
- Always links back to a real page on the site
- Escalates to a callback form when confidence drops below ~80%
- The escalation form posts to the same FormSubmit endpoint as the contact form, so handoff requests land in `jobs@renewitfloorsmiami.com` with subject "Chat handoff — needs human follow-up"

**Cost ballpark**
- Per typical conversation (~5 turns): roughly $0.05–$0.15 in API spend
- The system prompt is ~30K tokens; first call pays full price, subsequent calls within 5 minutes hit Anthropic's prompt cache for ~90% off
- For a marketing site with low chat volume (50 conversations/day), expect ~$2–5/day

## Form Activation (One-Time Setup)

The contact form posts to FormSubmit at `formsubmit.co/jobs@renewitfloorsmiami.com`.

**The first time someone submits the form**, FormSubmit will email `jobs@renewitfloorsmiami.com` with an activation link. Click it once, and every form submission from then on lands in the inbox automatically. No account required.

## Content Updates

All content lives in plain TypeScript files under `lib/content/`:

| File | What's in it |
|---|---|
| `services.ts` | All 16 services + 4 categories with copy, scope, process, FAQs |
| `projects.ts` | Project case studies (replace placeholders with real before/after photos and stories) |
| `testimonials.ts` | Customer testimonials (replace placeholders with real Google reviews) |
| `areas.ts` | Service areas by county |
| `faqs.ts` | All FAQs grouped by category |
| `site.ts` | NAP info, hours, social links, brand tagline |

Edit any of these files and the site updates everywhere it's referenced.

## Deployment to Vercel

```bash
# install Vercel CLI (one-time)
npm install -g vercel

# link the project
vercel link

# pull environment variables (after setting them in Vercel Dashboard)
vercel env pull .env.local

# deploy preview
vercel

# deploy to production
vercel --prod
```

Or push to `main` and Vercel will auto-deploy if the project is connected to this GitHub repo.

## SEO Built-In

- LocalBusiness, Organization, WebSite, Service, FAQPage, BreadcrumbList JSON-LD on every relevant page
- Auto-generated `/sitemap.xml` and `/robots.txt`
- Per-page metadata (title, description, Open Graph, Twitter cards, canonical URLs)
- Mobile-first responsive
- Lighthouse-optimized (target: 95+ across all four axes)

## Accessibility

- WCAG 2.1 AA compliant
- Skip-to-content link on every page
- Keyboard-navigable (focus rings, ARIA labels)
- `prefers-reduced-motion` respected globally
- Tap-to-call enabled on all phone numbers
- Color contrast verified against the brand palette

## Project Structure

```
app/
  layout.tsx              # Root layout, metadata, schema, analytics
  page.tsx                # Homepage
  globals.css             # Brand design tokens
  sitemap.ts / robots.ts  # SEO
  not-found.tsx           # Custom 404
  about/ contact/ faq/ ...
  services/
    page.tsx              # Services hub
    [slug]/page.tsx       # Handles both categories AND service detail pages
  projects/
    page.tsx
    [slug]/page.tsx
components/
  ui/                     # Buttons, accordions, sections, container, reveal
  global/                 # Header, Footer, MobileStickyBar, PreFooterCTA, TrustBar, PageHero
  home/                   # Homepage section components
lib/
  site.ts                 # Site-wide config
  utils.ts                # cn() helper
  schema.ts               # JSON-LD generators
  content/                # All page content (services, projects, testimonials, areas, faqs)
public/
  logo.svg / logo.png     # Brand assets
```

---

**Built by [The Creative Strategist](https://mycreativestrategist.com)** — April 2026.
