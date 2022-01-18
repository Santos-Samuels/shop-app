import DUMMY_PRODUCTS from "@src/data/dammyProducts";
import { IProduct } from "@src/shared/interfaces";
import { ProductsActionsType } from "../actions";

// const initialState = {
//   avaliableProducts: DUMMY_PRODUCTS,
//   userProducts: DUMMY_PRODUCTS.filter(prod => prod.id === 'u1')
// }

interface ProductsAction {
  type: ProductsActionsType,
  payload: string
}

export const productsReducer = (state = DUMMY_PRODUCTS, action: ProductsAction) => {
  // if(action.type === ProductsActionsType.ADD) {
  //   return state + action.payload
  // }

  return state
}