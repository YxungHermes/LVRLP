import type { Metadata } from "next";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import packagesData from "../../content/packages.json";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://lovevioletarose.com";

export const metadata: Metadata = {
  title: "Love, Violeta Rose | Cinematic Wedding Videography",
  description: "Creating cinematic love stories with artistry and elegance. Wedding film packages from intimate elopements to luxury celebrations.",
  metadataBase: new URL(siteUrl),
  keywords: ["wedding videography", "cinematic wedding films", "wedding filmmaker", "engagement films", "professional videographer", "violeta rose"],
  authors: [{ name: "Violeta Rose" }],
  openGraph: {
    title: "Love, Violeta Rose | Cinematic Wedding Videography",
    description: "Creating cinematic love stories with artistry and elegance.",
    url: siteUrl,
    siteName: "Love, Violeta Rose",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Love, Violeta Rose Wedding Films",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Love, Violeta Rose | Cinematic Wedding Videography",
    description: "Creating cinematic love stories with artistry and elegance.",
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
    "description": pkg.summary,
    "price": pkg.price.toString(),
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "itemOffered": {
      "@type": "Service",
      "name": pkg.name,
      "description": pkg.summary,
    },
  }));

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Love, Violeta Rose",
    "image": `${siteUrl}/og-image.jpg`,
    "description": "Professional cinematic wedding videography and filmmaking services",
    "@id": siteUrl,
    "url": siteUrl,
    "telephone": "",
    "priceRange": "$$-$$$",
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
      "name": "Wedding Film Packages",
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
