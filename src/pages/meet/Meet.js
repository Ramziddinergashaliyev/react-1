import React from 'react'
import "./meet.css"
import meetimg from "../../assets/images/meet-img.png"

function Meet() {
  return (
    <div className='meet'>
       <div className="container">
        <div className="meet__cards">
          <div className="meet__card meet__imgs">
             <img className='meet__img' src={meetimg} alt="" />
          </div>
          <div className="meet__card meet__info">
            <h3 className='meet__card__title'>Meet Dae</h3>
            <p className="meet__card__text">We’re a haircare line based in sunny Arizona. Our products are made up of the many things that make our home special, including the scent of orange blossoms in the air, colors of majestic sunsets and nourishing ingredients derived from desert botanicals. We believe haircare doesn’t have to be complicated and aimed to make a line that is simple and effective. We hope that dae plays a special role in your everyday hair routine from sunrise to sunset and allows you to feel the warmth of the desert wherever you are.</p>
            <a className='meet__link' href="#">Read More</a>
          </div>
        </div>
       </div>
    </div>
  )
}

export default Meet