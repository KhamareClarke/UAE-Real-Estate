import ConversionOptimizedHero from '@/components/ConversionOptimizedHero';
import TrustLegitimacy from '@/components/TrustLegitimacy';
import PropertyGallery from '@/components/PropertyGallery';
import WhyInvestUAE from '@/components/WhyInvestUAE';
import GoldenVisaJourney from '@/components/GoldenVisaJourney';
import ModernTestimonials from '@/components/ModernTestimonials';
import ModernFAQ from '@/components/ModernFAQ';
import EnhancedFooter from '@/components/EnhancedFooter';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import ComplianceDisclaimer from '@/components/ComplianceDisclaimer';
import SEOSchema from '@/components/SEOSchema';
import StickyCTA from '@/components/StickyCTA';

export const metadata = {
  title: 'UAE Real Estate Investment | Golden Visa Property Dubai & Abu Dhabi | City Plaza',
  description: 'Invest in UAE real estate with confidence. RERA-licensed brokerage with 15+ years experience. Expert guidance for Golden Visa pathways and premium Dubai & Abu Dhabi property investments.',
  keywords: 'UAE real estate investment, Dubai property investment, Abu Dhabi real estate, Golden Visa UAE, property investment Dubai, off-plan properties Dubai, RERA licensed broker, UAE property ROI, Dubai Marina properties, Palm Jumeirah investment, Downtown Dubai real estate, Business Bay properties, Dubai Hills Estate, Abu Dhabi Corniche, Yas Island properties, Saadiyat Island real estate, freehold properties UAE, UAE property for foreigners, Dubai real estate market, Abu Dhabi property market, UAE Golden Visa requirements, Golden Visa through property, UAE residency visa, Dubai investor visa, property management Dubai, rental income Dubai, Dubai ROI, Abu Dhabi ROI, off-plan Dubai, ready properties Dubai, UAE property developers, Emaar properties, Aldar properties, Dubai property prices, Abu Dhabi property prices, UAE real estate trends, Dubai property investment guide, UAE property laws, freehold areas Dubai, leasehold vs freehold UAE, Dubai property taxes, UAE capital gains tax, property transfer fees Dubai, DLD fees, mortgage Dubai, UAE property financing, international investors UAE, expat property Dubai, retirement in UAE, UAE property ownership, Dubai property market 2024, Abu Dhabi property market 2024, best areas invest Dubai, best areas invest Abu Dhabi, luxury properties Dubai, affordable properties Dubai, studio apartments Dubai, villas Dubai, penthouses Dubai, waterfront properties Dubai, beachfront properties Dubai, golf course properties Dubai, Dubai property consultants, Abu Dhabi property consultants, RERA registered agents, Dubai real estate agents, Abu Dhabi real estate agents',
  authors: [{ name: 'City Plaza Real Estate' }],
  creator: 'City Plaza Real Estate',
  publisher: 'City Plaza Real Estate',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://cityplazare.com'),
  alternates: {
    canonical: 'https://cityplazare.com',
    languages: {
      'en-AE': 'https://cityplazare.com',
      'ar-AE': 'https://cityplazare.com/ar',
    },
  },
  openGraph: {
    title: 'UAE Real Estate Investment | Golden Visa in 30 Days | City Plaza',
    description: 'Secure your UAE Golden Visa with premium Dubai & Abu Dhabi properties. RERA-licensed. 15+ years experience. Trusted expertise for discerning international investors.',
    url: 'https://cityplazare.com',
    siteName: 'City Plaza Real Estate',
    images: [
      {
        url: 'https://cityplazare.com/images/dubai-skyline.jpg',
        width: 1200,
        height: 630,
        alt: 'Dubai Skyline - UAE Real Estate Investment',
      },
    ],
    locale: 'en_AE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UAE Real Estate Investment | Golden Visa Property | City Plaza',
    description: 'Secure your Golden Visa with premium Dubai & Abu Dhabi properties. RERA-licensed. Trusted expertise for international investors.',
    images: ['https://cityplazare.com/images/dubai-skyline.jpg'],
    creator: '@cityplazare',
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
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    bing: 'your-bing-verification-code',
  },
  category: 'Real Estate',
};

// Brand Orange CTAs - Force rebuild
export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <SEOSchema />
      <StickyCTA />
      <ConversionOptimizedHero />
      <TrustLegitimacy />
      <PropertyGallery />
      <WhyInvestUAE />
      <GoldenVisaJourney />
      <ModernTestimonials />
      <ModernFAQ />
      <ComplianceDisclaimer />
      <EnhancedFooter />
      <FloatingWhatsApp />
    </main>
  );
}
