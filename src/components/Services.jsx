import SectionHeading from './SectionHeading.jsx';
const services=[
 {title:'Web Development',description:'Modern, responsive websites with fast, scalable architecture and clean interfaces.',stack:['MongoDB','Express','React','Node.js','Laravel','MySQL']},
 {title:'App Development',description:'Cross-platform mobile apps with smooth performance and a thoughtful user experience.',stack:['React Native','Expo','Firebase','REST APIs']},
 {title:'API Development',description:'Secure, scalable backend APIs for modern web and mobile applications.',stack:['Node.js','Express','Laravel','JWT','REST API']},
 {title:'Hosting & Deployment',description:'Reliable deployment pipelines and optimized production hosting.',stack:['Vercel','AWS','Nginx','cPanel']}
];
const process=[
 {step:'01',title:'Understand',description:'Explore your goals, requirements, and the people you want to reach.'},
 {step:'02',title:'Plan',description:'Choose the right architecture, technology, and a clear direction.'},
 {step:'03',title:'Build',description:'Create clean, scalable software with regular progress updates.'},
 {step:'04',title:'Deploy & support',description:'Launch, refine, and help your product stay reliable.'}
];
export default function Services(){
 return <section className="section-shell services-section" id="services">
  <SectionHeading index="02 / SERVICES" title="From idea to" accent="launch." description="Ways I can help turn a product idea into something useful and reliable."/>
  <div className="services-layout">
   <div className="services-grid">
    {services.map((service,index)=><article className="service-card glass-panel reveal" key={service.title}>
     <div className="service-top"><span className="service-icon" aria-hidden="true">{String(index+1).padStart(2,'0')}</span><span className="service-number">SERVICE / {String(index+1).padStart(2,'0')}</span></div>
     <h3>{service.title}</h3><p>{service.description}</p><div className="tag-row">{service.stack.map(item=><span key={item}>{item}</span>)}</div>
    </article>)}
   </div>
   <div className="process-panel reveal"><span className="panel-kicker">A CLEAR, COLLABORATIVE PROCESS</span><h3>How I work</h3><p className="process-intro">A straightforward workflow, so you know what we're solving and why.</p>
    <div className="process-list">{process.map(item=><article className="process-step" key={item.step}><span className="process-number">{item.step}</span><div><h4>{item.title}</h4><p>{item.description}</p></div></article>)}</div>
    <a className="text-link" href="#contact">Discuss a project <span>↗</span></a>
   </div>
  </div>
 </section>;
}
