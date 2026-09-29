'use client';
import {useRef} from 'react';import {motion,useScroll,useTransform,MotionValue} from 'framer-motion';
function Line({t,i,p}:{t:string;i:number;p:MotionValue<number>}){const o=useTransform(p,[i*.22,i*.22+.2],[.12,1]);return <motion.span style={{opacity:o}} className="block">{t}</motion.span>}
export default function Manifesto({lines,quote}:{lines:string[];quote:string}){const r=useRef(null),{scrollYProgress:p}=useScroll({target:r,offset:['start 0.9','end 0.5']});
return <section ref={r} className="min-h-[100svh] flex flex-col justify-center px-4 md:px-10"><p className="dsp text-[clamp(60px,13vw,220px)]">{lines.map((t,i)=><Line key={t} t={t} i={i} p={p}/>)}</p><p className="max-w-sm mt-10 text-fg/70">{quote}</p></section>}
