import { PUT_TO_BASKET, DELETE_FROM_BASKET, BASKET_DELETE_BASKET } from "../types";

export const reducer = (state, action) => {
  switch (action.type) {
    case  PUT_TO_BASKET:
      let addIndex = state.baskets.findIndex((el) => el.id === action.payload.id);
      if (addIndex >= 0) {
        const baskets =[];
        for (let i=0; i<state.baskets.length; i++) {
          if (state.baskets[i].id === action.payload.id) {
            state.baskets[i].repeat += 1;
          }
          baskets.push(state.baskets[i]);
        }          
        return {
          ...state,
          baskets
        }
      } else {
        let repeatCount = 1;
        action.payload.repeat = repeatCount;
        return {
          ...state,
          baskets: [...state.baskets, action.payload]
        }
      }
    case DELETE_FROM_BASKET:
      const baskets = state.baskets.filter((el) => el.id !== action.payload);
      return {
        ...state,
        baskets,
      }
    case  BASKET_DELETE_BASKET:
      let index = state.baskets.findIndex((el) => el.id === action.payload.id);
      if (index !== -1 && action.payload.repeat === 1) {
        state.baskets.splice(index, 1);
        return {
          ...state,
          baskets: state.baskets
        }
      } else if (index !== -1 && action.payload.repeat > 1) {
        const baskets =[];
      for (let i=0; i<state.baskets.length; i++) {
        if (state.baskets[i].id === action.payload.id) {
          state.baskets[i].repeat -= 1;
        }
        baskets.push(state.baskets[i]);
      }          
      return {
        ...state,
        baskets
      }
      } else {
        return {
          ...state,
          baskets: action.payload
        }
      }
    default:
      return state;
  }
};
