import PRODUCTS_DATA from "../../../productsData";

const INITIAL_STATE = {
  // isFetching: false,
  // errorMessege: undefined,
  // NOT NEEDED FOR NOW
  products: PRODUCTS_DATA,
};

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "UPDATE_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };

    case "RESET_PRODUCTS":
      return INITIAL_STATE;

    default:
      return state;
  }
};

export default productReducer;
