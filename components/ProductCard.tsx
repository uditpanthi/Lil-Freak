'use client';
import Link from 'next/link';import Image from 'next/image';import {motion} from 'framer-motion';import {Heart} from 'lucide-react';import {Product,inr} from '@/lib/shopify';import {useStore} from './Store';
export default function ProductCard({p,i=0}:{p:Product;i?:number}){const {wish,toggleWish}=useStore(),on=wish.includes(p.handle),a=p.images.nodes[0],b=p.images.nodes[1],was=Number(p.compareAtPriceRange.minVariantPrice.amount),price=Number(p.priceRange.minVariantPrice.amount);
return <motion.article className="group relative" initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-40px'}} transition={{duration:.8,delay:(i%4)*.06,ease:[.16,1,.3,1]}}>
<Link href={`/product/${p.handle}`} className="relative block aspect-[4/5] overflow-hidden bg-char">
{a?<Image src={a.url} alt={a.altText||p.title} fill sizes="(max-width:768px) 50vw,25vw" className="object-cover transition duration-[1100ms] ease-lf group-hover:scale-105"/>:<span className="absolute inset-0 grid place-items-center dsp text-4xl text-bone/20">{p.productType||'Freak'}</span>}
{b&&<Image src={b.url} alt="" fill sizes="25vw" className="object-cover opacity-0 transition duration-700 group-hover:opacity-100"/>}
{!p.availableForSale&&<span className="absolute top-3 left-3 bg-blood lab px-2 py-1">Sold out</span>}</Link>
<button aria-label={on?'Remove from wishlist':'Save to wishlist'} onClick={()=>toggleWish(p.handle)} className="absolute top-2 right-2 p-2"><motion.span key={String(on)} initial={{scale:1.5}} animate={{scale:1}} className="block"><Heart size={20} className={on?'fill-blood stroke-blood':'stroke-bone mix-blend-difference'}/></motion.span></button>
<div className="flex justify-between gap-2 pt-3"><Link href={`/product/${p.handle}`}>{p.title}</Link><span>{was>price&&<s className="text-bone/50 mr-2">{inr(was)}</s>}{inr(price)}</span></div></motion.article>}
