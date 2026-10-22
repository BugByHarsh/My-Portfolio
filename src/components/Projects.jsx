import {ArrowRight,ArrowUpRight,ExternalLink,Github} from 'lucide-react';
import {projects} from '../data/projects.js';
import SectionHeading from './SectionHeading.jsx';
function ProjectCard({project}){
 const classes=['project-card',project.featured?'project-featured':'',project.wide?'project-wide':'','tilt-card','reveal'].filter(Boolean).join(' ');
 return <article className={classes}>
  <div className="project-image"><img src={project.image} alt={project.imageAlt} loading="lazy"/><span className="project-number">PROJECT / {project.number}</span><span className="project-type">{project.type}</span></div>
  <div className="project-content">
   <div className="project-heading"><h3>{project.name}</h3><span className="project-arrow"><ArrowUpRight size={15}/></span></div>
   <p>{project.description}</p>
   <div className="tag-row">{project.technologies.map(technology=><span key={technology}>{technology}</span>)}</div>
   <div className="project-links">
    {project.source ? <a className="text-link" href={project.source} target="_blank" rel="noreferrer"><Github size={13}/> Source code <ArrowRight size={13}/></a> : <span className="project-private"><Github size={13}/> Source code private</span>}
    {project.live && <a className="text-link" href={project.live} target="_blank" rel="noreferrer">Live project <ExternalLink size={13}/></a>}
   </div>
  </div>
 </article>;
}
export default function Projects(){return <section className="section-shell projects-section" id="projects"><SectionHeading index="04 / SELECTED WORK" title="Built with purpose." accent="Made to be useful." description="Current projects and products from my portfolio — updated from V2."/><div className="project-grid">{projects.map(project=><ProjectCard key={project.number} project={project}/>)}</div><a className="button button-outline projects-more" href="https://github.com/BugByHarsh" target="_blank" rel="noreferrer">More on GitHub <ArrowUpRight size={15}/></a></section>}
