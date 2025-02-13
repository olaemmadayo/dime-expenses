import React from 'react'
import { FaSearch, FaSoundcloud,  } from 'react-icons/fa'

const ContentHeader = () => {
  return (
    <div className='content--header'>
      <h1 className='header--title'>Dashboard</h1>
      <div className="header--activity">
        <div className="search-box">
          <input type="text" placeholder='Search anything here' />
          <FaSearch className='icon'/>
        </div>
        <div className="notify">
        <FaSoundcloud className='icon'/>
        </div>
      </div>
    </div>
  )
}

export default ContentHeader