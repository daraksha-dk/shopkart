import React, { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./header.scss";
import CartIcon from "../cart/CartIcon";
import { ReactComponent as Hr } from "../../assets/images/hr.svg";

const Header = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <span className="logo-txt">ShopKart</span>
        <span className="logo-hr">
          <Hr />
        </span>
      </Link>

      <div className="filter-products">
        <span>Search:</span>
        <input
          type="text"
          className="form-control"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <CartIcon />
      </div>
    </div>
  );
};

export default Header;
