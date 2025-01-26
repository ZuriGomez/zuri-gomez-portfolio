import React, { useEffect, useState } from "react";
import logo from "../../assets/logos/logo.png";
import menuIcon from "../../assets/icons/menu.png";
import Button from "../Button/Button";
import "../Header/Header.scss";

function Header() {
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 50);
      setIsMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const refreshPage = () => {
    window.location.href = "/";
  };

  return (
    <header className={`header ${isScrolling ? "header--hidden" : ""}`}>
      <div className="header__logo">
        <a href="/" onClick={refreshPage}>
          <img src={logo} alt="Logo" className="header__logo-image" />
        </a>
      </div>
      <button
        className="header__menu-button"
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <img src={menuIcon} alt="Menu" className="header__menu-icon" />
      </button>
      <div
        className={`header__wrapper ${
          isMenuOpen ? "header__wrapper--open" : ""
        }`}
      >
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <a href="#about" className="header__nav-link">
                <span className="header__nav-number">01.</span>{" "}
                <span className="header__nav-text">About</span>
              </a>
            </li>
            <li className="header__nav-item">
              <a href="#expertise" className="header__nav-link">
                <span className="header__nav-number">02.</span>{" "}
                <span className="header__nav-text">My Expertise</span>
              </a>
            </li>
            <li className="header__nav-item">
              <a href="#work" className="header__nav-link">
                <span className="header__nav-number">03.</span>{" "}
                <span className="header__nav-text">My Work</span>
              </a>
            </li>
            <li className="header__nav-item">
              <a href="#contact" className="header__nav-link">
                <span className="header__nav-number">04.</span>{" "}
                <span className="header__nav-text">Contact</span>
              </a>
            </li>
          </ul>
        </nav>
        <div className="header__resume">
          <Button
            text="Resume"
            path="https://drive.google.com/file/d/1pH749r9vJIrmZKgMiSRgPo-YZiRM7XVA/view?usp=sharing"
            isExternal={true}
            onClick={() => setIsMenuOpen(false)}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
