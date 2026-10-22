import {Compass,Layers3,Lightbulb,Users,BriefcaseBusiness,Code2,Rocket} from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
const principles=[
 {number:'01',title:'Full-stack development',description:'From frontend experiences to backend logic and APIs.',Icon:Layers3},
 {number:'02',title:'Founder · CSS Arena',description:'Building an interactive platform for web development challenges.',Icon:Lightbulb},
 {number:'03',title:'Product-minded approach',description:'Usability, clean architecture, and maintainable code matter.',Icon:Users},
];
export default function About(){return <section className="section-shell about-section" id="about">
 <SectionHeading index="01 / ABOUT" title="A little about" accent="my world." description="The work, curiosity, and ideas behind the code."/>
 <div className="about-grid">
  <article className="glass-panel about-main tilt-card reveal">
   <div className="panel-symbol"><Compass size={22}/></div><span className="panel-kicker">THE PERSON BEHIND THE PIXELS</span>
   <h3>I like making things that <em>make sense.</em></h3>
   <p>I'm Harsh Upadhyay, a full-stack developer who builds and manages web platforms and applications with a focus on usability, thoughtful details, and scalable foundations.</p>
   <p>I'm currently working as a Full Stack Developer at Ezzstar, and I founded CSS Arena — an interactive learning platform where developers test their creativity with CSS challenges.</p>
   <a className="text-link" href="https://www.linkedin.com/in/upadhyay-harsh9756" target="_blank" rel="noreferrer">Connect on LinkedIn <span>↗</span></a><div className="panel-orb" aria-hidden="true"/>
  </article>
  <div className="about-side">
   <article className="glass-panel principle-card reveal"><span className="mini-number">2025 — NOW</span><div className="principle-icon"><BriefcaseBusiness size={19}/></div><h3>Full Stack Developer · Ezzstar</h3><p>Building web platforms and APIs with React, Node.js, Express, and MongoDB.</p></article>
   <article className="glass-panel principle-card reveal"><span className="mini-number">2023 — NOW</span><div className="principle-icon"><Rocket size={19}/></div><h3>Founder · CSS Arena</h3><p>An interactive platform for web development and CSS design challenges.</p></article>
   {principles.slice(0,1).map(({number,title,description,Icon})=><article className="glass-panel principle-card reveal" key={number}><span className="mini-number">{number}</span><div className="principle-icon"><Icon size={19}/></div><h3>{title}</h3><p>{description}</p></article>)}
  </div>
 </div>
 </section>}
