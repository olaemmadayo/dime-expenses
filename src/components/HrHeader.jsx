
import React from 'react';
import '../styles/HrHeader.css';
import dimeLogo from '../assets/Dime_logo 2.png';
import { FaArrowDown } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';


const HrHeader = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignUpClick = () => {
    navigate('/sign-up');
  };

  return (
    <div className="HrHeader">
      <div className="HrHeader--wrap">
        <div className='hearder-img'>
          <img src={dimeLogo} alt="" />
        </div>
        <div className="header--nav">
          <Link to="services">Services</Link>
          <FaArrowDown className='drop--down'/>
          <Link to="pricing">Pricing</Link>
          <Link to="benefit">Benefit</Link>
          <Link to="help">Help</Link>
          <Link to="how-it-works">How it Works</Link>
        </div>
        <div className="header--button">
          <button className='login' onClick={handleLoginClick}>Login</button>
          <button className='sign--up' onClick={handleSignUpClick}>Sign Up</button>
        </div>
      </div>
      <hr className='line'/>
    </div>
  );
};

export default HrHeader;

