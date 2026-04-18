# VEDOIR — Complete Design & Development Brief

> **Doel**: Ontwerp en bouw een futuristisch, ultra-premium custom watch configurator webapp die bezoekers het gevoel geeft dat ze een Rolls-Royce showroom binnenwandelen. De site moet niet alleen visueel overweldigend zijn, maar ook psychologisch geoptimaliseerd voor maximale conversie op basis van bewezen verkoopframeworks.

---

## 1. BRAND IDENTITY & CONTEXT

### 1.1 Over Vedoir

**Naam**: VEDOIR
**Oprichter**: Eren, Roosendaal, Nederland
**Tagline**: "Een verhaal om je pols" / "Elke seconde een verhaal"
**Kernconcept**: *Sonder* — het besef dat elk mens een even diepgaand en uniek verhaal heeft als jijzelf
**Missie**: Horloges maken die een verlengstuk zijn van iemands karakter, smaak en verhaal
**Doelgroep**: "Verhalenvertellers" — dromers, denkers, reizigers en bouwers die weten dat stijl de ziel weerspiegelt

**Kernwaarden**:
- Vakmanschap, duurzaamheid, compromisloze kwaliteit
- Elk detail heeft betekenis
- Geen twee Vedoir-horloges zijn ooit hetzelfde
- Exclusiviteit toegankelijk maken

**Social Media**: @maisonvedoir (Instagram, YouTube, TikTok)
**Email**: info@vedoir.com
**Huidige website**: vedoir.nl (Shopify + Kickflip product builder)

### 1.2 Product Lijn

| Product | Prijs | Beschrijving |
|---------|-------|-------------|
| Persoonlijk Ontwerp (Custom) | €600 | Volledig op maat: kies kast, band, wijzerplaat, gravure, logo |
| Design Certificaat | €50 | Certificaat van authenticiteit |
| Horloge Opwinder | €49,99 (was €80) | Accessoire |
| Legacy Groene Wijzerplaat | €599 | Pre-designed model |
| Legacy Pepsi Wijzerplaat | €599 | Pre-designed model |
| Monarch Arabisch Zwart | €599 | Pre-designed model |
| Monarch Babyblauw Arabisch | €599 | Pre-designed model |
| Monarch Moon | €599 | Pre-designed model |
| Monarch "Die het kan schelen" | €599 | Pre-designed model |
| Vanguard Black Klassiek | €599 | Pre-designed model |
| VEDOIR Legacy S-wijzerplaat | €599 | Pre-designed model |
| VEDOIR Monarch Classic Blauw | €599 | Pre-designed model |
| VEDOIR Monarch Diamond Blauw | €599 | Pre-designed model |
| VEDOIR Monarch Groene Arabisch | €599 | Pre-designed model |
| VEDOIR Vanguard F-wijzerplaat | €599 | Pre-designed model |

### 1.3 Technische Specificaties

- **Materiaal**: 904L staal (zelfde als Rolex Oystersteel) + 316L staal opties
- **Glas**: Saffierglas (krasbestendig)
- **Waterbestendigheid**: 5 ATM / 50 meter
- **Uurwerk**: Precies mechanisch uurwerk
- **Garantie**: 24 maanden
- **Retourbeleid**: 14 dagen
- **Levertijd**: 14 werkdagen (op maat geassembleerd)
- **Verzending**: Gratis

### 1.4 Klantverhalen / Testimonials

Huidige testimonials op de site:
- **Rene van der Zel** — klant verhaal
- **Mr.Fast19** — klant verhaal
- **Appiemussa** — klant verhaal

### 1.5 Bestaande Website Analyse

**Screenshots beschikbaar in** `./screenshots/`:
- `homepage-full.png` — Huidige homepage met hero video, zwart thema
- `ons-verhaal-full.png` — Brand story pagina
- `collections-full.png` — Product overzicht met 15 producten
- `service-full.png` — Onderhoud & service pagina

**Huidige problemen**:
- Standaard Shopify template, niet premium genoeg
- Kickflip builder voelt niet geintegreerd
- Geen immersive ervaring bij het configureren
- Product fotografie laadt niet altijd (grijze placeholders zichtbaar)
- Geen urgentie/schaarste mechanismen
- Geen duidelijke Value Proposition op de homepage
- Cookie banner verstoort de ervaring
- Footer is generiek
- Geen storytelling-gedreven sales flow

---

## 2. TECHNISCHE STACK (NIEUW)

### 2.1 Core Stack

```
Frontend:     Next.js 15 (App Router) + TypeScript + React 19
Styling:      TailwindCSS 4 + Framer Motion + GSAP
Configurator: Kickflip Product Builder (embedded iframe + API)
3D Accenten:  Three.js / React Three Fiber (hero animaties, showroom)
UI:           Shadcn/UI + Radix Primitives
Backend:      Supabase (PostgreSQL, Auth, Edge Functions, Storage)
Hosting:      Vercel (Edge Runtime)
Betalingen:   Stripe (iDEAL, Card, Bancontact, Apple Pay, Google Pay)
Email:        Resend
Analytics:    PostHog / Vercel Analytics
SEO:          Next.js Metadata API + JSON-LD Schema
```

### 2.2 Key Features om te Bouwen

1. **Kickflip Watch Configurator** — Embedded Kickflip builder met custom dark luxe theme
2. **Immersive Homepage** — Cinematic scroll-driven experience
3. **Story-driven Product Pages** — Elk horloge heeft een verhaal
4. **Account System** — Order tracking, design opslaan (via Kickflip design ID), wishlist
5. **Custom Checkout** — Kickflip postMessage → eigen Stripe checkout flow
6. **Blog/Tijdschrift** — Content marketing platform
7. **3D Hero & Showroom** — Three.js voor homepage animaties en virtuele winkel
8. **Email Automations** — Abandoned cart, order updates, post-purchase

---

## 3. DESIGN DIRECTION

### 3.1 Design Filosofie

**"Digital Haute Horlogerie"** — De website moet voelen als een privé-afspraak bij een atelier in Geneve, niet als een webshop. Elke interactie moet ceremonieel, bewust en premium aanvoelen.

### 3.2 Visual Style

**Primaire stijl**: Dark luxury meets futuristic minimalism
**Inspiratiebronnen** (qua gevoel, niet kopiëren):
- Richard Mille website (ultra-premium horlogerie)
- Audemars Piguet (storytelling + craft)
- Apple Product Pages (cinematic scroll animations)
- Porsche Configurator (interactieve customization)
- Rolls-Royce Bespoke (exclusive customization journey)

### 3.3 Kleurenpalet

```
Primair:
  --obsidian:        #0A0A0A    (achtergrond, dominant)
  --void:            #050505    (diepste zwart)
  --graphite:        #1A1A1A    (kaarten, elevatie)
  --smoke:           #2A2A2A    (borders, subtiel)

Accent:
  --champagne-gold:  #C9A96E    (primaire accent, CTA's, highlights)
  --rose-gold:       #B76E79    (secundaire accent, hover states)
  --platinum:        #E5E4E2    (tertaire accent, subtiel)

Tekst:
  --ivory:           #F5F5F0    (primaire tekst)
  --silver:          #A0A0A0    (secundaire tekst)
  --mist:            #6B6B6B    (tertiaire tekst, captions)

Functie:
  --success:         #4ADE80    (bevestigingen)
  --warning:         #FBBF24    (waarschuwingen)
  --error:           #EF4444    (fouten)

Optioneel licht thema (voor blog/content):
  --pearl:           #FAFAF8    (achtergrond)
  --charcoal:        #1A1A1A    (tekst)
```

### 3.4 Typografie

```
Display/Headlines:  "Cormorant Garamond" (serif, elegant, horlogerie-gevoel)
                    Alternatieven: "Playfair Display", "Didot"
                    Gewicht: 300 (light) voor grote titels, 600 voor emphasis
                    Letter-spacing: 0.08em - 0.15em (tracking voor luxe gevoel)

Body:               "Inter" of "Outfit" (sans-serif, modern, leesbaar)
                    Gewicht: 300-400
                    Line-height: 1.7

Monospace/Tech:     "JetBrains Mono" (voor specs, prijzen, nummers)
                    Gewicht: 400

UI/Navigation:      "Inter" of body font
                    Gewicht: 500
                    Letter-spacing: 0.05em
                    Text-transform: uppercase voor nav items
```

### 3.5 Spacing & Layout

```
Max content width:   1440px
Wide sections:       Full viewport (100vw) voor hero's en immersive secties
Content padding:     clamp(1.5rem, 5vw, 6rem) horizontaal
Section spacing:     clamp(4rem, 10vh, 12rem) verticaal
Card border-radius:  2px - 4px (scherp, niet rond — luxe = precision)
Button radius:       0px (volledig scherp) of 2px max

Grid:
  - 12-kolom grid voor layouts
  - Asymmetrische layouts (60/40, 70/30) voor dynamiek
  - Generous whitespace — laat de content ademen
  - Minimaal 40% witruimte op elke pagina
```

### 3.6 Animatie & Microinteracties

```
Filosofie: "Horological precision" — animaties moeten voelen als het
tikken van een uurwerk: precies, vloeiend, doelgericht.

Scroll Animations:
  - Parallax op hero secties (subtiel, max 20% offset)
  - Fade-up + slight scale voor content blocks (stagger 0.1s)
  - Horizontal scroll secties voor product showcases
  - Scroll-triggered video playback
  - Text reveal (per woord of per regel)

Hover States:
  - Subtle glow effect op CTA's (champagne-gold)
  - Image zoom (scale 1.03, 600ms ease)
  - Underline draw-in voor links
  - Cursor change naar custom cursor (gouden ring)

Page Transitions:
  - Crossfade met subtle vertical movement
  - Loading state: uurwerk-animatie of Vedoir logo pulse

Configurator:
  - Buttery smooth 60fps 3D rotatie
  - Parts slide/morph in bij selectie
  - Reflection en lighting reageren op drag
  - Subtle particle effects bij "complete" moment

Performance:
  - will-change op geanimeerde elementen
  - GPU-accelerated transforms only
  - Reduce motion media query respect
  - Intersection Observer voor scroll triggers
```

### 3.7 Fotografie & Media Richtlijnen

```
Sfeer:
  - Donkere, moodige achtergronden
  - Dramatische belichting (single light source, deep shadows)
  - Macro shots die textuur en detail tonen
  - Lifestyle shots: polsshots op donkere kleding
  - Kleurbewerking: desaturated, hoge contrast, champagne tint

Video:
  - Cinematic aspect ratios (2.35:1 voor hero)
  - Slow-motion detailopnames van het uurwerk
  - Smooth orbiting shots van het horloge
  - Autoplay muted op desktop, poster image op mobile

3D Assets:
  - PBR (Physically Based Rendering) materialen
  - HDR environment maps voor realistische reflecties
  - 904L staal materiaal moet hyper-realistisch zijn
  - Saffierglas met correcte refractie
```

---

## 4. PAGINA STRUCTUUR & UX

### 4.1 Sitemap

```
/                           → Homepage (immersive landing)
/configurator               → 3D Watch Builder (kernproduct)
/collectie                  → Pre-designed watches overzicht
/collectie/[slug]           → Individueel horloge detail
/ons-verhaal                → Brand story
/vakmanschap                → Materialen & craftsmanship
/familie                    → Community / klantverhalen
/tijdschrift                → Blog / content
/tijdschrift/[slug]         → Blog artikel
/onderhoud                  → Service & garantie
/contact                    → Contact
/virtuele-winkel            → 3D Showroom (optioneel, v2)
/account                    → Gebruikersprofiel
/account/bestellingen       → Order history
/account/ontwerpen          → Opgeslagen designs
/checkout                   → Checkout flow
/bedankt                    → Post-purchase (met dua/bedanking)
/privacy                    → Privacy policy
/voorwaarden                → Terms of service
/verzending                 → Shipping policy
/retour                     → Return policy
```

