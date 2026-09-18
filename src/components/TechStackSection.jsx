import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { techStackNodes } from '../data/portfolioData';
import { playClickSound } from '../utils/audio';
import { Sparkles, Layers, Terminal, Smartphone } from 'lucide-react';

export default function TechStackSection() {
  const [activeNode, setActiveNode] = useState(techStackNodes[0]);

  return (
    <section
      id="stack"
      className="relative min-h-screen w-full py-28 px-6 sm:px-10 lg:px-16 bg-[#F5F2EC] text-ink overflow-hidden select-none"
    >
      {/* Background ambient accents */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-lavender/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-peach/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-12">
        
        {/* Header */}
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-paper border border-ink/8 text-xs font-mono text-ink-muted uppercase tracking-widest">
            <span>04 / THE MOBILE ENGINE</span>
          </div>

          <h2 className="font-display font-bold text-4xl sm:text-6xl text-ink tracking-tight leading-[1.05]">
            THE TOOLS BEHIND<br />
            <em className="font-serif text-lavender-dark not-italic font-normal">THE EXPERIENCE</em>
          </h2>

          <p className="font-body text-base text-ink-muted leading-relaxed">
            Every tool is selected with intention. Built for deterministic state flows, 
            rapid multi-platform rendering, and native platform integration.
          </p>
        </div>

        {/* Floating Interactive Tech Nodes Cloud */}
        <div className="w-full max-w-5xl py-8 px-4 flex flex-wrap items-center justify-center gap-4 sm:gap-6 relative">
          {techStackNodes.map((node, idx) => {
            const isSelected = activeNode?.name === node.name;
            // Create subtle organic float offsets
            const floatDuration = 4 + (idx % 3) * 1.5;
            const floatOffset = (idx % 2 === 0 ? -8 : 8);

            return (
              <motion.button
                key={node.name}
                onClick={() => {
                  playClickSound();
                  setActiveNode(node);
                }}
                onMouseEnter={() => setActiveNode(node)}
                animate={{
                  y: [0, floatOffset, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: floatDuration,
                  ease: 'easeInOut',
                }}
                data-cursor="inspect"
                className={`group relative px-5 sm:px-7 py-3.5 sm:py-4 rounded-full border transition-all text-left flex items-center gap-3 shadow-sm ${
                  isSelected
                    ? 'bg-ink text-paper border-ink scale-110 shadow-lg z-20'
                    : 'bg-paper text-ink border-ink/10 hover:border-lavender hover:shadow-md hover:scale-105 z-10'
                }`}
              >
                {/* Visual Color Dot */}
                <span
                  className="w-2.5 h-2.5 rounded-full transition-transform group-hover:scale-125 shrink-0"
                  style={{ backgroundColor: node.color }}
                />

                <span className="font-display font-bold text-sm sm:text-base tracking-tight">
                  {node.name}
                </span>

                {node.highlight && (
                  <span className={`text-[9px] font-mono px-2 py-0.5 rounded-full uppercase tracking-wider font-semibold ${
                    isSelected ? 'bg-lavender text-ink' : 'bg-lavender/20 text-lavender-dark'
                  }`}>
                    CORE
                  </span>
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Active Node Detail Card */}
        <div className="w-full max-w-xl">
          <AnimatePresence mode="wait">
            {activeNode && (
              <motion.div
                key={activeNode.name}
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="p-6 sm:p-7 rounded-3xl bg-paper border border-ink/10 shadow-soft-card text-left space-y-4 relative overflow-hidden"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: activeNode.color }}
                    />
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-ink">
                      {activeNode.name}
                    </h3>
                  </div>

                  <span className="px-2.5 py-1 rounded-full bg-paper-warm border border-ink/8 text-xs font-mono text-ink-muted uppercase">
                    {activeNode.category}
                  </span>
                </div>

                <p className="font-body text-sm text-ink-muted leading-relaxed">
                  {activeNode.desc}
                </p>

                <div className="pt-3 border-t border-ink/8 flex items-center justify-between text-xs font-mono">
                  <span className="text-ink-subtle uppercase">PROFICIENCY SCORE</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-1.5 bg-paper-warm rounded-full overflow-hidden border border-ink/10">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{
                          width: activeNode.level,
                          backgroundColor: activeNode.color,
                        }}
                      />
                    </div>
                    <span className="font-bold text-ink">{activeNode.level}</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
