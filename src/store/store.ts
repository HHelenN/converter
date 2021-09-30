import {applyMiddleware, createStore, compose} from "redux";
import thunk from "redux-thunk";
import {reducers} from "./reducers";
import {CoinsReducer} from "./reducers/coins";
import {ConverterBlockReducer} from "./reducers/converterBlock";

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export interface Store {
  coins: CoinsReducer
  converterBlock: ConverterBlockReducer
}

export const store = createStore<Store, any, any, any>(reducers, composeEnhancers(applyMiddleware(thunk)))
