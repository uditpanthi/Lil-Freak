'use client';
import {useState} from 'react';import {Plus} from 'lucide-react';
export default function Faq({items}:{items:{q:string;a:string}[]}){const [o,setO]=useState<number|null>(null);
return <div className="border-t border-fg/15">{items.map((x,i)=><div key={i} className="border-b border-fg/15"><h3><button id={`fq${i}`} aria-expanded={o===i} aria-controls={`fa${i}`} onClick={()=>setO(o===i?null:i)} className="w-full flex justify-between items-center py-5 text-left text-lg"><span>{x.q}</span><Plus size={18} className={`shrink-0 transition duration-500 ease-lf ${o===i?'rotate-45':''}`}/></button></h3>
<div id={`fa${i}`} role="region" aria-labelledby={`fq${i}`} hidden={o!==i}><p className="text-fg/70 pb-5 max-w-2xl">{x.a}</p></div></div>)}</div>}
