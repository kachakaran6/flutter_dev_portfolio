import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PhoneDevice from './PhoneDevice';
import { personalInfo, projects } from '../data/portfolioData';
import { playClickSound } from '../utils/audio';
import { Mail, Copy, Check, ArrowUpRight, Sparkles, ArrowUp } from 'lucide-react';

const GithubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const heroProject = projects[0];

  const handleCopyEmail = () => {
    playClickSound();
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const scrollToTop = () => {
    playClickSound();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen w-full pt-28 pb-12 px-6 sm:px-10 lg:px-16 bg-[#EDE7F6] text-ink overflow-hidden select-none"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-lavender/30 via-rose/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Main Contact Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Reassembled Phone Return (Cols 1-5) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center order-2 lg:order-1">
            <div className="relative">
              <PhoneDevice
                project={heroProject}
                mode="contact"
                teardownProgress={0}
                interactive={true}
                className="scale-95 sm:scale-105"
              />

              {/* Reassembled Magnet Badge */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-ink text-paper text-[10px] font-mono flex items-center gap-1.5 shadow-md pointer-events-none whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>PHONE REASSEMBLED · MISSION READY</span>
              </div>
            </div>
          </div>

          {/* Right: Contact Call to Action & Inquiries (Cols 6-12) */}
          <div className="lg:col-span-7 space-y-8 text-left order-1 lg:order-2">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-paper border border-ink/8 text-xs font-mono text-ink-muted uppercase tracking-widest">
                <span>09 / REACH OUT</span>
              </div>

              <h2 className="font-display font-bold text-5xl sm:text-7xl text-ink tracking-tight leading-[0.95]">
                Have an idea?<br />
                <em className="font-serif text-lavender-dark not-italic font-normal">Let’s build it.</em>
              </h2>

              <p className="font-body text-base sm:text-lg text-ink-muted max-w-xl leading-relaxed">
                Available for high-impact mobile products, design-system implementation, 
                and Flutter architecture consultations worldwide.
              </p>
            </div>

            {/* Direct Email Action Container */}
            <div className="p-6 sm:p-8 rounded-3xl bg-paper border border-ink/10 shadow-soft-card space-y-6 max-w-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  onClick={playClickSound}
                  data-cursor="email"
                  className="font-display font-bold text-xl sm:text-2xl text-ink hover:text-lavender-dark transition-colors flex items-center gap-2"
                >
                  <Mail size={22} className="text-lavender-dark" />
                  <span>{personalInfo.email}</span>
                </a>

                <button
                  onClick={handleCopyEmail}
                  data-cursor="copy"
                  className="px-4 py-2 rounded-full bg-paper-warm hover:bg-paper-border/50 border border-ink/10 text-xs font-mono font-semibold text-ink flex items-center gap-1.5 transition-all active:scale-95 w-fit"
                >
                  {copied ? <Check size={13} className="text-emerald-600" /> : <Copy size={13} />}
                  <span>{copied ? 'COPIED TO CLIPBOARD' : 'COPY EMAIL'}</span>
                </button>
              </div>

              <div className="pt-4 border-t border-ink/8 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${personalInfo.email}?subject=Project%20Inquiry`}
                  onClick={playClickSound}
                  data-cursor="send"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink text-paper font-mono text-xs font-bold hover:bg-ink-light transition-all shadow-md active:scale-95"
                >
                  <span>START A CONVERSATION</span>
                  <ArrowUpRight size={14} className="text-lavender" />
                </a>

                <div className="flex items-center gap-1 text-xs font-mono text-ink-subtle px-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Typical response time &lt; 12 hours</span>
                </div>
              </div>
            </div>

            {/* Social Channels Strip */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-mono uppercase tracking-widest text-ink-subtle block">
                FIND HER ONLINE
              </span>
              <div className="flex flex-wrap gap-4 font-mono text-xs text-ink font-semibold">
                {[
                  { name: 'GitHub', url: personalInfo.github, icon: GithubIcon },
                  { name: 'LinkedIn', url: personalInfo.linkedin, icon: LinkedinIcon },
                  { name: 'Twitter / X', url: personalInfo.twitter, icon: TwitterIcon },
                ].map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={playClickSound}
                      data-cursor="open"
                      className="px-4 py-2 rounded-full bg-paper border border-ink/10 hover:border-lavender hover:text-lavender-dark transition-all flex items-center gap-2 shadow-2xs"
                    >
                      <Icon size={14} />
                      <span>{social.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

        {/* ======================================================== */}
        {/* FOOTER BAR                                               */}
        {/* ======================================================== */}
        <footer className="pt-12 border-t border-ink/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono text-ink-muted">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 beacon-active" />
            <span className="text-ink font-semibold">{personalInfo.name}</span>
            <span>— 2026</span>
          </div>

          <div className="flex items-center gap-6">
            <span>DESIGNED FOR MOBILE · BUILT WITH FLUTTER</span>
            <button
              onClick={scrollToTop}
              data-cursor="top"
              aria-label="Back to Top"
              className="w-9 h-9 rounded-full bg-paper hover:bg-paper-warm border border-ink/10 flex items-center justify-center text-ink transition-all active:scale-95 shadow-2xs"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </footer>

      </div>
    </section>
  );
}
