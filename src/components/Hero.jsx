import {ArrowDown,ArrowDownRight,ArrowUpRight,Code2,Cuboid,MapPin} from 'lucide-react';
import portrait from '../../images/pic.jpeg';
export default function Hero(){
 return <section className="hero section-shell" id="home">
  <div className="hero-copy reveal"><div className="eyebrow"><span className="eyebrow-line"/> DEVELOPER · BUILDER · CURIOUS MIND</div>
   <h1>Ideas into<br/><span className="gradient-text">digital reality.</span></h1>
   <p className="hero-intro">Hey, I'm <strong>Harsh Upadhyay</strong> — a full-stack developer who enjoys turning complex problems into clear, useful and memorable experiences.</p>
   <div className="hero-actions"><a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={15}/></a><a className="button button-quiet" href="#contact">Let's talk <ArrowDownRight size={15}/></a></div>
   <div className="hero-meta"><span><span className="meta-dot"/> Building for the web</span><span><MapPin size={13}/> Based in India</span></div>
  </div>
  <div className="spatial-stage" id="spatial-stage" aria-label="Interactive spatial portrait scene"><div className="stage-grid" aria-hidden="true"/><div className="orbit orbit-a" aria-hidden="true"/><div className="orbit orbit-b" aria-hidden="true"/>
   <div className="stage-label"><span className="label-pulse"/> CURRENT MODE <b>CREATING</b></div>
   <article className="portrait-card tilt-card"><div className="portrait-top"><span>PROFILE / 001</span><span className="live-indicator">● LIVE</span></div><div className="portrait-frame"><img src={portrait} alt="Portrait of Harsh Upadhyay" fetchPriority="high"/></div>
    <div className="portrait-caption"><div><span className="caption-kicker">FULL-STACK DEVELOPER</span><h2>Harsh Upadhyay</h2></div><span className="portrait-arrow"><ArrowUpRight size={16}/></span></div><div className="portrait-foot"><span>DESIGN × CODE</span><span>INDIA · IST</span></div>
   </article>
   <div className="float-chip chip-code"><span className="chip-icon"><Code2 size={17}/></span><span><small>CRAFTING WITH</small><b>Code & curiosity</b></span></div>
   <div className="float-chip chip-stack"><span className="chip-icon violet"><Cuboid size={17}/></span><span><small>MY APPROACH</small><b>Build · Learn · Repeat</b></span></div><div className="stage-index">01 <span>—</span> 04</div>
  </div><a className="scroll-cue" href="#about"><span className="scroll-mouse"><ArrowDown size={10}/></span> SCROLL TO EXPLORE</a>
 </section>;
}
