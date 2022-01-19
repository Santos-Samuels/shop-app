import { ICartItem } from "@src/shared/interfaces";

export const ADD_CART = 'ADD_CART'
export const REMOVE_CART = 'REMOVE_CART'
export const CLEAR_CART = 'CLEAR_CART'

export interface CartState {
  items: ICartItem[]
  totalAmount: number;
}

type AddCartAction = {
  type: typeof ADD_CART;
  payload: ICartItem;
};

type RemoveCartAction = {
  type: typeof REMOVE_CART;
  payload: ICartItem[];
};

type ClearCartAction = {
  type: typeof CLEAR_CART;
};

export type CartActionTypes = AddCartAction | RemoveCartAction | ClearCartAction;