import React, { useState } from "react";
import "./productCard.scss";
import CustomButton from "../customButton/CustomButton";
import Rating from "./Rating";
import { ReactComponent as CartIcon } from "../../assets/images/cart.svg";
import Dots from "../slider/Dots";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions";
import { withRouter } from "react-router-dom";
import Snackbar from "../snackbar/Snackbar";

const ProductCard = ({ id, name, img, price, rating, sizes, history }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [chosenSize, setChosenSize] = useState(null);
  const [snackbar, setSnackbar] = useState({
    hidden: true,
    msg: "",
    type: "",
  });
  const dispatch = useDispatch();
  const indexClick = (index) => {
    setCurrentIndex(index);
  };

  const renderSizes = () => {
    return sizes.map((size) => (
      <button
        key={size}
        onClick={() => setChosenSize(size)}
        className={`size ${chosenSize === size ? "chosen" : ""}`}
      >
        {size}
      </button>
    ));
  };

  const handleClick = () => {
    if (!chosenSize) {
      setSnackbar({
        hidden: false,
        msg: "Oops! You haven't selected any size!!",
        type: "negative",
      });
      setTimeout(() => setSnackbar({ hidden: "true" }), 2300);
      return;
    }
    dispatch(
      addToCart({
        id: `${id}${chosenSize}`,
        name,
        img,
        price,
        selectedSize: chosenSize,
      })
    );
    setSnackbar({
      hidden: false,
      msg: "Product added to your cart!",
      type: "positive",
    });
    setTimeout(() => setSnackbar({ hidden: "true" }), 2300);
    setChosenSize(null);
  };
  const onProductPreview = () => {
    history.push(`/product/${id}`);
  };
  return (
    <div className="item">
      <Snackbar {...snackbar} />
      <div className="img-container">
        <div
          onClick={onProductPreview}
          className="item-img"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + `/images/${img[currentIndex].url}`
            })`,
          }}
        ></div>
      </div>
      <div className="img-slider">
        <Dots length={img.length} setIndex={indexClick} index={currentIndex} />
      </div>
      <div className="hover-info">
        <CustomButton btn="primary" onClick={handleClick}>
          <CartIcon style={{ padding: "0 3px 2px 0" }} /> Add to cart
        </CustomButton>
        <div className="sizes">Size: {renderSizes()} </div>
      </div>
      <div className="item-info">
        <div className="name">{name}</div>
        <div className="rating">
          <Rating stars={rating} />
        </div>
        <div className="price">
          <span className="symbol">$</span>
          <span className="whole">{price.whole}</span>
          <span className="fraction">{price.fraction}</span>
        </div>
      </div>
    </div>
  );
};

export default withRouter(ProductCard);
