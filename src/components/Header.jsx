import "./components.css";
import React from "react";
import Artboard41png from "../assets/Artboard41.png";

function Header() {
  return (
    <div className="nav-bar">
      <div className="logo-space">
        <img className="logo" src={Artboard41png} alt="Logo" />
      </div>
      <ul className="nav-list">
        <li className="navlist-item">
          <a href="#">Home</a>
        </li>
        <li className="navlist-item">
          <a href="#">About</a>
        </li>
        <li className="navlist-item">
          <a href="#">Contact Us</a>
        </li>
        <li className="navlist-item">
          <a href="#">Tour Review</a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
