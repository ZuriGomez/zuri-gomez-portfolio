import React from "react";
import { useEffect, useState } from "react";
import "../MyWorkSection/MyWorkSection.scss";
import home from "../../assets/images/home.png";
import landingPage from "../../assets/images/landing_page.png";
import listing from "../../assets/images/listing.png";
import newListing from "../../assets/images/new_listing.png";
import sellerView from "../../assets/images/seller_view.png";
import userProfile from "../../assets/images/user_profile.png";
import Arrow from "../../assets/icons/arrow.png"

const images = [
  landingPage,
  home,
  listing,
  userProfile,
  sellerView,
  newListing,
];

function MyWorkSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change the image every 3 seconds
    return () => clearInterval(interval); // Cleanup the interval
  }, []);

  return (
    <section id="work" className="work-section">
      <h1 className="work-section__title">
        <span className="work-section__title-number">03.</span>{" "}
        <span className="work-section__title-text">My Work</span>
      </h1>
      <div className="work-section__container">
        <div className="work-section__item">
          <div
            className="work-section__item-image"
            style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
          ></div>
          <article className="work-section__item-info">
            <h3 className="work-section__item-info__subtitle">Featured</h3>
            <h2 className="work-section__item-info__title">miplanta</h2>
            <p className="work-section__item-info__text">
              miPlanta is a mobile-first marketplace designed to connect plant
              enthusiasts and sellers. Users can browse and post listings for
              plants, view detailed information about plants for sale, and
              manage their profiles, including their own listings.
            </p>
            <div className="work-section__item-info__tools">
              <p className="work-section__item-info__tools-tag">JavaScript</p>
              <p className="work-section__item-info__tools-tag">HTML</p>
              <p className="work-section__item-info__tools-tag">CSS</p>
              <p className="work-section__item-info__tools-tag">Sass</p>
              <p className="work-section__item-info__tools-tag">React</p>
              <p className="work-section__item-info__tools-tag">Node.js</p>
              <p className="work-section__item-info__tools-tag">Express.js</p>
              <p className="work-section__item-info__tools-tag">MySQL</p>
              <p className="work-section__item-info__tools-tag">Web API</p>
            </div>
          </article>
        </div>
        <div className="work-section__link">
          <a
            href="https://github.com/ZuriGomez/zuri-gomez-miplanta.git"
            target="_blank"
            rel="noopener noreferrer"
            className="work-section__link-item"
          > Go to the GitHub Repo
            <img
              className="work-section__link-item-icon"
              src={Arrow}
              alt="Arrow"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default MyWorkSection;
