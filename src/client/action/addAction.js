import { ADD_PRODUCT_BASKET } from "./type";

export const addToBasket = (product) => {
  return (dispatch) => {
    // console.log("Addding to Basket");
    // console.log("Product: ", product);
    dispatch({
      type: ADD_PRODUCT_BASKET,
      payload: product,
    });
  };
};
