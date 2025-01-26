import React from "react";
import PropTypes from "prop-types";
import "../Button/Button.scss";

function Button({ text, path,isExternal = false, onClick }) {
  return isExternal ? (
    <a
      href={path}
      target="_blank" 
      rel="noopener noreferrer"
      className="button"
      onClick={onClick}
    >
      {text}
    </a>
  ) : (
    <button onClick={onClick} className="button">
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired, // Text displayed on the button
  path: PropTypes.string.isRequired, // External URL
  isExternal: PropTypes.bool,
  onClick: PropTypes.func, // Define the onClick prop
};

export default Button;
