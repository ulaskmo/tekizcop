import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { categories } from "@/data/categories";
import { fullAddress, siteConfig } from "@/data/site";

import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const display = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.legalName }],
  creator: siteConfig.legalName,
  publisher: siteConfig.legalName,
  keywords: [
    "çöp konteyneri",
    "galvaniz çöp konteyneri",
    "plastik çöp konteyneri",
    "yeraltı çöp konteyneri",
    "sıkıştırmalı çöp konteyneri",
    "geri dönüşüm kutusu",
    "moloz konteyneri",
    "çöp konteyneri üreticisi",
    "belediye çöp konteyneri",
    "atık toplama ekipmanları",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "manufacturing",
  formatDetection: { telephone: true, address: true },
};

export const viewport: Viewport = {
  themeColor: "#0f6544",
  colorScheme: "light",
};

/** Site genelinde geçerli kurum ve site bilgisi. */
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.legalName,
      alternateName: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
      foundingDate: String(siteConfig.founded),
      telephone: siteConfig.phone,
      email: siteConfig.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.district,
        addressRegion: siteConfig.address.city,
        postalCode: siteConfig.address.postalCode,
        addressCountry: "TR",
      },
      sameAs: Object.values(siteConfig.social),
      knowsAbout: categories.map((c) => c.name),
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      description: siteConfig.description,
      inLanguage: "tr-TR",
      publisher: { "@id": `${siteConfig.url}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className={`${inter.variable} ${display.variable}`}>
      <head>
        <meta name="geo.region" content="TR-34" />
        <meta name="geo.placename" content={fullAddress} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="flex min-h-screen flex-col font-sans">
        <a
          href="#icerik"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-brand-700 focus:px-5 focus:py-3 focus:text-sm focus:font-medium focus:text-white"
        >
          İçeriğe geç
        </a>
        <Header />
        <main id="icerik" className="flex-1 pt-20">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
