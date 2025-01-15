import React, { useState, useEffect } from "react";
import "../Carousel/Carousel.scss";
import knex from "../../assets/icons/knex.png";
import css from "../../assets/icons/css.png";
import express from "../../assets/icons/express.png";
import github from "../../assets/icons/github.png";
import heruko from "../../assets/icons/heroku.png";
import html from "../../assets/icons/html.png";
import javascript from "../../assets/icons/javascript.png";
import jira from "../../assets/icons/jira.png";
import jwt from "../../assets/icons/jwt.png";
import mysql from "../../assets/icons/mysql.png";
import node from "../../assets/icons/node.png";
import phyton from "../../assets/icons/phyton.png";
import visual from "../../assets/icons/visual.png";
import postman from "../../assets/icons/postman.png";
import react from "../../assets/icons/react.png";
import sass from "../../assets/icons/sass.png";
import typescript from "../../assets/icons/typescript.png";

const images = [
  knex,
  css,
  express,
  github,
  heruko,
  html,
  javascript,
  jira,
  jwt,
  mysql,
  node,
  phyton,
  visual,
  postman,
  react,
  typescript,
  sass,
];

const Carousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const totalItems = images.length;

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? totalItems - 1 : prevIndex - 1
//     );
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       handleNext();
//     }, 3000); // Auto-scroll every 3 seconds

//     return () => clearInterval(interval); // Clear interval when the component is unmounted
//   }, [currentIndex]);


//   return (
//     <div className="carousel">
//       <div
//         className="carousel__container"
//         style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//       >
//         {images.map((image, index) => (
//           <div className="carousel__item" key={index}>
//             <img src={image} alt={`Slide ${index + 1}`} />
//           </div>
//         ))}
//       </div>
//       <button
//         className="carousel__btn carousel__btn--prev"
//         onClick={handlePrev}
//       >
//         &#10094;
//       </button>
//       <button
//         className="carousel__btn carousel__btn--next"
//         onClick={handleNext}
//       >
//         &#10095;
//       </button>
//     </div>
//   );
// };

return (
    <div className="carousel">
      <div className="carousel__container">
        {images.map((image, index) => (
          <div className="carousel__item" key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};


export default Carousel;
