# LIL FREAK — headless storefront (Next.js + Shopify)
Shopify is the back office (products, stock, orders, payments, customers). This site is the storefront. Checkout and customer accounts are Shopify's own secure pages.

## Setup
1. Shopify admin -> Sales channels -> **Headless** -> Create storefront -> copy the **Public access token**. Enable product, inventory, tags and cart/checkout permissions.
2. Publish all products + the Tees / Hoodies / Sweats / New Drop collections to that Headless storefront.
3. `cp .env.example .env.local`, fill it in, then `npm install` and `npm run dev`.

## Photos
Product photos/videos: upload in Shopify admin (they appear automatically, incl. gallery, zoom, video).
Everything else (hero, editorial, About, lookbook, Instagram grid): put files in `public/images/` and set names in `lib/assets.ts`. Set your Instagram URL there too.

## Go live checklist
- Paid Shopify plan, Payments enabled (Razorpay/UPI/cards + COD), shipping rates, stock quantities, policies (privacy, terms, refunds).
- Turn off the store password (Online Store -> Preferences) or the newsletter form and account login won't work for visitors.
- Deploy on Vercel with the env vars, add your domain, set NEXT_PUBLIC_SITE_URL, redeploy.
- Optional: reviews app (Judge.me), email tool (Klaviyo) for the newsletter list (emails are saved as Shopify customers tagged "newsletter").
