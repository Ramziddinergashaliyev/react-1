import React from 'react'
import "./footer.css"

function Footer() {
  return (
    <div className='footer'>
      <div className="footer__row container">
        <div className='footer__left'>
           <ul>
            <li className='footer__list'>Sustainability</li>
            <li className='footer__list'>Contact Us</li>
            <li className='footer__list'>FAQ</li>
            <li className='footer__list'>Careers</li>
           </ul>
           <ul>
            <li className='footer__list'>Privacy Policy</li>
            <li className='footer__list'>CA Privacy Rights</li>
            <li className='footer__list'>Terms of Use</li>
            <li className='footer__list'>Newsletter</li>
           </ul>
        </div>
        <div className="footer__right">
          <h3 className='footer__title'>ONLY GOOD HAIR DAES AHEAD—AND 10% OFF YOUR FIRST ORDER</h3>
          <form className='footer__form'>
            <input className='footer__input' type="text" />
            <button className='footer__btn'>SUBSCRIBE</button>
          </form>
          <p className='footer__text'>Want to shop in person? Swing by our showroom.</p>
          <p className='footer__text'>M-F, 10am-2pm 5051 E Indigo St, Suite 105, Mesa, AZ 85205</p>
        </div>
      </div>
    </div>
  )
}

export default Footer