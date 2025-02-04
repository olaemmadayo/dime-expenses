import React from 'react'
import { FaEdit } from 'react-icons/fa'

const ProfileHeader = () => {
  return (
    <div className='profile--header'>
      <h2 className="header--title">Hi Pamela</h2>
      <div className="edit">
        <FaEdit className='icon'/>
      </div>
    </div>
  )
}

export default ProfileHeader