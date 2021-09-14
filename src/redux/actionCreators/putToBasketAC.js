import { PUT_TO_BASKET } from "../types";

export const putToBasketAC = (product) => (dispatch) => {
  dispatch(
    {
    type: PUT_TO_BASKET,
    payload: product,
    });
}
export const inBasketputAC = (basket) => (dispatch) => {
  dispatch(
    {
    type: PUT_TO_BASKET,
    payload: basket,
    });
}
