import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PhoneDevice from './PhoneDevice';
import CaseStudyModal from './CaseStudyModal';
import { projects } from '../data/portfolioData';
import { ArrowUpRight, ChevronLeft, ChevronRight, Sparkles, Layers, ShieldCheck } from 'lucide-react';

export default function SelectedWorkSection() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  const activeProject = projects[activeProjectIndex];

  // Signature disassemble -> transform -> reassemble transition
  const handleSelectProject = (index) => {
    if (index === activeProjectIndex || isTransitioning) return;
    setIsTransitioning(true);

    // Mid-transition swap project data and snap layers back together
    setTimeout(() => {
      setActiveProjectIndex(index);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 350);
    }, 280);
  };

  const handleNext = () => {
    const nextIdx = (activeProjectIndex + 1) % projects.length;
    handleSelectProject(nextIdx);
  };

  const handlePrev = () => {
    const prevIdx = (activeProjectIndex - 1 + projects.length) % projects.length;
    handleSelectProject(prevIdx);
  };

  return (
    <section
      id="work"
      className="relative min-h-screen w-full py-28 px-6 sm:px-10 lg:px-16 bg-[#17151A] text-paper overflow-hidden select-none"
    >
      {/* Dynamic ambient color glow based on project accent */}
      <motion.div
        key={activeProject.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 0.8 }}
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[140px] pointer-events-none -z-10"
        style={{ backgroundColor: activeProject.accentHex }}
      />

      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-8 border-b border-white/10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-mono text-lavender uppercase tracking-widest">
              <span>06 / SELECTED WORK</span>
            </div>

            <h2 className="font-display font-bold text-4xl sm:text-6xl text-white tracking-tight leading-[1.05]">
              Scroll through<br />
              <em className="font-serif text-lavender not-italic font-normal">the products.</em>
            </h2>
          </div>

          <p className="font-body text-sm sm:text-base text-paper/70 max-w-md leading-relaxed text-left">
            The phone acts as the anchor — disassembling, morphing, and rebuilding itself 
            around each Flutter application experience.
          </p>
        </div>

        {/* ======================================================== */}
        {/* STICKY PHONE STAGE: LEFT/RIGHT SPLIT SHOWCASE           */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-4">
          
          {/* Left / Center: Sticky 3D Phone Device (Cols 1-6) */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center relative">
            
            {/* Signature Morphing Phone */}
            <div className="relative">
              <PhoneDevice
                project={activeProject}
                mode="project"
                teardownProgress={0}
                isTransitioning={isTransitioning}
                interactive={true}
                className="scale-95 sm:scale-100"
              />
            </div>

            {/* Quick Project Switcher Arrows Below Phone */}
            <div className="mt-8 flex items-center gap-4 bg-white/5 p-2 rounded-full border border-white/10 backdrop-blur-md">
              <button
                onClick={handlePrev}
                data-cursor="prev"
                aria-label="Previous Project"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all active:scale-90"
              >
                <ChevronLeft size={18} />
              </button>

              <div className="flex items-center gap-2 px-2">
                {projects.map((p, idx) => (
                  <button
                    key={p.id}
                    onClick={() => handleSelectProject(idx)}
                    className={`h-2 rounded-full transition-all ${
                      idx === activeProjectIndex
                        ? 'w-8 bg-lavender'
                        : 'w-2 bg-white/30 hover:bg-white/60'
                    }`}
                    aria-label={`Go to project ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                data-cursor="next"
                aria-label="Next Project"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all active:scale-90"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            <span className="text-[10px] font-mono text-white/40 mt-3">
              TRY INTERACTING WITH THE BUTTONS ON THE PHONE SCREEN
            </span>
          </div>

          {/* Right: Project Editorial Details (Cols 7-12) */}
          <div className="lg:col-span-6 space-y-8 text-left">
            
            {/* Project Index and Category */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 text-xs font-mono">
                  <span
                    className="px-2.5 py-1 rounded-full font-bold uppercase tracking-wider text-[11px]"
                    style={{
                      backgroundColor: `${activeProject.accentHex}25`,
                      color: activeProject.accentHex,
                    }}
                  >
                    PROJECT {activeProject.number} / 0{projects.length}
                  </span>
                  <span className="text-white/50 tracking-wider">
                    {activeProject.type}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-4xl sm:text-6xl text-white tracking-tight leading-none">
                  {activeProject.title}
                </h3>

                {/* Short Description */}
                <p className="font-body text-base sm:text-lg text-paper/80 leading-relaxed max-w-xl">
                  {activeProject.shortDescription}
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-3 border-y border-white/10 font-mono text-xs">
                  <div>
                    <span className="text-white/40 block text-[10px] uppercase">DOWNLOADS</span>
                    <strong className="text-white text-base font-bold">{activeProject.stats.downloads}</strong>
                  </div>
                  <div>
                    <span className="text-white/40 block text-[10px] uppercase">STORE RATING</span>
                    <strong className="text-lavender text-base font-bold">{activeProject.stats.rating}</strong>
                  </div>
                  <div>
                    <span className="text-white/40 block text-[10px] uppercase">CRASH RATE</span>
                    <strong className="text-emerald-400 text-base font-bold">{activeProject.stats.crashRate || activeProject.stats.batteryUse || '0.01%'}</strong>
                  </div>
                  <div>
                    <span className="text-white/40 block text-[10px] uppercase">FRAME RATE</span>
                    <strong className="text-white text-base font-bold">{activeProject.stats.frameRate || activeProject.stats.speed || '120 FPS'}</strong>
                  </div>
                </div>

                {/* Tech Tags */}
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest block">
                    STACK ARCHITECTURE
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Case Study Button */}
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSelectedCaseStudy(activeProject);
                    }}
                    data-cursor="case study"
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white text-ink font-mono text-xs font-bold tracking-wider hover:bg-white/90 shadow-lg transition-all active:scale-95 group"
                  >
                    <span>VIEW FULL CASE STUDY</span>
                    <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Quick Jump Project Tabs */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-2">
              {projects.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => handleSelectProject(idx)}
                  className={`p-3 rounded-2xl border text-left transition-all font-mono text-xs ${
                    idx === activeProjectIndex
                      ? 'bg-white/15 border-white/30 text-white font-bold'
                      : 'bg-white/[0.02] border-white/5 text-white/50 hover:bg-white/[0.06] hover:text-white'
                  }`}
                >
                  <span className="text-[9px] block text-lavender">0{idx + 1}</span>
                  <span className="truncate block">{p.title}</span>
                </button>
              ))}
            </div>

          </div>

        </div>

      </div>

      {/* Full-Screen Case Study Modal */}
      <CaseStudyModal
        project={selectedCaseStudy}
        isOpen={!!selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />
    </section>
  );
}
