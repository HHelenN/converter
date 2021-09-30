import {FETCH_COINS_FAILURE, FETCH_COINS_REQUEST, FETCH_COINS_SUCCESS} from "../actions/fetchCoins";
import {Tcoin} from "../../components/types/types";

export interface CoinsReducer {
  list: Tcoin[]
  isLoading: boolean
  errorMessage: string | null
}

const initialState: CoinsReducer = {
  list: [],
  isLoading: false,
  errorMessage: null
};

export const coins = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_COINS_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_COINS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errorMessage: null,
        list: action.payload,
      }
    case FETCH_COINS_FAILURE:
      return {
        ...state,
        list: [],
        isLoading: false,
        errorMessage: action.payload,
      }
    default:
      return state;
  }
}
