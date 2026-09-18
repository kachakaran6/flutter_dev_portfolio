import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { pipelineStages } from '../data/portfolioData';
import { playClickSound } from '../utils/audio';
import { ArrowRight, CheckCircle2, ChevronRight, Layers, Smartphone, Sparkles, Terminal } from 'lucide-react';

export default function PipelineSection() {
  const [activeStageIndex, setActiveStageIndex] = useState(3); // Default Clean Architecture

  return (
    <section
      id="pipeline"
      className="relative min-h-screen w-full py-28 px-6 sm:px-10 lg:px-16 bg-paper text-ink overflow-hidden text-left select-none"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-8 border-b border-ink/8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-paper-warm border border-ink/8 text-xs font-mono text-ink-muted uppercase tracking-widest">
              <span>07 / DEVELOPMENT METHODOLOGY</span>
            </div>

            <h2 className="font-display font-bold text-4xl sm:text-6xl text-ink tracking-tight">
              FROM IDEA <span className="text-lavender">→</span> INTERFACE <span className="text-rose">→</span> APP
            </h2>
          </div>

          <p className="font-body text-sm sm:text-base text-ink-muted max-w-md leading-relaxed">
            A battle-tested production lifecycle. Every release follows a deterministic 
            funnel from ergonomics validation to automated Fastlane store distribution.
          </p>
        </div>

        {/* 7-Stage Horizontal Pipeline Flow Rail */}
        <div className="space-y-6">
          <div className="flex items-center justify-between text-xs font-mono text-ink-subtle">
            <span>7-STAGE DELIVERY PIPELINE</span>
            <span>CLICK ANY STAGE TO INSPECT WORKFLOW</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
            {pipelineStages.map((stage, idx) => {
              const isActive = activeStageIndex === idx;
              return (
                <button
                  key={stage.number}
                  onClick={() => {
                    playClickSound();
                    setActiveStageIndex(idx);
                  }}
                  data-cursor="step"
                  className={`p-4 rounded-2xl border text-left transition-all relative overflow-hidden flex flex-col justify-between min-h-[110px] ${
                    isActive
                      ? 'bg-ink text-paper border-ink shadow-lg scale-105 z-10'
                      : 'bg-paper-warm text-ink-muted border-ink/8 hover:border-lavender hover:text-ink'
                  }`}
                >
                  <div className="flex justify-between items-center w-full">
                    <span className={`text-[10px] font-mono font-bold ${
                      isActive ? 'text-lavender' : 'text-ink-subtle'
                    }`}>
                      {stage.number}
                    </span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-lavender animate-ping" />
                    )}
                  </div>

                  <div>
                    <strong className={`font-mono text-[10px] uppercase tracking-wider block ${
                      isActive ? 'text-white/80' : 'text-ink-muted'
                    }`}>
                      {stage.step}
                    </strong>
                    <span className={`font-display font-bold text-xs line-clamp-1 ${
                      isActive ? 'text-paper' : 'text-ink'
                    }`}>
                      {stage.title}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Detailed Breakdown Stage */}
        {pipelineStages[activeStageIndex] && (
          <motion.div
            key={activeStageIndex}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="p-8 sm:p-10 rounded-3xl bg-paper-warm/80 border border-ink/8 shadow-soft-card grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-ink text-paper flex items-center justify-center font-mono font-bold text-xs">
                  {pipelineStages[activeStageIndex].number}
                </span>
                <span className="text-xs font-mono uppercase tracking-widest text-lavender-dark font-semibold">
                  STAGE: {pipelineStages[activeStageIndex].step}
                </span>
              </div>

              <h3 className="font-display font-bold text-3xl sm:text-4xl text-ink">
                {pipelineStages[activeStageIndex].title}
              </h3>

              <p className="font-body text-base text-ink-muted leading-relaxed max-w-2xl">
                {pipelineStages[activeStageIndex].desc}
              </p>

              <div className="pt-2 flex items-center gap-2 text-xs font-mono text-ink">
                <span className="text-ink-subtle">STACK / APIS:</span>
                <span className="px-3 py-1 rounded-full bg-paper border border-ink/10 font-bold">
                  {pipelineStages[activeStageIndex].tools}
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 p-6 rounded-2xl bg-paper border border-ink/8 space-y-3 font-mono text-xs text-ink-muted">
              <span className="text-ink font-bold block uppercase text-[10px] text-lavender-dark">
                QUALITY GATE ASSURANCE
              </span>
              <div className="flex items-start gap-2">
                <CheckCircle2 size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                <span>Zero merge without passing automated golden widget regressions.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                <span>Impeller 120 FPS trace profiling on real hardware devices.</span>
              </div>
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
}
