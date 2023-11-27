import React, { useEffect, useRef, useState } from 'react'
import { useInView } from "react-intersection-observer";
import { motion, useScroll } from "framer-motion";

const ScrollAnimation = ({children, delay, className}) => {
    // const ref = useRef(null);
    // const options = useScroll({
    //   target: ref,
    //   offset: ["-400px", "-400px"]
    // });

    // const [scrollYValue, setScrollYValue] = useState(0);

    // const ref = useRef(null)
    // const { scrollY, scrollYProgress } = useScroll(ref);

    // useEffect(() => {
    //     scrollY.onChange((v) => setScrollYValue(v));
    //     scrollYProgress.onChange((v) => setScrollYProgressValue(v));
    // }, [scrollY, scrollYProgress]);


    const { ref, inView, entry } = useInView({
        threshold: .3,
        triggerOnce: true,
      })

    // useEffect(() => {
    //     console.log(scrollY, scrollYProgress)
    // }, [scrollY, scrollYProgress])
    
    const initial = {
        opacity: 0,
        scale: .9
    }
    const animate = {
        opacity: 1,
        scale: 1

    }

    // console.log(delay)

  return (
        <motion.div
                // style={{ scrollYProgress }}
                ref={ref} 
                className={className}
                initial={initial}
                animate={inView ? animate : ''}
                // animate={inView ? animate : initial}
                transition={{
                    duration: .2,
                    ease: "easeInOut",
                    delay: delay
                }}
            >
                {children}
            </motion.div>

  )
}

export default ScrollAnimation
