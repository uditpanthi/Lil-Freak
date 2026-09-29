// GLOBAL BUSINESS SETTINGS — edit here, commit, Vercel redeploys automatically.
// Empty string = "not set": the site simply hides that detail. Nothing here is invented — fill in your real details.
export const site={
  name:'LIL FREAK',
  legalName:'',            // TODO: registered business / legal entity name
  tagline:'Premium Gen-Z streetwear from India.',
  url:process.env.NEXT_PUBLIC_SITE_URL||'http://localhost:3000',
  email:'lilfreak.yu@gmail.com', // taken from your Shopify store contact email — change if needed
  phone:'',                // e.g. +91 98xxxxxx
  whatsapp:'',             // digits only with country code, e.g. 919812345678 (enables the floating chat button)
  address:'',              // full registered/pickup address
  gst:'',                  // GSTIN, if registered
  supportHours:'',         // e.g. Mon–Sat, 10am–6pm IST
  social:{instagram:'',tiktok:'',youtube:''}, // full URLs; empty ones are hidden
  freeShippingThreshold:1999, // ₹ — keep in sync with your Shopify shipping rates
  // Fallback announcement. Overridden by the Shopify metaobject "announcement_bar" if you create one.
  announcement:{enabled:true,text:'New drop live — free shipping above ₹1999 — limited quantities',href:''},
  seo:{title:'LIL FREAK — Premium Gen-Z Streetwear',description:'LIL FREAK is premium Gen-Z streetwear from India. Wear your weird.',ogImage:''}, // ogImage e.g. '/images/og.jpg'
  // "Last updated" dates shown on policy pages (YYYY-MM-DD). Update when you change a policy in Shopify.
  policyUpdated:{'privacy-policy':'','terms-of-service':'','refund-policy':'','shipping-policy':'','cookie-policy':'2026-09-29','faq':''} as Record<string,string>,
  productTrust:['Secure checkout by Shopify'], // only add claims that are true, e.g. 'Easy returns' once your policy says so
  // Size chart. Leave rows empty to hide the size-guide button. Columns are free-form.
  sizeGuide:{head:['Size','Chest','Length','Shoulder','Sleeve'],rows:[] as string[][],note:''},
};
