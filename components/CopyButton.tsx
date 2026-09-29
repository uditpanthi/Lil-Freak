'use client';
import {useState} from 'react';import {Copy,Check} from 'lucide-react';
export default function CopyButton({text,label}:{text:string;label:string}){const [ok,setOk]=useState(false);
return <button onClick={async()=>{try{await navigator.clipboard.writeText(text);setOk(true);setTimeout(()=>setOk(false),2000)}catch{}}} aria-label={`Copy ${label}`} className="inline-flex items-center gap-1 lab underline">{ok?<Check size={14}/>:<Copy size={14}/>}<span aria-live="polite">{ok?'Copied':'Copy'}</span></button>}
