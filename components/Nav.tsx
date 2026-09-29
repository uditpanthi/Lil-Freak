'use client';
import Link from 'next/link';import {useEffect,useState} from 'react';import {AnimatePresence,motion} from 'framer-motion';import {ShoppingBag,Heart,User,Menu,X,Search} from 'lucide-react';import {useStore} from './Store';import ThemeToggle from './ThemeToggle';
const L=[['Shop','/shop'],['New Drop','/new-drop'],['Tees','/category/tees'],['Hoodies','/category/hoodies'],['Sweats','/category/sweats'],['Lookbook','/lookbook'],['About','/about']];
export default function Nav(){const {cart,setOpen,wish}=useStore(),[s,setS]=useState(false),[m,setM]=useState(false);
useEffect(()=>{const f=()=>setS(scrollY>60);f();addEventListener('scroll',f,{passive:true});return()=>removeEventListener('scroll',f)},[]);
return <><header className={`sticky top-0 z-50 bg-surface/90 backdrop-blur-md flex items-center justify-between px-4 md:px-10 py-4 transition duration-500 ease-lf border-b ${s||m?'border-fg/15 shadow-lg':'border-fg/10'}`}>
<Link href="/" className="dsp text-2xl">Lil Freak</Link>
<nav aria-label="Main" className="hidden lg:flex gap-6 lab">{L.map(([n,h])=><Link key={h} href={h} className="opacity-70 hover:opacity-100 transition">{n}</Link>)}</nav>
<div className="flex items-center gap-5"><ThemeToggle/><button aria-label="Search" onClick={()=>dispatchEvent(new Event('lf-search'))}><Search size={20}/></button><Link href="/wishlist" aria-label="Wishlist" className="relative"><Heart size={20}/>{wish.length>0&&<b className="absolute -top-2 -right-3 bg-acid text-ink text-[10px] rounded-full px-1.5">{wish.length}</b>}</Link>
<Link href="/account" aria-label="Account" className="hidden md:block"><User size={20}/></Link>
<button aria-label="Open bag" onClick={()=>setOpen(true)} className="relative"><ShoppingBag size={20}/><motion.b key={cart?.totalQuantity} initial={{scale:1.6}} animate={{scale:1}} className="absolute -top-2 -right-3 bg-acid text-ink text-[10px] rounded-full px-1.5">{cart?.totalQuantity??0}</motion.b></button>
<button className="lg:hidden" aria-label="Menu" aria-expanded={m} onClick={()=>setM(!m)}>{m?<X/>:<Menu/>}</button></div></header>
<AnimatePresence>{m&&<motion.div initial={{clipPath:'circle(0% at 90% 5%)'}} animate={{clipPath:'circle(150% at 90% 5%)'}} exit={{clipPath:'circle(0% at 90% 5%)'}} transition={{duration:.7,ease:[.16,1,.3,1]}} className="fixed inset-0 z-40 bg-surface flex flex-col justify-center px-6 gap-1">
{L.map(([n,h],i)=><motion.div key={h} initial={{y:40,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:.2+i*.06,duration:.6,ease:[.16,1,.3,1]}}><Link href={h} onClick={()=>setM(false)} className="dsp text-5xl">{n}</Link></motion.div>)}</motion.div>}</AnimatePresence></>}
