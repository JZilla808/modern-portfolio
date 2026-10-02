/** Accessible compact navigation and persistent theme control. */
import { useEffect, useState } from 'react';
import { ArrowUpRightIcon, Bars2Icon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline';
export function Arrow() { return <ArrowUpRightIcon aria-hidden="true" className="arrow" />; }
export default function PortfolioHeader() {
 const [dark,setDark]=useState(false); const [open,setOpen]=useState(false);
 useEffect(()=>{setDark(document.documentElement.dataset.theme==='dark');},[]);
 const toggleTheme=()=>{const next=!dark; setDark(next); document.documentElement.dataset.theme=next?'dark':'light'; try {localStorage.setItem('jay-theme',next?'dark':'light');}catch{}};
 return <header className="site-header"><a className="wordmark" href="#top" aria-label="Jay Zhou home">Jay Zhou<span aria-hidden="true">.</span></a><nav aria-label="Main navigation" className={open?'navigation open':'navigation'} id="main-navigation"><a href="#work" onClick={()=>setOpen(false)}>Work</a><a href="#about" onClick={()=>setOpen(false)}>About</a><a href="#contact" onClick={()=>setOpen(false)}>Contact <Arrow /></a></nav><div className="header-controls"><button type="button" className="icon-button" onClick={toggleTheme} aria-label="Toggle dark theme" aria-pressed={dark}>{dark?<MoonIcon/>:<SunIcon/>}</button><button type="button" className="icon-button menu-toggle" aria-label={open?'Close navigation':'Open navigation'} aria-expanded={open} aria-controls="main-navigation" onClick={()=>setOpen(!open)} onKeyDown={e=>{if(e.key==='Escape')setOpen(false);}}>{open?<XMarkIcon/>:<Bars2Icon/>}</button></div></header>;
}
