import {site} from '@/config/site';
export default function robots(){return {rules:{userAgent:'*',allow:'/',disallow:['/wishlist','/account']},sitemap:`${site.url}/sitemap.xml`}}
