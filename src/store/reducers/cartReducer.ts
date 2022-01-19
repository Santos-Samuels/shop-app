import {
  ADD_CART,
  CartActionTypes,
  CartState,
  CLEAR_CART,
  REMOVE_CART,
} from "../types/CartTypes";

const defaultState: CartState = {
  items: [],
  totalAmount: 0
}

export const cartReducer = (
  state = defaultState,
  action: CartActionTypes
) => {
  if (action.type === ADD_CART) {
    if (state.items.some((item) => item.productId === action.payload.productId)) {
      const updatedItems = state.items.map((item) => {
        if (item.productId === action.payload.productId)
          return {
            ...item,
            quantity: item.quantity + 1,
            sum: item.sum + item.price,
          };
        
        return item
      });
      return {
        items: updatedItems,
        totalAmount: state.totalAmount + action.payload.price,
      };
    }

    return {
      items: [...state.items, action.payload],
      totalAmount: state.totalAmount + action.payload.price,
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
