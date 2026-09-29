'use client';
import {createContext,useContext,useEffect,useState,ReactNode} from 'react';
import {Cart,cartGet,cartCreate,cartAdd,cartSet,cartRemove,cartCode} from '@/lib/shopify';
type Ctx={cart:Cart|null;open:boolean;setOpen:(o:boolean)=>void;busy:boolean;add:(v:string,q?:number)=>Promise<void>;buyNow:(v:string,q?:number)=>Promise<void>;setQty:(l:string,q:number)=>Promise<void>;remove:(l:string)=>Promise<void>;applyCode:(c:string)=>Promise<void>;wish:string[];toggleWish:(h:string)=>void};
const S=createContext<Ctx>(null as any);export const useStore=()=>useContext(S);
const safe=(f:()=>void)=>{try{f()}catch{}};
export default function Store({children}:{children:ReactNode}){
  const [cart,setCart]=useState<Cart|null>(null),[open,setOpen]=useState(false),[busy,setBusy]=useState(false),[wish,setWish]=useState<string[]>([]);
  useEffect(()=>{safe(()=>{const w=localStorage.getItem('lf_wish');if(w)setWish(JSON.parse(w));const id=localStorage.getItem('lf_cart');if(id)cartGet(id).then(c=>c?setCart(c):localStorage.removeItem('lf_cart')).catch(()=>{})})},[]);
  const run=async(fn:()=>Promise<Cart>)=>{setBusy(true);try{const c=await fn();setCart(c);safe(()=>localStorage.setItem('lf_cart',c.id))}finally{setBusy(false)}};
  const add=async(v:string,q=1)=>{await run(()=>cart?cartAdd(cart.id,v,q):cartCreate([{merchandiseId:v,quantity:q}]));setOpen(true)};
  const buyNow=async(v:string,q=1)=>{const c=await cartCreate([{merchandiseId:v,quantity:q}]);window.location.href=c.checkoutUrl};
  const setQty=(l:string,q:number)=>run(()=>q<1?cartRemove(cart!.id,l):cartSet(cart!.id,l,q));
  const remove=(l:string)=>run(()=>cartRemove(cart!.id,l));
  const applyCode=(c:string)=>run(()=>cartCode(cart!.id,c?[c]:[]));
  const toggleWish=(h:string)=>setWish(w=>{const n=w.includes(h)?w.filter(x=>x!==h):[...w,h];safe(()=>localStorage.setItem('lf_wish',JSON.stringify(n)));return n});
  return <S.Provider value={{cart,open,setOpen,busy,add,buyNow,setQty,remove,applyCode,wish,toggleWish}}>{children}</S.Provider>;
}
