'use client';
import {useEffect,useRef,useState} from 'react';
export default function Cursor(){const r=useRef<HTMLDivElement>(null),[label,setL]=useState(''),[on,setOn]=useState(false);
useEffect(()=>{if(!matchMedia('(hover:hover) and (pointer:fine)').matches||matchMedia('(prefers-reduced-motion:reduce)').matches)return;setOn(true);document.body.classList.add('cc');let x=0,y=0,tx=0,ty=0,raf=0;
const mv=(e:MouseEvent)=>{tx=e.clientX;ty=e.clientY;const t=(e.target as HTMLElement).closest('[data-cursor],a[href^="/product"],.btn,button') as HTMLElement|null;setL(t?(t.dataset.cursor||(t.matches('a[href^="/product"]')?'VIEW':'CLICK')):'')};
const l=()=>{x+=(tx-x)*.18;y+=(ty-y)*.18;if(r.current){const w=r.current.offsetWidth;r.current.style.transform=`translate(${x-w/2}px,${y-w/2}px)`}raf=requestAnimationFrame(l)};
addEventListener('mousemove',mv);raf=requestAnimationFrame(l);return()=>{removeEventListener('mousemove',mv);cancelAnimationFrame(raf);document.body.classList.remove('cc')}},[]);
if(!on)return null;
return <div ref={r} aria-hidden className={`fixed left-0 top-0 z-[300] pointer-events-none grid place-items-center rounded-full bg-acid text-ink text-[11px] font-bold tracking-widest transition-[width,height] duration-300 ${label?'w-20 h-20':'w-3 h-3'}`}>{label}</div>}
