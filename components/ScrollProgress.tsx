'use client';
import {motion,useScroll,useSpring} from 'framer-motion';
export default function ScrollProgress(){const {scrollYProgress}=useScroll(),x=useSpring(scrollYProgress,{stiffness:120,damping:30});return <motion.div aria-hidden style={{scaleX:x}} className="no-print fixed top-0 inset-x-0 h-[3px] bg-accent origin-left z-[60]"/>}