### 4.2 Homepage — Sectie voor Sectie

De homepage is de belangrijkste pagina. Dit is de volledige breakdown:

---

#### SECTIE 1: Hero (100vh, full-screen cinematic)

**Layout**: Full viewport, donkere achtergrond, 3D horloge of cinematic video
**Animatie**: Het horloge draait langzaam in 3D, of een cinematic video speelt af

```
Visueel:
┌─────────────────────────────────────────────────┐
│                                                 │
│              [Navbar: transparant]               │
│                                                 │
│                                                 │
│           ┌─────────────────────┐               │
│           │                     │               │
│           │   3D HORLOGE        │               │
│           │   (draaiend)        │               │
│           │                     │               │
│           └─────────────────────┘               │
│                                                 │
│         E L K E  S E C O N D E                  │
│           E E N  V E R H A A L                  │
│                                                 │
│     [  ONTWERP JOUW HORLOGE  ]  ← champagne CTA│
│                                                 │
│              ↓ scroll indicator                  │
└─────────────────────────────────────────────────┘
```

**Copy**:
- Headline: `ELKE SECONDE EEN VERHAAL`
- Sub: `Ontwerp een horloge dat jouw verhaal vertelt. Handgemaakt met 904L staal en saffierglas.`
- CTA primair: `ONTWERP JOUW HORLOGE`
- CTA secundair: `BEKIJK DE COLLECTIE`

**Hormozi-principe toegepast**:
- Droomresultaat direct zichtbaar (jouw eigen unieke horloge)
- Moeite geminimaliseerd (je ontwerpt het, wij maken het)
- Specifieke materialen genoemd (904L staal = bewijs van kwaliteit)

---

#### SECTIE 2: Social Proof Bar (sticky of inline)

**Layout**: Horizontale balk met key metrics

```
┌─────────────────────────────────────────────────┐
│  ★ 4.9/5 sterren  │  500+ ontworpen  │  904L   │
│  (147 reviews)     │  horloges         │  staal  │
│                    │                   │  & saffier│
└─────────────────────────────────────────────────┘
```

**Hormozi-principe**: Waarschijnlijkheid van succes verhogen via social proof

---

#### SECTIE 3: Value Proposition — "Waarom Vedoir?"

**Layout**: 3-kolom bento grid met iconen en korte teksten

```
┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│   [icoon]    │ │   [icoon]    │ │   [icoon]    │
│              │ │              │ │              │
│  JOUW DESIGN │ │  LUXE        │ │  GEGARANDEERD│
│              │ │  MATERIALEN  │ │              │
│  Kies elke   │ │  904L staal, │ │  2 jaar      │
│  component   │ │  saffierglas, │ │  garantie,   │
│  zelf: kast, │ │  50m water-  │ │  14 dagen    │
│  band, plaat,│ │  bestendig   │ │  retour, gratis│
│  gravure     │ │              │ │  verzending  │
└──────────────┘ └──────────────┘ └──────────────┘
```

**Hormozi-principes**:
- Droomresultaat: jij bepaalt elk detail
- Waarschijnlijkheid: premium materialen bewijzen kwaliteit
- Moeite: wij assembleren alles
- Risico-omkering: garantie + retour

---

#### SECTIE 4: Configurator Preview — "Zo Werkt Het"

**Layout**: Split screen — links 3D horloge preview, rechts 3 stappen

```
┌────────────────────────┬──────────────────────┐
│                        │                      │
│                        │  01. KIES JE KAST    │
│    [3D Horloge         │  Monarch, Legacy     │
│     Preview die        │  of Vanguard         │
│     mee-animeert       │                      │
│     bij elke stap]     │  02. ONTWERP JE STIJL│
│                        │  Wijzerplaat, band,   │
│                        │  kleur, gravure      │
│                        │                      │
│                        │  03. WIJ MAKEN HET   │
│                        │  Binnen 14 dagen     │
│                        │  bij jou thuis       │
│                        │                      │
│                        │  [START JE ONTWERP →]│
└────────────────────────┴──────────────────────┘
```

**Hormozi-principe**: Tijdsinvestering en moeite minimaliseren door het proces simpel te presenteren

---

#### SECTIE 5: Featured Collection — "Voltooide Meesterwerken"

**Layout**: Horizontal scroll carousel met grote product cards

```
← [Monarch Classic] [Legacy Green] [Vanguard Black] [Monarch Moon] →

Elke kaart:
┌──────────────────────┐
│                      │
│   [Product Image]    │
│   hover: subtle      │
│   zoom + glow        │
│                      │
│   MONARCH CLASSIC    │
│   Blauwe Wijzerplaat │
│   €599               │
│                      │
│   [BEKIJK DETAILS]   │
└──────────────────────┘
```

---

#### SECTIE 6: Brand Story Teaser — "Elk Verhaal Telt"

**Layout**: Asymmetrisch — groot portret van oprichter + tekst

```
┌────────────────────────────────────────────────┐
│                                                │
│  ┌─────────────┐                               │
│  │             │    GEBOREN UIT                 │
│  │  [Foto      │    PASSIE                      │
│  │   Eren /    │                                │
│  │   Atelier]  │    "In een wereld van massa-   │
│  │             │    productie koos ik voor het   │
│  │             │    tegenovergestelde. Elk       │
│  │             │    Vedoir-horloge is een        │
│  └─────────────┘    verlengstuk van wie jij      │
│                     bent."                       │
│                                                │
│                     — Eren, Oprichter            │
│                                                │
│                     [LEES ONS VERHAAL →]         │
└────────────────────────────────────────────────┘
```

**Hormozi-principe**: Ghost product effect — door de oprichter te laten zien als echt persoon, niet als merk, bouw je vertrouwen

---

#### SECTIE 7: Testimonials — "Familie Vedoir"

**Layout**: Staggered grid met foto's, namen en quotes

```
┌──────────────────────────────────────────────┐
│                                              │
│     GEEN VERHAAL ONVERTELD                   │
│                                              │
│  ┌─────────┐  ┌──────────────┐               │
│  │[Foto]   │  │  [Foto]      │  ┌─────────┐ │
│  │René     │  │  Mr.Fast19   │  │[Foto]   │ │
│  │"quote"  │  │  "quote"     │  │Appie    │ │
│  │★★★★★    │  │  ★★★★★       │  │"quote"  │ │
│  └─────────┘  └──────────────┘  │★★★★★    │ │
│                                  └─────────┘ │
│                                              │
│     [BEKIJK ALLE VERHALEN →]                 │
└──────────────────────────────────────────────┘
```

**Hormozi-principe**: Waarschijnlijkheid van succes maximaliseren met echte reviews + sterren

---

#### SECTIE 8: Urgentie & Schaarste

**Layout**: Elegant banner

```
┌──────────────────────────────────────────────┐
│                                              │
│   HANDGEMAAKT. OP BESTELLING.                │
│                                              │
│   Elk horloge wordt individueel              │
│   geassembleerd door onze horlogemakers.     │
│   Gemiddelde levertijd: 14 werkdagen.        │
│                                              │
│   We assembleren maximaal 50 horloges        │
│   per maand om kwaliteit te waarborgen.      │
│                                              │
│   [ONTWERP JOUW HORLOGE →]                   │
│                                              │
└──────────────────────────────────────────────┘
```

**Hormozi-principes**:
- Schaarste: max 50/maand (geloofwaardig, gekoppeld aan kwaliteit)
- Urgentie: levertijd geeft gevoel van "begin nu"
- Nederlands-appropriate: eerlijk, geen hype

---

#### SECTIE 9: Trust Signals Footer Bar

```
┌──────────────────────────────────────────────┐
│  [904L Staal]  [Saffierglas]  [2 Jaar        │
│                                Garantie]     │
│  [50m Water-   [14 Dagen     [Gratis         │
│   bestendig]    Retour]       Verzending]    │
└──────────────────────────────────────────────┘
```

---

#### SECTIE 10: Final CTA — "Jouw Verhaal Begint Hier"

**Layout**: Full-width, cinematic

```
┌──────────────────────────────────────────────┐
│                                              │
│   [Achtergrond: slow-motion close-up         │
│    van uurwerk mechanisme]                   │
│                                              │
│        JOUW VERHAAL                          │
│        BEGINT HIER                           │
│                                              │
│   Ontwerp vandaag je eigen Vedoir.           │
│   Geen twee zijn hetzelfde.                  │
│                                              │
│   [  ONTWERP JOUW HORLOGE  ]                 │
│   [  Bekijk de collectie   ]                 │
│                                              │
└──────────────────────────────────────────────┘
```

---

#### SECTIE 11: Footer

```
┌──────────────────────────────────────────────┐
│                                              │
│  VEDOIR                                      │
│  "Elke seconde een verhaal"                  │
│                                              │
│  Navigatie        Klantenservice   Volg Ons   │
│  Configurator     Contact          Instagram  │
│  Collectie        Verzending       YouTube    │
│  Ons Verhaal      Retourneren      TikTok     │
│  Vakmanschap      Garantie                    │
│  Tijdschrift      Privacy                     │
│                   Voorwaarden                 │
│                                              │
│  Nieuwsbrief                                 │
│  [email input     ] [AANMELDEN]              │
│                                              │
│  ───────────────────────────────             │
│  © 2026 Vedoir. Alle rechten voorbehouden.   │
│  [AmEx] [Apple Pay] [iDEAL] [Mastercard]     │
│  [PayPal] [Visa] [Google Pay] [Bancontact]   │
└──────────────────────────────────────────────┘
```

---

### 4.3 Configurator Pagina — `/configurator`

Dit is de KERN van de hele website. Hier verdien je geld. De configurator gebruikt **Kickflip Product Builder** als embedded iframe, gestyled met een custom dark luxury theme zodat het naadloos aanvoelt als onderdeel van de site.

#### 4.3.1 Layout

Full-screen immersive layout met de Kickflip iframe als centraal element, omringd door custom UI elementen.

```
┌──────────────────────────────────────────────────────────┐
│  [← Terug]              HET ATELIER              [♡ Save]│
│  ─────────────────────────────────────────────────────── │
│                                                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │                                                    │  │
│  │              KICKFLIP IFRAME                       │  │
│  │              (themed dark luxury)                  │  │
│  │                                                    │  │
│  │   ┌─────────────────┐  ┌──────────────────────┐   │  │
│  │   │                 │  │                      │   │  │
│  │   │  LIVE PREVIEW   │  │  CONFIGURATIE PANEL  │   │  │
│  │   │  (multi-angle   │  │  Stap-voor-stap      │   │  │
│  │   │   product view) │  │  opties met dropdowns,│   │  │
│  │   │                 │  │  thumbnails, kleuren, │   │  │
│  │   │                 │  │  tekst & logo upload  │   │  │
│  │   │                 │  │                      │   │  │
│  │   │                 │  │  Dynamische prijs     │   │  │
│  │   └─────────────────┘  └──────────────────────┘   │  │
│  │                                                    │  │
│  │          [  TOEVOEGEN AAN WINKELWAGEN  ]            │  │
│  │                                                    │  │
│  └────────────────────────────────────────────────────┘  │
│                                                          │
│  ── TRUST BAR ──────────────────────────────────────── │
│  [904L Staal] [Saffierglas] [2 Jaar Garantie] [14d Retour]│
│                                                          │
└──────────────────────────────────────────────────────────┘
```

#### 4.3.2 Kickflip Configuratie Stappen

De stappen worden in Kickflip's product builder geconfigureerd (via hun drag-and-drop admin). De aanbevolen flow:

1. **Model kiezen** — Monarch / Legacy / Vanguard (image thumbnails)
2. **Kast configureren** — Kleur + afwerking (live coloring overlay)
3. **Wijzerplaat kiezen** — Stijl, kleur, indexen (image thumbnails)
4. **Band selecteren** — Materiaal + kleur (image thumbnails + live coloring)
5. **Personaliseren** — Logo upload (file uploader) + gravure tekst (text input)
6. **Extras** — Design certificaat (€50), geschenkverpakking (checkbox)

