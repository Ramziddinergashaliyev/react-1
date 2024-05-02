import React from 'react'
import "./follow.css"
import rasm1 from "../../assets/images/rasm1.png"
import rasm2 from "../../assets/images/rasm2.png"
import rasm3 from "../../assets/images/rasm3.png"
import rasm4 from "../../assets/images/rasm4.png"
import rasm5 from "../../assets/images/rasm5.png"
import rasm6 from "../../assets/images/rasm6.png"

function Follow() {
  return (
    <div className='follow container'>
       <h2 className='follow__title'>Follow Us @daehair</h2>
       <div className="follow__imgs">
        <img className='follow__img' src={rasm1} alt="" />
        <img className='follow__img' src={rasm2} alt="" />
        <img className='follow__img' src={rasm3} alt="" />
        <img className='follow__img' src={rasm4} alt="" />
        <img className='follow__img' src={rasm5} alt="" />
        <img className='follow__img' src={rasm6} alt="" />
       </div>
    </div>
  )
}

export default Follow