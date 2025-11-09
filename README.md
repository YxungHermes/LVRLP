# Love, Violeta Rose - Photography Landing Page

A beautiful, performant Next.js landing page for Love, Violeta Rose photography services featuring smooth animations, content-driven pricing, and modern best practices.

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
   cp .env.example .env
   ```

   Edit `.env` and add your configuration:
   ```env
   NEXT_PUBLIC_SITE_URL=https://lovevioletarose.com
   RESEND_API_KEY=re_your_api_key_here
   CONTACT_EMAIL=your-email@example.com
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## How to Edit Pricing and Content

All pricing and content is driven from JSON files in the `content/` directory. This makes it easy to update without touching code.

### Editing Packages (`content/packages.json`)

#### Update Package Pricing

To change a package price:

```json
{
  "id": "elegance",
  "name": "Elegance",
  "price": 3200,  // ← Change this number
  ...
}
```

#### Add a New Package

Add a new object to the `packages` array:

```json
{
  "id": "premium",
  "name": "Premium",
  "tagline": "Luxury experience",
  "description": "Premium all-day coverage",
  "price": 4500,
  "duration": "12 hours",
  "popular": false,
  "features": [
    "12 hours of coverage",
    "2 professional photographers",
    "1000+ edited images"
  ],
  "highlights": [
    "Extended coverage",
    "Multiple photographers"
  ]
}
```

#### Modify Package Features

Edit the `features` array for any package:

```json
{
  "features": [
    "8 hours of coverage",        // ← Edit existing
    "1 professional photographer",
    "New feature here"             // ← Add new features
  ]
}
```

#### Update Add-ons

Modify the `addOns` array:

```json
{
  "name": "Second Photographer",
  "price": 500,                    // ← Change price
  "description": "Capture multiple perspectives"
}
```

#### Testimonials

Update the `testimonials` array:

```json
{
  "name": "Sarah & Michael",
  "package": "Elegance",
  "date": "June 2024",            // ← Update date
  "rating": 5,
  "text": "Amazing experience!",   // ← Update review text
  "image": "/testimonials/sarah-michael.jpg"
}
```

#### Workflow Steps

Modify the `workflow` array to change your process:

```json
{
  "step": 1,
  "title": "Initial Consultation",     // ← Change title
  "description": "We'll meet...",      // ← Update description
  "icon": "calendar",                  // ← Options: calendar, document, camera, checklist, heart, gift
  "duration": "30-60 min"              // ← Update duration
}
```

### Editing FAQs (`content/faq.json`)

#### Add a New FAQ

```json
{
  "id": "new-question",
  "question": "Your question here?",
  "answer": "Your detailed answer here."
}
```

#### Update Existing FAQ

```json
{
  "id": "booking",
  "question": "How far in advance should I book?",
  "answer": "I recommend booking 12-18 months in advance..."  // ← Edit answer
}
```

#### Remove an FAQ

Simply delete the entire object from the `faqs` array.

### After Editing

1. **Save your changes** to the JSON files
2. **Restart the dev server** if running (`Ctrl+C`, then `npm run dev`)
3. **Commit your changes**:
   ```bash
   git add content/
   git commit -m "Update pricing and content"
   git push
   ```

The site will automatically rebuild and deploy via Vercel!

## Project Structure

```
LVRLP/
├── .github/
│   └── workflows/
│       └── ci.yml              # GitHub Actions CI/CD
├── content/
│   ├── packages.json           # ← EDIT PRICING HERE
│   └── faq.json               # ← EDIT FAQs HERE
├── public/
│   └── og-image.svg           # Open Graph image
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/       # Contact form API endpoint
│   │   ├── layout.tsx         # Root layout with metadata
│   │   ├── page.tsx           # Homepage
│   │   ├── globals.css        # Global styles
│   │   ├── sitemap.ts         # Dynamic sitemap
│   │   ├── robots.ts          # Robots.txt
│   │   └── opengraph-image.tsx # OG image generator
│   └── components/
│       ├── sections/          # Page sections
│       │   ├── Hero.tsx
│       │   ├── Packages.tsx
│       │   ├── Comparison.tsx
│       │   ├── Workflow.tsx
│       │   ├── Gallery.tsx
│       │   ├── Testimonials.tsx
│       │   ├── FAQ.tsx
│       │   └── Contact.tsx
│       ├── AnimateIn.tsx      # Animation wrapper components
│       └── SmoothScroll.tsx   # Lenis smooth scroll
├── tests/
│   └── smoke.spec.ts          # Playwright tests
├── .env.example               # Environment variables template
├── package.json
├── tailwind.config.ts
├── playwright.config.ts
└── README.md                  # ← You are here
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
| `NEXT_PUBLIC_SITE_URL` | Your site's public URL | Yes |
| `RESEND_API_KEY` | Resend API key for emails | Yes |
| `CONTACT_EMAIL` | Email to receive form submissions | Yes |

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
