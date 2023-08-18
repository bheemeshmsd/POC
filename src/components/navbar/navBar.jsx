import React from "react";
import Remove from "../../../assests/icons/remove.png";
import BurgerMenu from "../../../assests/icons/burger-bar.png";
import Keeps from "../../../assests/icons/keeps.png";
import Refresh from "../../../assests/icons/refresh.png";
import Grid from "../../../assests/icons/visualization.png";
import Settings from "../../../assests/icons/settings.png";
import Search from "../../../assests/icons/search.png";
import Menu from "../../../assests/icons/menu.png";

import ButtonIcon from "../button-icon";

const NavBar = () => {
  return (
    <nav className="navbarContainer">
      <section className="left">
        <ButtonIcon
          iconUrl={BurgerMenu}
          height={"35px"}
          width={"35px"}
          padding={"7px"}
        />
        <div className="iconTab prevent-hover">
          <ButtonIcon iconUrl={Keeps}  width={"50px"} height={"50px"} />
          <p>Keep</p>
        </div>
      </section>
      <section className="middle">
        <div className="inputWrapper">
          <ButtonIcon iconUrl={Search} padding={"10px"} />
          <input placeholder="Search"/>
        </div>
      </section>
      <section className="right">
        <div className="rightGrp1">
          <ButtonIcon
            iconUrl={Refresh}
            width={"42px"}
            height={"42px"}
            padding={"1opx"}
          />
          <ButtonIcon
            iconUrl={Grid}
            width={"42px"}
            height={"42px"}
            padding={"10px"}
          />
          <ButtonIcon
            iconUrl={Settings}
            width={"42px"}
            height={"42px"}
            padding={"10px"}
          />
        </div>
        <div className="rightGrp2">
          <ButtonIcon
            iconUrl={Menu}
            width={"42px"}
            height={"42px"}
            padding={"12px"}
          />
          <ButtonIcon iconUrl={Remove} width={"45px"} height={"45px"} />
        </div>
      </section>
    </nav>
  );
};

export default NavBar;
