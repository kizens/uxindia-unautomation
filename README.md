# 🇮🇳 Design Un-automated: Reclaiming the Soul of Design in the Age of Autopilot
> **A Keynote Presentation Website for UX India 2026**
> *By a human. Powered by an idea.*

This repository contains the interactive keynote presentation website built for **UX India**. It embodies a warm, minimal retro Indian illustration aesthetic combined with contemporary Swiss-editorial typography, high-impact micro-animations, and zero-hover stage clicker ergonomics.

---

## 🎨 Visual & Design Direction
- **Minimal Retro Indian Aesthetic:** Inspired by warm Indian street culture, heritage terracotta red (`#C83E2D`), mustard ochre (`#E59A2F`), warm paper cream (`#FDFBF7`), forest sage (`#2E6F40`), and vintage ink.
- **Editorial Typography:** High-contrast display typography (*Playfair Display*, *DM Serif Display*) paired with crisp modern grotesks (*Plus Jakarta Sans*, *Space Grotesk*) and monospace metadata stamps (*JetBrains Mono*).
- **Zero-Hover Presentation Mechanics:** As a keynote presenter on stage with a clicker or keyboard, you never need to hover over tooltips or buttons. Advancing with **Right Arrow** or **Space** triggers all diagrams, animated metric bars, and narrative beats automatically in orchestrated sequence.

---

## 🚀 Quick Start (Local Development)

```bash
# 1. Navigate to the project directory
cd "UX India"

# 2. Install dependencies (if not already installed)
npm install

# 3. Start local development server
npm run dev

# 4. Open in your browser:
http://localhost:5173
```

---

## 📦 Production Build & Testing

```bash
# Build production bundle (optimized & minified into dist/)
npm run build

# Preview the production build locally
npm run preview
```

The output in `dist/` is 100% self-contained with relative asset linking (`base: "./"`), allowing it to run smoothly on any static server or subpath.

---

## 🌐 Instant Deployment Options

### 1. Vercel (Recommended)
Pre-configured with `vercel.json`:
```bash
npx vercel
```
Or simply push to GitHub and import the repository on [vercel.com](https://vercel.com).

### 2. Netlify
Pre-configured with `netlify.toml`:
```bash
npx netlify deploy --prod --dir=dist
```
Or connect your GitHub repository in the Netlify dashboard.

### 3. GitHub Pages
1. In `package.json`, the build outputs relative assets (`base: "./"` in `vite.config.ts`).
2. Build the project:
   ```bash
   npm run build
   ```
3. Push the `dist` folder to your `gh-pages` branch, or use GitHub Actions:
   ```yaml
   name: Deploy to GitHub Pages
   on:
     push:
       branches: [ main ]
   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - uses: actions/setup-node@v4
           with:
             node-version: 20
         - run: npm ci
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

---

## ⌨️ Stage Presenter Shortcuts

| Key | Action | Description |
| :--- | :--- | :--- |
| **`→`** / **`Space`** / **`Enter`** | **Next Beat / Slide** | Advances to next sub-step or next slide |
| **`←`** / **`Backspace`** | **Previous Beat / Slide** | Steps back through beats or slides |
| **`N`** | **Toggle Speaker Notes** | Opens/closes the teleprompter notes drawer with script & timing |
| **`O`** / **`Esc`** | **Toggle Overview Grid** | Opens visual grid of all 10 slides to jump instantly |
| **`F`** | **Fullscreen Toggle** | Enters/exits full-screen mode for projector displays |
| **`Home`** | **First Slide** | Jumps directly to Slide 01 (The Confession) |
| **`End`** | **Last Slide** | Jumps directly to Slide 10 (The Roadmap) |

---

## 📋 The 10-Slide Keynote Structure

1. **Slide 01: The Confession (0:00 - 3:00)** — The formal invitation, the exhausted quarter, the 3.2s ChatGPT prompt, and the chilling realization of becoming an intellectual tourist.
2. **Slide 02: The Illusion of "Design Automated" (3:00 - 6:00)** — The frictionless autopilot assembly line; why users don't care about process artifacts.
3. **Slide 03: The Danger of "The Blur" (6:00 - 9:00)** — Tilburg University April 2026 meta-analysis; collective semantic diversity collapse ($d = 0.70$ drop in ideation/design).
4. **Slide 04: The Core vs. Non-Core Trap (9:00 - 12:00)** — Dr. Anil Doshi's Westminster study; the forklift at the gym metaphor; the Core vs. Non-core decision matrix.
5. **Slide 05: The E vs. D Frontier (12:00 - 15:00)** — Execution (making / mechanical) vs. Discernment (choosing / human meaning); 1950s compiler analogy.
6. **Slide 06: What to Automate vs. What to Drive (15:00 - 18:00)** — Low-leverage drudgery vs. product soul; never automate the outcome; step out one click.
7. **Slide 07: Designing for "Calibrated Trust" (18:00 - 21:00)** — Under-trust vs. over-trust; Google Flights Flight Insights case study; plain language clarity over confusing math.
8. **Slide 08: The "Humiliating Mirror" (21:00 - 24:00)** — $100B datacenters burned in the desert just for a robot to remind us that human thinking is awesome.
9. **Slide 09: Real-World Un-automated Outliers (24:00 - 27:00)** — Claude Artifacts & Cash App Tortoise card; taste as your differentiator; Rick Rubin quote.
10. **Slide 10: The Un-automated Roadmap (27:00 - 30:00)** — 3 actionable rules (compete on meaning, productive resistance, validate before confident); the closing crescendo.

---

## 📄 Keynote Source Script
The full canonical keynote script, speech guide, and speaker playbook is preserved in [`KEYNOTE_SCRIPT.md`](./KEYNOTE_SCRIPT.md).
