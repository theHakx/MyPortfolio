import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useScroll, useTransform } from 'framer-motion'
import './parallax.scss'

const Parallax = ({type}) => {

    const ref = useRef()
    const {scrollYProgress} = useScroll({
        target:ref,
        offset: ['start start', 'end start']
    });

    const ref2 = useRef()
    const pararef = useInView( ref2,{margin : '50px'})

    const yText = useTransform(scrollYProgress,[0,1], ['0%', '500%'])
    const yBg = useTransform(scrollYProgress,[0,1], ['0%', '100%'])
  const wordVariants = {
    hidden: { opacity: 0, y: 10 },
    show: (i) => ({ opacity: 1, y: 0, transition: { delay: 0.15 * i, duration: 0.5 } })
  }

  return (
    <div className='parallax'
        ref = {ref}
        style={{background:type === 'services' ? ' linear-gradient(173deg, rgba(0,3,31,1) 24%, rgba(54,28,0,1) 65%, rgba(0,1,41,1) 97%)'
        :' linear-gradient(173deg, rgba(0,3,31,1) 24%, rgba(100,0,0,1) 65%, rgba(0,1,41,1) 97%)'}}
        >

      {/* Desktop heading remains inline; conditionally hidden on mobile per type */}
      <motion.h1 className={`desktopTitle ${type}`} style={{y:yText}}>{type === 'services' ? 'What I Do?' : 'What I Did?'}</motion.h1>

      {/* Mobile full-screen stacked title for services only (shown via CSS on mobile) */}
      {type === 'services' && (
        <div className='mobileTitle services'>
          {['WHAT', 'I', 'DO'].map((w, i) => (
            <motion.span key={w} custom={i} initial='hidden' whileInView='show' viewport={{ once: true }} variants={wordVariants}>{w}</motion.span>
          ))}
        </div>
      )}
      {type === 'portfolio' && (
        <div className='mobileTitle portfolio'>
          {['WHAT', 'I', 'DID'].map((w, i) => (
            <motion.span key={w} custom={i} initial='hidden' whileInView='show' viewport={{ once: true }} variants={wordVariants}>{w}</motion.span>
          ))}
        </div>
      )}
      <motion.div className="mountains" ></motion.div>
      <motion.div className="planets" style={{y:yBg}}></motion.div>
      <motion.div className="stars" style={{x:yBg}}></motion.div>
    </div>
  )
}

export default Parallax
