import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown, faAngleUp} from "@fortawesome/free-solid-svg-icons";
import {ChangeEvent, FC, useState} from "react";
import {Tcoin} from "../types/types";
import {useDispatch, useSelector} from "react-redux";
import {getInputCurrency} from "../../store/selectors/converterBlock";
import {setInputCurrencyAction} from "../../store/actions/converterBlock";
import {getResultCurrency} from "../../store/selectors/converterBlock";
import {setResultCurrencyAction} from "../../store/actions/converterBlock";
import {useCalculateDiff} from "../../hooks/useCalculateDiff";
import {useStyles} from "../../styles";

interface IConverterBlock {
  currencies: any[];
  allCoins: Tcoin[];
}

// CharCode: "USD"
// ID: "R01235"
// Name: "Доллар США"
// Nominal: 1
// NumCode: "840"
// Previous: 73.5078
// Value: 73.5962
export const ConverterBlock: FC<IConverterBlock> = ({currencies, allCoins}) => {
  const classes = useStyles();

  const inputCurrency = useSelector(getInputCurrency);
  const resultCurrency = useSelector(getResultCurrency);

  const dispatch = useDispatch();
  const setInputCurrency = (currency: string) => dispatch(setInputCurrencyAction(currency));
  const setResultCurrency = (currency: string) => dispatch(setResultCurrencyAction(currency));

  const [inputValue, setInputValue] = useState<number | null>(null)
  // const [inputCurrency, setInputCurrency] = useState('USD');
  // const [resultCurrency, setResultCurrency] = useState('RUB')

  const leftCurrency = allCoins.find(coin => coin.CharCode === inputCurrency)
  const rightCurrency = allCoins.find(coin => coin.CharCode === resultCurrency)

  const resultValue = useCalculateDiff(inputValue, leftCurrency, rightCurrency);

  const handleChangeInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    if (/^\d*\.?\d*$/.test(event.target.value)) {
      setInputValue(event.target.value as unknown as number);
    }
  };
  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputCurrency(event.target.value);
  };
  const handleChangeResult = (event: ChangeEvent<HTMLInputElement>) => {
    setResultCurrency(event.target.value);
  };


  return (
    <Paper className={classes.paper}>
      <form className={classes.form} noValidate autoComplete="off">
        <TextField
          fullWidth
          id="outlined-basic"
          label="Имеющаяся валюта"
          variant="outlined"
          value={inputValue}
          type="number"
          onChange={handleChangeInputValue}
        />
        <TextField
          id="outlined-select-inputCurrency"
          select
          value={inputCurrency}
          onChange={handleChangeInput}
          variant="outlined"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </form>
      <div>
        <FontAwesomeIcon icon={faAngleUp} size="lg"/>
        <FontAwesomeIcon icon={faAngleDown} size="lg"/>
      </div>
      <form className={classes.form} noValidate autoComplete="off">
        <TextField
          fullWidth
          id="outlined-basic"
          label="Нужная валюта"
          variant="outlined"
          value={resultValue}
        />
        <TextField
          id="outlined-select-inputCurrency"
          select
          value={resultCurrency}
          onChange={handleChangeResult}
          variant="outlined"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </form>
    </Paper>
  )
}