import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(10),
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    form: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    table: {

    },
    tableHeader: {
      background: '#d4d4d4',
    },
    rootInput: {
      '& > *': {
        margin: theme.spacing(1),
       width: '25ch',
    }}
}));