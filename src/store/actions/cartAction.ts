import { Dispatch } from "redux";
import { ADD_CART, CartActionTypes, REMOVE_CART } from "../types/CartTypes";
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
  }

  dispatch({ type: ADD_CART, payload: newItem });
};

export const removeFromCart = (
  dispatch: Dispatch<CartActionTypes>,
  productId: string,
  data: ICartItem[]
) => {
  const updatedCart = data.filter((item) => item.productId !== productId);
  dispatch({ type: REMOVE_CART, payload: updatedCart });
};
