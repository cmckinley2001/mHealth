import React from 'react';
import './ExpenseTableStyles.css';
import { format, parseISO } from 'date-fns/fp';

const ExpenseTable = ({ expenses, onDelete }) => {
    const formatDate = (dateString) => {
      const formattedDate = format('MM/dd/yyyy', parseISO(dateString));
      return formattedDate;
    };
      
    const formatCurrency = (amount) => {
      // Format the amount as currency (dollars and cents)
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount);
    };
  
    return (
      <div className='expenseTable'>
        <h2>Expense Table</h2>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Provider</th>
              <th>Detail</th>
              <th>Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense, index) => (
              <tr key={index}>
                <td>{formatDate(expense.date)}</td>
                <td>{expense.provider}</td>
                <td>{expense.detail}</td>
                <td>{formatCurrency(expense.amount)}</td>
                <td>
                  <button onClick={() => onDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default ExpenseTable;