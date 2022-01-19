import { combineReducers, createStore } from "redux";
import { cartReducer } from "./reducers/cartReducer";
import { productsReducer } from "./reducers/productsReducer";

const reducers = combineReducers({
  products: productsReducer,
  cart: cartReducer
})

const store = createStore(reducers)


export type RootState = ReturnType<typeof reducers>;

export {
  productsReducer,
  store
}