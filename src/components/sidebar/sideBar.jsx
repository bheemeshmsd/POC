import React, { useState } from "react";
import ButtonIcon from "../button-icon";
import Remove from "../../../assests/icons/remove.png";

const SideBar = () => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <div className={hover ? "sideBarContainer hoverStyle" : "sideBarContainer"}>
      <span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ButtonIcon iconUrl={Remove} />
      </span>
      <span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ButtonIcon iconUrl={Remove} />
      </span>
      <span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ButtonIcon iconUrl={Remove} />
      </span>
      <span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ButtonIcon iconUrl={Remove} />
      </span>
      <span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ButtonIcon iconUrl={Remove} />
      </span>
    </div>
  );
};

export default SideBar;
