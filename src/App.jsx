import {useEffect} from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
export default function App(){
 useEffect(()=>{
  const progressBar=document.getElementById('progress-bar');
  const updateProgress=()=>{const scrollable=document.documentElement.scrollHeight-window.innerHeight;if(progressBar)progressBar.style.width=`${scrollable>0?(window.scrollY/scrollable)*100:0}%`;};
  window.addEventListener('scroll',updateProgress,{passive:true});updateProgress();
  const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;let observer;
  if('IntersectionObserver'in window){observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(element=>observer.observe(element));}
  else document.querySelectorAll('.reveal').forEach(element=>element.classList.add('is-visible'));
  const cleanup=[];
  if(!reduceMotion&&window.matchMedia('(hover: hover) and (pointer: fine)').matches){
   document.querySelectorAll('.tilt-card').forEach(card=>{
    const onMove=event=>{const rect=card.getBoundingClientRect(),x=(event.clientX-rect.left)/rect.width,y=(event.clientY-rect.top)/rect.height;card.style.setProperty('--tilt-x',`${((.5-y)*5).toFixed(2)}deg`);card.style.setProperty('--tilt-y',`${((x-.5)*6).toFixed(2)}deg`);card.style.setProperty('--spot-x',`${(x*100).toFixed(1)}%`);card.style.setProperty('--spot-y',`${(y*100).toFixed(1)}%`);};
    const onLeave=()=>{card.style.setProperty('--tilt-x','0deg');card.style.setProperty('--tilt-y','0deg');card.style.setProperty('--spot-x','50%');card.style.setProperty('--spot-y','50%');};
    card.addEventListener('pointermove',onMove);card.addEventListener('pointerleave',onLeave);cleanup.push(()=>{card.removeEventListener('pointermove',onMove);card.removeEventListener('pointerleave',onLeave);});
   });
   const stage=document.getElementById('spatial-stage');
   if(stage){const onMove=event=>{const rect=stage.getBoundingClientRect();stage.style.setProperty('--pointer-x',`${(((event.clientX-rect.left)/rect.width-.5)*16).toFixed(1)}px`);stage.style.setProperty('--pointer-y',`${(((event.clientY-rect.top)/rect.height-.5)*16).toFixed(1)}px`);};const onLeave=()=>{stage.style.setProperty('--pointer-x','0px');stage.style.setProperty('--pointer-y','0px');};stage.addEventListener('pointermove',onMove);stage.addEventListener('pointerleave',onLeave);cleanup.push(()=>{stage.removeEventListener('pointermove',onMove);stage.removeEventListener('pointerleave',onLeave);}}
  }
  return()=>{window.removeEventListener('scroll',updateProgress);observer?.disconnect();cleanup.forEach(fn=>fn());};
 },[]);
 return <><div className="ambient ambient-one" aria-hidden="true"/><div className="ambient ambient-two" aria-hidden="true"/><div className="noise" aria-hidden="true"/><div className="scroll-progress" aria-hidden="true"><span id="progress-bar"/></div><Navbar/><main className="min-h-screen"><Hero/><About/><section className="section-shell services-section" id="services">
   <div className="section-heading reveal"><span className="section-index">02 / SERVICES</span><h2>From idea to<br/><span className="gradient-text">launch.</span></h2><p>Ways I can help turn a product idea into something useful and reliable.</p></div>
   <div className="services-layout"><div className="services-grid">
    <article className="service-card glass-panel reveal"><div className="service-top"><span className="service-icon">01</span><span className="service-number">SERVICE / 01</span></div><h3>Web Development</h3><p>Modern, responsive websites with fast, scalable architecture and clean interfaces.</p><div className="tag-row"><span>MongoDB</span><span>Express</span><span>React</span><span>Node.js</span><span>Laravel</span><span>MySQL</span></div></article>
    <article className="service-card glass-panel reveal"><div className="service-top"><span className="service-icon">02</span><span className="service-number">SERVICE / 02</span></div><h3>App Development</h3><p>Cross-platform mobile apps with smooth performance and a thoughtful user experience.</p><div className="tag-row"><span>React Native</span><span>Expo</span><span>Firebase</span><span>REST APIs</span></div></article>
    <article className="service-card glass-panel reveal"><div className="service-top"><span className="service-icon">03</span><span className="service-number">SERVICE / 03</span></div><h3>API Development</h3><p>Secure, scalable backend APIs for modern web and mobile applications.</p><div className="tag-row"><span>Node.js</span><span>Express</span><span>Laravel</span><span>JWT</span><span>REST API</span></div></article>
    <article className="service-card glass-panel reveal"><div className="service-top"><span className="service-icon">04</span><span className="service-number">SERVICE / 04</span></div><h3>Hosting &amp; Deployment</h3><p>Reliable deployment pipelines and optimized production hosting.</p><div className="tag-row"><span>Vercel</span><span>AWS</span><span>Nginx</span><span>cPanel</span></div></article>
   </div><div className="process-panel reveal"><span className="panel-kicker">A CLEAR, COLLABORATIVE PROCESS</span><h3>How I work</h3><p className="process-intro">A straightforward workflow, so you know what we're solving and why.</p><div className="process-list">
    <article className="process-step"><span className="process-number">01</span><div><h4>Understand</h4><p>Explore your goals, requirements, and the people you want to reach.</p></div></article>
    <article className="process-step"><span className="process-number">02</span><div><h4>Plan</h4><p>Choose the right architecture, technology, and a clear direction.</p></div></article>
    <article className="process-step"><span className="process-number">03</span><div><h4>Build</h4><p>Create clean, scalable software with regular progress updates.</p></div></article>
    <article className="process-step"><span className="process-number">04</span><div><h4>Deploy &amp; support</h4><p>Launch, refine, and help your product stay reliable.</p></div></article>
   </div><a className="text-link" href="#contact">Discuss a project <span>↗</span></a></div></div>
  </section><Projects/><Skills/><Contact/></main><Footer/></>;
}
