import { stagger } from 'framer-motion'
import { motion } from 'framer-motion'
import React from 'react'

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    }
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  }
}

const itemVariants = {
  open: {
    y: 0,
    opacity: 1
  },
  closed: {
    y: 50,
    opacity: 0
  }
}

const Links = () => {
  const items = [
    'Homepage',
    'Services',
    'Portfolio',
    'Contact',
    // 'About',
  ]

  const handleSmoothScroll = (e, target) => {
    e.preventDefault();
    const section = document.querySelector(target);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div className='links' variants={variants}>
      {items.map(item => (
        <motion.a 
          href={`#${item}`} 
          key={item} 
          variants={itemVariants} 
          whileHover={{ scale: 1.1 }} 
          whileTap={{ scale: 0.9 }}
          onClick={(e) => handleSmoothScroll(e, `#${item}`)} 
        >
          {item} 
        </motion.a>
      ))}
    </motion.div>
  )
}

export default Links