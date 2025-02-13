import React from 'react'
import pana from '../assets/images/pana2.png'
import '../styles/DashboardFooter.css'

const DashboardFooter = () => {
  return (
    <div className='dfooter-imageWrap'>
      <div className="footer--content">
        <h1 className='top--content'>Improve Your money <br />
            Management with <span className='dime'>Dime</span>
        </h1>
        
        <h4 className='bottom--content'> Taking charge of your finances          starts with understanding your <br />
            income and expenses
        </h4>
      </div>
      <div className="footer--image">
        <img className="dfooter-image" src={pana} alt="image" />
      </div>
    </div>
  )
}

export default DashboardFooter