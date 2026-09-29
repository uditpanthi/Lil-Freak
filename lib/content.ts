import {sf} from './shopify';import {site} from '@/config/site';import {home,ASSETS} from '@/config/home';
// Editable content from Shopify metaobjects (Content -> Metaobjects). Falls back to /config when nothing is created yet.
type Rec=Record<string,any>;
async function mo(type:string,n=20):Promise<Rec[]>{try{const d=await sf(`query($t:String!,$n:Int!){metaobjects(type:$t,first:$n){nodes{fields{key value reference{... on MediaImage{image{url altText}}}}}}}`,{t:type,n});
return d.metaobjects.nodes.map((x:any)=>Object.fromEntries(x.fields.map((f:any)=>[f.key,f.reference?.image?{url:f.reference.image.url,alt:f.reference.image.altText||''}:f.value])))}catch{return []}}
export async function getAnnouncement(){const [a]=await mo('announcement_bar',1);return a?{enabled:a.enabled!=='false',text:String(a.text||''),href:String(a.link||'')}:site.announcement}
export async function getHero(){const [h]=await mo('hero_banner',1),d=home.hero;return {tagline:h?.tagline||d.tagline,sub:h?.subline||d.sub,ctaLabel:h?.cta_label||d.ctaLabel,ctaHref:h?.cta_link||d.ctaHref,ctaLabel2:d.ctaLabel2,ctaHref2:d.ctaHref2,image:(h?.image?.url as string)||ASSETS.hero,imageAlt:(h?.image?.alt as string)||'LIL FREAK campaign'}}
export async function getFaqs(){const r=await mo('faq',50);return r.length?r.map(x=>({q:String(x.question),a:String(x.answer)})):home.faq}
export async function getLookbook(){const r=await mo('lookbook_item',24);return r.length?r.map((x,i)=>({title:String(x.caption||''),src:(x.image?.url as string)||'',alt:(x.image?.alt as string)||String(x.caption||'LIL FREAK lookbook'),color:home.lookbook[i%8].color})):home.lookbook}
