# California Pro Construction & Welding — Landing Page

Professional landing page for **California Pro Construction & Welding**, a licensed general contractor and ironwork specialist based in San Diego, CA.

## Live Site

Deployed via [Vercel](https://vercel.com) — connected to this repository's `main` branch.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + TypeScript |
| Build Tool | Vite |
| Styling | Tailwind CSS + inline styles |
| Routing | React Router v6 |
| Fonts | Barlow Condensed (Google Fonts) |
| Deployment | Vercel |

---

## Project Structure

```
src/
├── assets/              # Images and video
├── pages/
│   ├── LandingPage.tsx  # Main page — section composition
│   ├── ServicePage.tsx  # Individual service detail pages
│   └── sections/
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── Services.tsx
│       ├── Projects.tsx
│       ├── About.tsx
│       ├── Testimonials.tsx  # Background video section
│       ├── Faqs.tsx
│       ├── Contact.tsx
│       └── Footer.tsx
├── utils/
│   └── scrollToId.ts
public/
└── favicon.png          # Brand favicon
index.html               # SEO meta tags + JSON-LD structured data
```

---

## Features

- **Fully responsive** — mobile-first layout, CSS media queries for Hero and grid sections
- **WhatsApp integration** — contact form pre-fills a WhatsApp message to +1 (619) 745-8718
- **Service pages** — individual routes (`/services/:id`) for each service with photo and feature list
- **Project gallery** — asymmetric photo grid with hover overlays and lightbox
- **Background video** — full-bleed video section with dark overlay
- **SEO ready** — title, description, Open Graph, Twitter Card, geo tags, and JSON-LD `GeneralContractor` schema in `index.html`
- **Unified typography** — Barlow Condensed across all section headings, consistent body text at 15px

---

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

---

## Contact

**California Pro Construction & Welding**  
San Diego, CA  
Phone: (619) 745-8718 | (619) 902-8005  
Email: californiaproconstruction@gmail.com
