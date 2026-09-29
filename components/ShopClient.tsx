'use client';
import {useMemo,useState} from 'react';import Link from 'next/link';import {SlidersHorizontal} from 'lucide-react';import {Product} from '@/lib/shopify';import ProductCard from './ProductCard';
const vals=(p:Product,re:RegExp)=>p.options.find(o=>re.test(o.name))?.values??[];const price=(p:Product)=>Number(p.priceRange.minVariantPrice.amount);
const sel='bg-transparent border border-bone/15 px-3 py-2';
export default function ShopClient({title,products}:{title:string;products:Product[]}){
const [size,setSize]=useState(''),[color,setColor]=useState(''),[max,setMax]=useState(0),[stock,setStock]=useState(false),[sort,setSort]=useState('featured'),[open,setOpen]=useState(false);
const sizes=useMemo(()=>Array.from(new Set(products.flatMap(p=>vals(p,/size/i)))),[products]),colors=useMemo(()=>Array.from(new Set(products.flatMap(p=>vals(p,/colou?r/i)))),[products]);
const list=useMemo(()=>{const r=products.filter(p=>(!size||vals(p,/size/i).includes(size))&&(!color||vals(p,/colou?r/i).includes(color))&&(!max||price(p)<=max)&&(!stock||p.availableForSale));
if(sort==='lo')r.sort((a,b)=>price(a)-price(b));if(sort==='hi')r.sort((a,b)=>price(b)-price(a));if(sort==='new')r.sort((a,b)=>+new Date(b.createdAt)-+new Date(a.createdAt));return r},[products,size,color,max,stock,sort]);
const any=size||color||max||stock;
return <main className="pt-28 px-4 md:px-10 pb-24 min-h-screen"><h1 className="dsp text-[clamp(64px,13vw,210px)] pb-6">{title}</h1>
<div className="border-y border-bone/15 py-3 mb-4"><button className="md:hidden lab flex items-center gap-2 mb-2" aria-expanded={open} onClick={()=>setOpen(!open)}><SlidersHorizontal size={16}/>Filters{any?' •':''}</button>
<div className={`${open?'flex':'hidden'} md:flex flex-wrap gap-2 items-center lab`}>
<select aria-label="Size" value={size} onChange={e=>setSize(e.target.value)} className={sel}><option value="">Size</option>{sizes.map(s=><option key={s}>{s}</option>)}</select>
<select aria-label="Colour" value={color} onChange={e=>setColor(e.target.value)} className={sel}><option value="">Colour</option>{colors.map(s=><option key={s}>{s}</option>)}</select>
<select aria-label="Price" value={max} onChange={e=>setMax(+e.target.value)} className={sel}><option value={0}>Price</option><option value={1500}>Under ₹1,500</option><option value={2500}>Under ₹2,500</option><option value={3000}>Under ₹3,000</option></select>
<button aria-pressed={stock} onClick={()=>setStock(!stock)} className={`px-4 py-2 border ${stock?'bg-bone text-ink border-bone':'border-bone/15'}`}>In stock</button>
{any&&<button className="underline text-bone/60" onClick={()=>{setSize('');setColor('');setMax(0);setStock(false)}}>Clear</button>}
<select aria-label="Sort" value={sort} onChange={e=>setSort(e.target.value)} className={`${sel} md:ml-auto`}><option value="featured">Featured</option><option value="new">Newest</option><option value="lo">Price: low → high</option><option value="hi">Price: high → low</option></select></div></div>
<p className="lab text-bone/60 mb-4" aria-live="polite">{list.length} pieces</p>
{list.length?<div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-3 gap-y-8">{list.map((p,i)=><ProductCard key={p.id} p={p} i={i}/>)}</div>:<div className="text-center py-24"><h2 className="dsp text-7xl mb-6">Nothing here.<br/>Yet.</h2><Link href="/shop" className="btn">Back to shop →</Link></div>}</main>}
