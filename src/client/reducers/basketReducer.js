import { ADD_PRODUCT_BASKET, GET_NUMBERS_BASKET } from "../action/type";
import deals from "../../data/fakeDeals";

const initialState = {
  basketNumbers: 0,
  cartCost: 0,
  products: {
    deals: deals
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_BASKET:
      let findActionProductFromState = state.products.deals.find(
        p => p._id === action.payload._id
      );
      findActionProductFromState.count += 1;
      findActionProductFromState.inCart = true;
      console.log("find: ", findActionProductFromState);
      return {
        ...state,
        basketNumbers: state.basketNumbers + 1,
        cartCost: state.cartCost + findActionProductFromState.price,
        products: {
          ...state.products
        }
      };
    case GET_NUMBERS_BASKET:
      return {
        ...state
      };

    default:
      return state;
  }
};
