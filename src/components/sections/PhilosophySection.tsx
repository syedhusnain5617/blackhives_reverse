import { PILLARS } from '@/lib/data';

export function PhilosophySection() {
  return (
    <section
      id="about"
      className="py-space-xxl bg-surface-base border-t border-b border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
          {/* Left Column: Conviction & Mandate */}
          <div className="lg:col-span-5 space-y-space-md">
            <span className="font-mono text-xs uppercase tracking-[0.28em] text-text-muted block">
              05 // ARCHITECTURAL CODE
            </span>
            <h2 className="text-headline-lg-mobile md:text-headline-lg text-white">
              Rigorous Conviction. Zero Compromise.
            </h2>
            <p className="text-body-md text-text-secondary leading-relaxed">
              We replace standard vendor complacency with surgical engineering accountability. Every
              codebase is structured to outlast executive churn and technology fashion cycles.
            </p>
            <div className="p-space-md bg-surface-elevated border border-white/20">
              <div className="flex items-center gap-2 mb-2 font-mono text-xs text-white">
                <span className="w-2 h-2 bg-white" />
                <span>THE ZERO-DEBT MANDATE</span>
              </div>
              <p className="text-body-sm text-text-secondary">
                No monkey-patched dependencies. No undocumented internal APIs. Complete type-safety,
                test suites baked into every commit, and sovereign ownership of intellectual
                property handed to your team.
              </p>
            </div>
          </div>

          {/* Right Column: 6 Philosophy Pillars Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-gutter">
            {PILLARS.map((pillar) => (
              <div
                key={pillar.number}
                className="obsidian-slate-card p-space-md reveal-on-scroll"
              >
                <span className="font-mono text-[10px] text-text-muted block mb-1">
                  {pillar.number}
                </span>
                <h3 className="text-title-sm text-white mb-1">{pillar.title}</h3>
                <p className="text-body-sm text-text-secondary leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
