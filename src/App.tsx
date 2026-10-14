import { useState, useEffect, useCallback } from 'react';
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
import { ProjectDetailView } from '@/components/ProjectDetailView';
import { PROJECT_DETAILS } from '@/lib/projectDetails';

export function App() {
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);

  // Sync state with URL hash (e.g. #work/ai-recruitment-platform)
  useEffect(() => {
    const handleHashSync = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#work/')) {
        const id = hash.replace('#work/', '');
        if (PROJECT_DETAILS[id]) {
          setActiveProjectId(id);
          return;
        }
      } else if (hash.startsWith('#project/')) {
        const id = hash.replace('#project/', '');
        if (PROJECT_DETAILS[id]) {
          setActiveProjectId(id);
          return;
        }
      }
      setActiveProjectId(null);
    };

    handleHashSync();
    window.addEventListener('hashchange', handleHashSync);
    window.addEventListener('popstate', handleHashSync);

    return () => {
      window.removeEventListener('hashchange', handleHashSync);
      window.removeEventListener('popstate', handleHashSync);
    };
  }, []);

  // Intersection Observer for scroll-reveal animations on the main page
  useEffect(() => {
    if (activeProjectId) return;

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
  }, [activeProjectId]);

  const handleSelectProject = useCallback((projectId: string) => {
    setActiveProjectId(projectId);
    window.location.hash = `#work/${projectId}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleBackToAllWork = useCallback(() => {
    setActiveProjectId(null);
    window.location.hash = '#work';
    setTimeout(() => {
      const workEl = document.getElementById('work');
      if (workEl) {
        workEl.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 50);
  }, []);

  const handleNavigateHome = useCallback((targetHash = '#hero') => {
    setActiveProjectId(null);
    window.location.hash = targetHash;
    setTimeout(() => {
      const targetId = targetHash.replace('#', '');
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 50);
  }, []);

  const handleContactClick = useCallback(() => {
    setActiveProjectId(null);
    window.location.hash = '#contact';
    setTimeout(() => {
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  }, []);

  const currentProject = activeProjectId ? PROJECT_DETAILS[activeProjectId] : null;

  return (
    <div className="min-h-screen bg-surface-canvas text-white selection:bg-white selection:text-black">
      <Header
        isProjectDetail={Boolean(currentProject)}
        onNavigateHome={handleNavigateHome}
      />
      <main id="main-content">
        {currentProject ? (
          <ProjectDetailView
            project={currentProject}
            onBack={handleBackToAllWork}
            onSelectProject={handleSelectProject}
            onContactClick={handleContactClick}
          />
        ) : (
          <>
            <HeroSection />
            <TickerStrip />
            <GaaSSection />
            <ServicesSection />
            <CaseStudiesSection onSelectProject={handleSelectProject} />
            <IndustriesSection />
            <PhilosophySection />
            <ContactSection />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
