import { DELETE_FROM_BASKET, BASKET_DELETE_BASKET } from "../types";

export const deleteFromBasketAC = (id) => (dispatch) => {
  dispatch({
    type: DELETE_FROM_BASKET,
    payload: id,
  });
}
export const inBasketDeleteAC = (basket) => (dispatch) => {
  dispatch({
    type: BASKET_DELETE_BASKET,
    payload: basket,
  });
}
