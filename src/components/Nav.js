import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Nav(props) {
  return (
    <nav className="menu">
      <ul>
        <div>
        <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/liked">
            <li><i class={"fas fa-heart fa-sm"}></i>Liked</li>
          </Link>
          <Link to="/cart">
            <li><i class="fas fa-shopping-cart fa-sm"></i>Cart({props.getTotalQuantity()})</li>
          </Link>
        </div>
      </ul>
    </nav>
  );
}

export default Nav;
