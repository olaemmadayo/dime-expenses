
import React, { useEffect } from 'react';
import '../styles/income.css';
import { Loader } from "./Widget/Loader/Loader";
import { FaEdit } from 'react-icons/fa';
import ProfileHeader from './ProfileHeader';

function Income({ income, setIncome, loading }) {
  // Add useEffect for validation
  useEffect(() => {
    if (income < 0) {
      setIncome(0);
    }
  }, [income, setIncome]);

  return (
    <div className='income page'>
      <div className="income--header">
      <h1>Income</h1>
      <ProfileHeader/>
      </div>
      <div className="income--wrap">
        {loading ? (
          <Loader loading={loading} />
        ) : (
          <div>
            <h1 className='income--head'>Set Your Income</h1>
            <div className='income--inputbox'>
              <input 
                type="number" 
                value={income} 
                onChange={(e) => setIncome(Number(e.target.value))} 
                placeholder="Enter your income" 
              />
            </div>
          </div>
        )}
        <div className="edit-income">
          <FaEdit className='icon'/>
          <p>Edit Balance</p>
                  
        </div>
      </div>
       
        
    </div>
  );
}

export default Income;
