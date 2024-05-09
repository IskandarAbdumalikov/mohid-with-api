import React from "react";
import "./personCard.scss";
import { PERSONDATA } from "../../constants/personData";
import stars from "../../assets/stars.svg";
import watch from "../../assets/watch.svg";

const PersonCard = () => {
  let personCard = PERSONDATA.map((el) => (
    <div className="person__card" key={el.id}>
      <div className="person__card__left">
        <img src={el.url} alt="" />
      </div>
      <div className="person__card__right">
        <h2>{el.name}</h2>
        <p>{el.title}</p>
        <img className="person__card__stars" src={stars} alt="" />
      </div>
    </div>
  ));
  return (
    <>
      <section className="person__cards container">{personCard}</section>
      <section className="subscribe__section container">
        <div className="subscribe__left">
          <h2>Subscribe To Newsletter</h2>
          <p>Get free guide about smart watches daily. </p>
          <form className="subscribe__form" action="">
            <input placeholder="Enter Email Address" type="email" />
            <button className="subscribe__btn">Subscribe</button>
          </form>
        </div>
        <div className="subscribe__right">
          <img src={watch} alt="" />
        </div>
      </section>
    </>
  );
};

export default PersonCard;
