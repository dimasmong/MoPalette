# MoPalette

<p align="center">
  <img src="https://raw.githubusercontent.com/dimasmong/MoPalette/main/public/favicon.svg" alt="MoPalette Logo" width="80" height="80" />
</p>

<h3 align="center">Modern Color Palette Generator & Local Image Color Extractor</h3>

<p align="center">
  A fast, privacy-focused color palette generator, image color extraction tool, and design token workshop built for designers, developers, digital artists, and creators.
</p>

<p align="center">
  <a href="https://github.com/dimasmong/MoPalette/releases"><img src="https://img.shields.io/github/v/release/dimasmong/MoPalette?style=flat-square&color=A1E3F9&label=Release" alt="GitHub release" /></a>
  <a href="https://mopalette.vercel.app"><img src="https://img.shields.io/badge/Deployment-Vercel%20Production-success?style=flat-square&logo=vercel" alt="Vercel Deployment" /></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square" alt="MIT License" /></a>
  <img src="https://img.shields.io/badge/Brand%20Accent-%23A1E3F9-73D3F5?style=flat-square" alt="Brand Accent #A1E3F9" />
  <img src="https://img.shields.io/badge/TypeScript-5.7-3178C6?style=flat-square&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react" alt="React 18" />
  <img src="https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?style=flat-square&logo=tailwind-css" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Tests-54%20Passing-brightgreen?style=flat-square" alt="Tests 54 Passing" />
</p>

---

## 🌐 Live Production Demo

