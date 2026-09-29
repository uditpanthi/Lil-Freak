import {MessageCircle} from 'lucide-react';import {site} from '@/config/site';
export default function FloatingContact(){const wa=site.whatsapp.replace(/\D/g,''),href=wa?`https://wa.me/${wa}`:site.email?`mailto:${site.email}`:'';if(!href)return null;
return <a href={href} target={wa?'_blank':undefined} rel="noopener noreferrer" aria-label={wa?'Chat with us on WhatsApp':'Email us'} className="no-print fixed bottom-4 left-4 z-40 w-11 h-11 grid place-items-center bg-fg text-surface"><MessageCircle size={18}/></a>}
