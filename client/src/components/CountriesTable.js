import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function CountriesTable({ countries }) {
  return (
    <div className="container">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className="MuiTableCell-head">Name</TableCell>
            <TableCell className="MuiTableCell-head">Population</TableCell>
            <TableCell className="MuiTableCell-head">Percentage</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {countries.length > 0 && countries.map((country, index) => (
            <TableRow key={index}>
              <TableCell>{country.name}</TableCell>
              <TableCell>{country.population}</TableCell>
              <TableCell>{country.percentage}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default CountriesTable;
