import Listing from '@/components/Listing';export const metadata={title:'New Drop'};
export default function P({searchParams}:{searchParams:{sort?:string}}){return <Listing title="New drop" base="/new-drop" handle="new-drop" sort={searchParams.sort}/>}