Kickflip's **conditional logic** zorgt ervoor dat alleen geldige combinaties mogelijk zijn (bijv. bepaalde banden alleen voor bepaalde kast-modellen).

Kickflip's **dynamic pricing** update de prijs live bij elke keuze.

Kickflip's **multi-view** toont het horloge vanuit meerdere hoeken die mee-updaten.

#### 4.3.3 Kickflip Theme Aanpassingen

Via Kickflip's Theme Editor moet het volgende worden ingesteld om te matchen met de site:

```
Achtergrond:     #0A0A0A (obsidian)
Panel achtergrond: #1A1A1A (graphite)
Tekst primair:   #F5F5F0 (ivory)
Tekst secundair: #A0A0A0 (silver)
Accent/CTA:      #C9A96E (champagne-gold)
Button kleur:    #C9A96E met #0A0A0A tekst
Button radius:   2px (scherp, luxe)
Thumbnails:      Vierkant, 2px radius
Font:            Moet zo dicht mogelijk bij "Cormorant Garamond" / "Inter" liggen
                 (gebruik Kickflip's font opties)
Layout:          Links preview, rechts opties (standaard Kickflip layout)
Theme type:      "Barebones" (multi-step, elke vraag apart — premium flow)
```

**White-label add-on** ($49/mo) is VERPLICHT — "Powered by Kickflip" verwijderen voor premium gevoel.

#### 4.3.4 Technische Integratie (iframe + postMessage)

**Embedden in Next.js**:

```tsx
// components/configurator/KickflipConfigurator.tsx
'use client';

import { useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';

interface KickflipDesignData {
  _id: string;                    // Design ID (opslaan in Supabase)
  productId: string;
  productName: string;
  price: number;
  designImage: string;            // Thumbnail URL (~250px)
  designImages: string[];         // Alle hoeken
  configuration: Record<string, unknown>;  // Volledige config
  productionData: Array<{         // Voor orderverwerking
    questionTitle: string;
    choiceTitle: string;
    value: string;
  }>;
  summary: Array<{               // Voor checkout weergave
    questionTitle: string;
    choiceTitle: string;
  }>;
}

export function KickflipConfigurator({ designId }: { designId?: string }) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const router = useRouter();

  // Basis URL van je Kickflip configurator
  const KICKFLIP_BRAND = 'vedoir';  // jouw brand subdomain
  const KICKFLIP_SHOP_ID = 'YOUR_SHOP_ID';
  const KICKFLIP_PRODUCT_ID = 'YOUR_PRODUCT_ID';

  // URL: nieuw ontwerp of bestaand ontwerp laden
  const iframeSrc = designId
    ? `https://${KICKFLIP_BRAND}.gokickflip.com/customize/design/${designId}?shopid=${KICKFLIP_SHOP_ID}`
    : `https://${KICKFLIP_BRAND}.gokickflip.com/customize/${KICKFLIP_PRODUCT_ID}?shopid=${KICKFLIP_SHOP_ID}`;

  // Luister naar "Add to Cart" postMessage van Kickflip
  const handleMessage = useCallback((event: MessageEvent) => {
    // Alleen berichten van Kickflip verwerken
    if (event.origin !== `https://${KICKFLIP_BRAND}.gokickflip.com`) return;
    if (event.data.eventName !== 'mczrAddToCart') return;

    const design: KickflipDesignData = event.data.detail;

    // Design opslaan in Supabase
    saveDesignToSupabase(design);

    // Doorsturen naar eigen checkout
    router.push(`/checkout?designId=${design._id}`);
  }, [router]);

  useEffect(() => {
    window.addEventListener('message', handleMessage, false);
    return () => window.removeEventListener('message', handleMessage);
  }, [handleMessage]);

  return (
    <div className="w-full h-[calc(100vh-80px)] bg-obsidian">
      <iframe
        ref={iframeRef}
        src={iframeSrc}
        className="w-full h-full border-0"
        allow="clipboard-write"
        loading="eager"
        title="Vedoir Horloge Configurator"
      />
    </div>
  );
}

async function saveDesignToSupabase(design: KickflipDesignData) {
  const { supabase } = await import('@/lib/supabase');

  await supabase.from('designs').upsert({
    kickflip_design_id: design._id,
    product_name: design.productName,
    price: design.price,
    thumbnail_url: design.designImage,
    design_images: design.designImages,
    configuration: design.configuration,
    production_data: design.productionData,
    summary: design.summary,
  });
}
```

#### 4.3.5 Kickflip API Integratie (Server-side)

**Authenticatie**:
```
Authorization: Bearer YOUR_API_KEY
X-TENANT-ID: vedoir
```

**API Key aanmaken**: Kickflip Dashboard → Settings → API Keys → Scopes selecteren

**Endpoints die je nodig hebt**:

| Endpoint | Methode | Gebruik |
|----------|---------|---------|
| `/v1/designs` | GET | Alle ontwerpen ophalen (admin dashboard) |
| `/v1/designs/{id}` | GET | Specifiek ontwerp ophalen (order detail, account pagina) |
| `/v1/orders` | GET | Orders ophalen (admin, sync met Supabase) |
| `/v1/orders/{id}` | GET | Order detail |

**Design ophalen (voor account pagina "Mijn Ontwerpen")**:

```ts
// lib/kickflip.ts
const KICKFLIP_API_BASE = 'https://api.gokickflip.com';

export async function getDesign(designId: string) {
  const res = await fetch(`${KICKFLIP_API_BASE}/v1/designs/${designId}`, {
    headers: {
      'Authorization': `Bearer ${process.env.KICKFLIP_API_KEY}`,
      'X-TENANT-ID': 'vedoir',
    },
  });
  return res.json();
}

export async function listDesigns(cursor?: string) {
  const params = new URLSearchParams({ limit: '25' });
  if (cursor) params.set('cursor', cursor);

  const res = await fetch(`${KICKFLIP_API_BASE}/v1/designs?${params}`, {
    headers: {
      'Authorization': `Bearer ${process.env.KICKFLIP_API_KEY}`,
      'X-TENANT-ID': 'vedoir',
    },
  });
  return res.json();
}

export async function listOrders(status?: string) {
  const params = new URLSearchParams({ limit: '25', sortOrder: 'desc' });
  if (status) params.set('status', status);

  const res = await fetch(`${KICKFLIP_API_BASE}/v1/orders?${params}`, {
    headers: {
      'Authorization': `Bearer ${process.env.KICKFLIP_API_KEY}`,
      'X-TENANT-ID': 'vedoir',
    },
  });
  return res.json();
}
```

#### 4.3.6 Checkout Flow (Kickflip → Stripe)

```
[Kickflip iframe]
    │
    │ postMessage: mczrAddToCart
    │ (design data + prijs + images)
    ▼
[Next.js handleMessage()]
    │
    ├── Sla design op in Supabase (designs tabel)
    │
    ├── Redirect naar /checkout?designId=xxx
    │
    ▼
[Checkout Pagina]
    │
    ├── Toon design thumbnail + summary uit Kickflip data
    ├── Optioneel: + Design Certificaat (€50)
    ├── Optioneel: + Horloge Opwinder (€49,99)
    ├── Optioneel: + Geschenkverpakking
    │
    ├── Verzendgegevens formulier
    │
    ├── Stripe Payment (iDEAL, Card, Bancontact, etc.)
    │
    ▼
[Bedankt Pagina]
    │
    ├── Order bevestiging
    ├── Design preview images
    ├── Geschatte levertijd (14 werkdagen)
    ├── "Deel je ontwerp" social sharing
    └── Email bevestiging via Resend
```

#### 4.3.7 "Opslaan voor Later" Flow

```
[Kickflip iframe] → User klikt "Add to Cart"
    │
    │ postMessage bevat design._id
    ▼
[handleMessage()] → Check: is user ingelogd?
    │
    ├── JA → Sla design op in Supabase met user_id
    │        Toon toast: "Ontwerp opgeslagen!"
    │        Redirect naar checkout OF sla op
    │
    └── NEE → Sla design._id op in localStorage
             Toon login/register modal
             Na login: koppel design aan user_id
