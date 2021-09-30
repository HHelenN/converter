import axios from "axios";

export const FETCH_COINS_REQUEST = 'coins/fetchCoins/request';
export const FETCH_COINS_SUCCESS = 'coins/fetchCoins/success';
export const FETCH_COINS_FAILURE = 'coins/fetchCoins/failure';

export const fetchCoins = () => async (dispatch: any) => {
  dispatch({
    type: FETCH_COINS_REQUEST
  });
  try {
    const response = await axios.get('https://www.cbr-xml-daily.ru/daily_json.js')
    const { Valute } = response.data;
    const data = Object.keys(Valute)
      .filter(key => ['USD', 'EUR'].includes(key))
      .map(key => Valute[key])
    dispatch({
      type: FETCH_COINS_SUCCESS,
      payload: [
        ...data,
        {
          Value: 1,
          Name: "Рубль",
          CharCode: "RUB",
          ID: 1,
        }
      ]
    });
  } catch (err) {
    console.log('ERROR', err);
    dispatch({
      type: FETCH_COINS_FAILURE,
      payload: 'Something went wrong'
    });
  }
}