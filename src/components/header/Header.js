import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <img
          src={require("../../assets/images/Logo_Netflix.png")}
          alt="Netflix"
        />
      </div>
      <div className="header__profile">
      <img
          src={require("../../assets/images/profile.png")}
          alt="Netflix"
        />
      </div>
    </div>
  );
};

export default Header;
