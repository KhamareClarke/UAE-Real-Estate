import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SchemaMarkup from "@/components/SchemaMarkup";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: "Invest in Golden Visa UAE Property | City Plaza Real Estate",
  description: "Explore premium off-plan and ready properties in Abu Dhabi & Dubai. Secure your UAE Golden Visa with trusted experts. Tax-free income, 100% ownership, expert guidance.",
  keywords: "UAE property investment, Dubai real estate, Abu Dhabi property, Golden Visa UAE, UAE residency property, off-plan Dubai, property investment UAE, real estate Abu Dhabi, Dubai Golden Visa, UAE property for sale",
  authors: [{ name: "City Plaza Real Estate" }],
  openGraph: {
    title: "Invest in Golden Visa UAE Property | City Plaza Real Estate",
    description: "Explore premium off-plan and ready properties in Abu Dhabi & Dubai. Secure your UAE Golden Visa with trusted experts. Tax-free income, 100% ownership, expert guidance.",
    type: "website",
    locale: "en_AE",
    siteName: "City Plaza Real Estate",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
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
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
