import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="Header">
      <div className="container">
        <div className="d_flex">
          <Link to="/">
            <h2 className="py-3">My Trands </h2>
          </Link>
          <Link to="/product">
            <p className="py-3">All Products</p>
          </Link>
        </div>
        <div>
          <Link to="/cart">Cart</Link>
        </div>
      </div>
    </div>
  );
}
