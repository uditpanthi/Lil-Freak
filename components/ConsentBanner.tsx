'use client';
import {useEffect,useState} from 'react';import Link from 'next/link';
// Informational notice: this site only uses essential storage (no analytics/ads). If you add analytics later, gate it on real consent here.
export default function ConsentBanner(){const [show,setShow]=useState(false);useEffect(()=>{try{if(!localStorage.getItem('lf_consent'))setShow(true)}catch{}},[]);
if(!show)return null;
return <div role="region" aria-label="Storage notice" className="no-print fixed bottom-4 inset-x-4 md:left-1/2 md:-translate-x-1/2 md:max-w-xl z-[70] bg-surface2 border border-fg/20 p-4 flex flex-wrap gap-3 items-center justify-between"><p className="text-sm">We only store what the shop needs to work (your bag, wishlist and theme). No advertising or tracking. <Link href="/policies/cookie-policy" className="underline">Cookie Policy</Link></p><button className="btn py-2 px-5" onClick={()=>{try{localStorage.setItem('lf_consent','1')}catch{}setShow(false)}}>Got it</button></div>}
