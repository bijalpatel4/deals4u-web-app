import { INCREASE_QUANTITY, DECREASE_QUANTITY } from "./type";

export const productQuantity = (action, productId) => {
  return (dispatch) => {
    console.log("Inside product Quantity");
    console.log("The action is ", action);
    console.log("id", productId);
    dispatch({
      type: action === "increase" ? INCREASE_QUANTITY : DECREASE_QUANTITY,
      payload: productId,
    });
  };
};
