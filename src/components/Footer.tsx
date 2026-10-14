import { ASSETS } from '@/lib/assets';
import { FOOTER_NAV, FOOTER_CAPABILITIES, FOOTER_GOVERNANCE } from '@/lib/data';

export function Footer() {
  return (
    <footer className="w-full bg-footer-bg border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin pt-space-xxl pb-space-xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter lg:gap-space-lg mb-space-xxl">
          {/* Brand & Direct Comm Column */}
          <div className="md:col-span-6 lg:col-span-5 flex flex-col justify-between pr-0 md:pr-space-lg">
            <div className="space-y-space-md">
              <div className="flex items-center gap-space-sm">
                <div className="w-8 h-8 p-1 bg-surface-elevated border border-white/20 flex items-center justify-center">
                  <img
                    src={ASSETS.logo}
                    alt="Black Hives emblem"
                    className="w-full h-full object-contain filter invert"
                  />
                </div>
                <span className="text-headline-sm tracking-tight text-white">Black Hives</span>
              </div>
              <p className="text-body-md text-text-secondary max-w-md">
                Architectural Obsidian &amp; Stark White Matrix edition. Sovereign software engineering,
                GaaS autonomy, and digital precision for enterprise scale.
              </p>
            </div>
            <div className="pt-space-lg font-mono text-xs">
              <span className="block text-text-muted uppercase tracking-widest text-[10px] mb-1">
                DIRECT COMM
              </span>
              <a
                href="mailto:hello@blackhives.com"
                className="text-white hover:underline text-sm font-semibold tracking-wider"
              >
                hello@blackhives.com
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-6 lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-gutter pt-space-lg md:pt-0 font-mono text-xs">
            {/* Navigation */}
            <div className="flex flex-col space-y-space-sm">
              <span className="uppercase tracking-widest text-text-muted text-[10px]">
                Navigation
              </span>
              <ul className="space-y-space-xs">
                {FOOTER_NAV.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-text-secondary hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Capabilities */}
            <div className="flex flex-col space-y-space-sm">
              <span className="uppercase tracking-widest text-text-muted text-[10px]">
                Capabilities
              </span>
              <ul className="space-y-space-xs text-text-secondary">
                {FOOTER_CAPABILITIES.map((cap) => (
                  <li key={cap}>{cap}</li>
                ))}
              </ul>
            </div>

            {/* Governance */}
            <div className="flex flex-col space-y-space-sm col-span-2 sm:col-span-1">
              <span className="uppercase tracking-widest text-text-muted text-[10px]">
                Governance
              </span>
              <ul className="space-y-space-xs text-text-secondary">
                {FOOTER_GOVERNANCE.map((gov) => (
                  <li key={gov}>{gov}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Utility Row */}
        <div className="pt-space-md border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-space-sm font-mono text-[11px] text-text-muted">
          <p>© 2026 Black Hives. All rights reserved. Sovereign Edition B.</p>
          <div className="flex items-center gap-space-lg">
            <span className="text-white flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-white inline-block" /> MONOCHROME SYSTEM ACTIVE
            </span>
            <a href="#privacy" className="hover:text-white transition-colors">
              Privacy Framework
            </a>
            <a href="#terms" className="hover:text-white transition-colors">
              Terms of Engagement
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
