import React, { useRef, useState } from 'react'
import {motion,useScroll, useSpring, useTransform} from 'framer-motion'
import './portfolio.scss'


const items = [
  {
    id:1,
    title:'Online Form Submission',
    img:'./port/form1.png',
    imgs:[ './port/form2.png', './port/form3.png',],
    description: 'An Online Form Submission system developed using JavaScript,HTML and CSS to capture user details with ease thus exporting to excel for further processing'
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
    title:'REACT Secondmnet Tracking System',
    img:'./port/stsInfo.png',
    imgs:[ './port/stsProfile.png',],
    description: 'A system that is designed to track employee work progress in relation to their department and academic qualifications'
  },
  {
    id:4,
    title:'Online Learning Platform',
    img:'./port/omniverseHome.png',
    imgs:[ './port/omniverseCourses.png',],
    description: 'A fully functional online learning platform developed by WordPress. Users can log in and watch videos and attempt quizzes online'
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
  const ref = useRef()
  const {scrollYProgress} = useScroll({target : ref,
    // offset:['start start', 'end start']
  })

  const y = useTransform (scrollYProgress, [0,1], [-200,200])


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
          <button onClick={() => setShowImages(!showImages)}>Click to view</button> {/* Toggle visibility */}
        </motion.div>
      </div>
    </div>
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
