import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(Board, Rates) {
  return { Board, Rates };
}

const rows = [
  createData("Breakfast", "KSH 3000"),
  createData("Half Board", "KSH 6000"),
  createData("Full Board", "KSH 9000"),
];

const useStyles = makeStyles({
  table: {
    minWidth: 300,
  },
});

export const BoardTable = () => {
  const classes = useStyles();

  return (
        <TableContainer className="boardtable" component={Paper}>
          <Table style={{ width: 500 }} className={classes.table}>
            <TableHead>
              <TableRow>
                <StyledTableCell>Board</StyledTableCell>
                <StyledTableCell>Rates</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.Board}>
                  <StyledTableCell component="th" scope="row">
                    {row.Board}
                  </StyledTableCell>
                  <StyledTableCell>{row.Rates}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
  );
};
