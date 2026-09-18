import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { playClickSound } from '../utils/audio';
import { personalInfo } from '../data/portfolioData';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#work', cursor: 'view' },
    { name: 'About', href: '#about', cursor: 'read' },
    { name: 'Stack', href: '#stack', cursor: 'explore' },
    { name: 'Experience', href: '#experience', cursor: 'view' },
    { name: 'Pipeline', href: '#pipeline', cursor: 'build' },
    { name: 'Contact', href: '#contact', cursor: 'talk' },
  ];

  const onNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-3 bg-paper/85 backdrop-blur-md border-b border-ink/5 shadow-sm'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#top"
            data-cursor="home"
            className="group flex items-center gap-1 font-display text-xl sm:text-2xl font-bold tracking-tight text-ink"
          >
            <span className="flex items-center">
              NENSI
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-lavender ml-1 group-hover:scale-150 transition-transform" />
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                data-cursor={link.cursor}
                className="text-xs uppercase tracking-widest font-mono font-medium text-ink-muted hover:text-ink transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-lavender hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions: Resume / Contact CTA Button + Mobile Menu Button */}
          <div className="flex items-center gap-3">

            {/* Resume / Contact CTA Button */}
            <a
              href="#contact"
              data-cursor="reach out"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-ink text-paper text-xs font-mono font-semibold tracking-wider hover:bg-ink-light hover:shadow-md transition-all active:scale-95"
            >
              <span>LET'S TALK</span>
              <ArrowUpRight size={13} className="text-lavender" />
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => {
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              data-cursor="menu"
              aria-label="Open Navigation Menu"
              className="md:hidden w-10 h-10 rounded-full bg-paper-warm border border-ink/10 flex items-center justify-center text-ink"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-[65px] z-40 bg-paper/98 backdrop-blur-xl md:hidden p-8 flex flex-col justify-between border-t border-ink/10"
          >
            <div className="space-y-6 pt-4">

              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={onNavClick}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="block text-3xl font-display font-bold text-ink hover:text-lavender transition-colors py-2 border-b border-ink/5"
                >
                  <span className="text-xs font-mono text-ink-subtle mr-3">0{idx + 1}</span>
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="pt-8 border-t border-ink/10 space-y-3">
              <p className="text-xs font-mono text-ink-subtle uppercase tracking-widest">Connect Directly</p>
              <div className="flex items-center gap-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-sm font-mono text-ink font-semibold hover:text-lavender transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
