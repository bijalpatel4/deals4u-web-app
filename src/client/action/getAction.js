import { GET_NUMBERS_BASKET } from "./type";

export const getNumbers = () => {
  return dispatch => {
    console.log("Getting Numbers ");
    dispatch({
      type: GET_NUMBERS_BASKET
    });
  };
};
