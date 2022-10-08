import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="Header">
      <div className="container">
        <div>
          <Link to="/">
            <h2 className="py-3">My Store</h2>
          </Link>
        </div>
        <div>
          <Link to="/cart">Cart</Link>
        </div>
      </div>
    </div>
  );
}
