import Listing from '@/components/Listing';import {page} from '@/lib/seo';
export function generateMetadata({params}:{params:{handle:string}}){return page(params.handle[0].toUpperCase()+params.handle.slice(1),`/category/${params.handle}`)}
export default function P({params,searchParams}:{params:{handle:string};searchParams:{sort?:string}}){return <Listing title={params.handle} base={`/category/${params.handle}`} handle={params.handle} sort={searchParams.sort}/>}
