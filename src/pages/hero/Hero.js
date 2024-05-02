import React from 'react'
import "./hero.css"
import imghero from "../../assets/images/Frame.png"

function Hero() {
  return (
    <div className='hero__imgs'>
      <img className='hero__img' src={imghero} alt="" />
    </div>
  )
}

export default Hero