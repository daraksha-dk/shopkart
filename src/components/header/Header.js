import React, { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./header.scss";
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

        <button className="btn btn-primary">Add to Cart</button>
      </div>
      <div className="options">
        <select className="form-select">
          <option value="" disabled>
            Category
          </option>
          <option value="hoodies">Hoodies</option>
          <option value="t-shirt">T-Shirt</option>
        </select>
        <select className="form-select">
          <option value="" disabled>
            Size
          </option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>
        <span className="reset-btn">
          <i className="fa-solid fa-arrow-rotate-left"></i> Reset
        </span>
      </div>
    </div>
  );
};

export default Header;
