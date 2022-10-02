export const toggleCartHidden = () => {
  return {
    type: "TOGGLE_CART_HIDDEN",
  };
};

export const addToCart = (productDetails) => {
  return {
    type: "ADD_ITEM",
    payload: productDetails,
  };
};
