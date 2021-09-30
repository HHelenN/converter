import { useStyles } from "./styles";
import {ConverterBlock, ConverterTable} from "./components";
import { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import {fetchCoins} from "./store/actions/fetchCoins";
import {getAllCoins} from "./store/selectors/coins";
import {ConverterInput} from "./components/ConverterInput";


library.add(faAngleUp, faAngleDown)

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'RUB',
    label: '₽',
  },
];

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const allCoins = useSelector(getAllCoins);

  useEffect(() => {
    dispatch(fetchCoins());
  // eslint-disable-next-line
  }, [])



  return (
      <Container className={classes.root} maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={5}>
            <ConverterBlock currencies={currencies} allCoins={allCoins}/>
            <ConverterInput currencies={currencies} allCoins={allCoins}/>
          </Grid>
          <Grid item xs={7}>
            <Paper className={classes.paper}>
              <ConverterTable items={allCoins} />
            </Paper>
          </Grid>
        </Grid>
      </Container>
  );
}

export default App;
