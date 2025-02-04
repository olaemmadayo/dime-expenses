import React from 'react';
import '../styles/income.css';
import { Loader } from "../Loader/Loader/";
import { FaEdit } from 'react-icons/fa';

function Income({ income, setIncome, loading }) {
  return (
    <div>
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
