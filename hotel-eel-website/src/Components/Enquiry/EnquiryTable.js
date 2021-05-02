import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";


export const EnquiryTable = () => {
  const classes = useStyles();

  return (
 
        <TableContainer className="roomtable" component={Paper}>
          <Table style={{ width: 500 }} className={classes.table}>
            <TableHead>
              <TableRow>
                <StyledTableCell>Room</StyledTableCell>
                <StyledTableCell>Occupancy</StyledTableCell>
                <StyledTableCell>Rates</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
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
  );
};
