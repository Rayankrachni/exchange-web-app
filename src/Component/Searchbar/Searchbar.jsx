import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { BsFilter } from  'react-icons/bs';
import { useState } from 'react';
import { TextField } from '@material-ui/core';
import './Searchbar.css'; // Import the CSS file for styling

import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { themeContext } from "../../Context";
import {PRIMARY_COLOR,SECONDARY_COLOR,BACKGROUND_COLOR_DARKMODE } from "../../Constant/Color.js";


const SearchBar = ({ onChange ,options,onSelect}) => {
  const theme = useContext(themeContext);
  const [t, i18n] = useTranslation();
  const darkMode = theme.state.darkMode;
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState(options);
  
  const isLTR = document.body.dir === "ltr";

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);

    const filteredOptions = options.filter((option) =>
      option.label.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredOptions(filteredOptions);
  };

  const handleOptionSelect = (selectedOption) => {
    onSelect(selectedOption);
    setIsOpen(false);
    setSearchTerm('');
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='global-search-container'> 
  
         <div className="row-search-container" >
         <div  className= {i18n.language === "en" ? "filter-container":"filter-container-rtl" } style={{background:!darkMode?PRIMARY_COLOR:SECONDARY_COLOR}}>
            <p>{t('filter')}</p>
            <BsFilter className="search-icon" color='black'/>
            </div>
          <div className='search-container' style={{ border: `1px solid ${!darkMode ? PRIMARY_COLOR : SECONDARY_COLOR}` }}>
            <TextField 
              style={{paddingRight:"10px",paddingLeft:"10px"}}
              id='#placeholder'
              placeholder={t('search')}    
              type="text"
              value={searchTerm}
              onChange={handleInputChange}
              onClick={toggleDropdown}
              fullWidth={true} 
              variant="standard"          
              InputProps={{      
                style: { color:!darkMode? "black":"white"},
                disableUnderline: true,
                fontSize: "12px", 
                endAdornment: 
                <FontAwesomeIcon icon={faSearch} className="search-icon" style={{colors:!darkMode?PRIMARY_COLOR:SECONDARY_COLOR}} />
              }} />
          </div>  
       

      </div> 
      
      {isOpen && (
                    <ul className="dropdown-options">
                      {filteredOptions.map((option) => (
                        <li
                          key={option.value}
                          onClick={() => handleOptionSelect(option)}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>
                  )}  
   </div> 
    
  );
};

export default SearchBar;
