import React from 'react';
import { Loader } from "../Loader/Loader/";
import { FaEdit } from 'react-icons/fa'
import '../styles/Balance.css'


function Balance({ income, expenses, loading }) {
  const calculateTotalExpenses = () => {
    return expenses.reduce((acc, curr) => acc + curr.amount, 0);
  };

  const calculateBalance = () => {
    return income - calculateTotalExpenses();
  };

  return (
    <div>
        <div className="balance-layout">
          <h1 style={{color:'#7D286D'}}>Total Balance</h1>
          {loading ? (
            <Loader loading={loading} />
          ) : (
            <h1 style={{marginTop:'20px'}}>${calculateBalance()}</h1>
          )}
          <div className="edit-balance">
            <FaEdit className='icon'/>
            <p>Edit Balance</p>
            
          </div>
       </div>
    </div>
  );
}

export default Balance;
