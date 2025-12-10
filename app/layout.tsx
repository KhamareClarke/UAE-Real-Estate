import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SchemaMarkup from "@/components/SchemaMarkup";
import { FormModalProvider } from "@/contexts/FormModalContext";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://cityplazare.com'),
  title: {
    default: "UAE Golden Visa Property Investment | City Plaza Real Estate Abu Dhabi & Dubai",
    template: "%s | City Plaza Real Estate"
  },
  description: "Premium UAE real estate investment in Abu Dhabi & Dubai. Golden Visa eligible properties, off-plan developments, rental income opportunities. RERA licensed #1189. Tax-free returns, 100% ownership. Expert guidance for international investors.",
  keywords: [
    "UAE property investment",
    "Dubai real estate",
    "Abu Dhabi property",
    "Golden Visa UAE",
    "UAE Golden Visa property",
    "Dubai Golden Visa real estate",
    "off-plan Dubai",
    "off-plan Abu Dhabi",
    "UAE residency through property",
    "property investment UAE",
    "real estate Abu Dhabi",
    "Dubai property for sale",
    "UAE real estate agent",
    "RERA licensed broker",
    "tax-free property UAE",
    "rental income Dubai",
    "Abu Dhabi apartments",
    "Dubai villas for sale",
    "UAE property market",
    "international property investment",
    "expat property UAE",
    "freehold property Dubai",
    "UAE residency visa",
    "property developer UAE"
  ],
  authors: [{ name: "City Plaza Real Estate", url: "https://cityplazare.com" }],
  creator: "City Plaza Real Estate",
  publisher: "City Plaza Real Estate",
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "https://cityplazare.com",
    siteName: "City Plaza Real Estate",
    title: "UAE Golden Visa Property Investment | Abu Dhabi & Dubai Real Estate",
    description: "Invest in premium UAE properties with Golden Visa eligibility. RERA licensed broker offering off-plan & ready properties in Abu Dhabi & Dubai. Tax-free returns, expert guidance.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "City Plaza Real Estate - UAE Property Investment",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UAE Golden Visa Property Investment | City Plaza Real Estate",
    description: "Premium Abu Dhabi & Dubai properties with Golden Visa eligibility. RERA licensed. Tax-free returns, 100% ownership.",
    images: ["/images/og-image.jpg"],
    creator: "@cityplazare",
    site: "@cityplazare",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
      },
    ],
  },
  manifest: '/manifest.json',
  verification: {
    google: 'iUIREkAPnyJ9UgEVgAFeHvxCpgs1dkq4AkxQfeYbbk8',
    yandex: 'your-yandex-verification-code',
  },
  alternates: {
    canonical: 'https://cityplazare.com',
  },
  category: 'Real Estate',
  classification: 'Real Estate Investment, Property Sales, Golden Visa Services',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <SchemaMarkup />
        <link rel="canonical" href="https://cityplazare.com" />
        <meta name="theme-color" content="#FF6A00" />
        <meta name="msapplication-TileColor" content="#FF6A00" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="geo.region" content="AE-AZ" />
        <meta name="geo.placename" content="Abu Dhabi" />
        <meta name="geo.position" content="24.4539;54.3773" />
        <meta name="ICBM" content="24.4539, 54.3773" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <FormModalProvider>
          {children}
        </FormModalProvider>
      </body>
    </html>
  );
}