```

**Opgeslagen ontwerp opnieuw laden**:
```
https://vedoir.gokickflip.com/customize/design/{designId}?shopid={shopId}
```
Dit laadt het ontwerp terug in de Kickflip configurator met alle eerdere keuzes.

#### 4.3.8 UX Wrapper rondom Kickflip

De Kickflip iframe wordt omringd door custom UI elementen die de premium ervaring versterken:

**Boven de iframe**:
- Breadcrumb: Home → Het Atelier
- Titel: "HET ATELIER" (Cormorant Garamond, 300 weight, 0.15em tracking)
- Subtitel: "Ontwerp jouw meesterwerk" (Inter, silver)

**Onder de iframe**:
- Trust signals bar (904L staal, saffierglas, garantie, retour)
- FAQ accordion: "Hoe werkt het?", "Welke materialen?", "Levertijd?"
- Testimonial quote van een klant

**Naast de iframe (desktop sidebar, optioneel)**:
- Live prijs samenvatting (luistert naar postMessage events)
- "Meest gekozen" badge bij populaire combinaties
- Materiaal vergelijking infographic

**Mobile**:
- Iframe neemt 100% breedte
- Trust signals onder de iframe in horizontale scroll
- Sticky bottom bar met prijs

#### 4.3.9 Kickflip Kosten

| Item | Kosten |
|------|--------|
| Kickflip Scale Plan | $59/maand |
| White-label add-on | $49/maand (verplicht voor premium) |
| Transactiekosten | 0% - 1.95% per sale |
| **Totaal vast** | **$108/maand** |

Bij €10.000/maand omzet: ~$108 + ~$195 = ~$303/maand (3%)

#### 4.3.10 Hormozi-principes op de Configurator

- **Moeite minimaliseren**: Kickflip's Barebones theme toont elke stap apart (wizard format)
- **Droomresultaat**: Live preview laat ze hun horloge ZIEN worden opgebouwd
- **Prescriptieve verkoop**: Kickflip's conditional logic leidt ze door geldige combinaties
- **Ghost product**: Bij de extras-stap toon "De meeste klanten voegen een design certificaat toe (€50)" — maak het makkelijk om het weg te laten. Dit bouwt vertrouwen voor de hoofdaankoop
- **Schaarste**: Onder de iframe: "We assembleren maximaal 50 horloges per maand"
- **Risico-omkering**: Trust bar altijd zichtbaar: "14 dagen retour. Geen gedoe."

---

### 4.4 Product Detail Pagina — `/collectie/[slug]`

Voor pre-designed horloges.

```
┌──────────────────────────────────────────────────┐
│                                                  │
│  VEDOIR MONARCH CLASSIC                          │
│  Blauwe Wijzerplaat                              │
│                                                  │
│  ┌─────────────────┐  Specificaties:             │
│  │                 │  • 904L Staal               │
│  │  [Hero Image    │  • Saffierglas              │
│  │   met zoom      │  • 50m Waterbestendig       │
│  │   capability]   │  • Mechanisch Uurwerk       │
│  │                 │  • 40mm Kast                │
│  │                 │                             │
│  └─────────────────┘  €599                       │
│                                                  │
│  [Thumbnail gallery]  [TOEVOEGEN AAN WINKELWAGEN]│
│                       [PERSONALISEER DIT MODEL →]│
│                                                  │
│  ─── Het Verhaal ───                             │
│  [Uitgebreide productbeschrijving met            │
│   storytelling over dit specifieke model]        │
│                                                  │
│  ─── Specificaties ───                           │
│  [Gedetailleerde specs tabel]                    │
│                                                  │
│  ─── Reviews ───                                 │
│  [Klantreviews voor dit model]                   │
│                                                  │
│  ─── Gerelateerd ───                             │
│  [Andere modellen carousel]                      │
│                                                  │
└──────────────────────────────────────────────────┘
```

---

## 5. SALES PSYCHOLOGY & CONVERSIE OPTIMALISATIE

### 5.1 Value Equation Analyse (Hormozi Framework)

```
Waarde = (Droomresultaat x Waarschijnlijkheid) / (Tijd x Moeite)
```

**Droomresultaat** (MAXIMALISEER):
- Een horloge dat uniek is in de hele wereld
- Een verlengstuk van je persoonlijkheid
- Luxe kwaliteit (904L staal, saffierglas) voor een toegankelijke prijs
- Status en exclusiviteit

**Waarschijnlijkheid van Succes** (MAXIMALISEER):
- 904L staal (zelfde als Rolex) — material proof
- 24 maanden garantie
- 147+ reviews met 4.9 sterren
- 500+ tevreden klanten
- 14 dagen retour (risico-omkering)

**Tijdsinvestering** (MINIMALISEER):
- 5 minuten om te ontwerpen
- 14 werkdagen levertijd
- Gratis verzending (geen gedoe)

**Moeite & Opoffering** (MINIMALISEER):
- Stap-voor-stap wizard (niet overweldigend)
- Wij assembleren alles
- Gratis verzending
- iDEAL + alle betaalmethoden

### 5.2 Grand Slam Offer Structuur

**Kernproduct**: Custom horloge ontwerp + assemblage (€600)

**Bonussen** (te implementeren):
1. **Gratis Design Certificaat** (waarde €50) — bij bestellingen boven €500
2. **Gratis Luxe Geschenkverpakking** — premium unboxing experience
3. **Levenslang Onderhoud** — gratis jaarlijkse check-up (eerste 2 jaar)
4. **Exclusieve Toegang** — "Familie Vedoir" community met early access

**Schaarste** (geloofwaardig):
- "We assembleren maximaal 50 horloges per maand"
- "Handgemaakt door onze horlogemakers, niet door machines"
- Real-time teller: "Deze maand nog [X] plekken beschikbaar"

**Urgentie** (eerlijk):
- Seizoensgebonden: "Bestel voor [datum] voor levering voor Vaderdag/Kerst"
- "Huidige materiaalvoorraad is beperkt voor dit model"

**Garantie** (risico-omkering):
- "14 dagen bedenktijd. Niet tevreden? Volledige terugbetaling. Geen gedoe."
- "24 maanden garantie op elk onderdeel"
- Performance-based: "Als je horloge binnen 2 jaar een defect vertoont, repareren wij het kosteloos"

**Naam** (M-A-G-I-C):
- Het product heet niet "custom horloge" maar "Persoonlijk Meesterwerk"
- De configurator heet "Het Atelier"
- De collectie heet "Voltooide Meesterwerken"

### 5.3 Conversion Triggers per Pagina

**Homepage**:
- Hero CTA boven de fold
- Social proof bar (reviews, aantal klanten)
- Video testimonials
- Urgentie banner (seizoensgebonden)
- Sticky "Ontwerp je horloge" knop op mobile

**Configurator**:
- Progress bar (commitment consistency)
- Live prijsupdate (transparantie)
- "Meest gekozen" labels op populaire opties
- Vergelijkingswidget met bekende merken
- Exit-intent popup: "Sla je ontwerp op"
- Prescriptieve elementen: "Past perfect bij [stijl]"

**Product Pagina**:
- Urgentie: "Nog X op voorraad"
- Social proof: reviews + foto's van klanten
- Vergelijking: 904L staal vs regulier staal infographic
- Cross-sell: "Voeg een opwinder toe" (€49,99)
- Trust badges prominent

**Checkout**:
- Trust signals naast betaalknop
- Garantie reminder
- "Beveiligd betalen" badge
- Cadeau-optie toggle
- Order summary met productfoto

### 5.4 Nederlandse Toon & Copy Richtlijnen

Alle copy moet voldoen aan deze regels:

```
DO:
✓ Direct en eerlijk
✓ Concrete cijfers ("904L staal", "50 meter waterbestendig")
✓ "Je" en "jij" aanspreken
✓ Korte zinnen, actieve taal
✓ Zelfverzekerd zonder arrogant
✓ Bewijs boven beloftes
✓ Specifieke claims in plaats van superlatieven

DON'T:
✗ Overdreven hype ("AMAZING!", "INCREDIBLE!")
✗ Nep-urgentie ("SLECHTS 3 OVER!!!")
✗ Em dashes
✗ Uitroeptekens stapelen
✗ "U" gebruiken
✗ Wollig taalgebruik
✗ Superlatieven zonder bewijs
✗ Amerikaanse marketing taal
```

**Voorbeelden copy**:

| Onderdeel | Copy |
|-----------|------|
| Hero headline | `ELKE SECONDE EEN VERHAAL` |
| Hero sub | `Ontwerp een horloge dat jouw verhaal vertelt. 904L staal. Saffierglas. Volledig op maat.` |
| CTA primair | `ONTWERP JOUW HORLOGE` |
| CTA secundair | `BEKIJK DE COLLECTIE` |
| Value prop 1 | `Jouw ontwerp, onze vakmanschap` |
| Value prop 2 | `Dezelfde materialen als de grote huizen` |
| Value prop 3 | `14 dagen bedenktijd. Geen gedoe.` |
| Configurator header | `Welkom in het Atelier` |
| Schaarste | `Handgemaakt. Maximaal 50 per maand.` |
| Garantie | `2 jaar garantie. 14 dagen retour. Geen kleine lettertjes.` |
| Social proof | `Sluit je aan bij 500+ verhalenvertellers` |
| Email signup | `Ontvang exclusieve toegang en design inspiratie` |

---

## 6. SEO & TECHNISCHE OPTIMALISATIE

### 6.1 Keyword Strategie

**Primaire keywords**:
- custom horloge
- horloge ontwerpen
- gepersonaliseerd horloge
- horloge met logo
- horloge op maat
- eigen horloge ontwerpen
- 904L staal horloge
- cadeau horloge gravure

**Long-tail keywords**:
- horloge cadeau met gravure
- uniek horloge laten maken
- horloge met eigen logo
- luxe horloge onder 1000 euro
- custom watch Nederland
- horloge configurator online
- saffierglas horloge betaalbaar

**Content keywords (blog)**:
- horloge onderhoud tips
- 904L vs 316L staal verschil
- saffierglas vs mineraalglas
- horloge waterdichtheid uitleg
- mechanisch vs quartz uurwerk
- horloge als cadeau
- horlogetrends 2026

### 6.2 Technische SEO

```
Must-haves:
- Next.js SSR/SSG voor snelle indexering
- JSON-LD Schema markup:
  - Organization
  - Product (elk horloge)
  - BreadcrumbList
  - FAQ
  - Review/AggregateRating
  - LocalBusiness
- Open Graph + Twitter Cards voor social sharing
- Canonical URLs
- XML Sitemap (auto-generated)
- robots.txt
- Hreflang tags (nl, en, de)
- Core Web Vitals optimalisatie:
  - LCP < 2.5s
  - FID < 100ms
  - CLS < 0.1
- Image optimization (Next.js Image component + WebP/AVIF)
- Lazy loading voor below-fold content
- Preload kritieke fonts
- Service Worker voor offline support (PWA)

Meta title formaat:
  Homepage: "VEDOIR | Ontwerp Jouw Eigen Luxe Horloge | 904L Staal"
  Configurator: "Horloge Ontwerpen | VEDOIR Configurator | Maak Jouw Meesterwerk"
  Product: "[Model Naam] | VEDOIR | €599 | 904L Staal & Saffierglas"
  Blog: "[Artikel Titel] | VEDOIR Tijdschrift"

Meta description formaat:
  Max 155 karakters, altijd met:
  - Kernwoord
  - Unique selling point
  - CTA of voordeel
```

### 6.3 Performance Budget

```
First Contentful Paint:  < 1.2s
Largest Contentful Paint: < 2.5s
Time to Interactive:      < 3.0s
Total Bundle Size:        < 300KB (JS, gzipped)
Image sizes:              Max 200KB per hero image (optimized)
Font loading:             swap strategy, subset fonts
3D assets:                Progressive loading, LOD system
Lighthouse score:         95+ Performance, 100 Accessibility
```

---

## 7. DATABASE SCHEMA (SUPABASE)

### 7.1 Core Tables

```sql
-- Producten
products (
  id, slug, name, description, base_price, model_type,
  images[], specs jsonb, is_custom, is_active,
  meta_title, meta_description
)

-- Configuratie opties
config_categories (id, name, slug, sort_order, step_number)
config_options (
  id, category_id, name, slug, description,
  price_modifier, image_url, model_3d_url,
  is_default, is_popular, sort_order
)

-- Klant ontwerpen (Kickflip-gekoppeld)
designs (
  id uuid PK,
  user_id uuid FK → auth.users,
  kickflip_design_id text UNIQUE,     -- Kickflip's _id
  product_name text,
  price decimal,
  thumbnail_url text,                  -- Kickflip designImage URL
  design_images text[],                -- Alle hoeken/views
  configuration jsonb,                 -- Volledige Kickflip config data
  production_data jsonb,               -- Voor orderverwerking
  summary jsonb,                       -- Voor checkout weergave
  is_completed boolean DEFAULT false,
  shared_slug text UNIQUE,             -- Voor "deel je ontwerp" feature
  created_at timestamptz,
  updated_at timestamptz
)

-- Bestellingen (Kickflip + Stripe)
orders (
  id uuid PK,
  user_id uuid FK → auth.users,
  design_id uuid FK → designs,
  product_id uuid FK → products,
  kickflip_design_id text,             -- Directe link naar Kickflip
  status text DEFAULT 'pending',       -- pending/confirmed/inproduction/shipped/delivered
  total_price decimal,
  stripe_payment_id text,
  stripe_checkout_session_id text,
  shipping_address jsonb,
  tracking_number text,
  estimated_delivery date,
  gift_wrapping boolean DEFAULT false,
  design_certificate boolean DEFAULT false,
  created_at timestamptz
)

-- Reviews
reviews (
  id, user_id, product_id, order_id,
  rating, title, body, images[],
  is_verified, is_featured, created_at
)

-- Blog
articles (
  id, slug, title, body, excerpt,
  cover_image, author, category,
  tags[], published_at, meta_title,
  meta_description, is_published
)

-- Nieuwsbrief
newsletter_subscribers (
  id, email, first_name, subscribed_at,
  is_active, source
)

