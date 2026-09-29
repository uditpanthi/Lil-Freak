'use client';
import {useEffect,useState} from 'react';import {Sun,Moon} from 'lucide-react';
export default function ThemeToggle(){const [t,setT]=useState('dark');useEffect(()=>{setT(document.documentElement.dataset.theme||'dark')},[]);
const flip=()=>{const n=t==='dark'?'light':'dark';setT(n);document.documentElement.dataset.theme=n;try{localStorage.setItem('lf_theme',n)}catch{}};
return <button onClick={flip} aria-label={t==='dark'?'Switch to light mode':'Switch to dark mode'} className="p-1">{t==='dark'?<Sun size={20}/>:<Moon size={20}/>}</button>}
