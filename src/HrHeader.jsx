import React from 'react'
import './styles/HrHeader.css'
import dimeLogo from './assets/Dime_logo 2.png'
import { FaArrowDown } from 'react-icons/fa'
const HrHeader = () => {
  return (
    <div className="HrHeader">
      <div className="HrHeader--wrap">
        <div className='hearder-img'>
          <img src={dimeLogo} alt="" />
        </div>
        <div className="header--nav">
          
          <a href="">Services</a>
          <FaArrowDown className='drop--down'/>
          <a href="">Pricing</a>
          <a href="">Benefit</a>
          <a href="">Help</a>
          <a href="">How it works</a>
         
        </div>
        <div className="header--button">
          <button className='login'>Login</button>
          <button className='sign--up'>Sign Up</button>
        </div>  
      </div>
      <hr className='line'/>
      


    </div>
  )
}

export default HrHeader