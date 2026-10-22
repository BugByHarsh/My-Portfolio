const serviceItems=[
 {title:'Web Development',description:'Modern, responsive websites with fast, scalable architecture and clean interfaces.',stack:['MongoDB','Express','React','Node.js','Laravel','MySQL']},
 {title:'App Development',description:'Cross-platform mobile apps with smooth performance and a thoughtful user experience.',stack:['React Native','Expo','Firebase','REST APIs']},
 {title:'API Development',description:'Secure, scalable backend APIs for modern web and mobile applications.',stack:['Node.js','Express','Laravel','JWT','REST API']},
 {title:'Hosting & Deployment',description:'Reliable deployment pipelines and optimized production hosting.',stack:['Vercel','AWS','Nginx','cPanel']}
];
const workflowSteps=[
 {step:'01',title:'Understand',description:'Explore your goals, requirements, and the people you want to reach.'},
 {step:'02',title:'Plan',description:'Choose the right architecture, technology, and a clear direction.'},
 {step:'03',title:'Build',description:'Create clean, scalable software with regular progress updates.'},
 {step:'04',title:'Deploy & support',description:'Launch, refine, and help your product stay reliable.'}
];
export default function Services(){
 return <section className="section-shell services-section" id="services">
  <div className="section-heading reveal"><span className="section-index">02 / SERVICES</span><h2>From idea to<br/><span className="gradient-text">launch.</span></h2><p>Ways I can help turn a product idea into something useful and reliable.</p></div>
  <div className="services-layout">
   <div className="services-grid">{serviceItems.map((service,index)=><article className="service-card glass-panel reveal" key={service.title}>
    <div className="service-top"><span className="service-icon">{String(index+1).padStart(2,'0')}</span><span className="service-number">SERVICE / {String(index+1).padStart(2,'0')}</span></div>
    <h3>{service.title}</h3><p>{service.description}</p><div className="tag-row">{service.stack.map(tech=><span key={tech}>{tech}</span>)}</div>
   </article>)}</div>
   <div className="process-panel reveal"><span className="panel-kicker">A CLEAR, COLLABORATIVE PROCESS</span><h3>How I work</h3><p className="process-intro">A straightforward workflow, so you know what we're solving and why.</p>
    <div className="process-list">{workflowSteps.map(step=><article className="process-step" key={step.step}><span className="process-number">{step.step}</span><div><h4>{step.title}</h4><p>{step.description}</p></div></article>)}</div>
    <a className="text-link" href="#contact">Discuss a project <span>↗</span></a>
   </div>
  </div>
 </section>;
}
