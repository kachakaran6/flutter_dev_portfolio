import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import PhoneScreen from './PhoneScreen';
import { Cpu, Layers, Sparkles, Zap, Shield, Eye } from 'lucide-react';

export default function PhoneDevice({
  project,
  mode = 'hero',
  teardownProgress = 0,
  isTransitioning = false,
  interactive = true,
  className = '',
}) {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse tilt tracking in 3D
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200, mass: 0.8 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Dynamic 3D tilt
  const tiltX = useTransform(smoothMouseY, [-0.5, 0.5], [12, -12]);
  const tiltY = useTransform(smoothMouseX, [-0.5, 0.5], [-14, 14]);
  const glossX = useTransform(smoothMouseX, [-0.5, 0.5], [20, 80]);
  const glossY = useTransform(smoothMouseY, [-0.5, 0.5], [20, 80]);

  // Handle mouse move over the phone for 3D tilt
  const handleMouseMove = (e) => {
    if (!containerRef.current || mode === 'teardown') return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  // Separation distance calculated based on mode and teardownProgress
  const tear = Math.max(0, Math.min(1, teardownProgress));

  // Keep phone normal and assembled
  const activeTear = tear;

  // Z-axis and X/Y separation offsets for each exploded layer
  const glassZ = activeTear * 90;
  const glassY = activeTear * -35;
  const glassRotateX = activeTear * -6;

  const screenZ = activeTear * 35;
  const screenY = activeTear * -10;

  const frameZ = activeTear * -30;
  const frameY = activeTear * 15;

  const engineZ = activeTear * -95;
  const engineY = activeTear * 45;
  const engineRotateX = activeTear * 8;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={`relative select-none preserve-3d perspective-1500 flex items-center justify-center w-[280px] h-[560px] sm:w-[320px] sm:h-[650px] ${className}`}
    >
      {/* 3D Rotator Wrapper */}
      <motion.div
        className="w-full h-full relative preserve-3d flex items-center justify-center transition-transform duration-300 ease-out"
        style={{
          rotateX: mode === 'teardown' ? 18 : tiltX,
          rotateY: mode === 'teardown' ? -22 : tiltY,
          scale: mode === 'contact' ? 1.05 : 1,
        }}
        animate={{
          y: mode === 'hero' && !isHovered ? [0, -12, 0] : 0,
        }}
        transition={{
          y: { repeat: Infinity, duration: 6, ease: 'easeInOut' },
        }}
      >
        {/* Deep Floating Shadow */}
        <motion.div
          className="absolute -bottom-12 w-[85%] h-12 bg-ink/35 rounded-full blur-2xl pointer-events-none -z-50"
          animate={{
            scale: mode === 'hero' && !isHovered ? [0.9, 1.05, 0.9] : 1,
            opacity: activeTear > 0.1 ? 0.2 : 0.45,
          }}
          transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
        />

        {/* ======================================================== */}
        {/* LAYER 4: ENGINE / MOTHERBOARD & FLUTTER IMPELLER LOGIC  */}
        {/* ======================================================== */}
        <motion.div
          className="absolute inset-0 rounded-[46px] border border-flutter/40 bg-[#0E0D12] overflow-hidden shadow-2xl p-4 flex flex-col justify-between"
          style={{
            transform: `translate3d(0px, ${engineY}px, ${engineZ}px) rotateX(${engineRotateX}deg)`,
            opacity: activeTear > 0.05 ? 1 : 0,
            pointerEvents: activeTear > 0.05 ? 'auto' : 'none',
            zIndex: 10,
          }}
          transition={{ type: 'spring', damping: 20, stiffness: 180 }}
        >
          {/* Circuit Substrate Pattern */}
          <div className="absolute inset-0 opacity-25 pointer-events-none bg-[radial-gradient(#54C5F8_1px,transparent_1px)] [background-size:12px_12px]" />
          
          {/* Top Engine Specs */}
          <div className="relative z-10 flex justify-between items-center text-[10px] font-mono text-flutter">
            <span className="flex items-center gap-1">
              <Cpu size={12} className="animate-spin-slow text-[#54C5F8]" />
              IMPELLER SILICON
            </span>
            <span className="px-1.5 py-0.5 rounded bg-flutter/10 border border-flutter/30 text-[8px]">
              120 FPS AOT
            </span>
          </div>

          {/* Central Flutter Engine Silicon Chip */}
          <div className="relative z-10 my-auto flex flex-col items-center justify-center p-4 rounded-2xl bg-gradient-to-br from-[#1C1A24] to-[#121118] border border-flutter/40 shadow-inner">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-tr from-flutter/30 via-lavender/40 to-rose/30 flex items-center justify-center border border-white/20 relative shadow-lg">
              <span className="text-2xl font-bold tracking-tighter text-white drop-shadow-md">
                ⚡
              </span>
              <div className="absolute -inset-1 rounded-xl bg-flutter/20 blur-sm -z-10 animate-pulse" />
            </div>
            <span className="mt-3 text-xs font-mono font-bold tracking-wider text-white">
              FLUTTER 3.x
            </span>
            <span className="text-[9px] font-mono text-white/50 text-center mt-0.5">
              Impeller Shader Engine · Dart AOT
            </span>

            {/* Architecture Bus Tracks */}
            <div className="w-full grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-white/10 text-center font-mono text-[8px] text-white/60">
              <div className="p-1 rounded bg-white/5 border border-white/5">
                <strong className="block text-lavender">RIVERPOD</strong>
                <span>State Bus</span>
              </div>
              <div className="p-1 rounded bg-white/5 border border-white/5">
                <strong className="block text-flutter">CHANNELS</strong>
                <span>Swift / Kotlin</span>
              </div>
              <div className="p-1 rounded bg-white/5 border border-white/5">
                <strong className="block text-rose">ISAR DB</strong>
                <span>Sub-5ms</span>
              </div>
            </div>
          </div>

          {/* Bottom Battery & Charging Subsystem */}
          <div className="relative z-10 pt-2 border-t border-white/10 flex justify-between items-center text-[9px] font-mono text-white/40">
            <span>CLEAN ARCHITECTURE CORE</span>
            <span className="text-emerald-400 font-bold">100% HEALTH</span>
          </div>

          {/* Exploded Label Callout */}
          {activeTear > 0.25 && (
            <div className="absolute -left-36 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-ink/90 border border-flutter/40 backdrop-blur-md text-paper text-[10px] font-mono shadow-xl hidden md:flex flex-col gap-0.5">
              <span className="text-flutter font-bold flex items-center gap-1">
                <Zap size={10} /> LAYER 04 · ENGINE
              </span>
              <span className="text-paper/70">Flutter Impeller GPU Pipeline</span>
              <div className="w-8 h-[1px] bg-flutter absolute -right-8 top-1/2" />
            </div>
          )}
        </motion.div>

        {/* ======================================================== */}
        {/* LAYER 3: FRAME / TITANIUM MIDFRAME & CHASSIS            */}
        {/* ======================================================== */}
        <motion.div
          className="absolute inset-0 rounded-[48px] border-[3px] border-[#383344] bg-gradient-to-b from-[#221F29] via-[#1B1822] to-[#14121A] shadow-2xl p-1 pointer-events-none"
          style={{
            transform: `translate3d(0px, ${frameY}px, ${frameZ}px)`,
            opacity: activeTear > 0.05 ? 0.9 : 1,
            zIndex: 20,
          }}
          transition={{ type: 'spring', damping: 20, stiffness: 180 }}
        >
          {/* External Hardware Buttons Simulated on the Chassis */}
          <div className="absolute -left-[5px] top-28 w-[3px] h-9 bg-[#4D465C] rounded-l" />
          <div className="absolute -left-[5px] top-40 w-[3px] h-12 bg-[#4D465C] rounded-l" />
          <div className="absolute -left-[5px] top-56 w-[3px] h-12 bg-[#4D465C] rounded-l" />
          <div className="absolute -right-[5px] top-36 w-[3px] h-16 bg-[#4D465C] rounded-r" />

          {/* Internal Midframe Chamfer */}
          <div className="w-full h-full rounded-[44px] border border-white/10 flex flex-col justify-between p-3 relative overflow-hidden">
            <div className="flex justify-between items-center text-[8px] font-mono text-white/30 px-2 pt-1">
              <span>TITANIUM MIDFRAME</span>
              <span>AEROSPACE GRADE</span>
            </div>
            
            {/* Center cutout for display grounding */}
            <div className="m-auto w-3/4 h-3/5 rounded-3xl border border-dashed border-white/10 flex items-center justify-center">
              <span className="text-[9px] font-mono text-white/20 tracking-widest uppercase">
                Structural Chassis Core
              </span>
            </div>

            <div className="flex justify-center items-center pb-1">
              <div className="w-12 h-1 bg-white/20 rounded-full" />
            </div>
          </div>

          {/* Exploded Label Callout */}
          {activeTear > 0.25 && (
            <div className="absolute -right-40 top-2/3 p-2 rounded-xl bg-ink/90 border border-lavender/40 backdrop-blur-md text-paper text-[10px] font-mono shadow-xl hidden md:flex flex-col gap-0.5">
              <span className="text-lavender font-bold flex items-center gap-1">
                <Shield size={10} /> LAYER 03 · CHASSIS
              </span>
              <span className="text-paper/70">Solid Ergonomics & Thermal Sync</span>
              <div className="w-12 h-[1px] bg-lavender absolute -left-12 top-1/2" />
            </div>
          )}
        </motion.div>

        {/* ======================================================== */}
        {/* LAYER 2: DISPLAY / 120HZ AMOLED SCREEN & FLUTTER APP UI */}
        {/* ======================================================== */}
        <motion.div
          className="absolute inset-[4px] rounded-[42px] overflow-hidden bg-black shadow-2xl border border-white/15"
          style={{
            transform: `translate3d(0px, ${screenY}px, ${screenZ}px)`,
            zIndex: 30,
          }}
          transition={{ type: 'spring', damping: 20, stiffness: 180 }}
        >
          {/* Render the dynamic interactive Flutter Screen */}
          <div className="w-full h-full relative">
            <PhoneScreen
              project={project}
              interactive={interactive && activeTear < 0.2}
              teardownProgress={activeTear}
            />

            {/* Special Contact Finale Screen Overlay if in Contact Mode */}
            {mode === 'contact' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-br from-[#1B1822]/95 via-[#17151A]/95 to-[#0F0E13]/98 backdrop-blur-sm z-30 flex flex-col items-center justify-center p-6 text-center select-none"
              >
                <div className="w-12 h-12 rounded-2xl bg-lavender/20 border border-lavender/40 flex items-center justify-center mb-4 text-lavender shadow-glow-lavender">
                  <Sparkles size={22} className="animate-pulse" />
                </div>
                <span className="text-[10px] font-mono text-lavender uppercase tracking-widest mb-1.5">
                  Let's Connect
                </span>
                <h3 className="text-2xl font-display font-bold text-white tracking-tight leading-tight">
                  Let's build<br />something<br />
                  <em className="font-serif text-lavender not-italic font-normal">beautiful.</em>
                </h3>
                <p className="text-xs text-white/60 mt-3 font-mono max-w-[200px]">
                  Ready to craft production mobile experiences.
                </p>

                <div className="mt-6 flex flex-col items-center gap-2 w-full">
                  <a
                    href="mailto:hello@nensi.dev"
                    className="w-full py-2.5 rounded-full bg-lavender text-ink font-mono text-xs font-bold hover:bg-lavender-light transition-all flex items-center justify-center gap-1.5 shadow-md active:scale-95"
                  >
                    <span>LET'S TALK</span>
                    <span>↗</span>
                  </a>
                  <span className="text-[9px] font-mono text-white/40">hello@nensi.dev</span>
                </div>
              </motion.div>
            )}
          </div>

          {/* Exploded Label Callout */}
          {activeTear > 0.25 && (
            <div className="absolute -left-44 top-1/4 p-2 rounded-xl bg-ink/90 border border-rose/40 backdrop-blur-md text-paper text-[10px] font-mono shadow-xl hidden md:flex flex-col gap-0.5">
              <span className="text-rose font-bold flex items-center gap-1">
                <Layers size={10} /> LAYER 02 · DISPLAY
              </span>
              <span className="text-paper/70">120Hz AMOLED & Gestures</span>
              <div className="w-16 h-[1px] bg-rose absolute -right-16 top-1/2" />
            </div>
          )}
        </motion.div>

        {/* ======================================================== */}
        {/* LAYER 1: FRONT CERAMIC SHIELD GLASS & SPECULAR REFLECTION*/}
        {/* ======================================================== */}
        <motion.div
          className="absolute inset-0 rounded-[48px] pointer-events-none border border-white/30 overflow-hidden"
          style={{
            transform: `translate3d(0px, ${glassY}px, ${glassZ}px) rotateX(${glassRotateX}deg)`,
            opacity: activeTear > 0.05 ? 0.85 : 0.4,
            zIndex: 40,
            background: activeTear > 0.05 ? 'rgba(255, 255, 255, 0.08)' : 'transparent',
            boxShadow: activeTear > 0.05 ? '0 20px 40px rgba(0,0,0,0.4), inset 0 0 20px rgba(255,255,255,0.2)' : 'none',
          }}
          transition={{ type: 'spring', damping: 20, stiffness: 180 }}
        >
          {/* Dynamic Specular Gloss Flare responding to mouse/scroll */}
          <div
            className="absolute -inset-[100%] transition-opacity duration-300 pointer-events-none"
            style={{
              background: `radial-gradient(circle at ${glossX.get() || 40}% ${glossY.get() || 30}%, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.05) 30%, transparent 60%)`,
            }}
          />

          {/* Top Dynamic Island Silhouette on Glass (visible when separated) */}
          {activeTear > 0.05 && (
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-4.5 rounded-full border border-white/20 bg-black/40 backdrop-blur-md flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-[#1A1820] border border-white/20 flex items-center justify-center">
                <div className="w-1 h-1 rounded-full bg-blue-400/80" />
              </div>
            </div>
          )}

          {/* Exploded Label Callout */}
          {activeTear > 0.25 && (
            <div className="absolute -right-44 top-1/6 p-2 rounded-xl bg-ink/90 border border-peach/40 backdrop-blur-md text-paper text-[10px] font-mono shadow-xl hidden md:flex flex-col gap-0.5">
              <span className="text-peach font-bold flex items-center gap-1">
                <Eye size={10} /> LAYER 01 · GLASS
              </span>
              <span className="text-paper/70">Anti-Reflective Ceramic Shield</span>
              <div className="w-16 h-[1px] bg-peach absolute -left-16 top-1/2" />
            </div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}
