import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, CheckCircle2, Layers, Cpu, Smartphone, Sparkles } from 'lucide-react';
import { playClickSound } from '../utils/audio';

export default function CaseStudyModal({ project, isOpen, onClose }) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  const cs = project.caseStudy;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-black/80 backdrop-blur-xl p-4 sm:p-8 lg:p-12 text-left">
        
        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 24 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-5xl bg-[#17151A] text-paper border border-white/15 rounded-[36px] shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        >
          {/* Top Sticky Header */}
          <div className="p-6 sm:p-8 border-b border-white/10 flex items-center justify-between sticky top-0 bg-[#17151A]/95 backdrop-blur-md z-30">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-lavender block">
                {project.number} / ARCHITECTURAL CASE STUDY
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
                {project.title}
              </h2>
            </div>

            <button
              onClick={() => {
                playClickSound();
                onClose();
              }}
              data-cursor="close"
              aria-label="Close Case Study"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-all active:scale-90"
            >
              <X size={18} />
            </button>
          </div>

          {/* Scrollable Content Body */}
          <div className="p-6 sm:p-10 space-y-12 overflow-y-auto scrollbar-none">
            
            {/* Meta Strip: Role, Year, Platform, Architecture */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 p-6 rounded-2xl bg-white/[0.04] border border-white/8 font-mono text-xs">
              <div>
                <span className="text-white/40 block mb-1 uppercase text-[10px]">ROLE</span>
                <strong className="text-white font-medium">{cs.role}</strong>
              </div>
              <div>
                <span className="text-white/40 block mb-1 uppercase text-[10px]">YEAR</span>
                <strong className="text-white font-medium">{cs.year}</strong>
              </div>
              <div>
                <span className="text-white/40 block mb-1 uppercase text-[10px]">PLATFORMS</span>
                <strong className="text-lavender font-medium">{cs.platforms}</strong>
              </div>
              <div>
                <span className="text-white/40 block mb-1 uppercase text-[10px]">ARCHITECTURE</span>
                <strong className="text-emerald-300 font-medium">{cs.architecture.split('+')[0]}</strong>
              </div>
            </div>

            {/* Overview & Problem / Solution Grid */}
            <div className="space-y-6">
              <h3 className="text-xs font-mono uppercase tracking-widest text-lavender">
                EXECUTIVE OVERVIEW
              </h3>
              <p className="font-body text-base sm:text-lg text-white/90 leading-relaxed max-w-4xl">
                {cs.overview}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-white/10">
              <div className="p-6 rounded-2xl bg-rose-500/5 border border-rose-500/20 space-y-3">
                <span className="text-xs font-mono text-rose-300 uppercase tracking-wider block">
                  THE PROBLEM
                </span>
                <p className="font-body text-sm text-white/80 leading-relaxed">
                  {cs.theProblem}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 space-y-3">
                <span className="text-xs font-mono text-emerald-300 uppercase tracking-wider block">
                  THE ENGINEERING SOLUTION
                </span>
                <p className="font-body text-sm text-white/80 leading-relaxed">
                  {cs.theSolution}
                </p>
              </div>
            </div>

            {/* Engineering Contributions */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              <h3 className="text-xs font-mono uppercase tracking-widest text-lavender">
                KEY TECHNICAL CONTRIBUTIONS
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {cs.contributions.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-start gap-3 text-xs sm:text-sm text-white/80 font-body leading-relaxed"
                  >
                    <CheckCircle2 size={16} className="text-lavender shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Horizontal Interactive Showcase Gallery */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-mono uppercase tracking-widest text-lavender">
                  INTERFACE HIGHLIGHTS
                </h3>
                <span className="text-xs font-mono text-white/40">SCROLL HORIZONTALLY →</span>
              </div>

              <div className="flex gap-4 overflow-x-auto pb-4 pt-1 scrollbar-none">
                {cs.gallery.map((card, idx) => (
                  <div
                    key={idx}
                    className="min-w-[280px] sm:min-w-[340px] p-6 rounded-2xl bg-white/[0.04] border border-white/10 space-y-3 shrink-0"
                  >
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-lavender/20 text-lavender font-bold">
                      SCREEN 0{idx + 1}
                    </span>
                    <h4 className="font-display font-semibold text-lg text-white">
                      {card.label}
                    </h4>
                    <p className="font-body text-xs text-white/70 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technology Chips */}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-lavender block">
                PRODUCTION TECHNOLOGY STACK
              </span>
              <div className="flex flex-wrap gap-2">
                {cs.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-mono text-white"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Modal Footer */}
          <div className="p-6 border-t border-white/10 bg-[#121115] flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs font-mono text-white/50">
              Designed for Mobile. Built with Flutter.
            </span>
            <button
              onClick={() => {
                playClickSound();
                onClose();
              }}
              className="px-5 py-2 rounded-full bg-white text-ink font-mono text-xs font-bold hover:bg-white/90 transition-all"
            >
              CLOSE CASE STUDY
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
