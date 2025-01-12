import React from "react";
import "../Button/Button.scss";

function Button({ text }) {
  return (
    <button type="submit" className="button">
      {text}
    </button>
  );
}

export default Button;