-- Klant accounts
profiles (
  id, user_id, first_name, last_name,
  phone, avatar_url, created_at
)
```

---

## 8. COMPONENT ARCHITECTUUR

### 8.1 Key Components

```
components/
├── layout/
│   ├── Navbar.tsx              (transparant → solid on scroll)
│   ├── Footer.tsx              (premium footer)
│   ├── MobileMenu.tsx          (full-screen overlay)
│   └── AnnouncementBar.tsx     (promotie/urgentie)
│
├── hero/
│   ├── CinematicHero.tsx       (video/3D hero)
│   ├── ScrollIndicator.tsx     (animated down arrow)
│   └── SocialProofBar.tsx      (reviews + stats)
│
├── configurator/
│   ├── KickflipConfigurator.tsx  (iframe embed + postMessage handler)
│   ├── ConfiguratorPage.tsx      (wrapper: header, iframe, trust bar)
│   ├── TrustBar.tsx              (904L, saffierglas, garantie badges)
│   ├── ConfiguratorFAQ.tsx       (accordion onder iframe)
│   ├── SaveDesignDialog.tsx      (save for later, login prompt)
│   └── ShareDesignDialog.tsx     (social share met design thumbnail)
│
├── product/
│   ├── ProductCard.tsx         (collection grid item)
│   ├── ProductGallery.tsx      (zoom + thumbnails)
│   ├── ProductSpecs.tsx        (specifications table)
│   ├── ProductStory.tsx        (narrative section)
│   └── RelatedProducts.tsx     (carousel)
│
├── social/
│   ├── ReviewCard.tsx          (individual review)
│   ├── ReviewGrid.tsx          (staggered layout)
│   ├── StarRating.tsx          (5-star display)
│   └── TestimonialSlider.tsx   (carousel)
│
├── shared/
│   ├── Button.tsx              (primary/secondary/ghost)
│   ├── Badge.tsx               (trust badges)
│   ├── TrustSignals.tsx        (guarantee + shipping)
│   ├── CountdownTimer.tsx      (seasonal urgency)
│   ├── NewsletterForm.tsx      (email capture)
│   ├── MaterialComparison.tsx  (904L vs 316L infographic)
│   └── CookieConsent.tsx       (GDPR compliant)
│
├── checkout/
│   ├── CheckoutForm.tsx        (Stripe Elements)
│   ├── OrderSummary.tsx        (recap + image)
│   ├── ShippingForm.tsx        (address)
│   └── GiftOption.tsx          (cadeau toggle)
│
├── account/
│   ├── OrderHistory.tsx        (past orders)
│   ├── SavedDesigns.tsx        (draft designs)
│   └── ProfileSettings.tsx     (account info)
│
└── seo/
    ├── ProductSchema.tsx       (JSON-LD)
    ├── BreadcrumbSchema.tsx    (JSON-LD)
    └── OrganizationSchema.tsx  (JSON-LD)
```

---

## 9. CONTENT INVENTORY — ALLE TEKSTEN VAN HUIDIGE SITE

### 9.1 Homepage Teksten

**Tagline**: "Een verhaal om je pols"
**Hero**: "Vedoir Horloges"
**Sub-hero**: "Vedoir maakt gepersonaliseerde horloges van de hoogste kwaliteit materialen zoals 904L staal en saffierglas. Kwaliteit en ervaring staan bij ons centraal."
**Announcement bar**: "2 JAAR GARANTIE en 14 dagen retourbeleid"
**CTA 1**: "Ontwerp mijn horloge"
**CTA 2**: "Voltooide ontwerpen"
**CTA 3**: "Bezoek de virtuele winkel"
**Stories section**: "Geen verhaal onverteld"
**Sub**: "Bij Vedoir vieren wij uniekheid en persoonlijke expressie. Ontdek hoe onze dragers hun eigen stijl tot leven brengen met een horloge dat hun unieke verhaal vertelt."
**Dagboek section**: "Uit het dagboek"
**Bottom CTA**: "Luister naar ons verhaal voordat u uw eigen horloge bouwt"
**Newsletter**: "MELD JE AAN EN BESPAAR — Meld u aan en ontvang speciale aanbiedingen, gratis weggeefacties en unieke deals."
**Openingstijden**: "Ma - vr, 8:30 - 22:30 uur; Zaterdag, 8:30 - 22:30 uur; Zondag, 8:30 - 22:30 uur"

### 9.2 "Ons Verhaal" Pagina

**Titel**: "Ons verhaal"
**Opening**: "Elke seconde draagt een verhaal met zich mee. Deze is van ons."

**Paragraaf 1**: "Te midden van de miljoenen momenten die elke dag voorbijgaan, bestaat er een waarheid die ons met elke seconde inspireert: ieder mens beleeft een verhaal dat net zo diepgaand, uniek en waardevol is als dat van ieder ander. Dit besef wordt *sonder* genoemd en vormt de ziel van Vedoir."

**Paragraaf 2**: "Vedoir is ontstaan uit een fascinatie voor tijd, precisie en identiteit. Niet alleen de tijd die wordt gemeten op een wijzerplaat, maar de persoonlijke tijdlijn van elk individu. Oprichter Eren, afkomstig uit het Nederlandse Roosendaal, begon met een visie: een horlogemerk creëren dat niet zomaar een object is, maar een verlengstuk van iemands karakter, smaak en verhaal."

**Paragraaf 3**: "In een wereld waar horloges vaak massaal geproduceerd worden, koos Vedoir voor het tegenovergestelde. Bij ons ontwerpt u een horloge dat helemaal van u is, van de kast tot de wijzerplaat, van de kleur tot de gravure. Elk detail heeft betekenis. Geen twee Vedoir-horloges zijn ooit hetzelfde, omdat geen twee mensen ooit hetzelfde zijn."

**Paragraaf 4**: "Net als de grote horlogehuizen hechten wij waarde aan vakmanschap, duurzaamheid en compromisloze kwaliteit. Elk Vedoir-horloge is zorgvuldig ontworpen en getest, met oog voor detail en diep respect voor traditie. Maar waar anderen stilstaan bij erfgoed, gaan wij verder: u bepaalt hoe tijd eruit moet zien."

**Paragraaf 5**: "Vedoir is geen merk voor de massa. Het is een merk voor verhalenvertellers. Voor dezenen die weten dat stijl meer is dan uiterlijk. Het is een spiegel van de ziel. Een uitdrukking van wie je bent, waar je vandaan komt en waar je naartoe gaat. Vedoir is voor degenen die hun verhaal dragen."

**Slotwoord**: "Vedoir. Elke seconde een verhaal."

**Bottom blocks**:
- "1 van 1 — Ooit een 1 van 1 gedragen?"
- "Verhalen van Vedoir-eigenaren — Lees de verhalen van enkele van de grootste kunstenaars, zakenlieden en eigenaren van vedoirhorloges. Hun verhalen over de waarde van tijd kunnen van invloed zijn op de manier waarop wij leven." → CTA: "TIJDSCHRIFT"
- "Bezoek onze virtuele winkel — Wandel door onze virtuele winkel en ontdek enkele modellen die wij aanbieden." → CTA: "VIRTUELE WINKEL"

### 9.3 Onderhoud & Service Pagina

**Titel**: "Onderhoud en service"
**Intro**: "Bij Vedoir hechten we waarde aan vakmanschap, duurzaamheid en de ervaring van onze klanten. Onze horloges op maat worden met precisie en zorg vervaardigd en verdienen dezelfde aandacht, ook na aankoop."

**Garantie**: "Elke klant krijgt standaard 24 maanden garantie op onze horloges. Mocht er binnen deze periode een defect of probleem ontstaan, dan beoordelen wij of dit onder onze garantie valt. Zo ja, dan repareren wij uw horloge kosteloos."
**Post-garantie**: "Geen garantie meer? Geen probleem. Is uw garantieperiode verlopen of valt het probleem buiten de garantievoorwaarden? Dan staan we nog steeds voor u klaar. Voor een eerlijke prijs bieden we onderhoud, reparaties en vervanging van onderdelen met dezelfde toewijding en expertise als waarmee we uw horloge oorspronkelijk hebben gemaakt."

**Services lijst**:
- Volledige inspectie van het uurwerk
- Kalibratie en regeling van het mechanisme
- Vervanging van kroon, glas of band
- Reiniging en onderhoud van kast en wijzerplaat
- Waterbestendigheidstest (tot 50 meter)
- Kras- en slijtage herstel

**Onderhoudstips**:
- Vermijd sterke magneten en zware schokken
- Regelmatig reinigen met een droge microvezeldoek

**Contact**: info@vedoir.com
**Slotwoord**: "Vedoir. Tijd is persoonlijk. Zorg er goed voor."

### 9.4 Product Informatie

**Betaalmethoden**: American Express, Apple Pay, Bancontact, Google Pay, Maestro, Mastercard, PayPal, Shop Pay, Visa
**Footer links**: Contactgegevens, Servicevoorwaarden, Verzendbeleid, Privacybeleid, Restitutiebeleid
**Copyright**: "© 2026 vedoir — Powered by Vedoir. Copyrights reserved."

---

## 10. COMPETITIVE POSITIONING

### 10.1 Prijs Vergelijking (voor op de site)

```
┌──────────────────────────────────────────────────┐
│                                                  │
│   HOE VEDOIR ZICH VERGELIJKT                     │
│                                                  │
│   Feature          Vedoir    Rolex    Seiko      │
│   ──────────       ──────    ─────    ─────      │
│   904L Staal       ✓         ✓        ✗          │
│   Saffierglas       ✓         ✓        Deels     │
│   50m Waterbestendig ✓        ✓        ✓          │
│   Volledig Custom   ✓         ✗        ✗          │
│   Prijs            €599      €8.000+  €300+      │
│   Levertijd        14 dagen  Wachtlijst Direct   │
│                                                  │
│   "Luxe materialen. Jouw ontwerp. Eerlijke prijs."│
│                                                  │
└──────────────────────────────────────────────────┘
```

### 10.2 Positionering Statement

**Categorie van Een** (Hormozi): Vedoir is niet "een horloge merk". Vedoir is "het persoonlijke horloge-atelier" — de enige plek waar je een horloge van 904L staal en saffierglas volledig zelf ontwerpt, voor onder de €600.

---

## 11. IMPLEMENTATIE ROADMAP

### Fase 1: MVP (Week 1-3)
- [x] Next.js project setup + Tailwind + Shadcn
- [x] Homepage (alle secties)
- [x] Product collectie pagina
- [x] Product detail pagina
- [x] Supabase setup (auth, database, storage)
- [x] Basic checkout met Stripe
- [x] SEO fundamentals
- [x] Responsive design
- [x] Deploy op Vercel

### Fase 2: Kickflip Configurator Integratie (Week 3-4)
- [ ] Kickflip account setup + product builder configureren (stappen, opties, images)
- [ ] Kickflip theme aanpassen (dark luxury, fonts, kleuren, white-label)
- [ ] KickflipConfigurator.tsx component (iframe + postMessage handler)
- [ ] ConfiguratorPage.tsx wrapper (header, trust bar, FAQ)
- [ ] Design opslaan in Supabase (designs tabel + Kickflip design ID)
- [ ] Custom checkout flow (Kickflip → Supabase → Stripe)
- [ ] "Opslaan voor later" flow (localStorage → login → Supabase)
- [ ] Share design feature (public link met thumbnail)
- [ ] Kickflip API integratie (server-side design/order ophalen)

### Fase 3: Growth (Week 5-7)
- [ ] Account system (bestellingen, ontwerpen)
- [ ] Review systeem
- [ ] Blog/Tijdschrift
- [ ] Email automations (Resend)
- [ ] Newsletter signup
- [ ] Analytics (PostHog)
- [ ] PWA support

### Fase 4: Premium (Week 7+)
- [ ] AR Preview (WebXR)
- [ ] Virtuele winkel (3D showroom)
- [ ] Referral programma
- [ ] Loyalty systeem
- [ ] Multi-language (NL, EN, DE)
- [ ] Admin dashboard

---

## 12. DESIGN DELIVERABLES

### Wat er ontworpen moet worden:

1. **Homepage** — Alle 11 secties zoals beschreven in sectie 4.2
2. **Configurator** — Full-screen 3D experience met panel
3. **Collectie overzicht** — Grid met filters
4. **Product detail** — Met gallery, story, specs, reviews
5. **Ons Verhaal** — Cinematic brand story pagina
6. **Vakmanschap** — Materialen & kwaliteit showcase
7. **Blog overzicht + artikel** — Content marketing
8. **Contact** — Formulier + info
9. **Checkout flow** — Cart → Shipping → Payment → Bedankt
10. **Account pagina's** — Profiel, bestellingen, ontwerpen
11. **Mobile versies** — Alles responsive
12. **Navbar & Footer** — Consistent across all pages
13. **Error pagina's** — 404, 500
14. **Loading states** — Skeleton screens, configurator loading

### Design Systeem Elementen:
- Kleurenpalet (dark + optional light)
- Typografie schaal
- Button stijlen (primary, secondary, ghost, icon)
- Card varianten
- Form elementen
- Badge/tag stijlen
- Icon set
- Animatie library
- Spacing systeem
- Grid systeem

---

## 13. FINAL NOTES

### De Kernvraag die elke pagina moet beantwoorden:

> **"Waarom zou ik voor €599 een Vedoir kopen in plaats van een ander horloge?"**

Het antwoord, consistent door de hele site:

1. **Wat krijg je**: Een horloge van 904L staal en saffierglas dat je volledig zelf ontwerpt
2. **Wat kost het**: €599 (transparant, geen verborgen kosten, gratis verzending)
3. **Waarom zou je ons geloven**: 500+ klanten, 4.9 sterren, 24 maanden garantie, 14 dagen retour
4. **Wat als het niet bevalt**: Volledige terugbetaling binnen 14 dagen. Geen gedoe.

### De Emotie die de site moet oproepen:

"Dit is niet gewoon een horloge kopen. Dit is MIJN horloge laten maken. Door echte mensen. Met de beste materialen. En het is betaalbaar. Waarom zou ik dit NIET doen?"

---

## 14. PREMIUM ANIMATION & INTERACTION BIBLE

> Dit is de kern van wat de site premium maakt. Elke animatie moet voelen als het tikken van een precisie-uurwerk.

### 14.1 Foundation: Smooth Scroll

**Library**: Lenis (3KB, by Darkroom Engineering) — industry standard voor luxury sites.

```ts
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const lenis = new Lenis({ lerp: 0.07, smoothWheel: true });
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);
```

`lerp: 0.07` geeft een langzame, luxueuze deceleratie. Dit is de basis waarop ALLE andere animaties beter voelen.

### 14.2 Hero / Intro Animaties

#### A. Cinematic Logo Reveal (verplicht)

Bij het laden van de site: het VEDOIR logo tekent zichzelf stroke-by-stroke (SVG path animatie), vult zich met een gouden gradient. Achtergrond fadt van puur zwart naar het hero beeld.

```ts
const tl = gsap.timeline();
tl.fromTo('.logo-path',
  { strokeDashoffset: pathLength },
  { strokeDashoffset: 0, duration: 2.5, ease: 'power3.inOut' }
)
.to('.logo-path', { fill: 'url(#goldGradient)', duration: 0.8 })
.to('.hero-bg', { opacity: 1, scale: 1, duration: 1.5, ease: 'power2.out' }, '-=0.5');
```

**Waarom premium**: Bootst de opening title sequence van een film na. De paar seconden van restraint voor het product bouwt anticipatie — exact wat Audemars Piguet en Cartier doen.

#### B. Watch Face "Tick" Intro (optioneel, v2)

De hero toont een close-up wijzerplaat. Bij laden start de secondewijzer met een precies mechanisch tikken (niet sweep), gesynchroniseerd met subtiel tikgeluid. Camera trekt langzaam terug om het volledige horloge te onthullen.

**Implementatie**: GSAP timeline met `steps()` easing voor de secondewijzer + Web Audio API voor gesynchroniseerde tikgeluiden. Pull-back via CSS `scale` transitie van `scale(3)` naar `scale(1)`.

#### C. Particle Constellation Loader (optioneel)

Tijdens asset loading: gouden deeltjes vormen de vorm van het horloge, exploderen dan naar buiten terwijl de pagina onthult. Onder 2 seconden, skippable.

### 14.3 Scroll-Driven Product Reveals

#### A. Pinned Section with Scrub (kernpatroon)

Terwijl de user scrollt: het horloge beeld blijft gepind in het midden, omliggende elementen (tekst, specs, detail callouts) animeren in en uit. Het horloge zelf draait en schaalt subtiel.

```ts
gsap.timeline({
  scrollTrigger: {
    trigger: '.product-section',
    start: 'top top',
    end: '+=300%',  // 3x viewport height scroll afstand
    pin: true,
    scrub: 1.1,     // lichte easing voor natuurlijk gevoel
  }
})
.fromTo('.watch-image', { scale: 0.6, rotation: -15 }, { scale: 1, rotation: 0 })
.fromTo('.spec-1', { opacity: 0, x: -100 }, { opacity: 1, x: 0 }, '<0.1')
.fromTo('.spec-2', { opacity: 0, x: 100 }, { opacity: 1, x: 0 }, '<0.2')
.to('.spec-1', { opacity: 0, y: -50 })
.to('.spec-2', { opacity: 0, y: -50 }, '<')
.fromTo('.watch-image', { scale: 1 }, { scale: 1.3 })
.fromTo('.detail-callout', { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1 });
```

#### B. CSS Native Scroll-Driven (voor simpelere reveals)

```css
.reveal-element {
  animation: fadeSlideUp linear both;
  animation-timeline: view();
  animation-range: entry 0% entry 100%;
}
@keyframes fadeSlideUp {
  from { opacity: 0; transform: translateY(60px); }
  to   { opacity: 1; transform: translateY(0); }
}
```

60fps gegarandeerd, geen JS overhead.

### 14.4 Text Reveal Animaties

#### A. Character-by-Character Mask Reveal (voor headlines)

```ts
import { SplitText } from 'gsap/SplitText';

