import React from 'react';
import './styles/card.css'

const Card = ({
  title,
  content,
  image,
  name,
  status,
}) => {
  return (
    <div className="card">
      <div className="card-top">
        <h4>{title}</h4>
        <p>{content}</p>
      </div>
      <hr className='hr' />
      <div className="card-bottom">
      
        <img  className="card--image" src={image} alt={name} />

        <div className="card-info">
          <p className='card-info-name'>{name}</p>
          <p className='card-info-name2'>{status}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;

