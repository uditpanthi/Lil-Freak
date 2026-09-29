const T='NEW DROP LIVE — FREE SHIPPING ABOVE ₹1999 — LIMITED QUANTITIES — ';
export default function Marquee(){return <div className="bg-acid text-ink lab py-2 overflow-hidden whitespace-nowrap" aria-label="Announcement"><div className="flex w-max mq">{[0,1].map(k=><span key={k} className="pr-12">{T.repeat(4)}</span>)}</div></div>}
