'use client';
import {useState} from 'react';
// Posts to Shopify's built-in customer form -> adds the email as a customer tagged "newsletter" (Shopify admin -> Customers).
export default function Newsletter(){const [sent,setSent]=useState(false),d=process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN;
return <section className="bg-acid text-ink text-center px-4 py-24 md:py-36"><h2 className="dsp text-[clamp(50px,10vw,160px)]">Join the<br/>freak club.</h2><p className="max-w-md mx-auto my-5">First access to new drops, limited pieces and things we probably shouldn't announce yet.</p>
{sent?<p className="dsp text-5xl">You're in.</p>:<form action={`https://${d}/contact#contact_form`} method="post" target="lf-nl" onSubmit={()=>setTimeout(()=>setSent(true),800)} className="flex max-w-lg mx-auto border-b-2 border-ink"><input type="hidden" name="form_type" value="customer"/><input type="hidden" name="utf8" value="✓"/><input type="hidden" name="contact[tags]" value="newsletter"/><input type="email" name="contact[email]" required placeholder="YOUR EMAIL" aria-label="Your email" className="flex-1 bg-transparent py-4 outline-none tracking-widest placeholder:text-ink/60"/><button className="font-bold tracking-widest">JOIN →</button></form>}
<iframe name="lf-nl" title="newsletter" className="hidden"/></section>}
