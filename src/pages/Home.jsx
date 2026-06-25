import Navigation from '@/components/site/Navigation';
import Hero from '@/components/site/Hero';
import Benefits from '@/components/site/Benefits';
import Awards from '@/components/site/Awards';
import Services from '@/components/site/Services';
import WhyUs from '@/components/site/WhyUs';
import Gallery from '@/components/site/Gallery';
import Reviews from '@/components/site/Reviews';
import FAQ from '@/components/site/FAQ';
import CTA from '@/components/site/CTA';
import EmergencyTab from '@/components/site/EmergencyTab';
import Footer from '@/components/site/Footer';

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#060C12] text-white">
      <Navigation />
      <Hero />
      <Benefits />
      <Awards />
      <Services />
      <WhyUs />
      <Gallery />
      <Reviews />
      <FAQ />
      <CTA />
      <Footer />
      <EmergencyTab />
    </main>
  );
}