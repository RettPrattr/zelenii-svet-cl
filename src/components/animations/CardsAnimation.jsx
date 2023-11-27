import React from 'react'
import { motion } from "framer-motion";

const CardsAnimation = ({children, className}) => {

    const initial = {
        opacity: 0,
        scale: .9
    }
    const animate = {
        opacity: 1,
        scale: 1

    }

  return (
    <div className={className}>
        {children?.map((child, index) => {
            return <motion.div
                key={index}
                className={'card-item'}
                initial={initial}
                animate={animate}
                transition={{
                    duration: .3,
                    delay: .1 * index,
                    ease: "easeInOut"
                }}
            >
                {child}
            </motion.div>
        })}

    </div>
  )
}

export default CardsAnimation
