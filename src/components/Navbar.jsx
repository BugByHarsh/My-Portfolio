import {useState} from 'react';
import {ArrowUpRight,Menu,X} from 'lucide-react';
const links=[{href:'#about',label:'About'},{href:'#projects',label:'Projects'},{href:'#skills',label:'Toolkit'},{href:'#contact',label:'Contact'}];
export default function Navbar(){
 const [open,setOpen]=useState(false),close=()=>setOpen(false);
 return <header className="topbar">
  <a className="brand" href="#home" aria-label="Harsh Upadhyay home" onClick={close}><span className="brand-mark">H<span>.</span></span><span className="brand-name">HARSH UPADHYAY</span></a>
  <nav className={`nav-links ${open?'is-open':''}`} aria-label="Main navigation">{links.map(link=><a key={link.href} href={link.href} onClick={close}>{link.label}</a>)}</nav>
  <div className="topbar-actions"><span className="availability"><span/> Open to opportunities</span><a className="nav-cta" href="#contact">Let’s talk <ArrowUpRight size={13}/></a><button className="menu-toggle" type="button" aria-label={open?'Close navigation':'Open navigation'} aria-expanded={open} onClick={()=>setOpen(v=>!v)}>{open?<X size={19}/>:<Menu size={19}/>}</button></div>
 </header>;
}
