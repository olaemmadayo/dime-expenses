import React, { useState } from 'react';

import '../styles/Profile.css';
import profilePicture from '../assets/images/profilePicture.jpg';
import { FaArrowCircleRight, FaCog, FaLock, FaQuestion, FaSignOutAlt, FaWallet } from 'react-icons/fa';



function Profile() {
  const [showProfile, setShowProfile] = useState(false);

  const handleToggleProfile = () => {
    setShowProfile(!showProfile);
  };

  return (
    <div className='profile'>
      
  
      
      <button className='show--profile' onClick={handleToggleProfile}>Show profile</button>
      {showProfile && (
        <div className="user--profile">
          <div className="user--detail">
            <img className='Bigprofile--image' src={profilePicture} alt="" />
            <h3 className='username'>Pamela Francis</h3>
            <span className="status">Verified</span>
          </div>
            <hr />
          <div className='account--wrap'>
            <div className="account">
              <FaWallet className='sign'/>
              <p>Wallet</p>
            </div>
            <div className="account">
              <FaCog  className='sign'/>
              <p>Preferences</p>
            </div>
            <div className="account">
              <FaLock className='sign'/>
              <p>Security</p> 
            </div>
            <div className="account">
              <FaQuestion className='sign'/>
              <p>Help</p>
              
            </div>
            <div className="account">
              <FaSignOutAlt className='sign'/>
              <p>Sign out</p>
              
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
