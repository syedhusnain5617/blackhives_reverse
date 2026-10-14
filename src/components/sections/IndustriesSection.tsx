import { INDUSTRIES } from '@/lib/data';

export function IndustriesSection() {
  return (
    <section id="industries" className="py-space-xxl relative bg-surface-canvas">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
        {/* Section Header */}
        <div className="max-w-3xl mb-space-xl space-y-space-xxs">
          <span className="font-mono text-xs uppercase tracking-[0.28em] text-text-muted block">
            04 // DOMAIN REPERTOIRE
          </span>
          <h2 className="text-headline-lg-mobile md:text-headline-lg text-white">
            Engineered for High-Stakes Complexity
          </h2>
          <p className="text-body-md text-text-secondary pt-space-xs">
            We specialize in regulated jurisdictions and unforgiving corporate environments where
            precision is non-negotiable.
          </p>
        </div>

        {/* Industry Rows */}
        <div className="space-y-gutter">
          {INDUSTRIES.map((industry) => (
            <div
              key={industry.number}
              className="obsidian-slate-card p-space-lg flex flex-col lg:flex-row lg:items-center justify-between gap-space-md reveal-on-scroll group"
            >
              <div className="flex items-start gap-space-md max-w-xl">
                <span className="font-mono text-headline-sm text-white/50">
                  {industry.number}
                </span>
                <div>
                  <h3 className="text-headline-sm text-white mb-1">
                    {industry.title}
                  </h3>
                  <p className="text-body-sm text-text-secondary leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              </div>

              {/* Live Substrate Preview Thumbnail */}
              {industry.previewImage && (
                <div className="hidden xl:block w-44 h-24 shrink-0 overflow-hidden border border-white/20 bg-black relative shadow-lg group-hover:border-white/40 transition-colors">
                  <img
                    src={industry.previewImage}
                    alt={industry.previewAlt || industry.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-1 right-1 font-mono text-[9px] bg-black/90 px-1.5 py-0.5 text-white/90 border border-white/20">
                    LIVE SYSTEM
                  </span>
                </div>
              )}

              {/* Delivery Pattern & Badge */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-space-md lg:text-right font-mono text-xs">
                <div>
                  <span className="block text-text-muted">DELIVERY PATTERN</span>
                  <span className="text-white font-semibold">{industry.deliveryPattern}</span>
                </div>
                <span className="px-3 py-1 border border-white/30 text-white uppercase tracking-widest text-[10px] self-start sm:self-auto">
                  {industry.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
