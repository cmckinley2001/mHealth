import React, { useState } from 'react';
import './ExpenseFormStyles.css';
import CurrencyInput from 'react-currency-input-field';
import ExpenseTable from './ExpenseTable';
import { format, parseISO } from 'date-fns/fp';

const ExpenseForm = () => {
  const currentDate = new Date();
  const formattedDate = format('yyyy-MM-dd', currentDate);

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

  // Delete a row
  const handleDelete = (index) => {
    const updatedExpenses = [...expenses];
    updatedExpenses.splice(index, 1);
    setExpenses(updatedExpenses);
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
    <div className='ExpenseTable'>
      <ExpenseTable expenses={expenses} onDelete={handleDelete} />
    </div>
    </div>
  );
};

export default ExpenseForm;