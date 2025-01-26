import React from "react";
import "../ContactSection/ContactSection.scss";
import githubVerde from "../../assets/icons/githubLogo.png";
import linkedInVerde from "../../assets/icons/linkedInLogo.png";

function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <h1 className="contact-section__title">
        <span className="contact-section__title-number">04.</span>{" "}
        <span className="contact-section__title-text">My Contact</span>
      </h1>
      <div className="contact-section__container">
        <h2 className="contact-section__container-title">
          Let’s connect! I’m always open to new opportunities, exciting
          collaborations, or even just a friendly chat. If my work resonates
          with you, feel free to reach out—let’s explore how we can collaborate!
        </h2>
        <div className="contact-section__container-wrapper-subtitle">
          <a
            href="mailto:zuri.gomez.crz@gmail.com"
            className="contact-section__email"
          >
            zuri.gomez.crz@gmail.com
          </a>
        </div>
      </div>
      <div className="contact-section__links">
        <a
          href="https://github.com/ZuriGomez"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-section__links-item"
        >
          <img
            className="contact-section__links-item"
            src={githubVerde}
            alt="GitHubLogoContact"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/zurisadai-gomez-cruz/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-section__links-item"
        >
          <img
            className="contact-section__links-item"
            src={linkedInVerde}
            alt="LinkedInLogoContact"
          />
        </a>
      </div>
    </section>
  );
}

export default ContactSection;
