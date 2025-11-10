# Love, Violeta Rose - Wedding Videography Landing Page

A beautiful, performant Next.js landing page for Love, Violeta Rose videography services featuring smooth animations, centralized content management, and modern best practices.

## Features

- ⚡ **Next.js 14 App Router** - Modern React framework with server components
- 🎨 **Tailwind CSS** - Utility-first styling
- ✨ **Framer Motion** - Smooth, performance-friendly animations
- 📱 **Fully Responsive** - Mobile-first design
- ♿ **Accessible** - WCAG compliant with reduced motion support
- 🔍 **SEO Optimized** - JSON-LD structured data, sitemap, robots.txt
- 📧 **Contact Form** - Resend integration with honeypot spam protection
- 🧪 **Tested** - Playwright smoke tests across browsers
- 🚀 **CI/CD Ready** - GitHub Actions & Vercel deployment

## Getting Started

### Prerequisites

- Node.js 20+ and npm
- A [Resend](https://resend.com) API key for contact form functionality

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd LVRLP
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```

   Edit `.env.local` and add your configuration:
   ```env
   # Hero video/poster URLs (Dropbox: change ?dl=0 to ?raw=1)
   NEXT_PUBLIC_HERO_VIDEO_URL=https://www.dropbox.com/s/your-id/video.mp4?raw=1
   NEXT_PUBLIC_HERO_POSTER_URL=https://www.dropbox.com/s/your-id/poster.jpg?raw=1

   # Contact form
   RESEND_API_KEY=re_your_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 How to Edit Content (Non-Developers Welcome!)

**Everything you need to update is in ONE file:** `src/content/site.ts`

This centralized content file contains all pricing, copy, FAQs, and more. No need to touch components or multiple files!

### Quick Start: Common Edits

#### 1️⃣ Change Package Prices

Open `src/content/site.ts` and find the `packages` array:

```typescript
packages: [
  {
    id: "p4",
    name: "The 10-Hour Extended Film",
    price: 5000,  // ← Change this number
    duration: "10 hours",
    // ... rest of package
  }
]
```

**That's it!** The price updates everywhere automatically (cards, modal, comparison grid).

#### 2️⃣ Update Hero Text

Find the `hero` section:

```typescript
hero: {
  headline: "Love Stories Worth Reliving Forever",  // ← Edit headline
  subline: "Elegant, story-driven videography crafted with heart.",  // ← Edit subline
  description: "From intimate elopements to grand celebrations...",  // ← Edit description
  badge: "Cinematic Wedding Films",  // ← Edit badge text
}
```

#### 3️⃣ Change Hero Video/Poster

Edit `.env.local` (NOT site.ts):

```env
NEXT_PUBLIC_HERO_VIDEO_URL=https://www.dropbox.com/s/abc123/hero.mp4?raw=1
NEXT_PUBLIC_HERO_POSTER_URL=https://www.dropbox.com/s/xyz789/poster.jpg?raw=1
```

**Dropbox Links:** Change `?dl=0` to `?raw=1` for direct video/image access!

#### 4️⃣ Update Add-On Prices

Find the `addOns` array:

```typescript
addOns: [
  {
    name: "Second Videographer (Full Day)",
    price: 600,  // ← Change price
    description: "Dual perspectives throughout your celebration"
  }
]
```

#### 5️⃣ Edit FAQs

Find the `faq` array:

```typescript
faq: [
  {
    id: "booking",
    question: "How far in advance should I book?",  // ← Edit question
    answer: "I recommend booking 9-12 months in advance..."  // ← Edit answer
  }
]
```

**Add a new FAQ:** Just copy an existing object and change the values!

#### 6️⃣ Update Button Labels

Find `sectionHeaders.cta`:

```typescript
sectionHeaders: {
  cta: {
    question: "Not sure which package is right for you?",  // ← Edit question
    primary: {
      label: "Schedule a Consultation",  // ← Edit button text
      href: "#contact"
    },
    secondary: {
      label: "View FAQ",  // ← Edit button text
      href: "#faq"
    }
  }
}
```

### Complete Content Structure Reference

#### Hero Section

```typescript
hero: {
  headline: string,        // Main headline (split at word 4 for gradient)
  subline: string,         // Subtitle below headline
  description: string,     // Paragraph text
  badge: string,           // Animated badge text
  ctas: {
    primary: { label: string, href: string },
    secondary: { label: string, action: string }
  },
  media: {
    videoUrl: string,      // From NEXT_PUBLIC_HERO_VIDEO_URL
    posterUrl: string      // From NEXT_PUBLIC_HERO_POSTER_URL
  },
  stats: [
    { value: "500+", label: "Weddings Filmed" },
    // ... add/edit stats
  ]
}
```

#### Package Structure

```typescript
packages: [
  {
    id: string,                // Unique identifier (e.g., "p4")
    name: string,              // Display name
    tagline: string,           // Italic subtitle
    summary: string,           // One-sentence description
    idealFor: string,          // Who this is perfect for
    price: number,             // Price in dollars
    duration: string,          // Coverage time (e.g., "10 hours")
    rank: number,              // Display order (1-5)
    isIdeal: boolean,          // Show "Most Booked" badge?
    isUltimate: boolean,       // Ultimate tier styling?
    coverage: string,          // Coverage description
    deliverables: string[],    // List of what's included
    turnaround: string,        // Delivery timeline
    notes: string[]            // Additional details
  }
]
```

#### Add-Ons

```typescript
addOns: [
  {
    name: string,         // Add-on name
    price: number,        // Price in dollars
    description: string   // What it includes
  }
]
```

#### FAQs

```typescript
faq: [
  {
    id: string,         // Unique identifier (lowercase-with-dashes)
    question: string,   // The question
    answer: string      // The detailed answer
  }
]
```

#### Testimonials

```typescript
testimonials: [
  {
    name: string,         // Client name(s)
    package: string,      // Which package they booked
    date: string,         // Wedding date (Month YYYY)
    rating: number,       // 1-5 stars
    text: string,         // Their review
    image: string         // Path to photo (e.g., "/testimonials/name.jpg")
  }
]
```

#### Workflow Steps

```typescript
workflow: [
  {
    step: number,         // Step number (1-6)
    title: string,        // Step title
    description: string,  // What happens in this step
    icon: "calendar" | "document" | "camera" | "checklist" | "heart" | "gift",
    duration: string      // How long it takes
  }
]
```

### After Editing Content

1. **Save** `src/content/site.ts` (or `.env.local` if you changed hero media)
2. **Refresh your browser** - Changes appear immediately in dev mode!
3. **Commit your changes**:
   ```bash
   git add src/content/site.ts
   git commit -m "Update pricing and content"
   git push
   ```

The site will automatically rebuild and deploy via Vercel!

### Troubleshooting

**Q: I changed the price but don't see it update**
- Make sure you saved `src/content/site.ts`
- Hard refresh your browser (`Cmd+Shift+R` or `Ctrl+F5`)

**Q: My Dropbox video won't load**
- Change `?dl=0` to `?raw=1` in your Dropbox link
- Example: `https://www.dropbox.com/s/abc123/video.mp4?raw=1`

**Q: I added a package but it's not showing**
- Make sure you added a comma after the previous package
- Check that `rank` is unique and sequential (1, 2, 3, 4, 5)
- Verify all required fields are present (id, name, price, duration, etc.)

**Q: How do I mark a different package as "Most Booked"?**
- Find the package you want to highlight
- Set `isIdeal: true` for that package
- Set `isIdeal: false` for all others
- Only ONE package should have `isIdeal: true`

## Project Structure

```
LVRLP/
├── .github/
│   └── workflows/
│       └── ci.yml              # GitHub Actions CI/CD
├── content/
│   ├── packages.json           # Legacy (migrated to site.ts)
│   └── faq.json                # Legacy (migrated to site.ts)
├── public/
│   ├── gallery/                # Gallery images
│   ├── testimonials/           # Testimonial photos
│   └── og-image.svg            # Open Graph image
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/        # Contact form API endpoint
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx            # Homepage
│   │   ├── globals.css         # Global styles (price height, tabular nums)
│   │   ├── sitemap.ts          # Dynamic sitemap
│   │   ├── robots.ts           # Robots.txt
│   │   └── opengraph-image.tsx # OG image generator
│   ├── components/
│   │   ├── sections/           # Page sections
│   │   │   ├── Hero.tsx        # Hero with centralized content
│   │   │   └── ...
│   │   ├── PackageCard.tsx     # Baseline-locked pricing cards
│   │   ├── PackageGrid.tsx     # Package grid with glow chain
│   │   ├── PackageModal.tsx    # Centered overlay modal
│   │   ├── PackageComparison.tsx # Comparison grid
│   │   ├── AnimateIn.tsx       # Animation wrapper
│   │   └── SmoothScroll.tsx    # Lenis smooth scroll
│   ├── content/
│   │   └── site.ts             # ⭐ EDIT ALL CONTENT HERE ⭐
│   └── lib/
│       └── animations.ts       # Framer Motion variants
├── tests/
│   └── smoke.spec.ts           # Playwright tests
├── .env.local.example          # Environment variables template
├── .env.local                  # Your actual env vars (gitignored)
├── package.json
├── tailwind.config.ts          # Brand colors, fonts
├── playwright.config.ts
└── README.md                   # ← You are here
```

## Testing

### Run Tests Locally

```bash
# Install Playwright browsers (first time only)
npx playwright install

# Run all tests
npm test

# Run tests with UI
npm run test:ui

# Run specific browser
npx playwright test --project=chromium
```

### Continuous Integration

Tests run automatically on every push via GitHub Actions:
- ✅ Build verification
- ✅ Linting
- ✅ Playwright smoke tests (Chromium, Firefox, WebKit)

## Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Add environment variables**:
   - `NEXT_PUBLIC_SITE_URL`
   - `RESEND_API_KEY`
   - `CONTACT_EMAIL`
3. **Deploy** - Automatic on every push to main

### Manual Deployment

```bash
# Build for production
npm run build

# Start production server
npm start
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_HERO_VIDEO_URL` | Hero background video URL (Dropbox: use `?raw=1`) | No (has fallback) |
| `NEXT_PUBLIC_HERO_POSTER_URL` | Hero video poster image URL | No (has fallback) |
| `RESEND_API_KEY` | Resend API key for contact form emails | Yes |

**Note:** For Dropbox links, change `?dl=0` to `?raw=1` to enable direct video/image access.

## Performance

- ⚡ Lighthouse Score: 95+
- 🎨 Optimized animations with `prefers-reduced-motion` support
- 📦 Code splitting with Next.js App Router
- 🖼️ Automatic image optimization
- 🔄 Smooth scrolling with Lenis (disabled for users preferring reduced motion)

## Browser Support

- ✅ Chrome/Edge (last 2 versions)
- ✅ Firefox (last 2 versions)
- ✅ Safari (last 2 versions)
- ✅ Mobile browsers (iOS Safari, Chrome Android)

## Accessibility

- ♿ WCAG 2.1 AA compliant
- ⌨️ Full keyboard navigation
- 🎯 Proper ARIA labels
- 🎭 Reduced motion support
- 📱 Mobile-friendly touch targets

## Contributing

1. Create a feature branch: `git checkout -b feature/amazing-feature`
2. Make your changes
3. Run tests: `npm test`
4. Commit: `git commit -m "Add amazing feature"`
5. Push: `git push origin feature/amazing-feature`
6. Open a Pull Request

## License

All rights reserved. Copyright © 2024 Love, Violeta Rose.

## Support

For questions or issues, please open a GitHub issue or contact [your-email@example.com].

---

Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion
