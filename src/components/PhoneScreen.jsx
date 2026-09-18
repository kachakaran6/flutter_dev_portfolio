import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Eye,
  EyeOff,
  Plus,
  Send,
  ArrowUpRight,
  TrendingUp,
  Droplets,
  Plane,
  Mic,
  Sparkles,
  Wifi,
  Battery,
  Layers,
  CreditCard,
  Flame,
} from 'lucide-react';

/**
 * PhoneScreen
 * Clean, production-grade mobile app UI for Nensi Antala's portfolio.
 * Minimal text, high visual polish, elegant typography, and authentic mobile ergonomics.
 */
export default function PhoneScreen({ project, interactive = true, teardownProgress = 0 }) {
  const [balanceHidden, setBalanceHidden] = useState(false);
  const [waterAmount, setWaterAmount] = useState(2.4);
  const [isRecording, setIsRecording] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  const p = project || { id: 'finflow', accent: 'lavender' };

  return (
    <div className="w-full h-full bg-[#111015] text-white flex flex-col justify-between overflow-hidden relative select-none font-body text-left">
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-gradient-to-b from-[#B99CFF]/10 via-transparent to-[#54C5F8]/5" />

      {/* ======================================================== */}
      {/* 1. TOP STATUS BAR & DYNAMIC ISLAND                       */}
      {/* ======================================================== */}
      <div className="pt-2.5 px-5 pb-1 flex items-center justify-between z-20 shrink-0 text-[11px] font-mono tracking-tight text-white/80 relative">
        <span className="font-semibold">9:41</span>

        {/* Authentic iPhone Dynamic Island Pill (Zero clutter) */}
        <div className="w-24 h-4.5 bg-black rounded-full flex items-center justify-end px-2.5 shadow-inner border border-white/10">
          <div className="w-2 h-2 rounded-full bg-[#181622] border border-white/15 flex items-center justify-center">
            <div className="w-1 h-1 rounded-full bg-blue-500/80" />
          </div>
        </div>

        {/* Status Indicators */}
        <div className="flex items-center gap-2 text-white/70">
          <Wifi size={12} />
          <Battery size={14} className="text-emerald-400" />
        </div>
      </div>

      {/* Screen Body Content by Project ID */}
      <div className="flex-1 px-4 py-2 overflow-y-auto overflow-x-hidden space-y-3 relative z-10 scrollbar-none">
        
        {/* ======================================================== */}
        {/* PROJECT 01: FINFLOW (Clean Minimalist Fintech)           */}
        {/* ======================================================== */}
        {p.id === 'finflow' && (
          <div className="space-y-3 pt-1">
            
            {/* Header / Greeting */}
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-semibold text-white tracking-tight">Hi, Nensi ✨</h4>
              </div>

              <button
                onClick={() => setBalanceHidden(!balanceHidden)}
                className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:text-white transition-all active:scale-90"
                title="Toggle Balance Visibility"
              >
                {balanceHidden ? <EyeOff size={13} /> : <Eye size={13} />}
              </button>
            </div>

            {/* Total Balance Card */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-[#241F2E] via-[#1C1824] to-[#14121A] border border-[#B99CFF]/25 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#B99CFF]/10 rounded-full blur-xl pointer-events-none" />
              
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-mono text-white/60 tracking-wider uppercase">
                  Total Balance
                </span>
                <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-medium">
                  +14.2%
                </span>
              </div>

              <div className="mt-2 mb-3">
                <span className="text-2xl font-display font-bold tracking-tight text-white block">
                  {balanceHidden ? '••••••••' : '₹ 42,560.00'}
                </span>
              </div>

              {/* Minimalist Visual Trend Line */}
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden flex gap-1">
                <div className="h-full w-2/3 bg-gradient-to-r from-[#B99CFF] to-[#54C5F8] rounded-full" />
                <div className="h-full w-1/3 bg-white/10 rounded-full" />
              </div>
            </div>

            {/* Quick Action Pills */}
            <div className="grid grid-cols-3 gap-2">
              {[
                { label: 'Send', icon: Send, color: '#B99CFF', bg: 'bg-[#B99CFF]/20' },
                { label: 'Receive', icon: Plus, color: '#10B981', bg: 'bg-emerald-500/20' },
                { label: 'Analytics', icon: TrendingUp, color: '#54C5F8', bg: 'bg-[#54C5F8]/20' },
              ].map((act) => {
                const Icon = act.icon;
                return (
                  <div
                    key={act.label}
                    className="py-2.5 px-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 flex flex-col items-center justify-center gap-1.5 transition-all active:scale-95 cursor-pointer"
                  >
                    <div
                      className={`w-7 h-7 rounded-full ${act.bg} flex items-center justify-center`}
                      style={{ color: act.color }}
                    >
                      <Icon size={13} />
                    </div>
                    <span className="text-[10px] font-medium text-white/80">{act.label}</span>
                  </div>
                );
              })}
            </div>

            {/* Recent Activity */}
            <div className="space-y-1.5 pt-1">
              <div className="flex justify-between items-center text-[10px] font-mono text-white/50 uppercase">
                <span>Recent Activity</span>
              </div>

              {[
                { name: 'Apple Developer', amt: '-₹8,700', icon: '' },
                { name: 'Client Payout', amt: '+₹45,000', icon: '✦', green: true },
              ].map((tx, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.04] border border-white/5 text-[11px]"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-lg bg-white/10 flex items-center justify-center text-xs">
                      {tx.icon}
                    </span>
                    <p className="font-medium text-white/90 text-xs">{tx.name}</p>
                  </div>
                  <span
                    className={`font-mono text-xs font-semibold ${
                      tx.green ? 'text-emerald-300' : 'text-white/80'
                    }`}
                  >
                    {tx.amt}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* PROJECT 02: AURA HEALTH                                  */}
        {/* ======================================================== */}
        {p.id === 'aura-health' && (
          <div className="space-y-3 pt-1">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-semibold text-white">Daily Focus</h4>
              <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#F3A6B8]/20 text-[#F3A6B8] text-[10px] font-mono font-bold">
                <Flame size={11} />
                <span>18 Days</span>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-gradient-to-b from-[#2A1E24] to-[#181317] border border-[#F3A6B8]/25 flex items-center justify-around relative">
              <div className="relative w-20 h-20 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="8" />
                  <circle
                    cx="50" cy="50" r="40" fill="none" stroke="#F3A6B8" strokeWidth="8"
                    strokeDasharray="251" strokeDashoffset="45" strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="text-sm font-mono font-bold text-white">88%</span>
                </div>
              </div>

              <div className="space-y-1.5 text-[10px] font-mono">
                <div className="flex items-center gap-1.5 text-[#F3A6B8]">
                  <span className="w-2 h-2 rounded-full bg-[#F3A6B8]" />
                  <span>Sleep: 7.8 hrs</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#54C5F8]">
                  <span className="w-2 h-2 rounded-full bg-[#54C5F8]" />
                  <span>Hydration: {waterAmount.toFixed(1)}L</span>
                </div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#54C5F8]/20 text-[#54C5F8] flex items-center justify-center">
                  <Droplets size={14} />
                </div>
                <div>
                  <p className="text-xs font-medium text-white/90">Hydration</p>
                  <p className="text-[9px] font-mono text-white/50">{waterAmount.toFixed(1)}L Target</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setWaterAmount((prev) => Math.max(0.5, prev - 0.25))}
                  className="w-6 h-6 rounded bg-white/10 text-white/80 hover:bg-white/20 flex items-center justify-center text-xs font-mono"
                >
                  -
                </button>
                <button
                  onClick={() => setWaterAmount((prev) => Math.min(5.0, prev + 0.25))}
                  className="w-6 h-6 rounded bg-[#54C5F8]/30 text-[#54C5F8] hover:bg-[#54C5F8]/50 flex items-center justify-center text-xs font-mono"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* PROJECT 03: VOYAGE NOMAD                                 */}
        {/* ======================================================== */}
        {p.id === 'voyage-nomad' && (
          <div className="space-y-3 pt-1">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-semibold text-white">Flight Companion</h4>
              <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300">
                AF 1420
              </span>
            </div>

            <div className="p-3.5 rounded-2xl bg-gradient-to-b from-[#28211E] to-[#1C1715] border border-[#FFCFB3]/30 shadow-lg relative">
              <div className="flex items-center justify-between py-2">
                <div>
                  <span className="text-xl font-display font-bold text-white">DEL</span>
                  <p className="text-[9px] font-mono text-white/50">Delhi T3</p>
                </div>
                <div className="flex flex-col items-center">
                  <Plane size={14} className="text-[#FFCFB3] rotate-45" />
                  <span className="text-[8px] font-mono text-white/40 mt-1">Direct</span>
                </div>
                <div className="text-right">
                  <span className="text-xl font-display font-bold text-white">CDG</span>
                  <p className="text-[9px] font-mono text-white/50">Paris 2E</p>
                </div>
              </div>

              <div className="pt-2 border-t border-dashed border-white/15 flex justify-between text-[10px] font-mono text-white/70">
                <span>GATE: <strong className="text-white">14B</strong></span>
                <span>SEAT: <strong className="text-[#FFCFB3]">12A</strong></span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-base">💶</span>
                <p className="text-xs font-semibold text-white/90">EUR / INR Live Peg</p>
              </div>
              <span className="text-xs font-mono font-bold text-[#FFCFB3]">1 € = ₹89.40</span>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* PROJECT 04: LUMINA AI                                    */}
        {/* ======================================================== */}
        {p.id === 'lumina-ai' && (
          <div className="space-y-3 pt-1">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-semibold text-white">Voice Assistant</h4>
              <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-[#54C5F8]/20 text-[#54C5F8]">
                120 FPS
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-gradient-to-b from-[#13232C] to-[#0F171D] border border-[#54C5F8]/30 text-center relative overflow-hidden">
              <div className="flex items-center justify-center gap-1.5 h-16 my-2">
                {[45, 80, 25, 95, 60, 100, 75, 30, 85, 40].map((h, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      height: isRecording ? [10, h * 0.8, 15] : [h * 0.3, h, h * 0.4],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 0.8 + (i % 4) * 0.2,
                      ease: 'easeInOut',
                    }}
                    className="w-1.5 bg-gradient-to-t from-[#54C5F8] to-[#B99CFF] rounded-full"
                  />
                ))}
              </div>

              <div className="pt-2 flex justify-center">
                <button
                  onClick={() => setIsRecording(!isRecording)}
                  className={`px-3.5 py-1 rounded-full text-[10px] font-mono flex items-center gap-1.5 transition-all ${
                    isRecording
                      ? 'bg-rose-500 text-white animate-pulse'
                      : 'bg-[#54C5F8]/20 text-[#54C5F8] hover:bg-[#54C5F8]/40'
                  }`}
                >
                  <Mic size={11} />
                  <span>{isRecording ? 'Listening...' : 'Tap to Speak'}</span>
                </button>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* ======================================================== */}
      {/* 2. BOTTOM NAVIGATION BAR & HOME INDICATOR                */}
      {/* ======================================================== */}
      <div className="relative z-20 shrink-0">
        <div className="p-2 border-t border-white/10 bg-black/60 backdrop-blur-md flex items-center justify-around">
          {[
            { id: 'home', icon: Layers, label: 'Home' },
            { id: 'analytics', icon: TrendingUp, label: 'Analytics' },
            { id: 'wallet', icon: CreditCard, label: 'Cards' },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center gap-0.5 text-[9px] font-mono transition-colors ${
                  isActive ? 'text-[#B99CFF]' : 'text-white/40 hover:text-white/70'
                }`}
              >
                <Icon size={14} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Home Indicator Bar */}
        <div className="pb-1 pt-0.5 flex justify-center bg-black/60">
          <div className="w-24 h-1 bg-white/30 rounded-full" />
        </div>
      </div>
    </div>
  );
}
