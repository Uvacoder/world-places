import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import IconButton from '@material-ui/core/IconButton';
import DeleteForever from '@material-ui/icons/DeleteForever';
import Edit from '@material-ui/icons/Edit';
import TableError from './table-error';
import TableRow from '@material-ui/core/TableRow';

const TableItemRow = ({
  row,
  handleDelete,
  openForm,
  columns,
}) => {

  const renderTableCells = () => {
    return columns.map(col => {
      return <TableCell key={col.id}>{row[col.value]}</TableCell>;
    })
  }

  return (
    <TableRow key={row.id}>
      { renderTableCells() }
      <TableCell align="right">
        <IconButton onClick={() => openForm('edit', row.id)}>
          <Edit />
        </IconButton>
      </TableCell>
      <TableCell align="right">
        <IconButton onClick={() => handleDelete(row.id)}>
          <DeleteForever />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default TableItemRow;