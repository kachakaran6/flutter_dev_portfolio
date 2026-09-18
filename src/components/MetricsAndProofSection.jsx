import React from 'react';
import { motion } from 'framer-motion';
import { shippedMetrics, openSourcePackages, educationInfo } from '../data/portfolioData';
import { Star, GitFork, GitPullRequest, Award, GraduationCap, ArrowUpRight, Terminal, Sparkles } from 'lucide-react';
import { playClickSound } from '../utils/audio';

export default function MetricsAndProofSection() {
  return (
    <section
      className="relative min-h-screen w-full py-28 px-6 sm:px-10 lg:px-16 bg-[#F5F2EC] text-ink overflow-hidden text-left select-none"
    >
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* ======================================================== */}
        {/* 1. THINGS I'VE SHIPPED (METRICS)                         */}
        {/* ======================================================== */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-ink/8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-paper border border-ink/8 text-xs font-mono text-ink-muted uppercase tracking-widest mb-3">
                <span>08 / PRODUCTION IMPACT</span>
              </div>
              <h2 className="font-display font-bold text-4xl sm:text-5xl text-ink tracking-tight">
                THINGS I’VE SHIPPED<span className="text-lavender-dark">.</span>
              </h2>
            </div>
            <p className="font-body text-xs sm:text-sm text-ink-muted max-w-sm">
              Real metrics measured across live production userbases on iOS and Android.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {shippedMetrics.map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-3xl bg-paper border border-ink/8 shadow-2xs space-y-2 text-left hover:border-lavender hover:shadow-soft-card transition-all"
              >
                <span className="font-display font-bold text-3xl sm:text-4xl text-ink block tracking-tight">
                  {item.value}
                </span>
                <strong className="font-display font-semibold text-sm text-ink block">
                  {item.label}
                </strong>
                <p className="font-mono text-[11px] text-ink-subtle leading-tight">
                  {item.sub}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ======================================================== */}
        {/* 2. GITHUB / OPEN SOURCE DEVELOPER PROOF                  */}
        {/* ======================================================== */}
        <div className="space-y-8 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-ink/8">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-lavender-dark block">
                DEVELOPER PROOF
              </span>
              <h3 className="font-display font-bold text-3xl sm:text-4xl text-ink">
                I don’t just design interfaces. <em className="font-serif text-lavender-dark not-italic font-normal">I ship them.</em>
              </h3>
            </div>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClickSound}
              data-cursor="open github"
              className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-ink hover:text-lavender-dark transition-colors"
            >
              <span>EXPLORE ALL GITHUB REPOSITORIES</span>
              <ArrowUpRight size={14} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {openSourcePackages.map((pkg) => (
              <div
                key={pkg.name}
                className="p-6 rounded-3xl bg-paper border border-ink/8 hover:border-ink/20 shadow-2xs space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-paper-warm border border-ink/8 text-ink-muted uppercase">
                      {pkg.tag}
                    </span>
                    <div className="flex items-center gap-3 text-xs font-mono text-ink-muted">
                      <span className="flex items-center gap-1">
                        <Star size={12} className="text-amber-500 fill-amber-500" />
                        {pkg.stars}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork size={12} />
                        {pkg.forks}
                      </span>
                    </div>
                  </div>

                  <h4 className="font-mono font-bold text-base text-ink flex items-center gap-2">
                    <Terminal size={14} className="text-lavender" />
                    <span>{pkg.name}</span>
                  </h4>

                  <p className="font-body text-xs text-ink-muted leading-relaxed">
                    {pkg.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-ink/8 flex justify-between items-center text-[10px] font-mono text-ink-subtle">
                  <span>MIT LICENSE</span>
                  <span className="text-lavender-dark font-semibold">PUB.DEV VERIFIED ↗</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ======================================================== */}
        {/* 3. EDUCATION & FOUNDATIONS                               */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-6 border-t border-ink/8">
          
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-lavender-dark block">
              ACADEMIC FOUNDATION
            </span>
            <h3 className="font-display font-bold text-3xl text-ink">
              Curious enough to keep learning.
            </h3>
            <p className="font-body text-xs sm:text-sm text-ink-muted leading-relaxed max-w-sm">
              Computer Science core principles grounded in algorithms, concurrent state machines, and human-computer interaction.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Degree Card */}
            <div className="p-6 rounded-3xl bg-paper border border-ink/8 space-y-3">
              <div className="flex items-center gap-2 text-lavender-dark">
                <GraduationCap size={18} />
                <span className="text-xs font-mono font-bold">DEGREE</span>
              </div>
              <h4 className="font-display font-bold text-base text-ink leading-snug">
                {educationInfo.degree}
              </h4>
              <p className="text-xs font-mono text-ink-subtle">
                {educationInfo.institution} · {educationInfo.period}
              </p>
              <span className="inline-block px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-700 text-[10px] font-mono font-bold">
                {educationInfo.honors}
              </span>
            </div>

            {/* Certifications Card */}
            <div className="p-6 rounded-3xl bg-paper border border-ink/8 space-y-3">
              <div className="flex items-center gap-2 text-rose-500">
                <Award size={18} />
                <span className="text-xs font-mono font-bold">CERTIFICATIONS</span>
              </div>
              <div className="space-y-2 text-xs font-mono text-ink-muted">
                {educationInfo.certifications.map((cert, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0 mt-1.5" />
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
