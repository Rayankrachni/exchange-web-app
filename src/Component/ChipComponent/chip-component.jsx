import React, { useState } from 'react';
import './chip-component.css';
import { themeContext } from "../../Context.js";
import { useContext } from "react";

import { useEffect } from 'react';
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../Constant/Color';
const ChipList = ({chiplist}) => {


  const [chips, setChips] =  useState([]);

  useEffect(() => {
    const parsedCategories = JSON.parse(chiplist);
    setChips(parsedCategories);
  }, []);

  const handleChipAdd = (chip) => {
    setChips([...chips, chip]);
  };

  const handleChipDelete = (chip, index) => {
    const updatedChips = [...chips];
    updatedChips.splice(index, 1);
    setChips(updatedChips);
  };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="list-chip-container">

      {chips.map((item)=>{
        return(
        <div
        style={{background: !darkMode ? PRIMARY_COLOR : SECONDARY_COLOR }} 
        
        className="chip-container"  >
          <p className='text-chip'>{item}</p>
        
      </div>);
      })}
    

  </div>
  );
};

export default ChipList;
