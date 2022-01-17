import DUMMY_PRODUCTS from "@src/data/dammyProducts";

const initialState = {
  avaliableProducts: DUMMY_PRODUCTS,
  userProducts: DUMMY_PRODUCTS.filter(prod => prod.ownerId === 'u1')
}

export const productsReducer = (state: string, action: string) => {

  return state
}