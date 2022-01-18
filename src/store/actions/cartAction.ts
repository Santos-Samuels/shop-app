import { Dispatch } from "redux";
import { ADD_CART, CartActionTypes, REMOVE_CART } from "../types/CartTypes";
import { ICartItem } from "@src/shared/interfaces";

export const addToCart = (
  dispatch: Dispatch<CartActionTypes>,
  newItem: ICartItem,
  data: ICartItem[]
) => {
  if (data.some((item) => item.productId === newItem.productId)) {
    const updatedItem = data.filter((item) => {
      if (item.productId === newItem.productId)
        return {
          ...item,
          quantity: item.quantity + 1,
          sum: item.sum + item.productPrice,
        };

      return
    });
    
    dispatch({ type: ADD_CART, payload: updatedItem[0] });
    return;
  }

  dispatch({ type: ADD_CART, payload: newItem });
};

export const removeFromCart = (
  dispatch: Dispatch<CartActionTypes>,
  productId: string,
  data: ICartItem[]
) => {
  const updatedCart = data.filter((prod) => prod.id !== productId);
  dispatch({ type: REMOVE_CART, payload: updatedCart });
};
