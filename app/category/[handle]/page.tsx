import Listing from '@/components/Listing';
export function generateMetadata({params}:{params:{handle:string}}){return {title:params.handle[0].toUpperCase()+params.handle.slice(1)}}
export default function P({params,searchParams}:{params:{handle:string};searchParams:{sort?:string}}){return <Listing title={params.handle} base={`/category/${params.handle}`} handle={params.handle} sort={searchParams.sort}/>}
