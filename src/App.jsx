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
   if(stage){const onMove=event=>{const rect=stage.getBoundingClientRect();stage.style.setProperty('--pointer-x',`${(((event.clientX-rect.left)/rect.width-.5)*16).toFixed(1)}px`);stage.style.setProperty('--pointer-y',`${(((event.clientY-rect.top)/rect.height-.5)*16).toFixed(1)}px`);};const onLeave=()=>{stage.style.setProperty('--pointer-x','0px');stage.style.setProperty('--pointer-y','0px');};stage.addEventListener('pointermove',onMove);stage.addEventListener('pointerleave',onLeave);cleanup.push(()=>{stage.removeEventListener('pointermove',onMove);stage.removeEventListener('pointerleave',onLeave);});}
  }
  return()=>{window.removeEventListener('scroll',updateProgress);observer?.disconnect();cleanup.forEach(fn=>fn());};
 },[]);
 return <><div className="ambient ambient-one" aria-hidden="true"/><div className="ambient ambient-two" aria-hidden="true"/><div className="noise" aria-hidden="true"/><div className="scroll-progress" aria-hidden="true"><span id="progress-bar"/></div><Navbar/><main className="min-h-screen"><Hero/><About/><Projects/><Skills/><Contact/></main><Footer/></>;
}
