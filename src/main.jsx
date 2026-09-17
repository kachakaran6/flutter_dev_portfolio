import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Smartphone, Sparkles, X } from 'lucide-react';
import './styles.css';

const projects = [
  { number:'01', title:'Finance Flow', type:'MOBILE FINANCE', description:'A calm, data-first finance experience designed to make everyday money decisions feel effortless.', tags:['Flutter','Dart','Firebase'], accent:'lavender', screen:'₹ 42,560', detail:'Dashboard · Spending insights · Goals' },
  { number:'02', title:'Habitly', type:'WELLNESS & PRODUCTIVITY', description:'A gentle habit companion that turns consistency into a visual, rewarding daily ritual.', tags:['Flutter','Riverpod','SQLite'], accent:'rose', screen:'12 day streak', detail:'Streaks · Reminders · Progress' },
  { number:'03', title:'Travel Notes', type:'TRAVEL COMPANION', description:'A pocket-sized travel journal built around beautiful memories, maps, and lightweight offline access.', tags:['Flutter','REST API','Maps'], accent:'peach', screen:'PARIS · 24°C', detail:'Trips · Places · Offline mode' },
];

function Phone({ project, assembled = true }) {
  return <div className={`phone-wrap ${assembled ? 'assembled' : 'disassembled'}`} aria-hidden="true">
    <div className="phone-shadow" />
    <div className="phone-frame layer-frame"><div className="phone-screen layer-screen">
      <div className="dynamic-island" />
      <div className="screen-top"><span>9:41</span><span>● ●</span></div>
      <div className={`screen-art ${project?.accent || 'lavender'}`}>
        <span className="screen-kicker">{project?.type || 'FLUTTER'}</span>
        <strong>{project?.screen || 'Beautiful\nmobile UI.'}</strong>
        <div className="screen-orbit"><span>✦</span></div>
      </div>
      <div className="screen-detail">{project?.detail || 'UI · PRODUCT · CODE'}</div>
      <div className="screen-bars"><i/><i/><i/></div>
    </div></div>
    <div className="phone-component component-a" />
    <div className="phone-component component-b" />
    <div className="phone-component component-c" />
  </div>
}

