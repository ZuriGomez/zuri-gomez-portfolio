import React from "react";
import PropTypes from "prop-types";
import "../Button/Button.scss";

function Button({ text, path }) {
  return (
    <a
      href={path}
      target="_blank" 
      rel="noopener noreferrer"
      className="button"
    >
      {text}
    </a>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired, // Text displayed on the button
  path: PropTypes.string.isRequired, // External URL
};

export default Button;
