import React from "react";
import logo from "../../images/logo.png";
import "./Header.css";
import { Link } from "react-router-dom";

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
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Header;
