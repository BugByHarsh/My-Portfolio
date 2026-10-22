import {ArrowDown,ArrowDownRight,ArrowUpRight,Code2,Cuboid,MapPin,Github,Linkedin} from 'lucide-react';
const portrait = 'https://raw.githubusercontent.com/BugByHarsh/Portfolio-V2--React/main/public/image.webp';
export default function Hero(){
 return <section className="hero section-shell" id="home">
  <div className="hero-copy reveal">
   <div className="eyebrow"><span className="eyebrow-line"/> FOUNDER @ CSS ARENA · FULL-STACK DEVELOPER</div>
   <h1>Ideas into<br/><span className="gradient-text">digital reality.</span></h1>
   <p className="hero-intro">Hey, I'm <strong>Harsh Upadhyay</strong> — a full-stack developer building web platforms, APIs, and useful digital experiences. I also founded CSS Arena, an interactive platform for web developers.</p>
   <div className="hero-actions">
    <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={15}/></a>
    <a className="button button-quiet" href="#contact">Let's talk <ArrowDownRight size={15}/></a>
   </div>
   <div className="hero-meta">
    <span><span className="meta-dot"/> 10+ projects</span>
    <span><Code2 size={13}/> 2+ yrs experience</span>
    <span><MapPin size={13}/> 5 clients</span>
   </div>
   <div className="hero-socials">
    <a href="https://github.com/BugByHarsh" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17}/> GitHub <ArrowUpRight size={12}/></a>
    <a href="https://www.linkedin.com/in/upadhyay-harsh9756" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17}/> LinkedIn <ArrowUpRight size={12}/></a>
   </div>
  </div>
  <div className="spatial-stage" id="spatial-stage" aria-label="Interactive spatial portrait scene">
   <div className="stage-grid" aria-hidden="true"/><div className="orbit orbit-a" aria-hidden="true"/><div className="orbit orbit-b" aria-hidden="true"/>
   <div className="stage-label"><span className="label-pulse"/> CURRENT MODE <b>CREATING</b></div>
   <article className="portrait-card tilt-card">
    <div className="portrait-top"><span>PROFILE / 001</span><span className="live-indicator">● AVAILABLE</span></div>
    <div className="portrait-frame"><img src={portrait} alt="Portrait of Harsh Upadhyay" fetchPriority="high"/></div>
    <div className="portrait-caption"><div><span className="caption-kicker">FULL-STACK DEVELOPER</span><h2>Harsh Upadhyay</h2></div><a className="portrait-arrow" href="https://github.com/BugByHarsh" target="_blank" rel="noreferrer" aria-label="Open GitHub profile"><ArrowUpRight size={16}/></a></div>
    <div className="portrait-foot"><span>DESIGN × CODE</span><span>INDIA · IST</span></div>
   </article>
   <div className="float-chip chip-code"><span className="chip-icon"><Code2 size={17}/></span><span><small>WORKING AT</small><b>Ezzstar</b></span></div>
   <div className="float-chip chip-stack"><span className="chip-icon violet"><Cuboid size={17}/></span><span><small>FOUNDED</small><b>CSS Arena</b></span></div>
   <div className="stage-index">01 <span>—</span> 05</div>
  </div>
  <a className="scroll-cue" href="#about"><span className="scroll-mouse"><ArrowDown size={10}/></span> SCROLL TO EXPLORE</a>
 </section>;
}
