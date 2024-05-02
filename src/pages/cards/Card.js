import React from "react";
import "./card.css"
import setimg from "../../assets/images/img1.png"
import shampoimg from "../../assets/images/img2.png"
import conditionimg from "../../assets/images/img3.png"

function Card() {
  return (
    <div className="cards">
      <div className="container">
      <h1 className="card__title">Pick a Pretty Bottle</h1>
      <div className="card__rows">
        <div className="card">
           <img className="card__img" src={setimg} alt="" />
           <div className="card__info">
            <h3 className="card__info__title">The Daedreamer Set</h3>
            <p className="card__info__text">$49.00</p>
           </div>
        </div>
        <div className="card">
           <img className="card__img" src={shampoimg} alt="" />
           <div className="card__info">
            <h3 className="card__info__title">The Daedreamer Set</h3>
            <p className="card__info__text">$49.00</p>
           </div>
        </div>
        <div className="card">
           <img className="card__img" src={conditionimg} alt="" />
           <div className="card__info">
            <h3 className="card__info__title">The Daedreamer Set</h3>
            <p className="card__info__text">$49.00</p>
           </div>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Card