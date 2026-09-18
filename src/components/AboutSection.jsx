import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo, capabilityChips } from '../data/portfolioData';
import { playClickSound } from '../utils/audio';
import { Code2, CheckCircle, Terminal, Sparkles, User, ArrowRight } from 'lucide-react';

export default function AboutSection() {
  const [activeChipId, setActiveChipId] = useState(capabilityChips[0].id);

  const activeChip = capabilityChips.find((c) => c.id === activeChipId) || capabilityChips[0];

  return (
    <section
      id="about"
      className="relative min-h-screen w-full py-28 px-6 sm:px-10 lg:px-16 bg-paper overflow-hidden text-left"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Top Editorial Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Section index and personal badge (Cols 1-4) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-paper-warm border border-ink/8 text-xs font-mono text-ink-muted">
              <span>02 / ENGINEERING PHILOSOPHY</span>
            </div>

            {/* Profile Avatar Card */}
            <div className="p-6 rounded-3xl bg-paper-warm/80 border border-ink/8 space-y-4 max-w-sm">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-lavender via-rose to-peach p-[2px] shadow-sm">
                  <div className="w-full h-full rounded-[14px] bg-[#17151A] flex items-center justify-center text-paper font-display text-xl font-bold">
                    NA
                  </div>
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg text-ink">{personalInfo.name}</h4>
                  <p className="text-xs font-mono text-ink-subtle">{personalInfo.role}</p>
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-emerald-600 mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Available Worldwide
                  </span>
                </div>
              </div>

              <p className="text-xs text-ink-muted leading-relaxed font-body">
                {personalInfo.aboutBio1}
              </p>

              <div className="pt-2 border-t border-ink/8 flex justify-between items-center text-[10px] font-mono text-ink-subtle">
                <span>FOCUS: FLUTTER & DART</span>
                <span>IOS & ANDROID</span>
              </div>
            </div>
          </div>

          {/* Large Headline & Narrative Bio (Cols 5-12) */}
          <div className="lg:col-span-8 space-y-8">
            <h2 className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl text-ink tracking-tight leading-[0.98]">
              {personalInfo.aboutStatement}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-ink-muted font-body leading-relaxed">
              <p>
                {personalInfo.aboutBio2}
              </p>
              <p>
                I prioritize the tactile details that users feel intuitively: spring physics that mimic natural inertia, 
                instant sub-10ms offline local databases, and modular feature architecture that ensures teams can ship with high velocity.
              </p>
            </div>

            {/* Capability Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              {[
                'Flutter 3.x',
                'Dart',
                'Riverpod & BLoC',
                'Clean Architecture',
                'Custom Impeller Shaders',
                'Offline-First Isar',
                'Platform Channels (Swift/Kotlin)',
                'Fastlane CI/CD',
                'Figma Tokens',
              ].map((pill) => (
                <span
                  key={pill}
                  className="px-3 py-1.5 rounded-full bg-paper-warm border border-ink/8 text-xs font-mono text-ink-muted hover:border-lavender hover:text-ink transition-colors"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* ======================================================== */}
        {/* INTERACTIVE CAPABILITY CHIPS & CODE PLAYGROUND          */}
        {/* ======================================================== */}
        <div className="pt-8 border-t border-ink/8 space-y-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-lavender-dark uppercase tracking-widest block mb-1">
                ENGINEERING PROOF
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-ink">
                Interactive Capability Chips
              </h3>
            </div>
            <span className="text-xs font-mono text-ink-subtle">
              CLICK A CHIP TO PREVIEW ARCHITECTURAL IMPLEMENTATION
            </span>
          </div>

          {/* Chips Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {capabilityChips.map((chip) => {
              const isSelected = activeChipId === chip.id;
              return (
                <button
                  key={chip.id}
                  onClick={() => {
                    playClickSound();
                    setActiveChipId(chip.id);
                  }}
                  data-cursor="view code"
                  className={`p-3.5 rounded-2xl border text-left transition-all relative overflow-hidden ${
                    isSelected
                      ? 'bg-ink text-paper border-ink shadow-md scale-[1.02]'
                      : 'bg-paper-warm text-ink-muted border-ink/8 hover:bg-paper-border/50 hover:text-ink'
                  }`}
                >
                  <span className={`text-[9px] font-mono tracking-wider block mb-1 uppercase ${
                    isSelected ? 'text-lavender' : 'text-ink-subtle'
                  }`}>
                    {chip.badge}
                  </span>
                  <h4 className={`font-display font-semibold text-xs sm:text-sm ${
                    isSelected ? 'text-paper' : 'text-ink'
                  }`}>
                    {chip.title}
                  </h4>
                  {isSelected && (
                    <div className="w-1.5 h-1.5 rounded-full bg-lavender absolute bottom-2.5 right-2.5" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Chip Detail & Live Code Inspector */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeChip.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="p-6 sm:p-8 rounded-3xl bg-[#17151A] text-paper border border-ink/20 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left explanation (Cols 1-5) */}
              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-lavender/20 border border-lavender/40 text-lavender font-mono text-[10px] font-semibold tracking-wider uppercase">
                    {activeChip.badge}
                  </span>
                </div>

                <h4 className="font-display font-bold text-2xl sm:text-3xl text-white">
                  {activeChip.title}
                </h4>

                <p className="text-xs sm:text-sm text-paper/70 leading-relaxed font-body">
                  {activeChip.summary}
                </p>

                <div className="pt-3 border-t border-white/10 space-y-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-lavender block">
                    CONCRETE DELIVERABLE:
                  </span>
                  <div className="flex items-center gap-2 text-xs text-white/90 font-mono">
                    <CheckCircle size={14} className="text-emerald-400 shrink-0" />
                    <span>{activeChip.deliverable}</span>
                  </div>
                </div>
              </div>

              {/* Right Code Block (Cols 6-12) */}
              <div className="lg:col-span-7 rounded-2xl bg-[#0E0D12] border border-white/10 overflow-hidden font-mono text-xs shadow-inner">
                {/* Editor Tab Bar */}
                <div className="px-4 py-2.5 bg-white/5 border-b border-white/10 flex items-center justify-between text-white/60 text-[11px]">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 font-mono text-white/40">lib/{activeChip.id}.dart</span>
                  </div>
                  <span className="text-[9px] font-mono text-lavender">DART 3.5 · FLUTTER</span>
                </div>

                {/* Code Content */}
                <div className="p-4 sm:p-5 overflow-x-auto">
                  <pre className="text-paper/90 leading-relaxed font-mono text-[11px] sm:text-xs">
                    <code>{activeChip.codeSnippet}</code>
                  </pre>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
