import React from "react";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header">
      <img src={logo} alt="" sizes="" srcSet="" />

      <div>
        <input
          className="search-btn"
          type="search"
          name=""
          id=""
          placeholder="Search Amazon"
        />
        <button className="search-icon">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>

      <div className="nav-elements">
        <a href="/order">Orders</a>
        <a href="/order-review">Order Review</a>
        <a href="/inventory">Inventory</a>
        <a href="/login">Login</a>
      </div>
    </nav>
  );
};

export default Header;
