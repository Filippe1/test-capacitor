import Header from '@/components/Header';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/Howitworks';
import Pricing from '@/components/Pricing';
import FinalCta from '@/components/Finalcta';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <HowItWorks />
      <Pricing />
      <FinalCta />
      <Footer />
    </main>
  );
}