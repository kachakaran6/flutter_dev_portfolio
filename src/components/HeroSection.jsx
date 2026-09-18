import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Smartphone, Code, Layers } from 'lucide-react';
import PhoneDevice from './PhoneDevice';
import { personalInfo, projects } from '../data/portfolioData';
import { playClickSound } from '../utils/audio';

export default function HeroSection({ onExploreClick }) {
  const heroProject = projects[0]; // FinFlow

  return (
    <section
      id="top"
      className="relative min-h-screen w-full flex items-center justify-center pt-24 pb-16 px-6 sm:px-10 lg:px-16 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-lavender/15 via-rose/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-flutter/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Editorial Copy (Cols 1-7) */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-6 lg:pr-6 z-10">
          
          {/* Eyebrow / Availability Status */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-paper-warm border border-ink/10 text-xs font-mono text-ink tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-500 beacon-active" />
              <span>FLUTTER ENGINEER · MOBILE · UI</span>
            </div>
            <span className="hidden sm:inline-block text-xs font-mono text-ink-subtle">
              {personalInfo.experienceYears} YEARS EXP
            </span>
          </motion.div>

          {/* Huge Editorial Headline */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-1"
          >
            <h1 className="font-display font-bold text-5xl sm:text-7xl lg:text-[5.5rem] tracking-tight text-ink leading-[0.92]">
              SHE BUILDS<br />
              <span className="text-gradient-editorial">DIGITAL</span><br />
              EXPERIENCES<span className="text-lavender">.</span>
            </h1>
          </motion.div>

          {/* Subtitle / Philosophy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-base sm:text-lg text-ink-muted max-w-xl leading-relaxed"
          >
            Bridging pixel-perfect tactile design with high-performance Flutter engineering.
            Crafting mobile products where state flows predictably and 120 FPS gesture physics feel effortless.
          </motion.p>

          {/* Call to Actions & Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-2 flex flex-wrap items-center gap-4"
          >
            <a
              href="#work"
              onClick={() => {
                playClickSound();
                if (onExploreClick) onExploreClick();
              }}
              data-cursor="view work"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-ink text-paper font-mono text-xs font-semibold tracking-wider hover:bg-ink-light transition-all shadow-md active:scale-95 group"
            >
              <span>VIEW HER WORK</span>
              <ArrowDown size={15} className="text-lavender group-hover:translate-y-0.5 transition-transform" />
            </a>

            <a
              href="#about"
              data-cursor="about"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-paper-warm hover:bg-paper-border/50 border border-ink/10 text-ink font-mono text-xs font-medium transition-all"
            >
              <Sparkles size={14} className="text-lavender" />
              <span>ABOUT HER CRAFT</span>
            </a>
          </motion.div>

          {/* Highlights Mini Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="pt-6 grid grid-cols-3 gap-4 border-t border-ink/8 text-left max-w-lg"
          >
            <div>
              <span className="block font-display text-2xl font-bold text-ink">04+</span>
              <span className="text-[11px] font-mono text-ink-subtle uppercase tracking-wider">Production Apps</span>
            </div>
            <div>
              <span className="block font-display text-2xl font-bold text-ink">99.8%</span>
              <span className="text-[11px] font-mono text-ink-subtle uppercase tracking-wider">Crash-Free Rate</span>
            </div>
            <div>
              <span className="block font-display text-2xl font-bold text-ink">120 FPS</span>
              <span className="text-[11px] font-mono text-ink-subtle uppercase tracking-wider">Impeller Smooth</span>
            </div>
          </motion.div>
        </div>

        {/* Right Floating 3D Phone Hero (Cols 8-12) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="lg:col-span-5 flex flex-col items-center justify-center relative z-20"
        >
          {/* Interactive Phone Model */}
          <div className="relative group">
            <PhoneDevice
              project={heroProject}
              mode="hero"
              teardownProgress={0}
              interactive={true}
            />
          </div>
        </motion.div>

      </div>

      {/* Bottom Sticky Indicator */}
      <div className="absolute bottom-4 left-6 sm:left-10 flex items-center gap-4 text-[10px] font-mono text-ink-subtle uppercase tracking-widest">
        <span>01 / 07</span>
        <span className="w-12 h-[1px] bg-ink/15" />
        <span>HERO OVERVIEW</span>
      </div>
    </section>
  );
}
