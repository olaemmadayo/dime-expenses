import React from 'react';
import '../styles/HrHeader.css';
import dimeLogo from '../assets/Dime_logo 2.png';
import { FaArrowDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HrHeader = () => {
  return (
    <div className="HrHeader">
      <div className="HrHeader--wrap">
        <div >
          <Link to='/header-image'>
          <img  src={dimeLogo} alt="dime logo" />
          </Link>
        </div>
        <div className="header--nav">
          <Link to="/services">Services</Link>
          <FaArrowDown className='drop--down'/>
          <Link to="/pricing">Pricing</Link>
          <Link to="/benefit">Benefit</Link>
          <Link to="/help">Help</Link>
          <Link to="/how-it-works">How it Works</Link>
          <Link to="/main-dashboard">Dashboard</Link>
        </div>
        <div className="header--button">
          <Link to="/login">
            <button className='login'>Login</button>
          </Link>
          <Link to="/sign-up">
            <button className='sign--up'>Sign Up</button>
          </Link>
        </div>
      </div>
      <hr className='line'/>
    </div>
  );
};

export default HrHeader;