const split = new SplitText('.hero-heading', {
  type: 'chars',
  mask: 'overflow'  // wraps elk karakter in overflow:hidden container
});

gsap.from(split.chars, {
  y: '110%',
  duration: 0.9,
  stagger: 0.03,
  ease: 'power4.out',
  scrollTrigger: { trigger: '.hero-heading', start: 'top 80%' }
});
```

Karakters lijken uit het oppervlak van de pagina te verschijnen.

#### B. Word-by-Word Opacity Scroll (voor manifesto/brand story)

```ts
const split = new SplitText('.manifesto', { type: 'words' });

gsap.fromTo(split.words,
  { opacity: 0.15 },
  {
    opacity: 1,
    stagger: 0.05,
    scrollTrigger: {
      trigger: '.manifesto',
      start: 'top 60%',
      end: 'bottom 40%',
      scrub: true,
    }
  }
);
```

Een spotlight effect dat over de tekst sweept. Moedigt langzaam, bewust lezen aan.

#### C. Line Reveal met Clip-Path (voor sectie titels)

```ts
gsap.from(split.lines, {
  clipPath: 'inset(0 100% 0 0)',
  duration: 1.2,
  stagger: 0.15,
  ease: 'power3.inOut',
  scrollTrigger: { trigger: '.section-title', start: 'top 75%' }
});
```

### 14.5 Custom Cursor Effecten (alleen desktop)

#### A. Magnetic Cursor met Ring

Standaard cursor vervangen door kleine dot + grotere trailing ring. Bij hover op interactieve elementen: ring snapt magnetisch naar het element en morpht mee.

```ts
document.querySelectorAll('[data-magnetic]').forEach((el) => {
  el.addEventListener('mousemove', (e) => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(el, { x: x * 0.35, y: y * 0.35, duration: 0.4, ease: 'power2.out' });
  });
  el.addEventListener('mouseleave', () => {
    gsap.to(el, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1, 0.3)' });
  });
});
```

#### B. Cursor Light Trail

De cursor straalt een subtiel warm licht uit (radiale gradient) dat de muisbeweging volgt, als een juwelier die een loep over de pagina houdt.

**Implementatie**: CSS `radial-gradient` op een fixed-position overlay, positie via `mousemove`. `mix-blend-mode: soft-light`.

**BELANGRIJK**: Altijd verbergen op touch devices: `window.matchMedia('(pointer: coarse)')`.

### 14.6 Pagina Transities

```tsx
import { AnimatePresence, motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, y: 30, filter: 'blur(10px)' },
  animate: {
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  },
  exit: {
    opacity: 0, y: -20, filter: 'blur(6px)',
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
  },
};
```

**Luxe variatie**: Goudkleurige `div` sweept over het scherm (links naar rechts), maskeert de uitgaande pagina, onthult de inkomende.

### 14.7 Image Sequence (Apple-Style Watch Rotation)

60-120 pre-gerenderde frames van een draaiend horloge op een `<canvas>`, gescrubbed door scrollpositie. Het horloge draait alsof de user het in zijn handen houdt.

```ts
const canvas = document.querySelector('#watch-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d')!;
const frameCount = 90;
const images: HTMLImageElement[] = [];

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = `/frames/watch-${String(i).padStart(4, '0')}.webp`;
  images.push(img);
}

const obj = { frame: 0 };
gsap.to(obj, {
  frame: frameCount - 1,
  snap: 'frame',
  ease: 'none',
  scrollTrigger: {
    trigger: '#watch-sequence',
    start: 'top top',
    end: '+=3000',
    pin: true,
    scrub: 0.5,
  },
  onUpdate: () => {
    const img = images[Math.round(obj.frame)];
    if (img.complete) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    }
  }
});
```

Dit is de EXACTE techniek die Apple gebruikt voor AirPods, MacBook en iPhone pagina's.

### 14.8 Horizontal Scroll Collection Showcase

Verticaal scrollen wordt omgezet naar horizontale beweging. Horloges glijden een voor een voorbij.

```ts
const sections = gsap.utils.toArray('.collection-item');
gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: 'none',
  scrollTrigger: {
    trigger: '.collection-container',
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),  // snap naar elk horloge
    end: () => '+=' + document.querySelector('.collection-track').offsetWidth,
  }
});
```

### 14.9 Film Grain Overlay

Subtiele geanimeerde ruis/korrel textuur over de hele pagina voor filmische, analoge kwaliteit.

```css
.grain-overlay {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 9999;
  opacity: 0.04;
  mix-blend-mode: overlay;
}
.grain-overlay::before {
  content: '';
  position: absolute;
  inset: -200%;
  background: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  animation: grain 8s steps(10) infinite;
}
@keyframes grain {
  0%, 100% { transform: translate(0, 0); }
  10% { transform: translate(-5%, -10%); }
  30% { transform: translate(3%, -15%); }
  50% { transform: translate(12%, 9%); }
  70% { transform: translate(9%, 4%); }
  90% { transform: translate(-1%, 7%); }
}
```

Opacity tussen `0.03` en `0.06`. Hoger is afleidend.

### 14.10 Micro-Interacties

| Element | Effect |
|---------|--------|
| **Button hover** | Liquid fill van onder naar boven met goud, subtle scale-up + shadow deepening |
| **Product card** | Continue zachte float animatie (4-6px oscillatie), pauzeert op hover, vervangen door tilt effect |
| **Nav links** | Underline slide-in van links op hover, slide-out naar rechts op leave |
| **Prijs** | Counter animatie van 0 naar eindwaarde met Framer Motion `useMotionValue` |
| **Add to Cart** | Button morpht naar circulaire checkmark, horloge afbeelding miniatuuriseert en vliegt naar cart icoon |
| **Configurator selectie** | Onderdeel morpht in 3D met lichte particle burst |

### 14.11 3D Hero & Showroom — Technische Stack (NIET de configurator)

> **Let op**: De product configurator gebruikt Kickflip (zie sectie 4.3). Three.js / R3F wordt gebruikt voor de **homepage hero animatie** (draaiend horloge), de **virtuele winkel** (3D showroom), en **product detail pagina's** (interactieve 3D weergave van pre-designed modellen).

```tsx
import { Canvas } from '@react-three/fiber';
import { Environment, ContactShadows, PresentationControls, useGLTF } from '@react-three/drei';

function WatchModel({ strapColor, dialColor, caseFinish }) {
  const { scene, materials } = useGLTF('/models/watch.glb');

  useEffect(() => {
    materials.strap.color.set(strapColor);
    materials.dial.color.set(dialColor);
    materials.case.metalness = caseFinish === 'polished' ? 1.0 : 0.6;
    materials.case.roughness = caseFinish === 'polished' ? 0.05 : 0.35;
  }, [strapColor, dialColor, caseFinish]);

  return (
    <PresentationControls global rotation={[0.13, 0.1, 0]} polar={[-0.4, 0.2]}
      azimuth={[-1, 0.75]} speed={1.5} zoom={0.7}>
      <primitive object={scene} />
    </PresentationControls>
  );
}

