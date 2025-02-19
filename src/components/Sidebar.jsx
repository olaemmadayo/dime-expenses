import React from 'react'
import { FaHome, FaCalendar, FaBox, FaBoxOpen, FaTools, FaChartLine, FaMoneyBill } from 'react-icons/fa'

import { Link } from 'react-router-dom'
import DimeLogo from '../assets/images/Dime_logo2.png'
import '../styles/Sidebar.css'

function Sidebar() {
  return (
    <div className='menu'>
      <div className='logo'>
        <img src={DimeLogo} alt="logo" />
      </div>
      <div>
        <div className="menu--list">
          <Link to="/main-dashboard" className="item ">
            <FaHome className='icon' />
            Dashboard
          </Link>
          <Link to="/main-dashboard/income" className="item">
            <FaBox className='icon' />
            Income
          </Link>
          <Link to="/main-dashboard/expenses" className="item">
            <FaMoneyBill className='icon' />
            Expenses
          </Link> 
          <Link to="/main-dashboard/analytics" className="item">
            < FaChartLine className='icon' />
            Analytics
          </Link>
          <Link to="/main-dashboard/balance" className="item">
            <FaBoxOpen className='icon'/>
            Balance
          </Link>
          <Link to="/main-dashboard/report" className="item">
          <FaCalendar className='icon' />
            Report
          </Link>
          <Link to="/main-dashboard/settings" className="item">
          <FaTools className='icon' />
            Settings
          </Link>
          
        </div>
      </div>
    </div>
  )
}

export default Sidebar
