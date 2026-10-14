import { TICKER_ITEMS } from '@/lib/data';

export function TickerStrip() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS]; // Duplicate for seamless loop

  return (
    <section className="bg-surface-base py-space-sm border-b border-white/[0.08] overflow-hidden select-none">
      <div className="flex whitespace-nowrap overflow-hidden py-1 font-mono text-xs uppercase tracking-[0.24em] text-text-secondary">
        <div className="inline-flex items-center gap-space-lg animate-marquee">
          {items.map((item, i) => (
            <span key={`${item}-${i}`} className="inline-flex items-center gap-space-lg">
              <span className="hover:text-white transition-colors cursor-default">
                {item}
              </span>
              <span className="text-white/40">■</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
