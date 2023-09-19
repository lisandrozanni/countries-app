import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import numberFormatter from '@/utils/numberFormatter';

import styles from './styles.module.css';

export function CountriesTable({ countries }) {
  return (
    <div className={styles.container}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className='MuiTableCell-head'>Nombre</TableCell>
            <TableCell className='MuiTableCell-head'>Población</TableCell>
            <TableCell className='MuiTableCell-head'>Porcentaje</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {countries.map((country, index) => (
            <TableRow key={index}>
              <TableCell>{country.name}</TableCell>
              <TableCell>{numberFormatter(country.population)}</TableCell>
              <TableCell>{country.percentage}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
