import React from 'react'
import '../styles/SuccessStory.css'
import successGraph from '../assets/graph1.png'
import { FaCheckCircle } from 'react-icons/fa'
const SuccessStory = () => {
  return (
    <div className='SuccessStory--page'>
      <div className="head--content">
        <p>INCREASE PRODUCTIVITY</p>
        <h1>Reduce Time in Doing Manual Work  <br />
        Managing Expenses</h1> 
      </div>
      <div className="success--content--wrap">
        <div className='center--button'>
          <div className="content--button">
            <button className='with--dime'>WithDime</button>
            <button className='without--dime'>WithoutDime</button>
          </div>
          <h4>Track Business Expenses until its Milisecond</h4>
          <div className='inner--content'>
            <FaCheckCircle style={{ color: 'green' }} />
            <p>
            Analyze your business cost easily with group transaction <br />thorugh tagging feature.
            </p>
            </div>
            
            
          <div className='inner--content'>
          <FaCheckCircle style={{ color: 'green' }} />
          <p>
          Add more than one card for payment. Integrated with more <br /> than 50+ payment method and support bulk payment.
          </p>
          
          </div>
          <div className='inner--content'>
          <FaCheckCircle style={{ color: 'green' }} />
          <p>
          Arrange your business expenses by date, name, etc.,  with  <br />just one click.
          </p>
          </div>
          
        </div>
        <div className="success--graph">
          <img src={successGraph} alt="" />
        </div>
      </div>

    </div>
  )
}

export default SuccessStory