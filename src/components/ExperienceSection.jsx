import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../data/portfolioData';
import { ArrowUpRight, CheckCircle2, MapPin, Calendar, Smartphone } from 'lucide-react';
import { playClickSound } from '../utils/audio';

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative min-h-screen w-full py-28 px-6 sm:px-10 lg:px-16 bg-paper text-ink overflow-hidden text-left select-none"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-8 border-b border-ink/8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-paper-warm border border-ink/8 text-xs font-mono text-ink-muted uppercase tracking-widest">
              <span>05 / CAREER TRAJECTORY</span>
            </div>

            <h2 className="font-display font-bold text-4xl sm:text-6xl text-ink tracking-tight">
              Mobile OS <em className="font-serif text-lavender-dark not-italic font-normal">Activity Timeline</em>
            </h2>
          </div>

          <p className="font-body text-sm sm:text-base text-ink-muted max-w-md leading-relaxed">
            Leading mobile architecture from early prototypes through production scale, 
            driving metrics that matter to businesses and end users.
          </p>
        </div>

        {/* Timeline Container with Fixed Glowing Rail */}
        <div className="relative pl-6 sm:pl-10 space-y-12">
          
          {/* Vertical Progress Rail */}
          <div className="absolute top-2 bottom-2 left-2 sm:left-4 w-[2px] bg-gradient-to-b from-lavender via-rose to-peach" />

          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Timeline Pin Indicator */}
              <div className="absolute -left-[27px] sm:-left-[35px] top-6 w-5 h-5 rounded-full bg-paper border-2 border-lavender group-hover:bg-lavender transition-colors flex items-center justify-center shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-ink" />
              </div>

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-paper-warm/70 border border-ink/8 hover:border-lavender/50 hover:bg-paper-warm transition-all shadow-sm hover:shadow-soft-card space-y-6">
                
                {/* Header Row: Role, Company, Period */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-lavender/20 text-ink-light font-bold">
                        {exp.status}
                      </span>
                      <span className="text-xs font-mono text-ink-subtle flex items-center gap-1">
                        <MapPin size={11} /> {exp.location}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-2xl sm:text-3xl text-ink">
                      {exp.role}
                    </h3>
                    
                    <p className="font-display font-medium text-base text-lavender-dark">
                      {exp.company}
                    </p>
                  </div>

                  {/* Period Badge */}
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-paper border border-ink/8 text-xs font-mono text-ink shrink-0 w-fit">
                    <Calendar size={13} className="text-lavender" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Summary */}
                <p className="font-body text-sm text-ink-muted leading-relaxed max-w-3xl">
                  {exp.summary}
                </p>

                {/* Key Metrics Row */}
                <div className="flex flex-wrap gap-3">
                  {exp.metrics.map((metric) => (
                    <span
                      key={metric}
                      className="px-3 py-1 rounded-xl bg-paper border border-ink/10 text-xs font-mono font-bold text-ink shadow-2xs"
                    >
                      {metric}
                    </span>
                  ))}
                </div>

                {/* Bullets */}
                <div className="space-y-2 pt-2 border-t border-ink/8">
                  {exp.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2.5 text-xs font-body text-ink-muted leading-relaxed">
                      <CheckCircle2 size={14} className="text-lavender shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
