import React, { useState } from "react";
import ButtonIcon from "../button-icon/buttonIcon";
import Remove from "../../../assests/icons/remove.png";
import Archive from "../../../assests/icons/download-file.png";
import Bulb from "../../../assests/icons/light-bulb.png";
import Pencil from "../../../assests/icons/pencil.png";
import Delete from "../../../assests/icons/delete-2.png";
import Bell from "../../../assests/icons/bell.png";

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
        <ButtonIcon backgroundColor={hover ? "" : "#FDEFC3"} iconUrl={Bulb} />{" "}
        {hover && <p>Notes</p>}
      </span>
      <span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ButtonIcon iconUrl={Bell} /> {hover && <p>Reminders</p>}
      </span>
      <span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ButtonIcon iconUrl={Pencil} /> {hover && <p>Edit Labels</p>}
      </span>
      <span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ButtonIcon iconUrl={Archive} /> {hover && <p>Archive</p>}
      </span>
      <span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ButtonIcon iconUrl={Delete} /> {hover && <p>Bin</p>}
      </span>
    </div>
  );
};

export default SideBar;
