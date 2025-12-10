import ProfessionalHero from '@/components/ProfessionalHero';
import TrustedDevelopers from '@/components/TrustedDevelopers';
import WhyCityPlaza from '@/components/WhyCityPlaza';
import Process from '@/components/Process';
import Reviews from '@/components/Reviews';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import LiveChatWidget from '@/components/LiveChatWidget';
import MobileStickyCTA from '@/components/MobileStickyCTA';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <ProfessionalHero />
      <TrustedDevelopers />
      <WhyCityPlaza />
      <Process />
      <Reviews />
      <FAQ />
      <Footer />
      <FloatingWhatsApp />
      <LiveChatWidget />
      <MobileStickyCTA />
    </main>
  );
}
