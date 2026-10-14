import { useState, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '@/lib/data';
import { ASSETS } from '@/lib/assets';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  return (
    <header
      id="main-nav"
      className="fixed top-0 inset-x-0 z-50 bg-surface-canvas/90 backdrop-blur-2xl border-b border-white/[0.08] transition-all duration-300"
    >
      <div className="h-20 max-w-7xl mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-space-sm group focus:outline-none"
          aria-label="Black Hives home"
        >
          <div className="w-9 h-9 p-1 bg-surface-elevated border border-white/20 group-hover:border-white transition-all duration-300 flex items-center justify-center">
            <img
              alt="Black Hives Emblem"
              className="w-full h-full object-contain filter invert opacity-90 group-hover:opacity-100"
              src={ASSETS.logo}
              loading="eager"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-label-md uppercase tracking-[0.24em] text-white font-semibold group-hover:text-white transition-colors">
              Black Hives
            </span>
            <span className="text-[9px] uppercase tracking-[0.28em] text-text-muted font-mono -mt-0.5">
              Architecture · GaaS · AI
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-space-lg" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-label-md uppercase tracking-[0.16em] text-text-secondary hover:text-white transition-colors duration-150 py-space-xxs relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center gap-space-sm">
          <a
            href="#contact"
            className="pill-action-btn hidden sm:inline-flex items-center justify-center bg-white text-black hover:bg-black hover:text-white border border-white hover:border-white/50 px-5 py-2 text-label-md uppercase tracking-[0.16em] font-semibold transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)]"
          >
            <span>Initiate Protocol</span>
            <span className="ml-1.5 text-xs">→</span>
          </a>
          <div
            className="hidden sm:flex w-8 h-8 rounded-full border border-white/20 bg-surface-elevated items-center justify-center"
            title="Monochrome Node Live"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center text-white border border-white/20 bg-surface-elevated"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav
          className="md:hidden bg-surface-canvas/98 backdrop-blur-2xl border-t border-white/[0.08] px-margin-mobile py-space-lg"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-space-sm">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-label-md uppercase tracking-[0.16em] text-text-secondary hover:text-white transition-colors py-space-xs border-b border-white/[0.06]"
                onClick={closeMobileMenu}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="pill-action-btn mt-space-sm inline-flex items-center justify-center bg-white text-black px-5 py-3 text-label-md uppercase tracking-[0.16em] font-semibold"
              onClick={closeMobileMenu}
            >
              Initiate Protocol →
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
