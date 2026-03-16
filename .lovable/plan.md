
## Emerging Technologies Playground — Homepage

### Stap 1: Design Systeem
- Logo kopiëren naar `src/assets/ETP_logo_transparant.png`
- CSS variabelen updaten: primary green (#5BB865), dark (#202020), light (#F9F9F9), gradient
- Google Fonts laden: **Sora** (headings) + **Inter** (body)

### Stap 2: Componenten bouwen
- **Navbar** — Sticky, logo + links (Over, Disciplines, Ervaringen, Contact) + groene "Meer weten?" CTA + hamburger menu op mobile
- **Hero** — Gradient achtergrond, heading "Combineer Tech, Engineering, Design & Business", subtekst, CTA, bounce scroll-indicator
- **Pillars** — 2×2 grid (Tech, Design, Engineering, Business) met kaarten, iconen, beschrijvingen — stacked op mobile
- **WhyThisMinor** — "Waarom deze minor?" met 2×2 voordelen-grid (Geen Tentamens, Echte Klanten, Multidisciplinair, Kickstart Carrière) + decoratieve groene blob
- **Testimonials** — 3 kaarten met sterren, quote, naam, studierichting
- **ContactSection** — Donkere sectie, motivatietekst + formulier (naam, e-mail, vraag, radio keuze) met react-hook-form + zod validatie
- **Footer** — Logo, nav-links, social icons

### Stap 3: Homepage samenstellen
- `Index.tsx` updaten met alle secties in volgorde
- Smooth scroll navigatie

### Stap 4: Responsive & afronding
- Mobile-first met Tailwind breakpoints
- Hamburger menu op mobile
- Gestapelde layouts op kleine schermen
- Contactformulier POST naar placeholder endpoint (Supabase Edge Function als vervolgstap)
