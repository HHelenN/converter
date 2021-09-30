export const SET_INPUT_CURRENCY = 'converterBlock/SET_INPUT_CURRENCY';
export const SET_RESULT_CURRENCY = 'converterBlock/SET_RESULT_CURRENCY';

export const setInputCurrencyAction = (currency: string) => ({
  type: SET_INPUT_CURRENCY,
  payload: currency,
});

export const setResultCurrencyAction = (currency: string) => ({
  type: SET_RESULT_CURRENCY,
  payload: currency,
})
