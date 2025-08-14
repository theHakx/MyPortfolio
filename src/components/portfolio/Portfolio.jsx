import React, { useRef, useState } from 'react'
import {motion,useScroll, useSpring, useTransform} from 'framer-motion'
import Omnilearn from '../../assets/portfolioPics/Omnilearn.jpg'
import Omnilearn2 from '../../assets/portfolioPics/Omnilearn2.jpg'
import Omnilearn3 from '../../assets/portfolioPics/Omnilearn3.jpg'

import secondment1 from '../../assets/portfolioPics/secondment1.jpg'
import secondment2 from '../../assets/portfolioPics/secondment2.jpg'
import secondment3 from '../../assets/portfolioPics/secondment3.jpg'


import ems1 from '../../assets/portfolioPics/ems1.jpg'
import ems2 from '../../assets/portfolioPics/ems2.jpg'
import ems3 from '../../assets/portfolioPics/ems3.jpg'
import ems4 from '../../assets/portfolioPics/ems4.jpg'
import ems5 from '../../assets/portfolioPics/ems5.jpg'


import './portfolio.scss'


const items = [
  {
    id:1,
    title:'Omnilearn Platform',
    img: Omnilearn,
    imgs:[ Omnilearn2, Omnilearn3,],
    description: 'Developed and maintained a WordPress-based e-learning platform built with Elementor and enhanced through custom CSS. Currently hosts 600+ active users, with ongoing responsibilities for system administration, content updates, and performance optimization.'
  },
  {
    id:2,
    title:'REACT E-Commerce Shop',
    img:'./port/loanshop.png',
    imgs:[ './port/loanshop2.png',],
    description: 'An online E-Commerce shop built from ground up using REACT.js and paypal sandbox for handling payments'
  },
  {
    id:3,
    title:'REACT Secondment Tracking System',
    img:secondment2,
    imgs:[ secondment1,secondment3],
    description: 'Built a React.js-powered tracking system to monitor employee performance, correlating departmental objectives with academic qualifications for data-driven insights and reporting'
  },
  {
    id:4,
    title:'Employee Management System',
    img:ems1,
    imgs:[ ems2,ems3,ems4,ems5],
    description: 'Supervised the end-to-end development of an Enterprise Management System (EMS) built from the ground up using React.js, Node.js, and PostgreSQL. The platform serves as a state-of-the-art solution for managing all company operations and HR processes, with ongoing expansion into additional modules to evolve into a comprehensive enterprise ecosystem.'
  },
  {
    id:5,
    title:'Performance Management System',
    img:'./port/pms.png',
    imgs:[ './port/pmsDashboard.png' ],
    description: 'A complex system developed using REACT.js that measures the performance of individual employees, campaigns and overal performance of the company'
  },
]

const Single = ({item}) =>{
  
  const [showImages, setShowImages] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const ref = useRef()
  const {scrollYProgress} = useScroll({target : ref,
    // offset:['start start', 'end start']
  })

  const y = useTransform (scrollYProgress, [0,1], [-200,200])

  const openModal = () => {
    setShowModal(true)
    setCurrentImageIndex(0)
  }

  const closeModal = () => {
    setShowModal(false)
    setCurrentImageIndex(0)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === item.imgs.length - 1 ? 0 : prev + 1
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? item.imgs.length - 1 : prev - 1
    )
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      closeModal()
    } else if (e.key === 'ArrowRight') {
      nextImage()
    } else if (e.key === 'ArrowLeft') {
      prevImage()
    }
  }

  return (

    <section>
    <div className="container">
      <div className="wrapper">
        <div className="imageContainer" ref={ref}>
          {showImages && (
            <div className="imgs">
              {item.imgs.map((img, index) => (
                <img key={index} src={img} alt="" style={{width: '100%', height: 'auto'}} />
              ))}
            </div>
          )}
          {!showImages && ( 
            <img src={item.img} alt="" style={{width: '100%', height: 'auto'}} />
          )}
        </div>
        <motion.div className="textContainer" style={{y}}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <button onClick={openModal}>Click to view</button>
        </motion.div>
      </div>
    </div>

    {/* Modal */}
    {showModal && (
      <div className="modal-overlay" onClick={closeModal}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={closeModal}>×</button>
          
          <div className="modal-image-container">
            <img 
              src={item.imgs[currentImageIndex]} 
              alt="" 
              className="modal-image"
            />
          </div>

          {item.imgs.length > 1 && (
            <div className="modal-navigation">
              <button className="nav-btn prev-btn" onClick={prevImage}>
                ‹
              </button>
              <div className="image-counter">
                {currentImageIndex + 1} / {item.imgs.length}
              </div>
              <button className="nav-btn next-btn" onClick={nextImage}>
                ›
              </button>
            </div>
          )}
        </div>
      </div>
    )}
  </section>
  )
}

const Portfolio = () => {
  const ref = useRef()

  const {scrollYProgress} = useScroll({target : ref,offset:['end end', 'start start']})
  const sclaeX = useSpring(scrollYProgress,{
    stiffness:100,
    damping:30,
  })

  return (
    <div className='portfolio' ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div className="progressBar" style={{scale: sclaeX}}></motion.div>
      </div>
      {items.map((item)=>(
        <Single item={item} key={item.id}/>
      ))}
    </div>
  )
}

export default Portfolio
