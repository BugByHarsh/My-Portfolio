import {Compass,Layers3,Lightbulb,Users} from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
const principles=[
 {number:'01',title:'Full-stack thinking',description:'From interface details to backend logic and data.',Icon:Layers3},
 {number:'02',title:'Always learning',description:'Curious by default. Better with every build.',Icon:Lightbulb},
 {number:'03',title:'Open to collaborate',description:'Good ideas get better when people share them.',Icon:Users},
];
export default function About(){return <section className="section-shell about-section" id="about">
 <SectionHeading index="01 / ABOUT" title="A little about" accent="my world." description="Curiosity is the starting point. Good software is the outcome."/>
 <div className="about-grid"><article className="glass-panel about-main tilt-card reveal"><div className="panel-symbol"><Compass size={22}/></div><span className="panel-kicker">THE PERSON BEHIND THE PIXELS</span>
  <h3>I like making things that <em>make sense.</em></h3><p>I'm a focused full-stack web developer building and managing websites and applications with an eye for usability and detail. I enjoy exploring ideas, learning new tools, and shipping projects that solve real problems.</p>
  <p>I also enjoy helping people who are just starting their coding journey. Sharing what I've learned is one of the ways I keep learning myself.</p>
  <a className="text-link" href="https://www.linkedin.com/in/upadhyay-harsh9756" target="_blank" rel="noreferrer">Connect on LinkedIn <span>↗</span></a><div className="panel-orb" aria-hidden="true"/>
 </article><div className="about-side">{principles.map(({number,title,description,Icon})=><article className="glass-panel principle-card reveal" key={number}><span className="mini-number">{number}</span><div className="principle-icon"><Icon size={19}/></div><h3>{title}</h3><p>{description}</p></article>)}</div></div>
 </section>}
