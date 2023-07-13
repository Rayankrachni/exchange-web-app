import React, { useState } from 'react';
import { themeContext } from "../../Context.js";
import { useContext } from "react";

import { useEffect} from 'react';

import './categories-chip-list-style.css';
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../Constant/Color.js';

const CategoriesChipList = ({chiplist}) => {


  const [chips, setChips] =  useState([]);

  useEffect(() => {
    const parsedCategories = JSON.parse(JSON.parse(chiplist));
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
    <div className="list-chip-container-categories">

      {chips.map((item)=>{
        return(
        <div
       
        
        className="chip-container-categories" style={{background:darkMode?SECONDARY_COLOR:PRIMARY_COLOR}} >
          <p className='text-chip-categories'>{item}</p>
        
      </div>);
      })}
    

  </div>
  );
};

export default CategoriesChipList;
