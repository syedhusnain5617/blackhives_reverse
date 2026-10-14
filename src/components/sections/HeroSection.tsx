import { HiveEmblem } from '@/components/ui/HiveEmblem';
import { HERO_METRICS } from '@/lib/data';

function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {/* Grid Pattern */}
      <svg
        className="absolute inset-0 w-full h-full stroke-white/[0.04] fill-none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="matrixGrid"
            patternUnits="userSpaceOnUse"
            width="80"
            height="80"
          >
            <path
              d="M 80 0 L 0 0 0 80"
              stroke="rgba(255,255,255,0.035)"
              strokeWidth="1"
            />
            <circle cx="80" cy="80" r="1" fill="rgba(255,255,255,0.15)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#matrixGrid)" />
      </svg>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent,rgba(10,10,12,0.7),#0A0A0C)]" />

      {/* Structural cut lines */}
      <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-white/[0.07] to-transparent" />
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/[0.05] to-transparent" />
    </div>
  );
}

function HeroRadar() {
  return (
    <div className="lg:col-span-5 relative flex justify-center items-center">
      <div className="relative w-full max-w-[440px] aspect-square flex items-center justify-center p-4">
        {/* Outer Hexagon Radar */}
        <svg
          className="absolute inset-0 w-full h-full text-white/10 pointer-events-none animate-rotate-cw"
          viewBox="0 0 440 440"
          aria-hidden="true"
        >
          <polygon
            fill="none"
            points="220,15 395,115 395,325 220,425 45,325 45,115"
            stroke="rgba(255,255,255,0.22)"
            strokeDasharray="6 8"
            strokeWidth="1.2"
          />
          {[
            [220, 15],
            [395, 115],
            [395, 325],
            [220, 425],
            [45, 325],
            [45, 115],
          ].map(([cx, cy]) => (
            <circle
              key={`${cx}-${cy}`}
              cx={cx}
              cy={cy}
              r="3"
              fill="#FFFFFF"
            />
          ))}
        </svg>

        {/* Mid Hexagon Counter Ring */}
        <svg
          className="absolute inset-6 w-[calc(100%-3rem)] h-[calc(100%-3rem)] text-white/20 pointer-events-none animate-rotate-ccw"
          viewBox="0 0 380 380"
          aria-hidden="true"
        >
          <polygon
            fill="none"
            points="190,20 335,105 335,275 190,360 45,275 45,105"
            stroke="rgba(255,255,255,0.3)"
            strokeDasharray="4 4"
            strokeWidth="1.5"
          />
          <circle
            cx="190"
            cy="190"
            r="140"
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="1"
          />
          <line
            stroke="rgba(255,255,255,0.12)"
            strokeDasharray="2 3"
            x1="190"
            x2="190"
            y1="20"
            y2="360"
          />
          <line
            stroke="rgba(255,255,255,0.12)"
            strokeDasharray="2 3"
            x1="45"
            x2="335"
            y1="190"
            y2="190"
          />
        </svg>

        {/* Concentric Reticle Circles */}
        <div className="absolute inset-16 rounded-full border border-white/[0.12] pointer-events-none animate-stark-pulse" />
        <div className="absolute inset-28 rounded-full border border-white/[0.18] pointer-events-none" />

        {/* Central Emblem */}
        <div
          className="relative z-20 flex items-center justify-center animate-subtle-float"
          style={{ width: 170, height: 170 }}
        >
          <div className="relative w-full h-full flex items-center justify-center filter drop-shadow-[0_0_24px_rgba(255,255,255,0.45)]">
            <HiveEmblem />
          </div>
        </div>

        {/* Telemetry Floating Nodes */}
        <div className="absolute top-4 right-6 bg-surface-base/90 border border-white/20 px-2.5 py-1 font-mono text-[9px] tracking-widest text-white backdrop-blur-md">
          NODE_ALPHA // ACTIVE
        </div>
        <div className="absolute bottom-6 left-4 bg-surface-base/90 border border-white/20 px-2.5 py-1 font-mono text-[9px] tracking-widest text-text-secondary backdrop-blur-md">
          ISOLATION: STRICT
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-space-xl pb-space-xxl min-h-[94vh] flex items-center border-b border-white/[0.08]"
    >
      <HeroBackground />

      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin w-full relative z-10">
        {/* Telemetry Header Banner */}
        <div className="flex flex-wrap items-center justify-between gap-space-sm mb-space-lg pb-space-xs border-b border-white/[0.08]">
          <div className="inline-flex items-center gap-space-xs px-3 py-1 bg-surface-elevated border border-white/20">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-white">
              MATRIX CORE: SYNCHRONIZED · LATENCY 2.4MS
            </span>
          </div>
          <div className="flex items-center gap-space-md font-mono text-[11px] uppercase tracking-[0.2em] text-text-muted">
            <span className="text-white flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-white inline-block" />
              GaaS AUTONOMOUS RUNTIME
            </span>
            <span className="hidden sm:inline text-white/30">|</span>
            <span className="hidden sm:inline">TIER-4 ZERO TECH DEBT</span>
          </div>
        </div>

        {/* Hero Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          {/* Left: Editorial Copy */}
          <div className="lg:col-span-7 space-y-space-md">
            <div className="inline-flex items-center gap-space-xs font-mono text-xs uppercase tracking-[0.24em] text-text-muted">
              <span className="w-6 h-px bg-white" />
              <span className="text-white">
                OBSIDIAN ARCHITECTURE // MATRIX PROTOCOL
              </span>
            </div>

            <h1 className="text-display-xl-mobile md:text-display-xl text-chalk-white tracking-tight leading-[1.04]">
              Architecting what{' '}
              <span className="font-normal text-white border-b border-white/40 pb-0.5">
                sovereign scale
              </span>{' '}
              executes on.
            </h1>

            <p className="text-body-lg text-text-secondary max-w-2xl leading-relaxed">
              High-conviction digital engineering, discrete autonomous GaaS
              infrastructure, and mathematical UI precision. Built without
              superficial veneers for global enterprises that require
              deterministic performance.
            </p>

            {/* CTA Buttons */}
            <div className="pt-space-xs flex flex-wrap items-center gap-space-sm">
              <a
                href="#contact"
                className="pill-action-btn inline-flex items-center gap-2 bg-white text-black px-8 py-3.5 text-label-md uppercase tracking-[0.18em] font-semibold transition-all hover:bg-black hover:text-white hover:border hover:border-white shadow-[0_0_20px_rgba(255,255,255,0.18)]"
              >
                <span>Initiate Engagement</span>
                <span className="text-xs">→</span>
              </a>
              <a
                href="#work"
                className="pill-action-btn inline-flex items-center gap-2.5 bg-transparent border border-white/30 text-white px-7 py-3.5 text-label-md uppercase tracking-[0.18em] font-semibold transition-all hover:bg-white hover:text-black hover:border-white"
              >
                <span className="material-symbols-outlined text-[16px]">
                  visibility
                </span>
                <span>Case Dossiers</span>
              </a>
            </div>

            {/* Micro Metrics */}
            <div className="pt-space-sm grid grid-cols-3 gap-4 border-t border-white/[0.08] max-w-lg">
              <div>
                <span className="block font-mono text-[10px] uppercase text-text-muted">
                  UPTIME SLA
                </span>
                <span className="font-mono text-[15px] font-semibold text-white tracking-wider">
                  99.998%
                </span>
              </div>
              <div>
                <span className="block font-mono text-[10px] uppercase text-text-muted">
                  SYSTEM AUDIT
                </span>
                <span className="font-mono text-[15px] font-semibold text-white tracking-wider">
                  SOC2 / ISO
                </span>
              </div>
              <div>
                <span className="block font-mono text-[10px] uppercase text-text-muted">
                  STACK TYPE
                </span>
                <span className="font-mono text-[15px] font-semibold text-white tracking-wider">
                  PURE RUST/K8S
                </span>
              </div>
            </div>
          </div>

          {/* Right: Radar Graphic */}
          <HeroRadar />
        </div>

        {/* Stats Bar */}
        <div className="mt-space-xl grid grid-cols-2 lg:grid-cols-4 gap-gutter pt-space-md border-t border-white/[0.1]">
          {HERO_METRICS.map((metric) => (
            <div key={metric.label} className="p-space-md obsidian-slate-card">
              <span className="block font-mono text-[10px] uppercase text-text-muted mb-1">
                {metric.label}
              </span>
              <div className="text-headline-lg-mobile md:text-display-xl text-white tracking-tight">
                {metric.value}
                {metric.suffix && (
                  <span className="text-white/40 font-normal">
                    {metric.suffix}
                  </span>
                )}
              </div>
              <p className="text-label-md uppercase tracking-[0.14em] text-text-secondary mt-1">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
