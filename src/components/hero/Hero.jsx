import React from "react";
import "./hero.scss";
import heroImg from "../../assets/hero.svg";
import { IoSearch } from "react-icons/io5";
import HeroBottomCards from "./HeroBottomCards";

const Hero = () => {
  return (
    <>
      <section id="hero">
        <div className="hero container">
          <div className="hero__left">
            <h1>Discover Most Suitable Watches</h1>
            <p>
              Find the best, reliable, and cheap smart watches here. We focus on
              product quality. Here you can find smart watches of almost all
              brands. So why you are waiting? Just order now!
            </p>
            <form className="hero__form">
              <IoSearch className="hero__search__icon" />
              <input placeholder="Find the best brands" type="text" />
              <button className="hero-btn">Search</button>
            </form>
          </div>
          <div className="hero__right">
            <img src={heroImg} alt="" />
          </div>
        </div>
      </section>
      <section className="hero__bottom container">
        <HeroBottomCards/>
      </section>
    </>
  );
};

export default Hero;
