import {combineReducers} from "redux";
import { coins } from "./coins";
import { converterBlock } from "./converterBlock";
import {Store} from "../store";

export const reducers = combineReducers<Store>({
  coins,
  converterBlock
});