function Configurator() {
  return (
    <Canvas camera={{ position: [0, 0, 4], fov: 35 }}>
      <ambientLight intensity={0.4} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <WatchModel strapColor="#2c1810" dialColor="#0a0a0a" caseFinish="polished" />
      <ContactShadows position={[0, -1.4, 0]} opacity={0.75} blur={2.5} />
      <Environment preset="studio" />
    </Canvas>
  );
}
```

**Realistische metaal rendering**: `MeshPhysicalMaterial` met `metalness: 1.0`, `roughness: 0.05` voor gepolijst staal, `clearcoat: 1.0` voor gelakte oppervlakken. HDR environment maps van Poly Haven.

### 14.12 Signature Animation Stack

| Doel | Library | Waarom |
|------|---------|--------|
| Smooth scroll basis | Lenis | 3KB, industry standard |
| Timeline animaties | GSAP 3.13+ | 20x sneller dan CSS bij complexe scenario's, SplitText nu gratis |
| Scroll triggers | GSAP ScrollTrigger | Pin, scrub, snap — de gouden standaard |
| React UI animaties | Motion (Framer Motion) | AnimatePresence, layout animaties |
| 3D rendering | React Three Fiber | React-native Three.js integratie |
| 3D helpers | @react-three/drei | Environment maps, controls, shadows |
| State (3D config) | Zustand | Lightweight, werkt naadloos met R3F |
| Image optimalisatie | Sharp / Squoosh | WebP frame sequences genereren |
| 3D modellen | Blender + glTF/GLB export | Gratis, industry standard |
| HDRI environments | Poly Haven | Gratis, hoge kwaliteit studio HDRIs |

---

## 15. INSPIRATIE REFERENTIES & AWARDS

### Award-Winning Referenties (2025-2026)

| Referentie | Waarom Relevant |
|-----------|----------------|
| **Audemars Piguet** (audemarspiguet.com) | Loading animatie, typografie, premium feel |
| **Apple Watch Ultra** (apple.com) | Scroll-driven product reveals, cinematic storytelling |
| **Richard Mille** (richardmille.com) | Ultra-luxury horlogerie presentatie |
| **Porsche Configurator** (porsche.com) | Product configurator UX patterns |
| **Lando Norris** (Site of the Year 2025) | Scroll-driven 3D storytelling |
| **Scout Motors** (E-commerce of the Year 2025) | Cinematic product reveals |
| **Immersive Garden** (Agency of the Year 2025) | WebGL luxury experiences |

### Design Trends 2026 die Vedoir moet gebruiken

1. **Dark aesthetics** met lichte tekst voor luxe — maakt product imagery dominant
2. **3D interactieve showrooms** in plaats van platte product grids
3. **Typography-forward design** waar typografie het primaire visuele element is
4. **Scroll-driven storytelling** als dominant interactiepatroon
5. **Film grain overlays** voor organische warmte
6. **Magnetic cursor effecten** voor desktop interactiviteit
7. **Cinematic page transitions** met blur en scale
8. **Image sequence scrubbing** (Apple-style) voor product rotatie

---

---

## 16. APPENDIX A: AUDEMARS PIGUET — VOLLEDIGE UX ANALYSE

> Screenshots: `audemarspiguet-homepage-01.png` t/m `audemarspiguet-homepage-03-scrolled.png`

### 16.1 Loading / Intro Animatie

AP gebruikt een **dunne horizontale progress bar** (2px hoog) bovenaan het viewport tijdens page loads. Geen dramatische full-screen logo animatie. De hero content (looping video) fadt in onder de progress bar zodra assets laden. Understated en editorial.

**Vedoir implementatie**: Vergelijkbare dunne progress bar, maar met champagne-gold kleur (`#C9A96E`). Daarnaast het SVG logo stroke-reveal als eenmalige intro bij eerste bezoek (zie sectie 14.2A).

### 16.2 Typografie Systeem (exact)

| Element | Font | Gewicht | Grootte | Letter-spacing | Transform |
|---------|------|---------|---------|----------------|-----------|
| Headlines H1/H2 | Helvetica Neue Web | 100 (ultra-thin) | 56px | -0.56px (negatief!) | uppercase |
| Accent woorden in headlines | Times Now (serif) | italic | 56px | -0.56px | geen |
| Body tekst | Helvetica Neue Web | 300 (light) | 14-16px | 0.21px | geen |
| Navigatie links | Helvetica Neue Web | 500 (medium) | 14px | 0.21-0.29px | geen |
| CTA labels | Helvetica Neue Web | 500 | 14px | 0.24rem (extreem wijd) | uppercase |
| Specificatie waarden | Helvetica Neue Web | 100 | 40px+ | normaal | geen |

**Cruciale les**: Typografie hierarchie via GEWICHT, niet via grootte. Alle headings zijn dezelfde 56px, onderscheid komt van weight 100 vs 500 en serif vs sans-serif contrast.

**Vedoir toepassing**: Gebruik Cormorant Garamond (serif, italic) als accent in headlines naast Inter (sans-serif, thin) als basis. Bijv: "ONTWERP JOUW *Meesterwerk*" waar "Meesterwerk" in Cormorant Garamond italic staat.

### 16.3 Kleurenpalet

Overweldigend **near-monochroom**: zwart en wit domineren. Kleur verschijnt alleen in het product zelf.

| Rol | Waarde | Gebruik |
|-----|--------|---------|
| Primary black | `#000000` | Achtergrond dominant |
| Primary white | `#FFFFFF` | Tekst op donker |
| Warm off-white | `#F6F5F3` | Lichte sectie achtergrond |
| Grey mid | `#8B8C8C` | Muted tekst |
| Navigation grey | `#656565` | Niet-actieve nav |

### 16.4 Navigatie Gedrag

- **Positie**: Transparant overlay op hero (`rgba(0,0,0,0)`)
- Wisselt tussen `theme-night` (wit) en `theme-light` (donker) afhankelijk van scroll positie
- **Hamburger menu**: Opent als full-screen wit panel over het hele viewport
- Links kolom: categorieën gestapeld, rechts kolom: "Latest Stories" met editorial cards
- Category headings: extreem wide letter-spacing (`0.24rem`)

**Vedoir toepassing**: Identiek concept, maar met `theme-night` als standaard (donkere site). Menu opent als full-screen overlay met donkere achtergrond en champagne-gold accenten.

### 16.5 Hover Effecten & Micro-interacties

- **Universele timing**: `0.3s ease-in-out` voor ALLE transities
- **Nav links**: Kleur transitie op hover
- **Buttons**: Opacity daalt naar `0.5` op hover
- **Link underlines**: Animated pseudo-element dat van links insweept
- **CTA lijn prefix**: Horizontale lijn voor "Discover" CTAs die animeert/uitstrekt

**Vedoir toepassing**: Gebruik `0.3s ease-in-out` als universele transitie timing. Voeg de CTA lijn-prefix toe als signature element.

### 16.6 Product Pagina Structuur (exact)

1. **Hero**: Zwart gestructureerde achtergrond, producttitel ultra-thin uppercase links, horloge cut-out rechts. Referentienummer in grijs, prijs, bordered CTA
2. **Product beschrijving**: Body tekst
3. **CASE sectie**: Grote serif italic heading, specs als grote ultra-thin nummers (39mm, 8.1mm, 50m), macro foto
4. **DIAL sectie**: Gespiegelde layout, macro foto links
5. **BRACELET sectie**: Vergelijkbare behandeling
6. **Up Close & In Detail**: Interactieve beeldcarousel
7. **Specificaties**: Tabbed technische data
8. **Others You Might Like**: Horizontale scroll gerelateerde horloges
9. **Find a Boutique**: Kaartintegratie
10. **Footer**

**Cruciale les**: Specificaties worden NOOIT in tabellen getoond. Ze worden als **emotionele momenten** gepresenteerd: "39 mm" op 40px+ in ultra-thin weight.

### 16.7 Video Behandeling

- **3 autoplay, muted, looping videos** als sectie-achtergronden op homepage
- Object-fit: `cover` (vult container volledig)
- Full-viewport hoogte op hero secties
- Pauze-knop: klein, onopvallend, rechtsonder
- Video's als cinematische achtergrond, niet als content

### 16.8 Key Design Principes

1. **Terughoudendheid boven alles**: Ultra-thin typografie, minimale kleur, geen flashy animaties
2. **Fotografie als held**: De horloge-fotografie en ambachtsman beelden doen het verkoopwerk
3. **Monochroom dominantie**: Near-total zwart/wit, kleur alleen in het product
4. **Negatieve ruimte als luxe**: Massive padding, generous margins, nooit druk
5. **Cinematische video achtergronden**: Full-viewport looping videos
6. **Geen prijzen op collectie pagina's**: Prijs alleen op individuele productpagina (anders dan Vedoir, wij tonen prijs wel, maar subtiel)
7. **Editoriaal storytelling**: Navigatie-menu zelf bevat editorial content cards
8. **Geen externe animatie-libraries**: Pure CSS transities en keyframes

---

## 17. APPENDIX B: APPLE PRODUCT PAGES — VOLLEDIGE UX ANALYSE

> Screenshots: `apple-iphone17pro-*.png`, `apple-macbook-pro-*.png`

### 17.1 Scroll-Driven Animaties (exact systeem)

Apple gebruikt een **proprietary animatie-engine**. Elke sectie is gewrapped in `data-anim-scroll-group="SectionName"`. Het systeem converteert scroll positie naar genormaliseerde 0-1 progress, en drijft dan opacity/transform keyframes aan.

**Vedoir implementatie**: Repliceer dit met GSAP ScrollTrigger's `scrub` parameter, die hetzelfde doet maar met een publieke library.

### 17.2 Typografie Systeem

SF Pro Display/Text. De signature move:

| Element | Grootte | Gewicht | Voorbeeld |
|---------|---------|---------|-----------|
| **Sectie openers** | 64-80px | Bold | "Fast runs in the family" |
| **Punchy phrases** | 3-6 woorden max | Bold | "A big zoom forward" |
| **Body tekst** | 17-20px | Regular | Beschrijvende tekst |
| **Specificatie nummers** | 80px | Bold | "8x", "48MP" |
| Letter-spacing body | -0.022em | - | Consistent negatief |

**Cruciale les**: Specs worden NOOIT in tabellen getoond. Ze zijn **emotionele momenten**: "8x" op 80px bold, "Up to 33 hours" als headline. Horizontale bar charts voor multiplier verbeteringen.

**Vedoir toepassing**: "904L STAAL" op 64px bold als sectie opener. "50M WATERBESTENDIG" als emotionele stat. Bar chart: Vedoir vs reguliere horloges.

### 17.3 Dark-First Product Pages

**80-90% van Apple's product pages is puur zwart** (`rgb(0,0,0)`). Lichte secties alleen voor koop-CTAs en footer. Producten "gloeien" tegen het zwarte void.

Hard, clean cuts tussen zwart en wit secties. Geen gradiënten.

**Vedoir toepassing**: Identiek. Homepage 90% zwart. Collectie pagina zwart. Configurator pagina zwart. Alleen checkout en blog mogen lichter zijn.

### 17.4 Sticky Product Image Techniek

Product Viewer secties gebruiken `position: sticky` met het device image vastgepind bovenaan. Feature tabs (Colors, Sizes, Display) zweven links terwijl het product gecentreerd blijft. Scroll-linked transforms kunnen het product schalen/roteren.

**Vedoir toepassing**: Op product detail pagina's: horloge afbeelding sticky gecentreerd, specs en details scrollen erlangs.

### 17.5 Video Integratie

- Video's laden lazy op basis van scroll proximity (1.5x viewport afstand)
- Hero video's autoplay muted
- HLS streaming (`.m3u8`) voor adaptive kwaliteit
- "Watch the film" CTAs openen modale spelers

