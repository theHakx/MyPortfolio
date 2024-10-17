import './navbar.scss'
import { motion } from 'framer-motion'


import React from 'react'
import Sidebar from '../sidebar/Sidebar'

const Navbar = () => {
  return (
    <div className='navbar'>
        {/* Sidebar */}
        <Sidebar/>
        <div className="wrapper">
            <motion.span initial ={{opacity:0, scale:0.5}} animate ={{opacity:1, scale:1}} transition={{duration:0.5}}>Clive Hakaperi</motion.span>
            <div className="socials">
                <a href="https://www.linkedin.com/in/clive-hakaperi/"><img src="/linkedin.png" alt="" /></a>
                <a href="https://www.linkedin.com/in/clive-hakaperi/"><img src="/facebook.png" alt="" /></a>
                <a href="https://www.linkedin.com/in/clive-hakaperi/"><img src="/instagram.png" alt="" /></a>
                <a href="https://www.linkedin.com/in/clive-hakaperi/"><img src="/youtube.png" alt="" /></a>

            </div>
        </div>
    </div> 
  )
}

export default Navbar