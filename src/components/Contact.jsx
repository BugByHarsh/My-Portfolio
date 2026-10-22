import {ArrowUpRight,Github,Linkedin,MessageCircle,Send} from 'lucide-react';
const contactLinks=[
 {href:'https://www.linkedin.com/in/upadhyay-harsh9756',label:'LINKEDIN',title:'Connect professionally',Icon:Linkedin},
 {href:'https://github.com/BugByHarsh',label:'GITHUB',title:'Explore the code',Icon:Github},
];
export default function Contact(){return <section className="section-shell contact-section" id="contact"><div className="contact-card reveal"><div className="contact-glow" aria-hidden="true"/><span className="section-index">05 / NEXT CHAPTER</span>
 <h2>Have a good idea?<br/><span className="gradient-text">Let's build it.</span></h2><p>I'm open to interesting projects, collaborations, and opportunities to grow. Tell me what you're thinking.</p>
 <div className="contact-layout"><div className="contact-links"><a href="#contact-form"><span className="contact-link-icon"><MessageCircle size={19}/></span><span><small>MESSAGE</small><b>Use the contact form</b></span><ArrowUpRight className="link-end" size={14}/></a>
 {contactLinks.map(({href,label,title,Icon})=><a href={href} target="_blank" rel="noreferrer" key={label}><span className="contact-link-icon"><Icon size={19}/></span><span><small>{label}</small><b>{title}</b></span><ArrowUpRight className="link-end" size={14}/></a>)}</div>
 <form className="contact-form" id="contact-form" action="https://formspree.io/f/xbljrrqv" method="post"><label htmlFor="name">Your name</label><input id="name" name="name" type="text" placeholder="How should I call you?" autoComplete="name" required/><label htmlFor="email">Email address</label><input id="email" name="email" type="email" placeholder="you@example.com" autoComplete="email" required/><label htmlFor="message">What's on your mind?</label><textarea id="message" name="message" rows="4" placeholder="A project, an opportunity, or just a hello..." required/><button className="button button-primary submit-button" type="submit">Send a message <Send size={14}/></button></form></div>
 </div></section>}
