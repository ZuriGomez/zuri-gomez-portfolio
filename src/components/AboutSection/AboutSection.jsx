import React from "react";
import "../AboutSection/AboutSection.scss";
import ProfilePic from "../../assets/images/profile.png";
import Carousel from "../Carousel/Carousel.jsx";

function AboutSection() {
  return (
    <section className="about section">
      <h1 className="about section__title">
        <span className="about section__title-number">01.</span>{" "}
        <span className="about section__title-text">About</span>
      </h1>
      <div className="about section__intro">
        <p className="intro__text">
          My name is Zuri Gomez, and I’m passionate about building meaningful
          digital experiences. My interest in software development began in 2020
          when I set out to create my own app. I started learning independently,
          but in 2024, I took the leap and joined an intensive software
          engineering bootcamp at BrainStation. This experience allowed me to
          immerse myself in the field, sharpen my skills, and apply my knowledge
          to a variety of hands-on projects. While I’m still early in my
          journey, I’m driven by curiosity, a love of problem-solving, and a
          commitment to continuous growth. My focus is on crafting clean,
          efficient, and user-friendly solutions.​
        </p>
        <div className="wrapper">
          <img
            className="intro__picture"
            src={ProfilePic}
            alt="Profile Picture"
          />
        </div>
      </div>
      <h2 className="subtitle">
        These are some of the technologies I have worked with:
      </h2>
      <Carousel />
    </section>
  );
}

export default AboutSection;
