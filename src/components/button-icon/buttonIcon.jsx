import React from "react";

const ButtonIcon = ({ iconUrl, height, width ,padding}) => {
  return (
    <button
      className="buttonContainer"
      style={{ height: height || "40px", width: width || "40px", padding: padding }}
    >
      <img title="button-icon" src={iconUrl}></img>
    </button>
  );
};

export default ButtonIcon;
