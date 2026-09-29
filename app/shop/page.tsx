import Listing from '@/components/Listing';import {page} from '@/lib/seo';export const metadata=page('Shop All','/shop');
export default function P({searchParams}:{searchParams:{sort?:string}}){return <Listing title="Shop all" base="/shop" sort={searchParams.sort}/>}
