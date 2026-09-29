'use client';
import {useState} from 'react';import Image from 'next/image';import {Heart} from 'lucide-react';import {Product,inr} from '@/lib/shopify';import {useStore} from './Store';import Extras from './ProductExtras';import ProductGallery from './ProductGallery';
export default function ProductClient({p}:{p:Product}){const {add,buyNow,busy,wish,toggleWish}=useStore(),[sel,setSel]=useState<Record<string,string>>({}),[err,setErr]=useState('');
const v=p.variants.nodes.find(x=>p.options.every(o=>x.selectedOptions.find(s=>s.name===o.name)?.value===sel[o.name])),ok=(o:string,val:string)=>p.variants.nodes.some(x=>x.availableForSale&&x.selectedOptions.some(s=>s.name===o&&s.value===val));
const need=()=>{if(!v){setErr('Pick '+(p.options.find(o=>!sel[o.name])?.name.toLowerCase()||'an option')+' first.');return false}if(!v.availableForSale){setErr('That one is sold out.');return false}setErr('');return true};
const price=Number((v??p.variants.nodes[0]).price.amount),was=Number(p.compareAtPriceRange.minVariantPrice.amount),on=wish.includes(p.handle);
return <div className="grid md:grid-cols-[60fr_40fr] gap-8 px-4 md:px-10 pt-28 pb-24">
<ProductGallery p={p}/>
<div className="md:sticky md:top-24 self-start"><h1 className="dsp text-[clamp(40px,5vw,72px)] mb-3">{p.title}</h1><p className="text-xl">{was>price&&<s className="text-bone/50 mr-2">{inr(was)}</s>}{inr(price)}</p><p className="text-bone/60 mt-4">{p.description}</p>
{p.options.filter(o=>o.name!=='Title').map(o=><div key={o.name} className="mt-6"><p className="lab mb-2">{o.name} — {sel[o.name]||'select'}</p><div className="flex flex-wrap gap-2">{o.values.map(val=><button key={val} disabled={!ok(o.name,val)} onClick={()=>setSel(s=>({...s,[o.name]:val}))} className={`min-w-14 px-4 py-3 border transition disabled:opacity-30 disabled:line-through ${sel[o.name]===val?'bg-bone text-ink border-bone':'border-bone/15 hover:border-bone'}`}>{val}</button>)}</div></div>)}
<p role="alert" className="text-red-400 text-sm min-h-6 mt-3">{err}</p>
<div className="flex gap-2 mt-2"><button className="btn flex-1 py-5" disabled={busy} onClick={()=>need()&&add(v!.id)}>Add to bag</button><button aria-label="Wishlist" onClick={()=>toggleWish(p.handle)} className="w-14 border border-bone/15 grid place-items-center"><Heart className={on?'fill-blood stroke-blood':''}/></button></div>
<button className="btn btn-g w-full mt-2" onClick={()=>need()&&buyNow(v!.id)}>Buy now</button>
<Extras p={p}/><p className="lab text-bone/60 mt-4">Secure checkout · Easy returns · Ships across India</p></div></div>}
