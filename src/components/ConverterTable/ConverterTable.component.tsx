import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import { FC } from "react";

import { Tcoin } from "../types/types";
import {useSelector} from "react-redux";
import {getCurrentItem, getItem} from "../../store/selectors/coins";
import {useCalculateDiff} from "../../hooks/useCalculateDiff";
import {useStyles} from "../../styles";

interface IConverterTable {
    items: Tcoin[];
}

export const ConverterTable: FC<IConverterTable> = ({ items }) => {
    const classes = useStyles();
    const currentItem = useSelector(getCurrentItem);
    const rubleItem = useSelector(getItem("RUB"));
    const coefficient = useCalculateDiff(1, rubleItem, currentItem, 6, 0);

    return (
        <TableContainer component={Paper}>
        <Table className={classes.table} size="small" aria-label="a dense table">
            <TableHead className={classes.tableHeader}>
                <TableRow>
                    <TableCell>Валюта</TableCell>
                    <TableCell align="right">Цена</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {currentItem && (
                  <TableRow>
                      <TableCell component="th" scope="row">{currentItem.Name}</TableCell>
                      <TableCell align="right">SELECTED</TableCell>
                  </TableRow>
                )}
                {items.filter(item => item.CharCode !== currentItem?.CharCode).map((coin) => (
                    <TableRow key={coin.ID}>
                        <TableCell component="th" scope="row">
                            {coin.Name}
                        </TableCell>
                        <TableCell align="right">{(coin.Value * Number(coefficient)).toFixed(2)}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
    );
};