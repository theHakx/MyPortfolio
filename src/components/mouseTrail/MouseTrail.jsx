import React from 'react'
import { MouseTrail } from "@stichiboi/react-elegant-mouse-trail";
import './mouseTrail.scss'

const MouseTrail = () => {
  return (
    <div>
       <MouseTrail strokeColor={"#FF8541"}/>
       <main>{children}</main>
    </div>
  )
}

export default MouseTrail
