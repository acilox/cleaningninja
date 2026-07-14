# CleaningNinja — image assets

The site currently ships with **no photographs** — the hero uses a Three.js
particle field and service cards use SVG icons, so it looks complete without any
images. When you generate the images below, drop them in this folder and wire
them into the components (each prompt notes where it's used).

## How to use a generated image in a component

Astro optimises images imported from `src/assets/`:

```astro
---
import { Image } from 'astro:assets';
import houseClean from '../assets/service-house.jpg';
---
<Image src={houseClean} alt="Professional house cleaning" width={800} height={600} />
```

Recommended: WebP or high-quality JPG, 1600px on the long edge (Astro will
resize/serve responsive variants).

---

## Image generation prompts

All prompts are tuned for the brand: **dark, premium, teal (#00D4AA) accent,
cinematic, Australian context, no visible faces** (avoids the uncanny-stock look
and keeps it reusable for a real client).

### 1. Hero background — OPTIONAL (used behind the particle canvas, subtle)
> Modern clean Australian home interior at dusk, dark moody cinematic tones,
> soft teal ambient lighting, wide-angle empty living room, polished floors,
> shallow depth of field, ultra high detail, photorealistic, 16:9

Where: `Hero.astro` — as a very low-opacity `background-image` layer behind
`#hero-canvas` (optional; the particle field already carries the hero).

### 2. Service — Regular House Cleaning
> Professional cleaner in a dark uniform with subtle teal accent wiping a bright
> modern kitchen bench, no face visible, cinematic depth of field, natural light,
> photorealistic, 4:3

### 3. Service — End-of-Lease Bond Clean
> Pristine empty modern apartment ready for inspection, checklist clipboard on
> the bench, natural window light, minimalist Australian interior, spotless,
> photorealistic, 4:3

### 4. Service — Commercial & Office
> Clean modern open-plan office after hours, polished floors reflecting warm
> evening light, tidy desks, a single teal plant accent, no people,
> photorealistic, 4:3

### 5. Service — Carpet & Upholstery
> Close-up of a professional carpet cleaning machine restoring plush light-grey
> carpet, faint steam, teal equipment accent, dramatic side lighting,
> photorealistic, 4:3

### 6. Service — Window Cleaning
> Professional window cleaner's squeegee drawing a clean streak across glass,
> city skyline softly reflected, dramatic angle, water droplets, teal accent,
> photorealistic, 4:3

### 7. Service — Spring & Deep Clean
> Sparkling clean bathroom with chrome fixtures gleaming, water droplets, bright
> and airy yet moody contrast, teal accent towel, no people, photorealistic, 4:3

### 8. Trust / Team (optional, for an About block if added later)
> Two cleaners in matching dark uniforms with a small teal logo patch, standing
> confidently at a suburban Australian front door, natural daylight, friendly,
> no identifiable faces, photorealistic, 3:2

### 9. OG / social share image (already have an SVG fallback at public/og.svg)
> Dark premium banner, "CleaningNinja" wordmark, teal water-droplet logo, subtle
> particle glow, tagline "Spotless. Every time.", 1200×630

---

## Notes
- Keep faces out of frame or non-identifiable — makes images reusable for the
  eventual real client and avoids stock-photo tells.
- Favour teal accents and dark, moody, high-contrast lighting to match the site.
- If you generate service photos, consider adding them as a background image on
  the **back face** of each flip card in `Services.astro` for extra polish.
