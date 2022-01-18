import { ICartItem } from "@src/shared/interfaces";
import {
  ADD_CART,
  CartActionTypes,
  CLEAR_CART,
  REMOVE_CART,
} from "../types/CartTypes";

const defaultState = {
  items: [] as ICartItem[],
  totalAmount: 0,
};

export const productsReducer = (
  state = defaultState,
  action: CartActionTypes
) => {
  if (action.type === ADD_CART) {
    return {
      items: [...state.items, action.payload],
      totalAmount: state.totalAmount + action.payload.productPrice,
    };
  }

  if (action.type === REMOVE_CART) {
    return action.payload;
  }

  if (action.type === CLEAR_CART) {
    return defaultState;
  }

  return state;
};
