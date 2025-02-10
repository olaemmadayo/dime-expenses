import React from 'react'
  import '../styles/Settings.css'
import { FaImage, FaLock, FaMoneyBill, FaSignOutAlt } from 'react-icons/fa';


const Settings =() =>{
  return(
      <div>
        <h1 className='setting-head'>Settings</h1>
       
        <div className="settings-wrap">
          <a href="" className="item">
            Account
          <FaImage className='icon'/>
          </a>
         
          <a href="" className="item">
          Set Limit
          <FaMoneyBill className='icon'/>
          </a>

          <a href="" className="item">
            Security
          <FaLock className='icon'/>
          </a>

          <a href="" className="item">  
          Log Out
          <FaSignOutAlt className='icon'/>
          </a>

        </div>
      </div>
  );
}

export default Settings