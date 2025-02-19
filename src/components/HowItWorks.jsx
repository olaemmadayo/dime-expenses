import React from 'react'
import '../styles/HowItWorks.css'
import register from '../assets/images/register.png'
import HrHeader from './HrHeader'

const HowItWorks = () => {
  return (
    <div className='hwk--page'>
      <div>
        <HrHeader/>
      </div>
      <div className="hwk--wrap">
        <h5>HOW IT WORKS</h5>
        <h2>Few Easy Steps and Done</h2>
        <p>
        In just few easy step, you are all set to manage your business and personal  <span className='content--break'>finances. Account for every dime all in one place.</span>
        </p>
      </div>
      <div className="register--card">
        <img src={register} alt="" />
      </div>
      <div className="footer--button">
        <button className='bt1'>
          Get a Free Account

        </button>
        <button className='bt2'>
          See Pricing
          </button>
      </div>
    </div>
  )
}

export default HowItWorks