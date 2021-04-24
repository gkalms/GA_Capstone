import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(Room, Boarding, Rates) {
  return { Room, Boarding, Rates };
}

const rows = [
  createData('Standard room', 'Accomodation only', 'KSH 3000'),
  createData('Standard room', 'Half Board', 'KSH 6000'),
  createData('Standard room', 'Full Board', 'KSH 9000'),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export const AccomodationTable = () => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Room</StyledTableCell>
            <StyledTableCell >Boarding</StyledTableCell>
            <StyledTableCell >Rates</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.Room}>
              <StyledTableCell component="th" scope="row">
                {row.Room}
              </StyledTableCell>
              <StyledTableCell >{row.Boarding}</StyledTableCell>
              <StyledTableCell >{row.Rates}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
