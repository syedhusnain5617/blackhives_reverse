import { useState } from 'react';
import { Maximize2, X } from 'lucide-react';
import { CASE_STUDIES, PIPELINE_PROJECTS } from '@/lib/data';

interface LightboxState {
  isOpen: boolean;
  imageSrc: string;
  imageAlt: string;
  title: string;
  client: string;
}

export function CaseStudiesSection() {
  const [cs1, cs2, cs3, cs4] = CASE_STUDIES;
  const [lightbox, setLightbox] = useState<LightboxState>({
    isOpen: false,
    imageSrc: '',
    imageAlt: '',
    title: '',
    client: '',
  });

  const openLightbox = (
    imageSrc: string,
    imageAlt: string,
    title: string,
    client: string
  ) => {
    setLightbox({
      isOpen: true,
      imageSrc,
      imageAlt,
      title,
      client,
    });
  };

  const closeLightbox = () => {
    setLightbox((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <section
      id="work"
      className="py-space-xxl bg-surface-base border-t border-b border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-xl">
          <div className="space-y-space-xxs max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.28em] text-text-muted block">
              03 // PROVEN PRODUCTION
            </span>
            <h2 className="text-headline-lg-mobile md:text-headline-lg text-white">
              Authentic Projects
            </h2>
            <p className="text-body-md text-text-secondary pt-space-xs">
              Production software engineered to sovereign compliance standards, driving operational
              volume across APAC and EMEA.
            </p>
          </div>
          <div className="font-mono text-xs text-text-muted">
            VERIFIED SYSTEM METRICS // 100% RETENTION
          </div>
        </div>

        {/* Case Study 1: Steel Horizons Solution (Image Right) */}
        {cs1 && (
          <article className="obsidian-slate-card p-space-md md:p-space-lg lg:p-space-xl mb-space-xl reveal-on-scroll">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter lg:gap-space-lg items-center">
              <div className="lg:col-span-5 space-y-space-md">
                <div>
                  <div className="flex items-center gap-2 mb-space-xxs">
                    <span className="w-2 h-2 bg-white" />
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-text-secondary">
                      {cs1.client}
                    </span>
                  </div>
                  <h3 className="text-headline-md text-white">{cs1.title}</h3>
                </div>
                <p className="text-body-md text-text-secondary leading-relaxed">
                  {cs1.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {cs1.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[11px] uppercase px-3 py-1 bg-surface-elevated border border-white/20 text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="pt-space-xs flex items-center gap-space-md">
                  <a
                    href="#contact"
                    className="pill-action-btn inline-flex items-center gap-2 bg-white text-black hover:bg-black hover:text-white border border-white px-5 py-2 text-label-md uppercase tracking-[0.14em] font-semibold transition-all"
                  >
                    <span>Dossier Detail</span>
                    <span>→</span>
                  </a>
                  <span className="font-mono text-xs text-text-muted">{cs1.metric}</span>
                </div>
              </div>
              <div className="lg:col-span-7">
                <div
                  className="overflow-hidden rounded-xl border border-white/20 aspect-[16/10] bg-black relative group shadow-2xl cursor-pointer"
                  onClick={() => openLightbox(cs1.image, cs1.imageAlt, cs1.title, cs1.client)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') openLightbox(cs1.image, cs1.imageAlt, cs1.title, cs1.client);
                  }}
                  aria-label={`Enlarge ${cs1.title} screenshot`}
                >
                  <img
                    src={cs1.image}
                    alt={cs1.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 border border-white/30 px-2.5 py-1 flex items-center gap-1.5 text-xs font-mono text-white">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>ENLARGE PROD UI</span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        )}

        {/* Case Study 2: Cognify Solutions (Image Left) */}
        {cs2 && (
          <article className="obsidian-slate-card p-space-md md:p-space-lg lg:p-space-xl mb-space-xl reveal-on-scroll">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter lg:gap-space-lg items-center">
              <div className="lg:col-span-7 order-2 lg:order-1">
                <div
                  className="overflow-hidden rounded-xl border border-white/20 aspect-[16/10] bg-black relative group shadow-2xl cursor-pointer"
                  onClick={() => openLightbox(cs2.image, cs2.imageAlt, cs2.title, cs2.client)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') openLightbox(cs2.image, cs2.imageAlt, cs2.title, cs2.client);
                  }}
                  aria-label={`Enlarge ${cs2.title} screenshot`}
                >
                  <img
                    src={cs2.image}
                    alt={cs2.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 border border-white/30 px-2.5 py-1 flex items-center gap-1.5 text-xs font-mono text-white">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>ENLARGE PROD UI</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 order-1 lg:order-2 space-y-space-md">
                <div>
                  <div className="flex items-center gap-2 mb-space-xxs">
                    <span className="w-2 h-2 bg-white" />
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-text-secondary">
                      {cs2.client}
                    </span>
                  </div>
                  <h3 className="text-headline-md text-white">{cs2.title}</h3>
                </div>
                <p className="text-body-md text-text-secondary leading-relaxed">
                  {cs2.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {cs2.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[11px] uppercase px-3 py-1 bg-surface-elevated border border-white/20 text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="pt-space-xs flex items-center gap-space-md">
                  <a
                    href="#contact"
                    className="pill-action-btn inline-flex items-center gap-2 bg-white text-black hover:bg-black hover:text-white border border-white px-5 py-2 text-label-md uppercase tracking-[0.14em] font-semibold transition-all"
                  >
                    <span>Dossier Detail</span>
                    <span>→</span>
                  </a>
                  <span className="font-mono text-xs text-text-muted">{cs2.metric}</span>
                </div>
              </div>
            </div>
          </article>
        )}

        {/* Case Study 3: TalentBridge Global (Image Right) */}
        {cs3 && (
          <article className="obsidian-slate-card p-space-md md:p-space-lg lg:p-space-xl mb-space-xl reveal-on-scroll">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter lg:gap-space-lg items-center">
              <div className="lg:col-span-5 space-y-space-md">
                <div>
                  <div className="flex items-center gap-2 mb-space-xxs">
                    <span className="w-2 h-2 bg-white" />
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-text-secondary">
                      {cs3.client}
                    </span>
                  </div>
                  <h3 className="text-headline-md text-white">{cs3.title}</h3>
                </div>
                <p className="text-body-md text-text-secondary leading-relaxed">
                  {cs3.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {cs3.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[11px] uppercase px-3 py-1 bg-surface-elevated border border-white/20 text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="pt-space-xs flex items-center gap-space-md">
                  <a
                    href="#contact"
                    className="pill-action-btn inline-flex items-center gap-2 bg-white text-black hover:bg-black hover:text-white border border-white px-5 py-2 text-label-md uppercase tracking-[0.14em] font-semibold transition-all"
                  >
                    <span>Dossier Detail</span>
                    <span>→</span>
                  </a>
                  <span className="font-mono text-xs text-text-muted">{cs3.metric}</span>
                </div>
              </div>
              <div className="lg:col-span-7">
                <div
                  className="overflow-hidden rounded-xl border border-white/20 aspect-[16/10] bg-black relative group shadow-2xl cursor-pointer"
                  onClick={() => openLightbox(cs3.image, cs3.imageAlt, cs3.title, cs3.client)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') openLightbox(cs3.image, cs3.imageAlt, cs3.title, cs3.client);
                  }}
                  aria-label={`Enlarge ${cs3.title} screenshot`}
                >
                  <img
                    src={cs3.image}
                    alt={cs3.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 border border-white/30 px-2.5 py-1 flex items-center gap-1.5 text-xs font-mono text-white">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>ENLARGE PROD UI</span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        )}

        {/* Case Study 4: Academy Brighton Consulting (Full Width) */}
        {cs4 && (
          <article className="obsidian-slate-card p-space-md md:p-space-lg lg:p-space-xl reveal-on-scroll">
            <div className="space-y-space-md">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm pb-space-xs border-b border-white/[0.08]">
                <div>
                  <div className="flex items-center gap-2 mb-space-xxs">
                    <span className="w-2 h-2 bg-white" />
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-text-secondary">
                      {cs4.client}
                    </span>
                  </div>
                  <h3 className="text-headline-md text-white">{cs4.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cs4.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[11px] uppercase px-3 py-1 bg-surface-elevated border border-white/20 text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-body-md text-text-secondary max-w-4xl leading-relaxed">
                {cs4.description}
              </p>
              <div
                className="overflow-hidden rounded-xl border border-white/20 aspect-[21/9] bg-black relative group shadow-2xl cursor-pointer"
                onClick={() => openLightbox(cs4.image, cs4.imageAlt, cs4.title, cs4.client)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') openLightbox(cs4.image, cs4.imageAlt, cs4.title, cs4.client);
                }}
                aria-label={`Enlarge ${cs4.title} screenshot`}
              >
                <img
                  src={cs4.image}
                  alt={cs4.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 border border-white/30 px-2.5 py-1 flex items-center gap-1.5 text-xs font-mono text-white">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>ENLARGE PROD UI</span>
                </div>
              </div>
              <div className="pt-space-xs flex flex-wrap items-center justify-between gap-space-sm font-mono text-xs text-text-muted">
                <span className="flex items-center gap-1.5 text-white">
                  <span className="w-2 h-2 bg-white inline-block" /> {cs4.metric}
                </span>
                <a
                  href="#contact"
                  className="pill-action-btn inline-flex items-center gap-2 bg-white text-black hover:bg-black hover:text-white border border-white px-5 py-2 text-label-md uppercase tracking-[0.14em] font-semibold transition-all"
                >
                  <span>Dossier Detail</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </article>
        )}

        {/* Pipeline Staging Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter mt-space-xl">
          {PIPELINE_PROJECTS.map((project) => (
            <div
              key={project.title}
              className="obsidian-slate-card p-space-lg flex flex-col justify-between reveal-on-scroll"
            >
              <div>
                <div className="flex items-center justify-between mb-space-sm">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-text-muted">
                    PIPELINE // STAGING
                  </span>
                  <span className="font-mono text-[10px] uppercase px-2 py-0.5 border border-white/20 text-white">
                    {project.quarter}
                  </span>
                </div>
                <h4 className="text-title-md text-white mb-2">{project.title}</h4>
                <p className="text-body-sm text-text-secondary">{project.description}</p>
              </div>
              <div className="pt-space-md flex items-center justify-between font-mono text-xs text-text-muted border-t border-white/[0.08] mt-4">
                <span>{project.category}</span>
                <span className="text-white">{project.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightbox.isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-6xl w-full bg-surface-canvas border border-white/20 shadow-2xl p-4 md:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4 font-mono">
              <div>
                <span className="text-xs text-text-muted uppercase tracking-widest block">
                  {lightbox.client} // PRODUCTION ARCHIVE
                </span>
                <h3 className="text-sm md:text-base text-white font-sans font-semibold">
                  {lightbox.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={closeLightbox}
                className="w-9 h-9 border border-white/20 hover:border-white text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close enlarged preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image */}
            <div className="overflow-hidden rounded-xl border border-white/10 max-h-[75vh] flex items-center justify-center bg-black">
              <img
                src={lightbox.imageSrc}
                alt={lightbox.imageAlt}
                className="max-h-[75vh] w-auto object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
