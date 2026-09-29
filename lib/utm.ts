const K='lf_utm',P=['utm_source','utm_medium','utm_campaign','utm_term','utm_content'];
export function captureUtm(){try{const q=new URLSearchParams(location.search),o:Record<string,string>={};P.forEach(k=>{const v=q.get(k);if(v)o[k]=v.slice(0,100)});if(Object.keys(o).length)sessionStorage.setItem(K,JSON.stringify(o))}catch{}}
export function withUtm(u:string){try{const o=JSON.parse(sessionStorage.getItem(K)||'{}'),x=new URL(u);Object.entries(o).forEach(([k,v])=>x.searchParams.set(k,String(v)));return x.toString()}catch{return u}}
