import {getProducts} from '@/lib/shopify';import ShopClient from './ShopClient';
export default async function Listing({title,handle}:{title:string;handle?:string;base?:string;sort?:string}){const ps=await getProducts(handle).catch(()=>[]);return <ShopClient title={title} products={ps}/>}
