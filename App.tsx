import { useEffect } from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { TickerStrip } from '@/components/sections/TickerStrip';
import { GaaSSection } from '@/components/sections/GaaSSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { CaseStudiesSection } from '@/components/sections/CaseStudiesSection';
import { IndustriesSection } from '@/components/sections/IndustriesSection';
import { PhilosophySection } from '@/components/sections/PhilosophySection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/Footer';

export function App() {
  // Intersection Observer for scroll-reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-surface-canvas text-white selection:bg-white selection:text-black">
      <Header />
      <main id="main-content">
        <HeroSection />
        <TickerStrip />
        <GaaSSection />
        <ServicesSection />
        <CaseStudiesSection />
        <IndustriesSection />
        <PhilosophySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
