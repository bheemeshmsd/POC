import React from "react";

const ButtonIcon = ({ iconUrl }) => {
  return (
    <button className="buttonContainer" >
      <img src={iconUrl}></img>
    </button>
  );
};

export default ButtonIcon;