import {
  ADD_PRODUCT_BASKET,
  GET_NUMBERS_BASKET,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from "../action/type";
import deals from "../../data/fakeDeals";

const initialState = {
  basketNumbers: 0,
  cartCost: 0,
  products: {
    deals: deals,
  },
};

export default (state = initialState, action) => {
  let findActionProductFromState = "";

  switch (action.type) {
    case ADD_PRODUCT_BASKET:
      findActionProductFromState = state.products.deals.find(
        (p) => p._id === action.payload._id
      );
      findActionProductFromState.count += 1;
      findActionProductFromState.inCart = true;

      return {
        ...state,
        basketNumbers: state.basketNumbers + 1,
        cartCost: state.cartCost + findActionProductFromState.price,
        products: {
          ...state.products,
        },
      };
    case GET_NUMBERS_BASKET:
      return {
        ...state,
      };
    case INCREASE_QUANTITY:
      findActionProductFromState = state.products.deals.find(
        (p) => p._id === action.payload
      );
      findActionProductFromState.count += 1;

      return {
        ...state,
        cartCost: state.cartCost + findActionProductFromState.price,
        products: {
          ...state.products,
        },
      };
    case DECREASE_QUANTITY:
      findActionProductFromState = state.products.deals.find(
        (p) => p._id === action.payload
      );
      let newCartCost = 0;
      if (findActionProductFromState.count === 0) {
        findActionProductFromState.count = 0;
        newCartCost = state.cartCost;
      } else {
        findActionProductFromState.count -= 1;
        newCartCost = state.cartCost - findActionProductFromState.price;
      }
      return {
        ...state,
        cartCost: newCartCost,
        products: {
          ...state.products,
        },
      };
    default:
      return state;
  }
};
