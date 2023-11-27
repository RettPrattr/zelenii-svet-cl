import React, {useEffect, useState} from 'react'
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


const Item = ({children, i, index, inView}) => {

    const [hiddenCard, setHiddenCard] = useState(false)

    const initial = {
        opacity: 0,
        scale: .9
    }
    const animate = {
        opacity: 1,
        scale: 1

    }

    useEffect(() => {
        i === index ? setHiddenCard(true) : setHiddenCard(false)
    }, [])  

    return (
        <motion.div
            className={hiddenCard ? 'hidden' : ''}
            key={index}
            initial={initial}
            animate={inView ? animate : ''}
            transition={{
                duration: .5,
                delay: .2 * index,
                ease: "easeInOut"
            }}
        >
            {children}
        </motion.div>
      )
}

const ScrollCardsAnimation = ({children, className, i}) => {

    // const isMobile = window.innerWidth < 768; //Add the width you want to check for here (now 768px)

    const { ref, inView, entry } = useInView({
        threshold: 0.45,
        triggerOnce: true,
      });

  return (
    <motion.div ref={ref} className={className}>
        {children?.map((child, index) => {
            return <Item 
                        i={i} 
                        key={index}
                        index={index}
                        ref={ref}
                        inView={inView}
                    >
                        {child}
                    </Item>
            }
        )}

    </motion.div>
  )
}

export default ScrollCardsAnimation