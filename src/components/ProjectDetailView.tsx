import React, { useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { ProjectDetail, PROJECT_DETAILS } from '@/lib/projectDetails';
import { ProjectImageCarousel } from '@/components/ui/ProjectImageCarousel';

interface ProjectDetailViewProps {
  project: ProjectDetail;
  onBack: () => void;
  onSelectProject: (projectId: string) => void;
  onContactClick: () => void;
}

export const ProjectDetailView: React.FC<ProjectDetailViewProps> = ({
  project,
  onBack,
  onSelectProject,
  onContactClick,
}) => {
  // Scroll to top whenever the selected project changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [project.id]);

  const nextProject = PROJECT_DETAILS[project.nextProjectId];

  return (
    <div className="min-h-screen bg-surface-canvas text-white selection:bg-white selection:text-black animate-fade-in">
      {/* Top Hero Section */}
      <div className="pt-28 md:pt-36 pb-12 px-margin-mobile md:px-margin-tablet lg:px-margin bg-surface-base border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb Navigation */}
          <div className="flex flex-col gap-3 mb-8">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onBack}
                className="text-white/50 hover:text-white font-sans text-xs tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer group"
                aria-label="Return to all work"
              >
                <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
                <span>All Work</span>
              </button>
              <span className="text-white/20 text-xs">/</span>
              <span className="text-white/40 font-mono text-xs uppercase tracking-widest">
                {project.industry}
              </span>
            </div>

            {/* Title */}
            <h1
              className="font-serif text-white leading-[1.08] tracking-tight text-balance"
              style={{ fontSize: 'clamp(2.25rem, 5.5vw, 4.5rem)' }}
            >
              {project.title}
            </h1>
          </div>

          {/* 4-Column Meta Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-white/10 mt-10 bg-surface-canvas/60 rounded-lg overflow-hidden">
            <div className="flex flex-col gap-1.5 p-5 md:p-6 border-r border-b md:border-b-0 border-white/10">
              <span className="text-white/40 font-mono text-xs uppercase tracking-widest">
                Project
              </span>
              <span className="text-white font-sans text-sm md:text-base font-medium">
                {project.projectName}
              </span>
            </div>
            <div className="flex flex-col gap-1.5 p-5 md:p-6 border-b md:border-b-0 md:border-r border-white/10">
              <span className="text-white/40 font-mono text-xs uppercase tracking-widest">
                Client
              </span>
              <span className="text-white font-sans text-sm md:text-base font-medium">
                {project.client}
              </span>
            </div>
            <div className="flex flex-col gap-1.5 p-5 md:p-6 border-r border-white/10">
              <span className="text-white/40 font-mono text-xs uppercase tracking-widest">
                Industry
              </span>
              <span className="text-white font-sans text-sm md:text-base font-medium">
                {project.industry}
              </span>
            </div>
            <div className="flex flex-col gap-1.5 p-5 md:p-6">
              <span className="text-white/40 font-mono text-xs uppercase tracking-widest">
                Scope
              </span>
              <span className="text-white font-sans text-sm md:text-base font-medium">
                {project.scope}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Screenshot Showcase */}
      <ProjectImageCarousel images={project.images} title={project.title} />

      {/* Main Content & Sidebar Section */}
      <div className="px-margin-mobile md:px-margin-tablet lg:px-margin pt-14 pb-24 bg-surface-base border-t border-white/[0.08]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column (Detailed Breakdown) */}
          <div className="lg:col-span-7 flex flex-col gap-12">
            {/* Overview */}
            <div className="flex flex-col gap-4">
              <span className="text-text-muted font-mono text-xs uppercase tracking-widest">
                Overview
              </span>
              <p className="font-sans text-white text-lg md:text-xl leading-relaxed">
                {project.overview}
              </p>
            </div>

            {/* The Challenge */}
            <div className="flex flex-col gap-4 border-t border-white/[0.08] pt-10">
              <span className="text-text-muted font-mono text-xs uppercase tracking-widest">
                The Challenge
              </span>
              <p className="font-sans text-text-secondary text-base leading-relaxed">
                {project.challenge}
              </p>
            </div>

            {/* Solution Provided */}
            <div className="flex flex-col gap-4 border-t border-white/[0.08] pt-10">
              <span className="text-text-muted font-mono text-xs uppercase tracking-widest">
                Solution Provided
              </span>
              <ul className="flex flex-col gap-3.5" role="list">
                {project.solutions.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3.5">
                    <span className="text-text-muted font-mono text-xs mt-1 shrink-0 font-medium">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className="font-sans text-white/90 text-base leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Results & Impact */}
            <div className="flex flex-col gap-4 border-t border-white/[0.08] pt-10">
              <span className="text-text-muted font-mono text-xs uppercase tracking-widest">
                Results & Impact
              </span>
              <ul className="flex flex-col gap-3.5" role="list">
                {project.results.map((result, idx) => (
                  <li key={idx} className="flex items-start gap-3.5">
                    <span className="w-1.5 h-1.5 bg-white rounded-full mt-2.5 shrink-0 shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                    <span className="font-sans text-white/90 text-base leading-relaxed">
                      {result}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Highlights */}
            <div className="flex flex-col gap-4 border-t border-white/[0.08] pt-10">
              <span className="text-text-muted font-mono text-xs uppercase tracking-widest">
                Key Highlights
              </span>
              <div className="flex flex-wrap gap-2.5">
                {project.highlights.map((highlight, idx) => (
                  <span
                    key={idx}
                    className="text-sm font-sans text-white/90 bg-surface-elevated border border-white/10 px-4 py-2 rounded-md hover:border-white/30 transition-colors"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (Sidebar Tech Stack & CTA) */}
          <aside className="lg:col-span-4 lg:col-start-9 flex flex-col gap-6">
            <div className="border border-white/10 bg-surface-elevated/70 backdrop-blur-xl p-6 md:p-8 rounded-xl flex flex-col gap-6 sticky top-28 shadow-2xl">
              <span className="text-text-muted font-mono text-xs uppercase tracking-widest block pb-1 border-b border-white/[0.08]">
                Technologies Used
              </span>

              <div className="flex flex-col gap-5">
                {project.technologies.map((techGroup) => (
                  <div key={techGroup.category} className="flex flex-col gap-2">
                    <span className="text-text-secondary font-mono text-xs uppercase tracking-wider font-medium">
                      {techGroup.category}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {techGroup.items.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-mono text-white/80 bg-surface-canvas border border-white/10 px-2.5 py-1 rounded hover:border-white/30 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="border-t border-white/[0.08] pt-6 mt-2">
                <button
                  type="button"
                  onClick={onContactClick}
                  className="w-full flex items-center justify-center gap-2 bg-white text-black hover:bg-black hover:text-white border border-white px-5 py-3.5 font-sans text-sm font-semibold rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] active:scale-95 cursor-pointer group"
                >
                  <span>Start a Similar Project</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Next Project Footer Bar */}
      {nextProject && (
        <div className="border-t border-white/[0.08] bg-surface-canvas">
          <div
            role="button"
            tabIndex={0}
            onClick={() => onSelectProject(nextProject.id)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') onSelectProject(nextProject.id);
            }}
            className="group flex flex-col md:flex-row items-start md:items-center justify-between gap-6 px-margin-mobile md:px-margin-tablet lg:px-margin py-12 md:py-16 hover:bg-surface-elevated/60 transition-colors duration-300 cursor-pointer max-w-7xl mx-auto"
            aria-label={`Go to next project: ${nextProject.title}`}
          >
            <div className="flex flex-col gap-1.5">
              <span className="text-text-muted font-mono text-xs uppercase tracking-widest">
                Next Project
              </span>
              <h3 className="font-serif text-white text-2xl md:text-3xl lg:text-4xl group-hover:text-white/80 transition-colors">
                {nextProject.title}
              </h3>
            </div>

            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:border-white group-hover:text-black transition-all duration-300 shrink-0">
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
