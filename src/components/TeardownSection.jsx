import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PhoneDevice from './PhoneDevice';
import { projects } from '../data/portfolioData';
import { Layers, Cpu, Shield, Sparkles, Sliders, Check, RotateCcw } from 'lucide-react';

export default function TeardownSection() {
  const [separation, setSeparation] = useState(0.85);
  const [selectedLayer, setSelectedLayer] = useState('display');
  const [isExploded, setIsExploded] = useState(true);

  const heroProject = projects[0];

  const layersInfo = [
    {
      id: 'glass',
      layerNumber: '01',
      title: 'Ceramic Shield Glass',
      badge: 'FRONT SURFACE',
      accent: '#FFCFB3',
      icon: Sparkles,
      separationValue: 0.35,
      desc: 'Oleophobic anti-reflective optical glass engineered for glare reduction and natural outdoor sunlight readability.',
      specs: ['99.4% Optical Clarity', 'Sub-pixel touch sampling', 'Dynamic Island overlay'],
    },
    {
      id: 'display',
      layerNumber: '02',
      title: '120Hz ProMotion AMOLED',
      badge: 'UI & GESTURES',
      accent: '#F3A6B8',
      icon: Layers,
      separationValue: 0.65,
      desc: 'Variable refresh rate display rendering Flutter Canvas shaders at a locked 120 FPS without dropped frames or stutter.',
      specs: ['120Hz Fluid Impeller', 'Sub-pixel typography rendering', 'Real-time gesture response'],
    },
    {
      id: 'frame',
      layerNumber: '03',
      title: 'Aerospace Titanium Chassis',
      badge: 'HARDWARE & ERGONOMICS',
      accent: '#B99CFF',
      icon: Shield,
      separationValue: 0.85,
      desc: 'Rigid structural chassis with integrated haptic linear actuators for tactile micro-feedback on every button press.',
      specs: ['Vapor chamber cooling', 'Haptic feedback actuator', 'Natural thumb-zone ergonomics'],
    },
    {
      id: 'engine',
      layerNumber: '04',
      title: 'Flutter Impeller Logic Board',
      badge: 'ARCHITECTURE & LOGIC',
      accent: '#54C5F8',
      icon: Cpu,
      separationValue: 1.0,
      desc: 'Modern Clean Architecture core. Riverpod state machines, offline-first Isar database, and native Swift/Kotlin platform bridges.',
      specs: ['AOT compiled native code', 'Feature-first Clean Architecture', 'Zero-latency offline cache'],
    },
  ];

  const handleSelectLayer = (layer) => {
    setSelectedLayer(layer.id);
    if (!isExploded) {
      setIsExploded(true);
    }
    setSeparation(layer.separationValue);
  };

  const handleToggleExplode = () => {
    if (isExploded) {
      setIsExploded(false);
      setSeparation(0);
    } else {
      setIsExploded(true);
      setSeparation(0.85);
    }
  };

  return (
    <section
      id="teardown"
      className="relative min-h-screen w-full py-16 sm:py-24 px-4 sm:px-10 lg:px-16 bg-[#16141A] text-paper select-none overflow-hidden flex flex-col justify-center"
    >
      {/* Background ambient radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-lavender/10 via-flutter/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full space-y-8 sm:space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="flex items-center justify-center gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[11px] font-mono text-lavender tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-lavender animate-pulse" />
              <span>02 / HARDWARE & SOFTWARE DECONSTRUCTION</span>
            </div>
          </div>

          <h2 className="font-display font-bold text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            What’s inside a <em className="font-serif text-lavender not-italic font-normal">great</em> mobile experience?
          </h2>

          {/* 4 Pillars */}
          <div className="flex flex-wrap justify-center gap-2 pt-1 text-[11px] font-mono">
            {[
              { label: 'UI & SENSORY', color: '#FFCFB3' },
              { label: 'PERFORMANCE (120 FPS)', color: '#F3A6B8' },
              { label: 'CLEAN ARCHITECTURE', color: '#B99CFF' },
              { label: 'FLUTTER & IMPELLER', color: '#54C5F8' },
            ].map((pillar) => (
              <span
                key={pillar.label}
                className="px-2.5 sm:px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 text-[10px] sm:text-[11px]"
                style={{ borderColor: `${pillar.color}40` }}
              >
                {pillar.label}
              </span>
            ))}
          </div>

          {/* Mobile Layer Selector Tabs (Quick switcher on mobile) */}
          <div className="flex lg:hidden items-center justify-center gap-2 flex-wrap pt-3">
            {layersInfo.map((layer) => {
              const isSelected = selectedLayer === layer.id;
              return (
                <button
                  key={layer.id}
                  onClick={() => handleSelectLayer(layer)}
                  className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all flex items-center gap-1.5 active:scale-95 ${
                    isSelected
                      ? 'bg-white/15 border text-white font-bold shadow-md'
                      : 'bg-white/5 border border-white/10 text-white/60 hover:text-white'
                  }`}
                  style={{
                    borderColor: isSelected ? layer.accent : undefined,
                    color: isSelected ? layer.accent : undefined,
                  }}
                >
                  <span className="font-bold">{layer.layerNumber}</span>
                  <span>{layer.id.toUpperCase()}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Central 3D Stage: Exploded Phone with Left/Right Dynamic Info */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center pt-2">
          
          {/* Left: Layer Selector Cards (Visible on desktop lg+) */}
          <div className="hidden lg:block lg:col-span-4 space-y-3 text-left">
            <span className="text-[10px] font-mono uppercase tracking-widest text-white/50 block mb-1">
              CLICK ANY LAYER TO INSPECT
            </span>

            {layersInfo.map((layer) => {
              const isSelected = selectedLayer === layer.id;
              return (
                <div
                  key={layer.id}
                  onClick={() => handleSelectLayer(layer)}
                  data-cursor="inspect"
                  className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-white/10 border-lavender shadow-lg scale-[1.02]'
                      : 'bg-white/[0.03] border-white/8 opacity-60 hover:opacity-100 hover:bg-white/5'
                  }`}
                  style={{
                    borderColor: isSelected ? layer.accent : undefined,
                  }}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2.5">
                      <span
                        className="w-6 h-6 rounded-lg flex items-center justify-center text-xs font-mono font-bold"
                        style={{ backgroundColor: `${layer.accent}25`, color: layer.accent }}
                      >
                        {layer.layerNumber}
                      </span>
                      <h4 className="font-display font-semibold text-sm text-white">{layer.title}</h4>
                    </div>
                    <span className="text-[8px] font-mono text-white/50">{layer.badge}</span>
                  </div>
                  <p className="text-xs text-white/70 line-clamp-2 leading-relaxed font-body">
                    {layer.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Center: The Exploded 3D Phone */}
          <div className="w-full lg:col-span-4 flex flex-col items-center justify-center py-2">
            <PhoneDevice
              project={heroProject}
              mode="teardown"
              teardownProgress={separation}
              interactive={false}
              className="scale-[0.88] sm:scale-95 lg:scale-100"
            />
          </div>

          {/* Right: Active Component Deep Dive Specs */}
          <div className="w-full lg:col-span-4 text-left">
            {layersInfo
              .filter((l) => l.id === selectedLayer)
              .map((active) => (
                <div
                  key={active.id}
                  className="p-5 sm:p-6 rounded-3xl bg-white/[0.05] border border-white/10 backdrop-blur-xl space-y-3 sm:space-y-4 shadow-2xl"
                  style={{ borderLeft: `4px solid ${active.accent}` }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-white/50">
                      LAYER {active.layerNumber} SPECIFICATION
                    </span>
                    <span
                      className="px-2.5 py-0.5 rounded-full text-[9px] font-mono font-bold"
                      style={{ backgroundColor: `${active.accent}20`, color: active.accent }}
                    >
                      {active.badge}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg sm:text-xl text-white">
                    {active.title}
                  </h3>

                  <p className="font-body text-xs text-white/80 leading-relaxed">
                    {active.desc}
                  </p>

                  <div className="space-y-1.5 sm:space-y-2 pt-2 border-t border-white/10">
                    <span className="text-[9px] font-mono uppercase text-white/40 block">Key Metrics & Capabilities</span>
                    {active.specs.map((s, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-mono text-white/90">
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: active.accent }} />
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-1">
                    <div className="p-2.5 sm:p-3 rounded-2xl bg-black/40 border border-white/8 font-mono text-[10px] text-white/70">
                      <span className="text-lavender font-bold">ENGINEERING STANDARD:</span>
                      <p className="mt-0.5 text-white/60 leading-normal">
                        Designed with sub-pixel alignment, 120 FPS hardware acceleration, and zero frame drops.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>

        </div>

        {/* Interactive Control Dock: Toggle Explode / Separation Slider */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-2 sm:pt-4 pb-2 border-t border-white/10">
          
          {/* Assemble / Deconstruct Button */}
          <button
            onClick={handleToggleExplode}
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-xs font-mono text-white transition-all active:scale-95 shadow-md"
          >
            {isExploded ? (
              <>
                <RotateCcw size={13} className="text-lavender" />
                <span>ASSEMBLE PHONE</span>
              </>
            ) : (
              <>
                <Sliders size={13} className="text-lavender" />
                <span>DECONSTRUCT 3D LAYERS</span>
              </>
            )}
          </button>

          {/* Interactive Separation Slider */}
          <div className="flex items-center gap-3 bg-white/5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/10">
            <span className="text-[10px] font-mono text-white/50 uppercase">Separation:</span>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={separation}
              onChange={(e) => {
                const val = parseFloat(e.target.value);
                setSeparation(val);
                setIsExploded(val > 0.05);
              }}
              className="w-28 sm:w-44 accent-[#B99CFF] cursor-pointer"
            />
            <span className="text-xs font-mono font-bold text-lavender w-10 text-right">
              {Math.round(separation * 100)}%
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
