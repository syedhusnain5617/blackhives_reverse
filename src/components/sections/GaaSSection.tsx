import { GAAS_MODULES } from '@/lib/data';

function TopologyDiagram() {
  return (
    <div className="w-full h-56 bg-surface-base border border-white/[0.08] p-4 relative flex items-center justify-center overflow-hidden">
      <svg
        className="w-full h-full text-white"
        fill="none"
        viewBox="0 0 600 200"
        aria-label="GaaS pipeline topology diagram"
        role="img"
      >
        {/* Grid Lines */}
        {[50, 100, 150].map((y) => (
          <line
            key={`h-${y}`}
            stroke="rgba(255,255,255,0.06)"
            x1="0"
            x2="600"
            y1={y}
            y2={y}
          />
        ))}
        {[150, 300, 450].map((x) => (
          <line
            key={`v-${x}`}
            stroke="rgba(255,255,255,0.06)"
            x1={x}
            x2={x}
            y1="0"
            y2="200"
          />
        ))}

        {/* Pipeline Path */}
        <path
          d="M 80 100 L 200 60 L 320 140 L 440 80 L 540 100"
          stroke="#FFFFFF"
          strokeDasharray="3 3"
          strokeWidth="1.5"
        />

        {/* Nodes */}
        {[
          { cx: 80, cy: 100, label: 'INGEST', filled: false },
          { cx: 200, cy: 60, label: 'GaaS VERIFY', filled: false },
          { cx: 320, cy: 140, label: 'ROUTING', filled: false },
          { cx: 440, cy: 80, label: 'LEDGER', filled: false },
          { cx: 540, cy: 100, label: 'SETTLEMENT', filled: true },
        ].map((node) => (
          <g key={node.label}>
            <circle
              cx={node.cx}
              cy={node.cy}
              r="9"
              fill={node.filled ? '#FFFFFF' : '#0A0A0C'}
              stroke={node.filled ? undefined : '#FFFFFF'}
              strokeWidth={node.filled ? undefined : 2}
            />
            {node.filled && (
              <circle
                className="animate-ping"
                cx={node.cx}
                cy={node.cy}
                r="16"
                fill="#FFFFFF"
                opacity="0.3"
              />
            )}
            <text
              fill="#A3A3A8"
              fontFamily="Hanken Grotesk"
              fontSize="9"
              textAnchor="middle"
              x={node.cx}
              y={node.cy + 25}
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

export function GaaSSection() {
  return (
    <section
      id="gaas-infra"
      className="py-space-xl bg-surface-canvas border-b border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-lg">
          <div className="space-y-space-xxs max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.28em] text-text-muted block">
              01 // AUTONOMOUS RUNTIME
            </span>
            <h2 className="text-headline-lg-mobile md:text-headline-lg text-white">
              Governance &amp; Autonomy as a Service (GaaS)
            </h2>
            <p className="text-body-md text-text-secondary pt-space-xs">
              Modular, self-healing substrate for enterprise micro-fleets,
              statutory governance checks, and zero-trust orchestration in
              strict black and white precision.
            </p>
          </div>
          <div className="flex items-center gap-space-xs font-mono text-xs text-text-muted">
            <span className="w-2 h-2 rounded-full bg-white inline-block" />
            <span>STREAM TICK: 1,420 TPS</span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-stretch">
          {/* Left: Topology */}
          <div className="lg:col-span-7 obsidian-slate-card p-space-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-space-sm border-b border-white/[0.08] mb-space-md">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs uppercase tracking-widest text-white">
                    TOPOLOGY: SOVEREIGN CELL 01
                  </span>
                  <span className="px-2 py-0.5 font-mono text-[9px] bg-white text-black font-bold">
                    LIVE
                  </span>
                </div>
                <span className="font-mono text-[11px] text-text-muted">
                  FAILOVER: ZERO-LATENCY
                </span>
              </div>
              <TopologyDiagram />
            </div>
            <div className="grid grid-cols-3 gap-3 pt-space-md border-t border-white/[0.08] mt-4 font-mono">
              {[
                { label: 'STATUTORY CHECK', value: '100% DETERMINISTIC' },
                { label: 'THROUGHPUT', value: '4.8 GB/SEC' },
                { label: 'MEMORY QUOTA', value: 'ZERO RESIDUAL' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-2 bg-surface-base border border-white/[0.06]"
                >
                  <span className="block text-[9px] text-text-muted">
                    {stat.label}
                  </span>
                  <span className="text-xs text-white font-semibold">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: GaaS Modules */}
          <div className="lg:col-span-5 space-y-gutter">
            {GAAS_MODULES.map((module) => (
              <div key={module.id} className="obsidian-slate-card p-space-md">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] text-text-muted tracking-widest">
                    {module.id}
                  </span>
                  <span className="w-2 h-2 bg-white" />
                </div>
                <h3 className="text-headline-sm text-white mb-1">
                  {module.title}
                </h3>
                <p className="text-body-sm text-text-secondary">
                  {module.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
