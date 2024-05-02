import React from 'react'
import "./navbar.css"
import img from '../../assets/images/Rectangle.svg'

function Navbar() {
  return (
    <>
      <div className="navbar__top">
        <p>Free Shipping on US Orders Over $60</p>
      </div>
      <div className='container'>
        <div className="navbar__bottom">
          <ul className='navbar__item'>
            <li className='navbar__list'>
              <a className='navbar__link' href="#">Shop</a>
            </li>
            <li className='navbar__list'>
              <a className='navbar__link' href="#">The Edit</a>
            </li>
            <li className='navbar__list'>
              <a className='navbar__link' href="#">Our Story</a>
            </li>
            <li className='navbar__list'>
              <a className='navbar__link' href="#">Reviews</a>
            </li>
          </ul>
          <div className="navbar__imgs">
            <img className='navbar__img' src={img} alt="" />
          </div>
        <div>
          <a className='navbar__link' href="#">Account</a>
        </div>
        </div>
      </div>
    </>
  )
}

export default Navbar