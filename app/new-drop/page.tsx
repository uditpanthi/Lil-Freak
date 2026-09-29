import Listing from '@/components/Listing';import {page} from '@/lib/seo';export const metadata=page('New Drop','/new-drop');
export default function P({searchParams}:{searchParams:{sort?:string}}){return <Listing title="New drop" base="/new-drop" handle="new-drop" sort={searchParams.sort}/>}
