import React, { useState } from 'react';
import ProfileHeader from './ProfileHeader';
import '../styles/Profile.css';
import profilePicture from '../assets/images/profilePicture.jpg';

function Profile() {
  const [showProfile, setShowProfile] = useState(false);

  const handleToggleProfile = () => {
    setShowProfile(!showProfile);
  };

  return (
    <div className='profile'>
      <ProfileHeader />
      
      <button className='show--profile' onClick={handleToggleProfile}>Show profile</button>
      {showProfile && (
        <div className="user--profile">
          <div className="user--detail">
            <img className='profile--image' src={profilePicture} alt="" />
            <h3 className='username'>Pamela Francis</h3>
            <span className="status">Verified</span>
          </div>
          <div>
            <div className="user-courses"></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
