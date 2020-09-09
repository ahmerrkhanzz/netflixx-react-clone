import React, { useEffect, useState } from "react";
import "./Header.scss";

const Header = () => {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`header ${show && "header__black"}`}>
      <div className="header__logo">
        <img
          src={require("../../assets/images/Logo_Netflix.png")}
          alt="Netflix"
        />
      </div>
      <div className="header__profile">
        <img src={require("../../assets/images/profile.png")} alt="Netflix" />
      </div>
    </div>
  );
};

export default Header;
