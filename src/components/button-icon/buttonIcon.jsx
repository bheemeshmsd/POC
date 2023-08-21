import React from "react";
import PropTypes from "prop-types";

const ButtonIcon = ({ iconUrl, height, width, padding}) => {
  return (
    <button
      className="buttonContainer"
      style={{
        height: height || "40px",
        width: width || "40px",
        padding: padding
      }}
    >
      <img title="button-icon" src={iconUrl}></img>
    </button>
  );
};

ButtonIcon.prototype = {
  iconUrl: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  padding: PropTypes.string,
};

export default ButtonIcon;
