import { SERVICES } from '@/lib/data';

export function ServicesSection() {
  return (
    <section id="services" className="py-space-xxl relative bg-surface-canvas">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-xl">
          <div className="space-y-space-xxs max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.28em] text-text-muted block">
              02 // CAPABILITIES
            </span>
            <h2 className="text-headline-lg-mobile md:text-headline-lg text-white">
              Architectural Services &amp; Execution
            </h2>
            <p className="text-body-md text-text-secondary pt-space-xs">
              From sovereign platforms to augmented engineering corps.
              Systematic precision applied across every phase.
            </p>
          </div>
          <a
            href="#contact"
            className="pill-action-btn inline-flex items-center gap-2 border border-white/30 text-white hover:bg-white hover:text-black px-6 py-2.5 text-label-md uppercase tracking-[0.16em] font-semibold transition-all"
          >
            <span>Engage Practice</span>
            <span>→</span>
          </a>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {SERVICES.map((service) => (
            <div
              key={service.index}
              className="obsidian-slate-card p-space-lg flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-space-md">
                  {service.badge ? (
                    <span className="font-mono text-[10px] uppercase tracking-widest bg-white text-black px-2 py-0.5 font-bold">
                      {service.badge}
                    </span>
                  ) : (
                    <span className="font-mono text-xs uppercase tracking-widest text-text-muted">
                      {service.label}
                    </span>
                  )}
                  <div className="w-9 h-9 border border-white/20 bg-surface-base flex items-center justify-center group-hover:border-white transition-all">
                    <span className="material-symbols-outlined text-white text-[20px]">
                      {service.icon}
                    </span>
                  </div>
                </div>
                <h3 className="text-headline-sm text-white mb-space-xs">
                  {service.title}
                </h3>
                <p className="text-body-sm text-text-secondary leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="pt-space-md flex items-center justify-between border-t border-white/[0.08] mt-4 font-mono text-xs text-text-muted">
                <span>{service.footer}</span>
                <span className="text-white group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
