import React from 'react'
import { motion } from 'framer-motion'

const Test = () => {
  return (
    <div className='course'>
        <motion.div className="box" initial={{opacity:0, scale:1.5}} animate= {{opacity:1, x:200}} transition={{duration : 3}}></motion.div>
    </div>
  )
}

export default Test