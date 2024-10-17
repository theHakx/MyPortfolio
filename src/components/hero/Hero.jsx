import React from 'react'
import './hero.scss'
import { motion } from 'framer-motion'

const textVariants = {
  initial: {
    x: -500, 
    opacity: 0,
    transition: {
      duration: 20,
      staggerChildren: 0.1,
    }
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2,
      staggerChildren: 1,
    },
  },
  scrollButton: {
    opacity: 0,
    y:10,
    transition: {
      duration: 2.3,
      repeat:Infinity
    }
  },
}

const sliderVariants = {
  initial: {
    x: 0, 
  },
  animate: {
    x: '-220%',
    transition: {
      repeat: Infinity,
      repeatType : 'mirror',
      duration: 20,
    },
  },
 
}

const Hero = () => {
  return (
    <div className='hero'>
      <div className="wrapper">
        <motion.div className="textContainer" variants={textVariants} initial = 'initial' animate = 'animate'>
        <motion.h2 variants={textVariants} style={{color : 'white'}}>{'<> '}Clive Hakaperi{' </>'}</motion.h2>  
        <motion.h1 variants={textVariants}>Systems Developer</motion.h1> 
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>See the latest work</motion.button>
            <button variants={textVariants}>Contact me</button>
          </motion.div>
          <div className="cvDownload">
            <button className='cvButton' onClick={()=> window.open('./port/Clive_Hakaperi_CV.pdf', '_blank')}>Download CV here</button>
          <motion.img variants={textVariants} animate = 'scrollButton' src="/scroll.png" alt="" onClick={()=> window.open('./port/Clive_Hakaperi_CV.pdf', '_blank')} />
          </div>
        </motion.div>
      </div>
      <motion.div className="slidingTextContainer"  variants = {sliderVariants} initial = 'initial' animate = 'animate'>
        Systems lead 
      </motion.div>
      <motion.div className="imageContainer">
        <img src="" alt="" />
      </motion.div>
    </div>
  )
}

export default Hero 