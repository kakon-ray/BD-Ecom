import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="nav">
      <div className="container">
        <div className="flex">
          <a href="/" className="logo">
            BD Ecom
          </a>
          <ul className="manu">
            <li>Home</li>
            <li>Order</li>
            <li>Order Review</li>
            <li>Manage</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
