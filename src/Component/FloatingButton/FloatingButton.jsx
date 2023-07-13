import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { Tooltip as ReactTooltip } from 'react-tooltip';


import './FloatingButton.css';



const FloatingButton = ({ onClick }) => {
    return (
      <div className="floating-button-container">
        <button className="floating-button" data-tip="Add Item" onClick={onClick}>
          Echange
        </button>
        <ReactTooltip effect="solid" />
      </div>
    );
  };
  export default FloatingButton;