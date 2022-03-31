import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="nav">
      <div className="container">
        <div className="flex">
          <Link to="/" className="logo">
            BD Ecom
          </Link>
          <ul className="manu">
            <Link to="/" style={{ textDecoration: "none", color: "gray" }}>
              <li>Home</li>
            </Link>
            <Link to="/shop" style={{ textDecoration: "none", color: "gray" }}>
              <li>Shop</li>
            </Link>
            <Link to="/order" style={{ textDecoration: "none", color: "gray" }}>
              <li>Order</li>
            </Link>
            <Link
              to="/manage"
              style={{ textDecoration: "none", color: "gray" }}
            >
              <li>Manage</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
