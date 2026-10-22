import {ArrowUpRight,BriefcaseBusiness,Code2,Layers3} from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';

const roles=[
 {period:'2025 — PRESENT',kind:'PROFESSIONAL EXPERIENCE',title:'Full Stack Developer',organization:'Ezzstar',description:'Building web platforms and APIs, working across frontend experiences and backend services.',stack:['React','Node.js','Express','MongoDB'],Icon:BriefcaseBusiness},
 {period:'2023 — PRESENT',kind:'FOUNDER / SIDE PROJECT',title:'Founder & Builder',organization:'CSS Arena',description:'Creating an interactive platform for developers to practice CSS, explore visual ideas, and take on design challenges.',stack:['React','Node.js','Socket.io','MongoDB'],Icon:Layers3}
];

export default function Experience(){
 return <section className="section-shell experience-section" id="experience">
  <SectionHeading index="03 / EXPERIENCE" title="Building things that" accent="keep moving." description="A snapshot of the roles and products shaping my work."/>
  <div className="experience-track">
   {roles.map((role,index)=><article className="experience-card glass-panel reveal" key={role.organization}>
    <div className="experience-rail"><span className="experience-node"><role.Icon size={17}/></span>{index===0&&<span className="experience-line" aria-hidden="true"/>}</div>
    <div className="experience-body">
     <div className="experience-meta"><span>{role.kind}</span><span>{role.period}</span></div>
     <h3>{role.title} <span>@ {role.organization}</span></h3>
     <p>{role.description}</p>
     <div className="tag-row">{role.stack.map(item=><span key={item}>{item}</span>)}</div>
    </div>
    <span className="experience-index">0{index+1}</span>
   </article>)}
  </div>
  <a className="text-link experience-link" href="https://github.com/BugByHarsh" target="_blank" rel="noreferrer">Explore what I build <ArrowUpRight size={14}/></a>
 </section>;
}
