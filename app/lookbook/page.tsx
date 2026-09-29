import Lookbook from '@/components/Lookbook';import {getLookbook} from '@/lib/content';import {page} from '@/lib/seo';export const metadata=page('Lookbook','/lookbook');
export default async function P(){return <Lookbook items={await getLookbook()}/>}
