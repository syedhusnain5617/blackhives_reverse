import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Clock, Globe, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { ASSETS } from '@/lib/assets';

const contactSchema = z.object({
  fullName: z.string().min(2, { message: 'Lead name is required (min 2 characters)' }),
  workEmail: z.string().email({ message: 'Valid enterprise email address required' }),
  companyName: z.string().min(2, { message: 'Organization / entity is required' }),
  services: z.array(z.string()).optional(),
  projectScope: z.string().min(10, { message: 'Please provide at least 10 characters detailing scope' }),
});

type ContactFormData = z.infer<typeof contactSchema>;

const CAPABILITY_OPTIONS = [
  { id: 'custom-software', label: 'Custom Software Engineering' },
  { id: 'gaas-infra', label: 'GaaS Autonomous Runtime' },
  { id: 'uiux-design', label: 'Mathematical UI/UX Design' },
  { id: 'remote-manpower', label: 'Remote IT Augmentation' },
  {
    id: 'ai-solutions',
    label: 'Autonomous AI Systems & Fleet Telemetry',
    colSpan: 'sm:col-span-2',
  },
];

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: '',
      workEmail: '',
      companyName: '',
      services: ['custom-software'],
      projectScope: '',
    },
  });

  const onSubmit = async (_data: ContactFormData) => {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSubmitted(true);
    reset();
  };

  return (
    <section id="contact" className="py-space-xxl relative bg-surface-canvas">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
          {/* Left Column: Direct Channel Dispatch */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-space-xl">
            <div className="space-y-space-md">
              <span className="font-mono text-xs uppercase tracking-[0.28em] text-text-muted block">
                06 // INITIATE TRANSMISSION
              </span>
              <h2 className="text-headline-lg-mobile md:text-headline-lg text-white">
                Begin Project Engagement
              </h2>
              <p className="text-body-lg text-text-secondary leading-relaxed">
                Submit architectural parameters below. A Principal System Architect will review your
                stack requirements within 24 operational hours.
              </p>

              <div className="space-y-space-sm pt-space-md font-mono text-xs">
                {/* Email Dispatch Card */}
                <div className="obsidian-slate-card p-space-md flex items-center justify-between">
                  <div>
                    <span className="block text-text-muted uppercase tracking-widest text-[10px]">
                      DIRECT ENGINEERING DISPATCH
                    </span>
                    <a
                      href="mailto:hello@blackhives.com"
                      className="text-white hover:underline text-sm font-semibold tracking-wider"
                    >
                      hello@blackhives.com
                    </a>
                  </div>
                  <Mail className="text-white w-5 h-5" aria-hidden="true" />
                </div>

                {/* SLA Card */}
                <div className="obsidian-slate-card p-space-md flex items-center justify-between">
                  <div>
                    <span className="block text-text-muted uppercase tracking-widest text-[10px]">
                      VERIFIED SLA RESPONSE
                    </span>
                    <span className="text-white text-sm font-semibold tracking-wider">
                      ≤ 1 BUSINESS DAY
                    </span>
                  </div>
                  <Clock className="text-white w-5 h-5" aria-hidden="true" />
                </div>

                {/* Geography Card */}
                <div className="obsidian-slate-card p-space-md flex items-center justify-between">
                  <div>
                    <span className="block text-text-muted uppercase tracking-widest text-[10px]">
                      OPERATIONAL GEOGRAPHY
                    </span>
                    <span className="text-white text-sm font-semibold tracking-wider">
                      APAC · EMEA · AMER CELLS
                    </span>
                  </div>
                  <Globe className="text-white w-5 h-5" aria-hidden="true" />
                </div>
              </div>
            </div>

            {/* Protocol Badge */}
            <div className="hidden lg:flex items-center gap-space-sm font-mono text-xs text-text-muted">
              <div className="w-6 h-6 border border-white/20 bg-surface-elevated p-0.5 flex items-center justify-center">
                <img
                  src={ASSETS.logo}
                  alt="Black Hives emblem"
                  className="w-full h-full object-contain filter invert"
                />
              </div>
              <span>BLACK HIVES // MATTE OBSIDIAN PROTOCOL</span>
            </div>
          </div>

          {/* Right Column: Project Intake Terminal */}
          <div className="lg:col-span-7">
            <div className="obsidian-slate-card p-space-md md:p-space-lg lg:p-space-xl shadow-2xl reveal-on-scroll">
              <div className="mb-space-lg pb-space-sm border-b border-white/[0.08] flex items-center justify-between">
                <div>
                  <h3 className="text-headline-sm text-white">Project Intake Terminal</h3>
                  <p className="text-body-sm text-text-secondary mt-1">
                    Specify technical requirements and organizational target window.
                  </p>
                </div>
                <span className="font-mono text-[10px] px-2 py-0.5 border border-white/20 text-white">
                  SECURE INGEST
                </span>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-space-md" noValidate>
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                  <div className="space-y-space-xxs">
                    <label
                      htmlFor="fullName"
                      className="block font-mono text-[10px] uppercase tracking-wider text-text-secondary"
                    >
                      Lead Name *
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      placeholder="e.g. Marcus Vance"
                      aria-invalid={!!errors.fullName}
                      aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                      className="w-full bg-surface-canvas border border-white/20 text-white px-4 py-3 text-body-md placeholder:text-text-muted focus:outline-none focus:border-white focus:bg-surface-elevated transition-colors"
                      {...register('fullName')}
                    />
                    {errors.fullName && (
                      <p id="fullName-error" className="flex items-center gap-1 font-mono text-xs text-red-400 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-space-xxs">
                    <label
                      htmlFor="workEmail"
                      className="block font-mono text-[10px] uppercase tracking-wider text-text-secondary"
                    >
                      Enterprise Email *
                    </label>
                    <input
                      id="workEmail"
                      type="email"
                      placeholder="m.vance@enterprise.com"
                      aria-invalid={!!errors.workEmail}
                      aria-describedby={errors.workEmail ? 'workEmail-error' : undefined}
                      className="w-full bg-surface-canvas border border-white/20 text-white px-4 py-3 text-body-md placeholder:text-text-muted focus:outline-none focus:border-white focus:bg-surface-elevated transition-colors"
                      {...register('workEmail')}
                    />
                    {errors.workEmail && (
                      <p id="workEmail-error" className="flex items-center gap-1 font-mono text-xs text-red-400 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.workEmail.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Organization */}
                <div className="space-y-space-xxs">
                  <label
                    htmlFor="companyName"
                    className="block font-mono text-[10px] uppercase tracking-wider text-text-secondary"
                  >
                    Organization / Entity *
                  </label>
                  <input
                    id="companyName"
                    type="text"
                    placeholder="e.g. Apex Distributed Corp"
                    aria-invalid={!!errors.companyName}
                    aria-describedby={errors.companyName ? 'companyName-error' : undefined}
                    className="w-full bg-surface-canvas border border-white/20 text-white px-4 py-3 text-body-md placeholder:text-text-muted focus:outline-none focus:border-white focus:bg-surface-elevated transition-colors"
                    {...register('companyName')}
                  />
                  {errors.companyName && (
                    <p id="companyName-error" className="flex items-center gap-1 font-mono text-xs text-red-400 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.companyName.message}
                    </p>
                  )}
                </div>

                {/* Architecture & Service Selection */}
                <div className="space-y-space-xs">
                  <span className="block font-mono text-[10px] uppercase tracking-wider text-text-secondary">
                    Target Domain Capabilities
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {CAPABILITY_OPTIONS.map((cap) => (
                      <label
                        key={cap.id}
                        className={`flex items-center gap-space-xs p-3 bg-surface-canvas border border-white/10 hover:border-white cursor-pointer transition-colors text-text-secondary ${
                          cap.colSpan || ''
                        }`}
                      >
                        <input
                          type="checkbox"
                          value={cap.id}
                          className="w-4 h-4 accent-white bg-black rounded-none"
                          {...register('services')}
                        />
                        <span className="text-body-sm text-white">{cap.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Technical Scope */}
                <div className="space-y-space-xxs">
                  <label
                    htmlFor="projectScope"
                    className="block font-mono text-[10px] uppercase tracking-wider text-text-secondary"
                  >
                    Technical Scope &amp; Target Milestone Window *
                  </label>
                  <textarea
                    id="projectScope"
                    rows={4}
                    placeholder="Describe platform objectives, existing infrastructure stack, data isolation constraints..."
                    aria-invalid={!!errors.projectScope}
                    aria-describedby={errors.projectScope ? 'projectScope-error' : undefined}
                    className="w-full bg-surface-canvas border border-white/20 text-white px-4 py-3 text-body-md placeholder:text-text-muted focus:outline-none focus:border-white focus:bg-surface-elevated transition-colors"
                    {...register('projectScope')}
                  />
                  {errors.projectScope && (
                    <p id="projectScope-error" className="flex items-center gap-1 font-mono text-xs text-red-400 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.projectScope.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="pill-action-btn w-full bg-white text-black hover:bg-black hover:text-white border border-white py-4 px-6 text-label-md uppercase tracking-[0.18em] font-semibold flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] disabled:opacity-50 cursor-pointer"
                  >
                    <span>{isSubmitting ? 'Transmitting...' : 'Transmit Protocol Request'}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>

                {/* Success Feedback Banner */}
                {isSubmitted && (
                  <div
                    role="alert"
                    className="p-4 bg-white/10 border border-white text-white font-mono text-xs flex items-center gap-space-sm"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />
                    <span>
                      Transmission received and prioritized. A Principal Lead will respond within 24 hours.
                    </span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
