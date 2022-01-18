import { combineReducers, createStore } from "redux";
import { productsReducer } from "./reducers/productsReducer";

const reducers = combineReducers({
  products: productsReducer
})

const store = createStore(reducers)


export type RootState = ReturnType<typeof reducers>;

export {
  productsReducer,
  store
}