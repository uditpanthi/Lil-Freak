'use client';
import {motion} from 'framer-motion';import {ReactNode} from 'react';
export default function Reveal({children,d=0,className=''}:{children:ReactNode;d?:number;className?:string}){return <motion.div className={className} initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-60px'}} transition={{duration:.9,delay:d,ease:[.16,1,.3,1]}}>{children}</motion.div>}
