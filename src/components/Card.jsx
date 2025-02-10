import React, { useState } from 'react';
import { FaPlug, FaPlus, FaThermometer } from 'react-icons/fa';
import { FaShop } from 'react-icons/fa6';
import Modal from './Modal'; // Import the Modal component
import '../styles/Content.css';

const expenses = [
  {
    title: 'Consumables',
    icon: <FaShop />,
  },
  {
    title: 'Utilities',
    icon: <FaPlug />,
  },
  {
    title: 'Health ',
    icon: <FaThermometer />,
  },
  {
    title: 'Add More',
    icon: <FaPlus />,
  },
];

const Card = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddMoreClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='card--container'>
      {expenses.map((item, index) => (
        <div
          className='card'
          key={index}
          onClick={item.title === 'Add More' ? handleAddMoreClick : undefined}
        >
          <div className="card--cover">{item.icon}</div>
          <div className="card--title">
            <h4>{item.title}</h4>
          </div>
        </div>
      ))}

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="Add More Categories"
      >
        <div>
          <p>You can add more category according to your preference.</p>
          <input className="modal-input" placeholder="Input Category " type="text" />
          {/* <button onClick={handleCloseModal} className="modal-close-button">
            Close
          </button> */}
        </div>
      </Modal>
    </div>
  );
};

export default Card;