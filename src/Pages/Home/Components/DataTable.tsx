import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import useSWR from 'swr';
import { FormattedDate, FormattedNumber, useIntl } from 'react-intl';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
 
export type starWarsProps = {
    name: string,
    cargo_capacity: string,
    consumables: string,
    cost_in_credits: string,
    created: string,
    crew: string,
    edited: string,
    length: string,
    manufacturer: string,
    max_atmosphering_speed: string,
    model: string,
    passengers: string,
    pilots: string[],
    films: string[],
    url: string,
    hyperdrive_rating: string,
    MGLT: string,
    starship_class: string,
  };
interface Column {
  id: 'name' | 'manufacturer' | 'cost_in_credits' | 'created';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: 'Date' | 'number'
}

const columns: Column[] = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'manufacturer', label: 'Manufacturer', minWidth: 100 },
  {
    id: 'cost_in_credits',
    label: 'Cost In Credits',
    minWidth: 170,
    align: 'right',
    format:'number'
  },
  {
    id: 'created',
    label: 'Created',
    minWidth: 170,
    align: 'right',
    format:'Date'
  }
];


const fetcher = (url: string) => fetch(url).then(
    (res) => 
        res.json()
  );
const  DataTable = () => {
  let navigate = useNavigate();
  const visitedPage = Number(JSON.parse(localStorage.getItem('visitedPage') || ""))
  const [page, setPage] = useState(visitedPage);
  const { data, error } = useSWR(`https://swapi.dev/api/starships/?page=${page + 1}`, fetcher)
  if (error) return <>"An error has occurred."</>;
  if(!data) return <>"Loading"</>
  let rows:starWarsProps[] =data.results;
  let count:number = data.count;
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };
  const navigateToRow = (row:starWarsProps) => {
    localStorage.setItem("row", JSON.stringify(row))
    localStorage.setItem("visitedPage", page.toString())
    navigate("/details", { replace: true });
  }


  return (
    <Paper sx={{ width: '100%' }}>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 57, minWidth: column.minWidth, fontWeight:"bold" }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.name} onClick={() => navigateToRow(row)}>
                           
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                            {column.format === 'Date' &&
                              <FormattedDate
                                value={value}
                              />
                            }
                            {column.format === 'number' &&
                              < FormattedNumber value={Number(value)} />
                            }

                            {column.format != 'number' && column.format != 'Date' &&
                              value
                            }
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10]}
        component="div"
        count={count}
        rowsPerPage={10}
        page={page}
        onPageChange={handleChangePage}
      />
    </Paper>
  );
};
export default DataTable