function App(){
  const [projectIndex,setProjectIndex]=useState(0);
  const [menu,setMenu]=useState(false);
  const heroRef=useRef(null);
  const [heroProgress,setHeroProgress]=useState(0);

  useEffect(()=>{
    const onScroll=()=>{
      const hero=heroRef.current; if(!hero) return;
      const start=hero.offsetTop, end=start+hero.offsetHeight-window.innerHeight;
      setHeroProgress(Math.max(0,Math.min(1,(window.scrollY-start)/Math.max(1,end))));
      const cards=[...document.querySelectorAll('.project-trigger')];
      cards.forEach((el,i)=>{const r=el.getBoundingClientRect(); if(r.top<window.innerHeight*.55 && r.bottom>window.innerHeight*.25) setProjectIndex(i);});
    };
    window.addEventListener('scroll',onScroll,{passive:true}); onScroll();
    return()=>window.removeEventListener('scroll',onScroll);
  },[]);

  const p=projects[projectIndex];
  const phoneStyle={ transform:`translate3d(${heroProgress*70}px, ${heroProgress*-35}px, 0) rotate(${heroProgress*8}deg) scale(${1+heroProgress*.07})` };

  return <>
    <div className="noise" />
    <header className="nav"><a className="brand" href="#top">{`{ }`} <span>FLUTTER / PORTFOLIO</span></a><nav><a href="#work">Work</a><a href="#about">About</a><a href="#experience">Experience</a><a href="#contact">Contact</a></nav><button className="menu-btn" onClick={()=>setMenu(!menu)}>{menu?<X size={18}/>:<span>MENU</span>}</button></header>
    {menu&&<div className="mobile-menu"><a href="#work" onClick={()=>setMenu(false)}>Work ↗</a><a href="#about" onClick={()=>setMenu(false)}>About ↗</a><a href="#experience" onClick={()=>setMenu(false)}>Experience ↗</a><a href="#contact" onClick={()=>setMenu(false)}>Contact ↗</a></div>}

    <main id="top">
      <section className="hero" ref={heroRef}>
        <div className="hero-copy reveal">
          <p className="eyebrow"><span className="status-dot"/> AVAILABLE FOR SELECT PROJECTS</p>
          <h1>I build <em>mobile</em><br/>experiences<br/>people remember.</h1>
          <p className="hero-sub">Flutter developer focused on thoughtful interfaces, smooth interactions, and products that feel effortless to use.</p>
          <a className="round-link" href="#work"><span>Explore work</span><ArrowDown size={18}/></a>
        </div>
        <div className="hero-phone" style={phoneStyle}><Phone project={p}/></div>
        <div className="hero-side"><span>01</span><span>SCROLL TO EXPLORE</span></div>
        <div className="hero-orbit-label">FLUTTER<br/><small>UI · PRODUCT · CODE</small></div>
      </section>

      <section className="intro" id="about"><div className="section-no">01 / ABOUT</div><div className="intro-content"><h2>Technology should disappear<br/><em>behind the experience.</em></h2><div className="intro-grid"><p>I'm a Flutter developer who cares about the part users actually feel — the rhythm of an interface, the tiny details, the transitions, and the moment an idea becomes a real product.</p><p>From architecture to animation, I build mobile products with a balance of engineering discipline and visual curiosity.</p></div></div></section>

      <section className="stack"><div className="stack-copy"><p className="eyebrow">THE TOOLKIT</p><h2>Built with intention.</h2><p>My everyday toolkit spans mobile engineering, product thinking, and the systems that make an app reliable.</p></div><div className="stack-cloud">{['Flutter','Dart','Firebase','Riverpod','REST APIs','SQLite','Git','Figma','Clean Architecture','Android','iOS'].map((x,i)=><span key={x} style={{'--i':i}}>{x}</span>)}</div></section>

      <section className="experience" id="experience"><div className="section-no">02 / EXPERIENCE</div><div className="experience-list"><div className="exp-item"><span>2026 — NOW</span><div><h3>Flutter Developer</h3><p>Building production mobile experiences, reusable systems, and polished interfaces from idea to release.</p></div><ArrowUpRight/></div><div className="exp-item"><span>2025 — 2026</span><div><h3>Mobile Development</h3><p>Worked across app architecture, APIs, state management, testing, and responsive UI implementation.</p></div><ArrowUpRight/></div><div className="exp-item"><span>ALWAYS</span><div><h3>Independent Projects</h3><p>Exploring product ideas through prototypes, open-source experiments, and small apps that solve real problems.</p></div><ArrowUpRight/></div></div></section>

      <section className="work" id="work"><div className="work-heading"><div className="section-no">03 / SELECTED WORK</div><h2>Scroll through<br/><em>the products.</em></h2><p>Each project is a small story about product decisions, interface craft, and code.</p></div><div className="project-stage"><div className="sticky-phone"><Phone project={p}/><div className="project-index">{p.number} <span>/ 0{projects.length}</span></div></div><div className="project-copy">{projects.map((item,i)=><article className="project-trigger" key={item.title} onMouseEnter={()=>setProjectIndex(i)}><div className="project-meta"><span>{item.number}</span><span>{item.type}</span></div><h3>{item.title}</h3><p>{item.description}</p><div className="tags">{item.tags.map(t=><span key={t}>{t}</span>)}</div><button onClick={()=>alert('Case study placeholder — add the real project URL when content is ready.')}>View case study <ArrowUpRight size={16}/></button></article>)}</div></div></section>

      <section className="education"><div className="section-no">04 / EDUCATION</div><div><p className="eyebrow">FOUNDATIONS MATTER</p><h2>Curious enough to<br/><em>keep learning.</em></h2><p className="edu-copy">Add her degree, university, graduation year, certifications, hackathons, or awards here. The layout is intentionally compact so the work stays the hero.</p></div><div className="edu-card"><span>EDUCATION</span><strong>Degree / University</strong><small>20XX — 20XX</small></div></section>

      <section className="contact" id="contact"><div className="contact-phone"><Phone project={{...p,screen:'Let’s\nbuild it.'}}/></div><div className="contact-copy"><p className="eyebrow">05 / CONTACT</p><h2>Have an idea?<br/><em>Let's build it.</em></h2><p>Available for thoughtful freelance projects, product collaborations, and mobile experiences worth obsessing over.</p><a className="email" href="mailto:hello@example.com"><Mail size={18}/> hello@example.com</a><div className="socials"><a href="#"><Github size={18}/> GitHub</a><a href="#"><Linkedin size={18}/> LinkedIn</a></div></div></section>
    </main>
    <footer><span>© 2026 — FLUTTER DEVELOPER</span><span>MADE WITH CURIOSITY <Sparkles size={14}/></span></footer>
  </>
}

createRoot(document.getElementById('root')).render(<App/>);
