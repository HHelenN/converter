import {Store} from "../store";

export const getInputCurrency = (state: Store) => state?.converterBlock?.inputCurrency;
export const getResultCurrency = (state: Store) => state?.converterBlock?.resultCurrency;
