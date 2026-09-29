import Listing from '@/components/Listing';export const metadata={title:'Shop All'};
export default function P({searchParams}:{searchParams:{sort?:string}}){return <Listing title="Shop all" base="/shop" sort={searchParams.sort}/>}
