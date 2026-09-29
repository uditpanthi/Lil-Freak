const D=process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN!,TOK=process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN!,V=process.env.NEXT_PUBLIC_SHOPIFY_API_VERSION||'2026-07';
export const FREE_SHIPPING=1999;
export const inr=(n:number|string)=>'₹'+Number(n).toLocaleString('en-IN');
export async function sf<R=any>(query:string,variables:Record<string,unknown>={}):Promise<R>{
  const r=await fetch(`https://${D}/api/${V}/graphql.json`,{method:'POST',headers:{'Content-Type':'application/json','X-Shopify-Storefront-Access-Token':TOK},body:JSON.stringify({query,variables}),...(typeof window==='undefined'?{next:{revalidate:60}}:{cache:'no-store' as const})});
  const j=await r.json(); if(j.errors) throw new Error(JSON.stringify(j.errors)); return j.data;
}
const PF=`fragment P on Product{id handle title description availableForSale tags productType createdAt compareAtPriceRange{minVariantPrice{amount}} priceRange{minVariantPrice{amount}} images(first:8){nodes{url altText width height}} media(first:10){nodes{mediaContentType ... on Video{sources{url mimeType} previewImage{url}}}} options{name values} variants(first:60){nodes{id title availableForSale price{amount} compareAtPrice{amount} selectedOptions{name value}}}}`;
export type Variant={id:string;title:string;availableForSale:boolean;price:{amount:string};compareAtPrice?:{amount:string}|null;selectedOptions:{name:string;value:string}[]};
export type Product={id:string;handle:string;title:string;description:string;availableForSale:boolean;tags:string[];productType:string;createdAt:string;media:{nodes:any[]};compareAtPriceRange:{minVariantPrice:{amount:string}};priceRange:{minVariantPrice:{amount:string}};images:{nodes:{url:string;altText:string|null;width:number;height:number}[]};options:{name:string;values:string[]}[];variants:{nodes:Variant[]}};
export async function getProducts(handle?:string,sort?:string):Promise<Product[]>{
  const rev=sort==='hi'||sort==='new';
  if(handle){const k=sort==='lo'||sort==='hi'?'PRICE':sort==='new'?'CREATED':'COLLECTION_DEFAULT';
    const d=await sf(`${PF}query($h:String!,$k:ProductCollectionSortKeys,$r:Boolean){collection(handle:$h){products(first:48,sortKey:$k,reverse:$r){nodes{...P}}}}`,{h:handle,k,r:rev});return d.collection?.products.nodes??[]}
  const k=sort==='lo'||sort==='hi'?'PRICE':sort==='new'?'CREATED_AT':'BEST_SELLING';
  const d=await sf(`${PF}query($k:ProductSortKeys,$r:Boolean){products(first:48,sortKey:$k,reverse:$r){nodes{...P}}}`,{k,r:rev});return d.products.nodes;
}
export async function getProduct(handle:string):Promise<Product|null>{return (await sf(`${PF}query($h:String!){product(handle:$h){...P}}`,{h:handle})).product}
export async function searchProducts(q:string):Promise<Product[]>{return (await sf(`${PF}query($q:String!){search(query:$q,first:12,types:PRODUCT){nodes{...P}}}`,{q})).search.nodes}
const CF=`fragment C on Cart{id checkoutUrl totalQuantity discountCodes{code applicable} cost{subtotalAmount{amount}} lines(first:50){nodes{id quantity merchandise{... on ProductVariant{id title price{amount} image{url} product{title handle}}}}}}`;
export type Cart={discountCodes?:{code:string;applicable:boolean}[];id:string;checkoutUrl:string;totalQuantity:number;cost:{subtotalAmount:{amount:string}};lines:{nodes:{id:string;quantity:number;merchandise:{id:string;title:string;price:{amount:string};image?:{url:string}|null;product:{title:string;handle:string}}}[]}};
export const cartGet=async(id:string):Promise<Cart|null>=>(await sf(`${CF}query($id:ID!){cart(id:$id){...C}}`,{id})).cart;
export const cartCreate=async(lines:{merchandiseId:string;quantity:number}[]):Promise<Cart>=>(await sf(`${CF}mutation($l:[CartLineInput!]){cartCreate(input:{lines:$l}){cart{...C}}}`,{l:lines})).cartCreate.cart;
export const cartAdd=async(id:string,merchandiseId:string,quantity=1):Promise<Cart>=>(await sf(`${CF}mutation($id:ID!,$l:[CartLineInput!]!){cartLinesAdd(cartId:$id,lines:$l){cart{...C}}}`,{id,l:[{merchandiseId,quantity}]})).cartLinesAdd.cart;
export const cartSet=async(id:string,lineId:string,quantity:number):Promise<Cart>=>(await sf(`${CF}mutation($id:ID!,$l:[CartLineUpdateInput!]!){cartLinesUpdate(cartId:$id,lines:$l){cart{...C}}}`,{id,l:[{id:lineId,quantity}]})).cartLinesUpdate.cart;
export const cartRemove=async(id:string,lineId:string):Promise<Cart>=>(await sf(`${CF}mutation($id:ID!,$l:[ID!]!){cartLinesRemove(cartId:$id,lineIds:$l){cart{...C}}}`,{id,l:[lineId]})).cartLinesRemove.cart;
export const cartCode=async(id:string,codes:string[]):Promise<Cart>=>(await sf(`${CF}mutation($id:ID!,$c:[String!]){cartDiscountCodesUpdate(cartId:$id,discountCodes:$c){cart{...C}}}`,{id,c:codes})).cartDiscountCodesUpdate.cart;
