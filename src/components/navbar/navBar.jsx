import React from "react";
import Remove from "../../../assests/icons/remove.png";
import ButtonIcon from "../button-icon";

const NavBar = () => {
  return (
    <nav className="navbarContainer">
      <section className="left">
        <ButtonIcon iconUrl={Remove} />
        <div className="iconTab">
          <ButtonIcon iconUrl={Remove} />
          <h3>Keep</h3>
        </div>
      </section>
      <section className="middle">
        <div className="inputWrapper">
        <ButtonIcon iconUrl={Remove} />
        <input />
        </div>
       
      </section>
      <section className="right">
        <div className="rightGrp1">
          <ButtonIcon iconUrl={Remove} />
          <ButtonIcon iconUrl={Remove} />
          <ButtonIcon iconUrl={Remove} />
        </div>
        <div className="rightGrp2">
          <ButtonIcon iconUrl={Remove} />
          <ButtonIcon iconUrl={Remove} />
        </div>
      </section>
    </nav>
  );
};

export default NavBar;