**Website:** [https://mopalette.vercel.app](https://mopalette.vercel.app)

---

## 🌟 Key Features

### 1. Harmonic Palette Generator
- **Deterministic Color Science:** Built with [Culori](https://culori.org/) for perceptual color spaces (OKLCH, LAB, RGB, HSL, HSV).
- **Geometric Color Harmonies:** Analogous, Complementary, Triadic, Tetradic, Split Complementary, and Monochromatic harmonies mapped with an interactive circular hue wheel.
- **Selective Color Locking:** Lock individual swatches so they stay unchanged during generation.
- **Spacebar Shortcut & Quick Actions:**
  - `Generate (Spacebar)`: Generates fresh colors for all currently unlocked swatches.
  - `Unlock All & Generate`: Atomically clears all locks and generates an entirely fresh palette with a single click.
- **Atomic Undo / Redo:** Full chronological history stack supporting unlimited undos and redos across lock and generation actions.
- **Dynamic Palette Size:** Freely scale between 2 and 12 colors on the fly.
- **Integrated Tints & Shades:** Beneath every swatch, view an 11-step OKLCH tonal ladder (50 to 950) with one-click copy and luminance indicators.

### 2. 1,040 Curated Presets across 20 Design Categories
- **Massive Inspiration Library:** 1,040 hand-curated, harmonized color schemes spanning:
  - *Pastel, Ocean, Nature, Sunset, Earth, Minimal, Retro, Neon, Dark, Elegant, Warm, Cool, Monochrome, Cyberpunk, Forest, Lavender, Coffee, Autumn, Winter, Spring*.
- **Horizontal Category Carousel:** Modern tabbed navigation with interactive scroll arrows and a responsive layout.
- **Curated "All" View with Randomize:** Displays 12 balanced showcase palettes; click **Randomize** to shuffle 12 fresh palettes drawn across the entire collection.
- **Comprehensive Category Galleries:** Selecting any individual category displays all 52 curated palettes within that theme.
- **One-Click Actions:** Instant load into Generator, copy shareable link, or test in Live Preview.

### 3. In-Browser Image Color Extractor (100% Client-Side)
- **Zero Server Uploads:** 100% privacy-conscious processing executed locally inside the browser using the HTML5 Canvas API.
- **Multiple Extraction Modes:** *Dominant*, *Vibrant*, *Muted*, and *Balanced* quantization algorithms.
- **Frequency Analysis & Occurrence Rates:** Visual percentage bars showing color representation across sampled pixels.
- **Interactive Eyedropper:** Click anywhere on the loaded image canvas to sample precise pixel coordinates.
- **Built-in Sample Gallery:** Includes 4 high-resolution artworks (Landscape, Portrait, Cyberpunk Neon, Impressionist Oil) for instant zero-file testing.

### 4. Live UI Mockup Preview
- **Interactive Component Simulation:** Test color palettes on realistic dashboard widgets, hero cards, navigation bars, buttons, and alert badges.
- **Light & Dark Preview Switch:** Preview color roles in both light and dark UI themes without altering the global app theme.
- **Editable Semantic Roles:** Freely assign and customize palette roles (*Primary*, *Secondary*, *Background*, *Surface*, *Text*, *Accent*).
- **Embedded Preset Drawer:** Browse and apply curated presets directly inside the preview workspace with instant rollback.

### 5. WCAG 2.2 Accessibility & Contrast Checker
- **Real-Time Contrast Ratios:** Calculated against WCAG 2.2 standards for normal text, large text, and graphic components.
- **AA & AAA Compliance Badges:** Clear pass/fail indicators across all color pairings.
- **Color Vision Deficiency (CVD) Simulator:** High-fidelity Brettel/Machado simulation for *Protanopia*, *Deuteranopia*, *Tritanopia*, and *Grayscale*.
- **Auto-Contrast Optimizer:** Calculates the nearest compliant shade in OKLCH space while preserving original hue angle.

### 6. Design Token Scales & Gradient Builder
- **11-Step Design System Scales:** Generates tokens 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950 via perceptual OKLCH interpolation.
- **CSS Gradient Studio:** Multi-stop linear and radial gradient generator with rotation angle, stop positioning, and CSS code output.

### 7. Export & Download Engine
- **No Automatic Downloads:** Downloads execute strictly when explicitly requested by the user.
- **Comprehensive Formats:**
  - **PNG Image Card:** High-DPI canvas export with swatch labels and hex values.
  - **SVG Vector Card:** Scalable vector graphics representation.
  - **CSS Custom Properties:** Clean `:root { --color-... }` variable block.
  - **SCSS Variables:** SASS format tokens.
  - **Tailwind CSS:** Ready-to-paste theme extension snippet.
  - **JSON Tokens:** Machine-readable design tokens with RGB, HSL, and OKLCH properties.
  - **GPL Palette:** Standard format for GIMP, Inkscape, and Aseprite.
  - **TXT List:** Plaintext hex codes.

### 8. Localization & Themes
- **Bilingual Support:** Full English (default) and Bahasa Indonesia translations with persistent language state.
- **Light & Dark Mode:** Carefully balanced glassmorphic interface with WCAG AA compliance in both modes.

---

## 🛠️ Technology Stack

| Layer | Technology | Purpose |
|---|---|---|
| **Framework** | [React 18](https://react.dev/) + [TypeScript 5.7](https://www.typescriptlang.org/) | Type-safe declarative user interface |
| **Tooling** | [Vite 6](https://vitejs.dev/) | Ultra-fast local development and production bundling |
| **Styling** | [Tailwind CSS 3.4](https://tailwindcss.com/) | Responsive design tokens and custom glassmorphism utilities |
| **Color Science** | [Culori 4](https://culori.org/) | Perceptual OKLCH, LAB, RGB, HSL, HSV, and WCAG luminance calculations |
| **Icons** | [Lucide React](https://lucide.dev/) | Clean, accessible iconography |
| **Unit Testing** | [Vitest 2](https://vitest.dev/) | Rapid automated test execution (54 tests passing) |
| **Hosting** | [Vercel](https://vercel.com/) | Global edge deployment with automatic HTTPS |

---

## 📁 Project Structure

```
MoPalette/
├── public/                     # Static assets and sample images
│   ├── favicon.svg             # Vector brand icon
│   └── samples/                # Sample artwork for local image extractor
├── src/
│   ├── components/
│   │   ├── common/             # Reusable UI primitives (Buttons, Modals, Sliders, Badges)
│   │   ├── features/
│   │   │   ├── contrast/       # WCAG contrast checker & color blindness simulator
│   │   │   ├── extractor/      # Canvas-based image color extractor & eyedropper
│   │   │   ├── gradient/       # Multi-stop linear/radial gradient builder
│   │   │   ├── palette-generator/ # Swatches, locking, toolbar, and hue wheel
│   │   │   ├── preview/        # Live dashboard UI mockup preview
│   │   │   ├── presets/        # 1,040 curated presets & category carousel
│   │   │   ├── saved/          # LocalStorage library and history manager
│   │   │   └── shades/         # 11-step design token scales
│   │   └── layout/             # Header, Navbar, Footer, and App Shell
│   ├── context/                # PaletteContext (generator state, undo/redo, locks)
│   ├── lib/
│   │   ├── color/              # Color conversions, harmonies, contrast, and quantization
│   │   ├── export/             # PNG, SVG, CSS, SCSS, Tailwind, JSON, GPL generators
│   │   ├── image/              # Canvas sampling & color extraction algorithms
│   │   ├── presets/            # Curated preset library (1,040 palettes)
│   │   └── storage/            # LocalStorage persistence & schema validation
│   ├── locales/                # English & Indonesian translation strings
│   ├── styles/                 # Tailwind CSS directives & custom utility classes
│   ├── types/                  # TypeScript interface definitions
│   ├── App.tsx                 # Root application component with tab navigation
│   └── main.tsx                # Application bootstrap entry point
├── tests/                      # Automated Vitest unit test suites
├── vercel.json                 # Vercel deployment configuration & security headers
├── tailwind.config.js          # Tailwind theme and brand color configuration
├── vite.config.ts              # Vite build and test configuration
└── package.json                # Project dependencies and npm scripts
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
- `npm` or `pnpm` or `yarn`

### Installation

```bash
# Clone the repository
git clone https://github.com/dimasmong/MoPalette.git

# Enter project directory
cd MoPalette

# Install dependencies
npm install
```

### Development Server

```bash
npm run dev
```

The application will start at `http://localhost:3000`.

### Running Tests

```bash
npm test
```

Executes all 54 unit tests across 10 test suites verifying color math, harmonies, contrast, generator state, and preset integrity.

### Building for Production

```bash
npm run build
```

The compiled, optimized production bundle will be generated in `dist/`.

---

## 🧪 Quality & Test Verification

All critical color algorithms, generators, and presets are covered by automated unit tests:

- **`tests/conversions.test.ts`**: Verifies bidirectional conversion across Hex, RGB, HSL, HSV, OKLCH, and LAB.
- **`tests/generation.test.ts`**: Verifies random generation, seed reproducibility, brand color isolation, and color locking.
- **`tests/generator-v3.test.ts`**: Verifies Spacebar generation, Unlock All & Generate, and atomic undo/redo behavior.
- **`tests/contrast.test.ts`**: Verifies relative luminance calculations, WCAG AA/AAA scoring, and auto-contrast adjustments.
- **`tests/harmony.test.ts`**: Verifies geometric harmony calculations (complementary, triadic, tetradic, etc.).
- **`tests/presets.test.ts`**: Verifies all 1,040 preset IDs, hex codes, category distributions, and uniqueness.
- **`tests/quantizer.test.ts`**: Verifies median cut pixel quantization and frequency sorting.
- **`tests/export.test.ts`**: Verifies CSS, SCSS, Tailwind, JSON, and GPL export string generation.
- **`tests/shades.test.ts`**: Verifies 11-step OKLCH tonal ladder calculations.
- **`tests/semanticRoles.test.ts`**: Verifies role assignments and contrast alerts.

---

## 📄 License & Attribution

- **MoPalette Application:** Licensed under the [MIT License](LICENSE).
- **Third-Party Notices:** Detailed software licenses and credits are provided in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
- **AI Model Disclosure:** No machine-learning models are used for color generation or image processing. All operations are deterministic, private, and calculated in-browser.

---

<p align="center">
  Crafted with care by <strong>Dimas Mong</strong> &bull; © 2026 MoPalette
</p>
