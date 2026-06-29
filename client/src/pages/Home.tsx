import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import CitiesSection from '@/components/CitiesSection';
import MethodologySection from '@/components/MethodologySection';
import ProgramationSection from '@/components/ProgramationSection';
import InvestmentSection from '@/components/InvestmentSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1A1A] via-[#2A2E3E] to-[#1A1A1A]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CitiesSection />
      <MethodologySection />
      <ProgramationSection />
      <InvestmentSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
