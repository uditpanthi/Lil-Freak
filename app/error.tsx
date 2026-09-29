'use client';
export default function Err({reset}:{error:Error;reset:()=>void}){return <main className="min-h-screen grid place-content-center text-center px-4"><h1 className="dsp text-[clamp(70px,16vw,240px)]">Signal<br/>lost.</h1><p className="lab my-5">Something went wrong — check your connection and try again.</p><div><button onClick={reset} className="btn">Try again →</button></div></main>}
