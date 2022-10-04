export const setCurrentUser = (user) => {
  return {
    type: "SET_CURRENT_USER",
    payload: user,
  };
};

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

export const decreaseCartItemQuantity = (id) => {
  return {
    type: "DECREASE_QUANTITY",
    payload: id,
  };
};

export const removeFromCart = (id) => {
  return {
    type: "REMOVE_ITEM",
    payload: id,
  };
};

export const emptyCart = () => {
  return {
    type: "EMPTY_CART",
  };
};

export const fetchCollectionsStart = () => {
  return {
    type: "FETCH_COLLECTIONS_START",
  };
};

export const fetchCollectionsSuccess = (collections) => {
  return {
    type: "FETCH_COLLECTIONS_SUCCESS",
    payload: collections,
  };
};

export const fetchCollectionsFailure = (error) => {
  return {
    type: "FETCH_COLLECTIONS_FAILURE",
    payload: error,
  };
};

export const fetchProductsStart = () => {
  return {
    type: "FETCH_PRODUCTS_START",
  };
};

export const fetchProductsSuccess = (products) => {
  return {
    type: "FETCH_PRODUCTS_SUCCESS",
    payload: products,
  };
};

export const fetchProductsFailure = (error) => {
  return {
    type: "FETCH_PRODUCTS_FAILURE",
    payload: error,
  };
};
