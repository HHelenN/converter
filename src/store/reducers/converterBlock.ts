import {SET_INPUT_CURRENCY} from "../actions/converterBlock";
import {SET_RESULT_CURRENCY} from "../actions/converterBlock";

export interface ConverterBlockReducer {
  inputCurrency: string;
  resultCurrency: string;
}

const initialState: ConverterBlockReducer = {
  inputCurrency: 'USD',
  resultCurrency: 'RUB',
};

export const converterBlock = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_INPUT_CURRENCY:
      return  {
        ...state,
        inputCurrency: action.payload,
      }
    case SET_RESULT_CURRENCY:
      return {
        ...state,
        resultCurrency: action.payload,
      }
    default:
      return state;
  }
};
