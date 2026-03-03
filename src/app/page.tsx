import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import HeroSection from '@/components/Hero/HeroSection';
import ResultsSection from '@/components/Results/ResultsSection';
import ServicesSection from '@/components/Services/ServicesSection';
import TestimonialsSection from '@/components/Testmonial/TestimonialsSection';


export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <ServicesSection />
      <ResultsSection />
      <TestimonialsSection />
      <Footer />
    </>
  );
}