### 17.6 CTA Strategie

**Opvallend terughoudend**: Maximaal 1 CTA per sectie, nooit meer dan 2 zichtbaar tegelijk. Sticky local nav heeft altijd een "Buy" knop. Geen floating bottom bars.

**Vedoir toepassing**: Identiek. Eén CTA per sectie. Sticky nav met "Ontwerp je horloge" knop. Geen floating overlays.

### 17.7 Narratieve Arc (pagina structuur)

```
1. Hero (hook)           → Dramatische headline + product beeld
2. Highlights (trailer)  → Product Viewer met expandable tabs
3. Feature Deep Dives    → 8-15 viewports, de bulk van de pagina
4. Comparison            → Validatie (vs concurrenten)
5. Purchase Options      → Close
```

Elke sectie volgt: **dramatische headline → product beeld → beschrijving → specs → ademruimte**.

**Vedoir toepassing**: Exact deze structuur voor product detail pagina's:
1. Hero: "VEDOIR MONARCH" + horloge beeld
2. Highlights: Materialen, features
3. Deep Dives: KAST sectie, WIJZERPLAAT sectie, BAND sectie (met macro fotografie)
4. Vergelijking: Vedoir vs Rolex vs Seiko tabel
5. CTA: "Personaliseer dit model" / "Toevoegen aan winkelwagen"

---

## 18. APPENDIX C: SCREENSHOTS INDEX

### Vedoir Huidige Website
| Bestand | Inhoud |
|---------|--------|
| `homepage-full.png` | Volledige homepage met hero, stories, footer |
| `ons-verhaal-full.png` | Brand story pagina |
| `collections-full.png` | Product overzicht, 15 producten |
| `service-full.png` | Onderhoud & service pagina |

### Audemars Piguet Inspiratie
| Bestand | Inhoud |
|---------|--------|
| `audemarspiguet-homepage-01.png` | Hero met video achtergrond, serif/sans mix typografie |
| `audemarspiguet-homepage-02-scrolled.png` | Gescrolled: AP House sectie met emerald verlichting |
| `audemarspiguet-homepage-03-scrolled.png` | Verder gescrolled: mistige Jura vallei cinematisch |

### Apple Product Pages Inspiratie
| Bestand | Inhoud |
|---------|--------|
| `apple-macbook-pro-hero.png` | "Fast runs in the family" hero, V-shape MacBook |
| `apple-macbook-pro-shop.png` | Product configuratie/shop sectie |
| `apple-macbook-pro-02-highlights.png` | Product Viewer met expandable tabs |
| `apple-macbook-pro-03-performance.png` | "M5. Pick your quick." dramatische typografie |
| `apple-macbook-pro-04-features.png` | Chip card met "Up to 8x faster" stat |
| `apple-iphone17pro-01-hero.png` | "PRO" hero, zwarte achtergrond |
| `apple-iphone17pro-02-product-viewer.png` | Sticky nav + product viewer |
| `apple-iphone17pro-03-cameras.png` | Camera deep dive, exploded lens view |
| `apple-iphone17pro-04-performance.png` | "New dimensions in power" headline |

### Porsche Configurator
| Bestand | Inhoud |
|---------|--------|
| `porsche-configurator-01-modelstart.png` | Modelselectie entry point |
| `porsche-models-01.png` | Model cards grid |
| `porsche-configurator-911-loading.png` | 3D loading state |
| `porsche-configurator-911gt3-01.png` | Configurator met 3D auto in showroom |
| `porsche-configurator-911gt3-02-clean.png` | Clean 3D view zonder dialogs |
| `porsche-configurator-911gt3-03-colors.png` | Kleur-selectie met swatches |
| `porsche-configurator-911gt3-04-interior.png` | Interieur view met stoelkeuze cards |
| `porsche-configurator-911gt3-05-options.png` | Opties met accordion categorieën |

### Overige Inspiratie
| Bestand | Inhoud |
|---------|--------|
| `undone-homepage-01.png` | UNDONE watch customizer homepage |
| `undone-watches-collection.png` | UNDONE watch collectie grid |

---

## 19. APPENDIX D: PORSCHE CONFIGURATOR & NORQAIN — UX PATRONEN

### 19.1 Porsche 911 GT3 Configurator

**URL**: porsche.com/configurator

**Layout**: Verticale scroll configurator met sticky 3D preview

```
┌────────────────────────────────────────────────────┐
│  [← Terug]   PORSCHE 911 GT3    [Opslaan] [Delen] │
│ ───────────────────────────────────────────────────│
│                                                    │
│         ┌──────────────────────────────┐           │
│         │                              │           │
│         │    3D AUTO RENDER            │           │
│         │    (sticky, draggable,       │           │
│         │     realtime updates)        │           │
│         │                              │           │
│         └──────────────────────────────┘           │
│                                                    │
│  ┌─ EXTERIEUR ──────────────────────── ▼ ─────┐   │
│  │  Kleur: [swatch] [swatch] [swatch]          │   │
│  │  Velgen: [card]  [card]  [card]             │   │
│  └─────────────────────────────────────────────┘   │
│  ┌─ INTERIEUR ──────────────────────── ▼ ─────┐   │
│  │  Stoelen: [card met afbeelding]             │   │
│  │  Dashboard: [card met afbeelding]           │   │
│  └─────────────────────────────────────────────┘   │
│  ┌─ OPTIES ─────────────────────────── ▼ ─────┐   │
│  │  Checkboxes voor individuele opties         │   │
│  └─────────────────────────────────────────────┘   │
│                                                    │
│ ══════════════════════════════════════════════════ │
│  STICKY BOTTOM BAR:                                │
│  $239,850  |  $3,248/mo  |  [VOLGENDE STAP →]     │
│ ══════════════════════════════════════════════════ │
└────────────────────────────────────────────────────┘
```

**Key UX patterns**:
- **Accordion categorieën**: Exterieur, Interieur, Opties. Eén open tegelijk
- **Sticky 3D preview**: Auto blijft altijd zichtbaar bovenaan terwijl je opties scrollt
- **Sticky bottom bar**: Prijs + maandelijks bedrag + CTA altijd zichtbaar
- **Kleur swatches**: Kleine cirkels met werkelijke kleuren, geselecteerd = ring eromheen
- **Product image cards**: Opties als cards met foto + naam + prijs, radio button selectie
- **Frosted glass**: `backdrop-filter: blur(32px)` op overlays
- **Font**: Porsche Next (custom), fluid sizing met `clamp()`

**Vedoir toepassing**: De sticky bottom bar met live prijs is ideaal als wrapper element ONDER de Kickflip iframe. Toont de totaalprijs die mee-update via postMessage events.

### 19.2 NORQAIN Watch Configurator

**Concept**: 11-stappen lineaire workflow voor 5.4 miljoen mogelijke combinaties

**Layout**: Split-screen — 40% controls links, 60% preview rechts

```
┌────────────────────┬───────────────────────────────┐
│                    │                               │
│  STAP 3: HANDS     │                               │
│                    │      [HORLOGE RENDER           │
│  ┌──────────────┐  │       real-time update]        │
│  │ [thumb] [thumb]│ │                               │
│  │ [thumb] [thumb]│ │                               │
│  └──────────────┘  │                               │
│                    │                               │
│  [← Vorige]       │                               │
│  [Volgende →]      │                               │
│                    │                               │
├────────────────────┴───────────────────────────────┤
│ ■■■■■□□□□□□  Stap 3/11  MOVEMENT > CASE > HANDS   │
└────────────────────────────────────────────────────┘
```

**Key UX patterns**:
- **Lineaire stappen**: Movement → Case → Hands → Dial → etc. (11 stappen)
- **Thumbnail carousel**: Opties als kleine afbeelding-thumbnails in een scrollbaar grid
- **Horizontale stappen-balk**: Onderaan, scrollbaar, toont alle 11 stappen met namen
- **"Wild ONE of 1" branding**: Personalisatie als premium positionering
- **Vaste split-screen**: Links panel scrollt NIET, rechts preview ook niet. Alleen de opties binnen het panel wisselen

**Vedoir toepassing**: Dit is precies het patroon dat Kickflip's "Barebones" theme biedt — elke vraag op een apart scherm, lineaire navigatie. De horizontale stappen-balk kan als custom UI element boven de Kickflip iframe worden toegevoegd.

### 19.3 Configurator Patroon Vergelijking

| Aspect | Porsche (Scroll) | NORQAIN (Steps) | Vedoir (Kickflip) |
|--------|-------------------|-----------------|-------------------|
| Layout | Verticaal scrollen | Fixed split-screen | Kickflip iframe (Barebones = steps) |
| Preview | Sticky bovenaan | Vast rechts 60% | Kickflip's live preview (links) |
| Navigatie | Accordions | Lineaire stappen | Kickflip's step-by-step |
| Prijs | Sticky bottom bar | In-panel | Kickflip dynamic pricing + custom bottom bar |
| Opties UI | Cards + swatches | Thumbnails | Kickflip thumbnails + dropdowns |
| Beste voor | Veel gelijktijdige categorieën | Sequentiële keuzes | Sequentiële keuzes (horloge) |

**Conclusie**: NORQAIN's step-by-step patroon past het beste bij horloge customization en is precies wat Kickflip's Barebones theme biedt.

---

## 20. APPENDIX E: DE 7 PIJLERS VAN DIGITALE LUXE

Geëxtraheerd uit analyse van Audemars Piguet, Apple, Porsche, Richard Mille en NORQAIN.

### 1. TERUGHOUDENDHEID
Minder UI, meer product. Elke pixel die geen product toont, moet witruimte zijn. Geen onnodige decoratie, geen overdreven animaties, geen drukke layouts.

### 2. DUISTERNIS
Donkere achtergronden laten producten gloeien. 80-90% van premium product pagina's is puur zwart. Lichte secties zijn uitzondering, niet de regel.

### 3. WITRUIMTE
Spacing tussen 24px en 256px. Content mag NOOIT druk voelen. Generous margins op elk element. Minstens 40% van elk scherm is lege ruimte.

### 4. LANGZAME BEWEGING
Alle transities: `0.3s - 0.5s ease-out`. Nooit sneller. Luxe heeft geen haast. Animaties moeten voelen als het tikken van een precisie-uurwerk, niet als een game.

### 5. MATERIALITEIT
Echte texturen, niet platte kleuren. Film grain overlays, subtiele reflecties, macro-fotografie die textuur toont. De website moet je het gevoel geven dat je het materiaal kunt voelen.

### 6. PRECISIE
Specificaties als statusymbolen presenteren. "39 mm" op 40px in ultra-thin weight. "904L STAAL" als emotioneel moment, niet als tabelrij. Cijfers zijn design-elementen.

### 7. EXCLUSIVITEITSTAAL
"Plan een Afspraak", niet "Koop Nu". "Het Atelier", niet "Configurator". "Meesterwerk", niet "Custom Horloge". "Verhalenvertellers", niet "Klanten". De taal positioneert het merk.

**Vedoir mapping**:

| Pijler | Vedoir Implementatie |
|--------|---------------------|
| Terughoudendheid | Max 1 CTA per sectie, geen floating bars |
| Duisternis | `#0A0A0A` achtergrond dominant, 90% dark |
| Witruimte | `clamp(4rem, 10vh, 12rem)` section spacing |
| Langzame Beweging | `0.3s ease-in-out` universele timing |
| Materialiteit | Film grain overlay, macro-fotografie, 904L textuur |
| Precisie | "904L" en "50M" als 64px emotionele stats |
| Exclusiviteitstaal | "Het Atelier", "Meesterwerk", "Verhalenvertellers" |

---

*Dit document (2200+ regels) bevat alle informatie die nodig is om het volledige Vedoir platform te ontwerpen en te bouwen. 40 referentie screenshots zijn beschikbaar in de `./screenshots/` map.*
