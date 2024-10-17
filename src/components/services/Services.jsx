import React, { useRef } from 'react'
import { animate, motion, useInView } from 'framer-motion'
import './services.scss'

const variants = {
    initial:{
        x:-500,
        opacity:0,
        y:100
    },
    animate:{
        x:0,
        opacity:1,
        y:0,
        transition:{
            duration:1,
            staggerChildren:0.5,
        }
    }
}

const Services = () => {

    const ref = useRef();

    const isInView = useInView(ref, {margin: '-150px'})

  return (
    <motion.div
     className='services' 
     variants ={variants}
      initial = 'initial' 
      whileInView = 'animate'
      ref={ref}
      animate={isInView && 'animate'}
      >
        <motion.div className="textContainer" variants ={variants}>
            <p>I am all about about HTML,SCSS and JavaScript 
                <br /> yeah I am talking about REACT.js</p>
            <hr />
        </motion.div>
        <motion.div className="titleContainer" variants ={variants}>
            <div className="title">
                <img src="coding.jpg" alt="" />
                <h1><motion.b whileHover={{color: 'orange'}}>Unique Ideas</motion.b></h1>
            </div>
            <div className="title">
                <h1><motion.b whileHover={{color: 'orange'}}>For Your </motion.b>Organisation</h1>
                <button>
                    What I Do
                </button>
            </div>
        </motion.div>

        <motion.div className="listContainer" variants ={variants}>

            <motion.div className="box" whileHover={{backgroundColor: 'whitesmoke', color: '#0d0d0d'}}>
                <h2>Developing</h2>
                <p>
                I develop high-quality web applications using HTML, JavaScript, SCSS, and React. My expertise ensures responsive, user-friendly designs that meet diverse needs. By leveraging modern technologies, I deliver engaging experiences with optimal performance and seamless functionality. Let’s collaborate to bring your vision to life with innovative web solutions!                </p>
                {/* <button>Go</button> */}
            </motion.div>
            <motion.div className="box" whileHover={{backgroundColor: 'whitesmoke', color: '#0d0d0d'}}>
                <h2>Designing</h2>
                <p>
                I design attractive websites and web applications using HTML, React, SCSS, and JavaScript. My approach focuses on creating visually appealing and user-friendly interfaces that enhance the overall experience. By utilizing modern design principles and technologies, I ensure that each project meets client needs while delivering engaging and responsive solutions.
                </p>
                {/* <button>Go</button> */}
            </motion.div>
            <motion.div className="box" whileHover={{backgroundColor: 'whitesmoke', color: '#0d0d0d'}}>
                <h2>Consulting</h2>
                <p>
                With extensive IT knowledge and experience, I provide expert consulting services in web development. My background ensures that I understand the complexities of technology, enabling me to deliver effective solutions tailored to your needs. You can be assured of my commitment to excellence and the successful execution of your projects.                </p>
                {/* <button>Go</button> */}
            </motion.div>
            <motion.div className="box" whileHover={{backgroundColor: 'whitesmoke', color: '#0d0d0d'}}>
                <h2>Management</h2>
                <p>
                I bring relevant team leadership experience to the management department, ensuring effective collaboration and project execution. My background equips me to guide teams toward success while fostering a positive work environment. Rest assured, with my leadership skills, I am committed to achieving our goals and delivering outstanding results every time.                </p>
                {/* <button>Go</button> */}
            </motion.div>
        </motion.div>

    </motion.div>
  )
}

export default Services
