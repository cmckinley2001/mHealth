import React, { useState } from 'react';
import './ExpenseFormStyles.css';
import CurrencyInput from 'react-currency-input-field';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';

const ExpenseForm = () => {
  const currentDate = new Date();
  const formattedDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1)
    .toString()
    .padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`;

  const [expenseDate, setExpenseDate] = useState(formattedDate);
  const [provider, setProvider] = useState('');
  const [detail, setDetail] = useState('');
  const [amount, setAmount] = useState('');
  const [expenses, setExpenses] = useState([]);

  const handleDateChange = (event) => {
    setExpenseDate(event.target.value);
  };

  const handleProviderChange = (event) => {
    setProvider(event.target.value);
  };

  const handleDetailChange = (event) => {
    setDetail(event.target.value);
  };

  const handleAmountChange = (value, name) => {
    setAmount(value);
  };

  const handleClear = () => {
    // Clear all input fields
    setExpenseDate(formattedDate);
    setProvider('');
    setDetail('');
    setAmount('');
  };

  const handleSubmit = () => {
  // Create a new expense object
  const newExpense = {
    date: expenseDate,
    provider: provider,
    detail: detail,
    amount: amount,
  };

  // Update the expenses state with the new expense
  setExpenses([...expenses, newExpense]);

  // Clear the form
  handleClear();
  };

  return (
    <div className='expenseForm'>
      <form>
        <label>Date</label>
        <input type='date' value={expenseDate} onChange={handleDateChange} />
        <label>Provider</label>
        <input type='text' value={provider} onChange={handleProviderChange} />
        <label>Detail</label>
        <input type='text' value={detail} onChange={handleDetailChange} />
        <label>Amount</label>
        <CurrencyInput
          name="amount"
          placeholder="$0.00"
          prefix='$'
          decimalsLimit={2}
          onValueChange={handleAmountChange}
          value={amount}
        />
        <button type="button" className='btn' onClick={handleClear}>
          Reset
        </button>
        <button type="button" className='btn' onClick={handleSubmit}>
          Submit
        </button>
      </form>





Display the expenses in a Material UI table
{/* <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Provider</TableCell>
              <TableCell>Detail</TableCell>
              <TableCell>Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {expenses.map((expense, index) => (
              <TableRow key={index}>
                <TableCell>{expense.date}</TableCell>
                <TableCell>{expense.provider}</TableCell>
                <TableCell>{expense.detail}</TableCell>
                <TableCell>{expense.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer> */}
    </div>
  );
};


export default ExpenseForm;