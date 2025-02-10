import React from 'react';
import { Loader } from "./Widget/Loader/Loader";
import { FaEdit } from 'react-icons/fa'
import '../styles/Balance.css'
import ProfileHeader from './ProfileHeader';
import bPicture from '../assets/images/pana.png'


function Balance({ income, expenses, loading }) {
  const calculateTotalExpenses = () => {
    return expenses.reduce((acc, curr) => acc + curr.amount, 0);
  };

  const calculateBalance = () => {
    return income - calculateTotalExpenses();
  };

  return (
    <div className='balance-page'>
        <div className="balancePage--wrap">
          <h1>Balance</h1>
          <ProfileHeader/>
        </div>

        <div className="balance--content">
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

          <div className="balance--image">
              <img src={bPicture} alt="picture" />
          </div>
        </div>
    </div>
  );
}

export default Balance;
