import React from 'react'
import profilePicture from '../assets/images/profilePicture.jpg';
import { FaBell, FaEdit, FaTools } from 'react-icons/fa'

const ProfileHeader = () => {
  return (
    <div className='profile--header'>
      <img className='profilPicture--header' src={profilePicture} alt="profile" />
      <h4 className="header--title">Hi Pamela</h4>
      <div className="edit">
        
        <FaTools className='icon'/>
        <FaBell className='icon'/>
        <FaEdit className='icon'/>
      </div>
    </div>
  )
}

export default ProfileHeader