import React, { useEffect } from 'react';
import Navigation from './components/Navigation';
import CustomCursor from './components/CustomCursor';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import TechStackSection from './components/TechStackSection';
import ExperienceSection from './components/ExperienceSection';
import SelectedWorkSection from './components/SelectedWorkSection';
import PipelineSection from './components/PipelineSection';
import MetricsAndProofSection from './components/MetricsAndProofSection';
import ContactSection from './components/ContactSection';

export default function App() {
  return (
    <div className="relative min-h-screen bg-paper text-ink selection:bg-lavender selection:text-ink overflow-x-hidden font-body antialiased">
      {/* Subtle paper noise overlay */}
      <div className="paper-noise" aria-hidden="true" />

      {/* Interactive Custom Magnetic Cursor (Desktop Only) */}
      <CustomCursor />

      {/* Global Fixed Header Navigation */}
      <Navigation />

      {/* Main Narrative Sections */}
      <main id="top" className="relative z-10">
        {/* 01: Hero Section */}
        <HeroSection />

        {/* 02: Engineering Philosophy & Interactive Capability Chips */}
        <AboutSection />

        {/* 04: The Mobile Engine Tech Stack Cloud */}
        <TechStackSection />

        {/* 05: Mobile OS Activity Timeline Experience */}
        <ExperienceSection />

        {/* 06: Selected Work Centerpiece with Sticky Morphing Phone */}
        <SelectedWorkSection />

        {/* 07: Development Pipeline Lifecycle */}
        <PipelineSection />

        {/* 08: Shipped Metrics, GitHub Proof & Education */}
        <MetricsAndProofSection />

        {/* 09: Contact Finale with Reassembled Phone */}
        <ContactSection />
      </main>
    </div>
  );
}
