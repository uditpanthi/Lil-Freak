'use client';
import {useEffect,useState} from 'react';import {ArrowUp} from 'lucide-react';
export default function BackToTop(){const [s,setS]=useState(false);useEffect(()=>{const f=()=>setS(scrollY>800);f();addEventListener('scroll',f,{passive:true});return()=>removeEventListener('scroll',f)},[]);
return s?<button aria-label="Back to top" onClick={()=>scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'auto':'smooth'})} className="no-print fixed bottom-4 right-4 z-40 w-11 h-11 grid place-items-center bg-acid text-ink"><ArrowUp size={18}/></button>:null}
