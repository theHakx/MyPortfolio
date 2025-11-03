import { motion } from 'framer-motion'
import './parallax.scss'

const Parallax = ({type}) => {
  const background = type === 'services'
    ? ' linear-gradient(173deg, rgba(0,3,31,1) 24%, rgba(54,28,0,1) 65%, rgba(0,1,41,1) 97%)'
    : ' linear-gradient(173deg, rgba(0,3,31,1) 24%, rgba(100,0,0,1) 65%, rgba(0,1,41,1) 97%)'

  const wordsDesktop = type === 'services' ? ['What', 'I', 'Do?'] : ['What', 'I', 'Did?']

  return (
    <div className='parallax' style={{ background }}>
      {/* Desktop animated words */}
      <motion.div className={`desktopWords ${type}`} initial={{opacity:0}} whileInView={{opacity:1}} viewport={{ once: false, amount: 0.6 }}>
        {wordsDesktop.map((w, i) => (
          <motion.span key={w} className='word breath' initial={{opacity:0, y: 20}} whileInView={{opacity:1, y:0}} transition={{delay: i * 0.15, duration: 0.6}}>
            {w}
          </motion.span>
        ))}
      </motion.div>

      {/* Mobile stacked words */}
      {type === 'services' && (
        <div className='mobileTitle services'>
          <motion.span className='breath' initial={{opacity:0, y: 12}} whileInView={{opacity:1, y:0}} transition={{duration:0.6}}>WHAT</motion.span>
          <motion.span className='breath' initial={{opacity:0, y: 12}} whileInView={{opacity:1, y:0}} transition={{delay:0.15, duration:0.6}}>I</motion.span>
          <motion.span className='breath' initial={{opacity:0, y: 12}} whileInView={{opacity:1, y:0}} transition={{delay:0.3, duration:0.6}}>DO</motion.span>
        </div>
      )}
      {type === 'portfolio' && (
        <div className='mobileTitle portfolio'>
          <motion.span className='breath' initial={{opacity:0, y: 12}} whileInView={{opacity:1, y:0}} transition={{duration:0.6}}>WHAT</motion.span>
          <motion.span className='breath' initial={{opacity:0, y: 12}} whileInView={{opacity:1, y:0}} transition={{delay:0.15, duration:0.6}}>I</motion.span>
          <motion.span className='breath' initial={{opacity:0, y: 12}} whileInView={{opacity:1, y:0}} transition={{delay:0.3, duration:0.6}}>DID</motion.span>
        </div>
      )}
    </div>
  )
}

export default Parallax
