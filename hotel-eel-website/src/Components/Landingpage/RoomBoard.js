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

function createData1(Board, Rates) {
  return { Board, Rates };
}

function createData2(Room, Occupancy, Rates) {
  return { Room, Occupancy, Rates };
}

const rows1 = [
  createData1("Breakfast", "KSH 3000"),
  createData1("Half Board", "KSH 6000"),
  createData1("Full Board", "KSH 9000"),
];

const rows2 = [
  createData2("Standard room", "2", "KSH 3000"),
  createData2("Suite", "4", "KSH 6000"),
  createData2("Cottage", "6", "KSH 9000"),
];

const useStyles = makeStyles({
  table: {
    minWidth: 300,
  },
});

export const RoomBoard = () => {
  const classes = useStyles();

  return (
    <div className="table">
      {/* <div className="boardTable"> */}
        <TableContainer className="board-table" component={Paper}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <StyledTableCell>Board</StyledTableCell>
                <StyledTableCell>Rates</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows1.map((row) => (
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
      {/* </div> */}
      {/* <div className="roomTable"> */}
        <TableContainer className="room-table" component={Paper}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <StyledTableCell>Room</StyledTableCell>
                <StyledTableCell>Occupancy</StyledTableCell>
                <StyledTableCell>Rates</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows2.map((row) => (
                <StyledTableRow key={row.Room}>
                  <StyledTableCell component="th" scope="row">
                    {row.Room}
                  </StyledTableCell>
                  <StyledTableCell>{row.Occupancy}</StyledTableCell>
                  <StyledTableCell>{row.Rates}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      {/* </div> */}
    </div>
  );
};
