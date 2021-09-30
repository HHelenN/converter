import { Store } from "../store";
import {Tcoin} from "../../components/types/types";

export const getAllCoins = (state: Store): Tcoin[] => state?.coins.list;
export const getItem = (charCode: string) => (state: Store): Tcoin | undefined =>
  state?.coins.list.find(item => item.CharCode === charCode);

export const getCurrentItem = (state: Store): Tcoin | undefined => getItem(state.converterBlock.inputCurrency)(state)