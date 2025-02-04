import React from 'react'
import {FaPlug, FaPlus, FaThermometer,  } from 'react-icons/fa'
import { FaShop } from 'react-icons/fa6';
import '../styles/Content.css'



const expenses = [
  {
    title: 'Consumables',
    icon: <FaShop/>,
  },
  {
    title: 'Utilities',
    icon: <FaPlug/>,
  },
  {
    title: 'Health $ Fitness',
    icon: <FaThermometer/>
  },
  {
    title: 'Add More',
    icon: <FaPlus/>,

  }

];
const Card = () => {
  return (
    <div className='card--container'>
      {expenses.map((item)=>(
        <div className='card'>
          <div className="card--cover">{item.icon}</div>
          <div className="card--title">
            <h4>{item.title}</h4>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Card