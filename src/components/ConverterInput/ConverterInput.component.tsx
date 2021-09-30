import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import { useStyles } from "../../styles";
import {FC, useState} from "react";
import {Tcoin} from "../types/types";


interface IConverterInput {
  currencies: any[];
  allCoins: Tcoin[];
}

export const ConverterInput: FC<IConverterInput> = ({currencies, allCoins}) => {
  const classes = useStyles();

  const [inputValue, setInputValue] = useState("")
  const [inputResult, setInputResult] = useState(null)

  return (
    <Paper className={classes.paper}>
      <form className={classes.rootInput} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          value={inputValue}
        />
        <TextField
          id="filled-basic"
          label="Filled"
          variant="filled"
          value={inputResult}
        />
      </form>
    </Paper>
  )
}