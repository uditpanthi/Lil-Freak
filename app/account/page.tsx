export const metadata={title:'Account'};
// Real accounts: handled by Shopify's secure customer accounts (login, register, forgot password, orders, tracking, addresses).
export default function Account(){const d=process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN,u=`https://${d}/account`;
return <main className="pt-28 px-4 md:px-10 pb-24 min-h-screen"><h1 className="dsp text-[clamp(64px,12vw,180px)] pb-6">Your<br/>account</h1><div className="max-w-xl"><p className="text-bone/70 mb-8">Log in to see your orders, track shipments, manage addresses and update your profile. Your account is handled securely by Shopify.</p>
<div className="grid gap-3"><a href={u} className="btn py-5">Log in / Create account →</a><a href={u} className="btn btn-g">Track my order</a><a href={u} className="btn btn-g">Order history &amp; addresses</a></div><p className="text-bone/50 text-sm mt-6">Forgot your password? Use the “Forgot password” link on the login screen.</p></div></main>}
