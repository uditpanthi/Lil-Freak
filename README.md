# LIL FREAK — headless storefront (Next.js 14 + Shopify)
Shopify = commerce + frequently-changing content. `/config` = global business settings. `.env` = credentials. Code = design/functionality.

## Setup
1. Shopify admin -> Sales channels -> **Headless** -> create a storefront -> copy the **Public** Storefront token (never a private/Admin token, and never in a NEXT_PUBLIC_ variable unless it is the public Storefront token).
2. Publish products + collections (tees, hoodies, sweats, new-drop) to that storefront.
3. Copy `.env.example` to `.env.local`, fill it in. `npm install`, `npm run dev`. Deploy on Vercel with the same env vars.

## HOW TO EDIT THE WEBSITE
| What | Where | Needs Vercel redeploy? |
|---|---|---|
| Products, prices, stock, variants, photos, collections | Shopify admin | No (live in ~1 min) |
| Discount / coupon codes | Shopify admin -> Discounts | No |
| Orders, shipping rates, payments | Shopify admin | No |
| Announcement bar | Shopify metaobject `announcement_bar` (fields: text, link, enabled) — or `config/site.ts` -> `announcement` | Metaobject: No. Config: Yes |
| Homepage hero text/button/image | Shopify metaobject `hero_banner` (tagline, subline, cta_label, cta_link, image) — or `config/home.ts` | Metaobject: No. Config: Yes |
| Collection banner + description | Shopify admin -> Collections (image + description) | No |
| Lookbook images | Shopify metaobject `lookbook_item` (image, caption) — or `config/home.ts` | Metaobject: No. Config: Yes |
| FAQs | Shopify metaobject `faq` (question, answer) — or `config/home.ts` | Metaobject: No. Config: Yes |
| Privacy / Terms / Refund / Shipping policy text | Shopify admin -> Settings -> Policies | No |
| Policy "last updated" dates | `config/site.ts` -> `policyUpdated` | Yes |
| Cookie Policy text | `app/policies/[slug]/page.tsx` (only change if you add analytics/ads) | Yes |
| Instagram / TikTok / YouTube URLs | `config/site.ts` -> `social` | Yes |
| Business name, GST, address, phone, WhatsApp, hours, email | `config/site.ts` | Yes |
| SEO title / description / share image | `config/site.ts` -> `seo` | Yes |
| Free-shipping threshold (bar in bag) | `config/site.ts` -> `freeShippingThreshold` (match Shopify shipping rates) | Yes |
| Size chart | `config/site.ts` -> `sizeGuide` (empty = hidden) | Yes |
| Product Fit / Material / Care | Shopify product metafields `custom.fit`, `custom.material`, `custom.care` (enable Storefront API access on each definition) | No |
| Non-product photos (About, editorial, Instagram grid) | files in `public/images` + `config/home.ts` (`ASSETS`) | Yes |
| Design, layout, components | code | Yes |

Metaobjects: Shopify admin -> Settings -> Custom data -> Metaobjects -> Add definition. Use the exact type handle and field keys above, tick **Storefront API access -> Active read**, then add entries under Content -> Metaobjects. `image` fields must be type *File (image)*; `enabled` is *True/false*. The site falls back to `/config` if none exist.

## Privacy / compliance notes
Only essential browser storage is used (see Cookie Policy). No analytics, ads or third-party scripts. Fonts are self-hosted by next/font. Newsletter collects email only, with an unchecked consent box; emails become Shopify customers tagged `newsletter`. Data requests: /contact#data-request. **Have a lawyer review your policies; nothing here is legal advice.**
