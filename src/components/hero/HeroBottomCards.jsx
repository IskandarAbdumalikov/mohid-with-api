import React from "react";
import { HEROBOTTOM } from "../../constants/heroBottomCards";

const HeroBottomCards = () => {
  console.log(HEROBOTTOM);
  let heroBottomCard = HEROBOTTOM.map((el) => (
    <div key={el.id} className="hero__card">
      <div className="hero__card__left">
        <img src={el.img} alt="" />
      </div>
      <div className="hero__card__right">
        <h1>{el.name}</h1>
        <p>{el.desc}</p>
      </div>
    </div>
  ));
  return <>{heroBottomCard}</>;
};

export default HeroBottomCards;
