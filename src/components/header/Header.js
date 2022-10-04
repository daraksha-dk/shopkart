import React, { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./header.scss";
import CartIcon from "../cart/CartIcon";
import { ReactComponent as Hr } from "../../assets/images/hr.svg";
import CartDropdown from "../cart/CartDropdown";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { selectProducts } from "../../redux/reducers/product/products-selectors";
import { resetProducts, updateProducts } from "../../redux/actions";

const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  const productData = useSelector(selectProducts, shallowEqual);
  const dispatch = useDispatch();

  const searchItems = (searchValue) => {
    if (!searchValue) {
      dispatch(resetProducts());
      setSearchInput(searchValue);
      return;
    }

    let tempProducts = productData;
    tempProducts = tempProducts.map((section) => {
      return {
        ...section,
        items: section.items.filter((item) =>
          item.name.toLowerCase().includes(searchValue.toLowerCase())
        ),
      };
    });

    dispatch(updateProducts(tempProducts));
    setSearchInput(searchValue);
  };

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
          value={searchInput}
          onChange={(e) => searchItems(e.target.value)}
          placeholder="Search for products"
        />

        <CartIcon />
      </div>
      <CartDropdown />
    </div>
  );
};

export default Header;
