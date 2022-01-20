import { Dispatch } from "redux";
import {
  ADD_CART,
  CartActionTypes,
  CartState,
  CLEAR_CART,
  REMOVE_CART,
} from "../types/CartTypes";
import { ICartItem, IProduct } from "@src/shared/interfaces";

export const addToCart = (
  dispatch: Dispatch<CartActionTypes>,
  newProduct: IProduct
) => {
  const newItem: ICartItem = {
    id: Date.now(),
    imageUrl: newProduct.imageUrl,
    productId: newProduct.id,
    price: newProduct.price,
    title: newProduct.title,
    quantity: 1,
    sum: newProduct.price,
  };

  dispatch({ type: ADD_CART, payload: newItem });
};

export const removeFromCart = (
  dispatch: Dispatch<CartActionTypes>,
  itemId: number,
  data: CartState
) => {
  let updetedTotalAmount = 0;
  let updatedItems: ICartItem[] = [];

  data.items.forEach((item) => {
    if (item.id !== itemId) updatedItems.push(item);
    else {
      if (item.id === itemId && item.quantity > 1) {
        updetedTotalAmount = data.totalAmount - item.price;
        updatedItems.push({
          ...item,
          quantity: item.quantity - 1,
          sum: item.sum - item.price,
        });
      }

      updetedTotalAmount = data.totalAmount - item.price;
    }
  });

  dispatch({
    type: REMOVE_CART,
    payload: { items: updatedItems, totalAmount: updetedTotalAmount },
  });
};

export const clearCart = (dispatch: Dispatch<CartActionTypes>) => {
  dispatch({
    type: CLEAR_CART
  });
};
