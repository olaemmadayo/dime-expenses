import React, { useState } from 'react';
import '../styles/Expenses.css'
import { Loader } from "../Loader/Loader/";

function Expenses({ expenses, setExpenses, categories, setCategories, loading }) {
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const addExpense = () => {
    if (category && amount > 0 && date) {
      const newExpense = { category, amount, date };
      setExpenses([...expenses, newExpense]);
      if (!categories.includes(category)) {
        setCategories([...categories, category]);
      }
      setCategory('');
      setAmount('');
      setDate('');
    }
  };

  return (
    <div>
      <h1 className='expenses--header'> Log Your Expense </h1>
      <div className='input-wrap'>
        <div>
          <input 
            type="text" 
            value={category} 
            onChange={(e) => setCategory(e.target.value)} 
            placeholder="Enter category (e.g., Food)" 
          />
        </div>
        <div >
          <input 
            type="number" 
            value={amount} 
            onChange={(e) => setAmount(Number(e.target.value))} 
            placeholder="Enter amount" 
          />
        </div>
        <div>
          <input 
            type="date" 
            value={date} 
            onChange={(e) => setDate(e.target.value)} 
            placeholder="Enter date" 
          />
        </div>
        <div className="expense-button">
          <button className="expense-button" onClick={addExpense}>Add Expense</button>
        </div>
      </div>
      <h2 className='all--expensesHead'>All Expenses</h2>
      {loading ? (
        <Loader loading={loading} />
      ) : (
        <table >
          <thead>
            <tr>
              <th>Category</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense, index) => (
              <tr key={index}>
                <td>{expense.category}</td>
                <td>${expense.amount}</td>
                <td>{expense.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Expenses;