// MARKETING CONTENT DEFAULTS. Shopify metaobjects (hero_banner, faq, lookbook_item) override these when present.
export const home={
  hero:{tagline:'Streetwear for the unapologetic.',sub:'Wear your weird.',ctaLabel:'Shop the drop →',ctaHref:'/new-drop',ctaLabel2:'View all',ctaHref2:'/shop'},
  categories:[['Tees','/category/tees','bg-acid text-ink','md:col-span-7 md:row-span-2'],['Oversized','/category/tees','bg-bone text-ink','md:col-span-5'],['Hoodies','/category/hoodies','bg-ash text-ink','md:col-span-5'],['Sweats','/category/sweats','bg-volt','md:col-span-4'],['New drop','/new-drop','bg-blood','md:col-span-8']] as string[][],
  freaks:{eyebrow:'The campaign',line1:'For the',line2:'freaks.',quote:"For people who don't dress for approval."},
  manifesto:{lines:["We don't",'follow','trends.'],quote:'“LIL FREAK is built for people who would rather create their own lane.”'},
  newsletter:{title1:'Join the',title2:'freak club.',copy:"First access to new drops, limited pieces and things we probably shouldn't announce yet."},
  about:[{title:'Not made to blend in.',body:'LIL FREAK is built for people who would rather create their own lane.'},{title:'Wear your weird.',body:"Streetwear for the unapologetic — for people who don't dress for approval."}],
  faq:[{q:'How do I track my order?',a:'Log in to your account (Account page) to see your orders and tracking.'},{q:'What is your return and refund policy?',a:'Please read our Refund Policy page for the full terms.'},{q:'Where and how do you ship?',a:'Please read our Shipping Policy page. Shipping options and costs are shown at checkout.'},{q:'How can I contact you?',a:'Use the details on our Contact page.'}],
  lookbook:[1,2,3,4,5,6,7,8].map((n,i)=>({title:`Look ${String(n).padStart(2,'0')}`,src:'',alt:`LIL FREAK lookbook frame ${n}`,color:['#D8D5CE','#C6FF00','#2B4BFF','#F4F1EA','#B0121B','#D8D5CE','#C6FF00','#F4F1EA'][i]})),
};
// Photos (non-product). Put files in /public/images and reference like '/images/hero.jpg'. Empty = placeholder block.
export const ASSETS={hero:'',freaks:'',about:['',''],social:['','','','','','','',''] as string[]};
