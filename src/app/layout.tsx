import type { Metadata } from "next";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import packagesData from "../../content/packages.json";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://lovevioletarose.com";

export const metadata: Metadata = {
  title: "Love, Violeta Rose | Professional Wedding & Event Photography",
  description: "Capturing your most precious moments with artistry and elegance. Wedding, engagement, and event photography packages available.",
  metadataBase: new URL(siteUrl),
  keywords: ["wedding photography", "event photography", "engagement photos", "professional photographer", "violeta rose"],
  authors: [{ name: "Violeta Rose" }],
  openGraph: {
    title: "Love, Violeta Rose | Professional Wedding & Event Photography",
    description: "Capturing your most precious moments with artistry and elegance.",
    url: siteUrl,
    siteName: "Love, Violeta Rose",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Love, Violeta Rose Photography",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Love, Violeta Rose | Professional Wedding & Event Photography",
    description: "Capturing your most precious moments with artistry and elegance.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

function generateJsonLd() {
  const offers = packagesData.packages.map((pkg) => ({
    "@type": "Offer",
    "name": pkg.name,
    "description": pkg.description,
    "price": pkg.price.toString(),
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "itemOffered": {
      "@type": "Service",
      "name": pkg.name,
      "description": pkg.description,
    },
  }));

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Love, Violeta Rose",
    "image": `${siteUrl}/og-image.jpg`,
    "description": "Professional wedding and event photography services",
    "@id": siteUrl,
    "url": siteUrl,
    "telephone": "",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US",
    },
    "geo": {
      "@type": "GeoCoordinates",
    },
    "sameAs": [],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Photography Packages",
      "itemListElement": offers,
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = generateJsonLd();

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
