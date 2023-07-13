import React from 'react';
import './style/login-section.css';
import { useState } from "react";
import Toggle from "../Toggle/Toggle";
import { useTranslation } from "react-i18next";
import { BsArrowRightCircleFill } from 'react-icons/bs';
import { BsArrowLeftCircleFill } from 'react-icons/bs';
import Products from '../../images/products.png';
import Notiffication from '../../images/notification.png';
import Add from '../../images/icons/add-icon.png';
import Message from '../../images/icons/message-icon.png';
import DarkMode from '../../images/dark-mode.png';
import Settings from '../../images/icons/settings-icon.png';
import Home from '../../images/icons/home-icon.png';
import Favorite from '../../images/star.png';
import Notification from '../../images/notification.png';
import Tranlate from '../../images/translate.png';
import { useContext } from "react";
import { useNavigate } from 'react-router';
import { themeContext } from "../../Context.js";
import { BACKGROUND_COLOR_DARKMODE, GREY_COLOR_LightMode, SECONDARY_COLOR_DARKMODE } from '../../Constant/Color';




 const DrawrData = [
    
  {
    title: 'Home',
    path: '/',
    icon: <img src={Home}  style={{ width: '20px', height: '20px' }} />,
    className: 'nav-text',
    action:true
  },
  {
    title: 'Message',
    path: '/',
    icon: <img src={Message}  style={{ width: '20px', height: '20px' }} />,
    className: 'nav-text',
    action:true
  },
  {
    title: 'Explore',
    path: '/',
    icon: <img src={Products}  style={{ width: '20px', height: '20px' }} />,
    className: 'nav-text',
    action:true
  },
  {
    title: 'Trend',
    path: '/',
    icon: <img src={Favorite}  style={{ width: '20px', height: '20px' }} />,
    className: 'nav-text',
    action:true
  },
  {
    title: 'Add Product',
    path: '/',
    icon: <img src={Add}  style={{ width: '20px', height: '20px' }} />,
    className: 'nav-text',
    action:  false,
  
  },
  {
    title: 'Notification',
    path: '/',
    icon: <img src={Notiffication}  style={{ width: '20px', height: '20px' }} />,
    className: 'nav-text',
    action:true
  },

  {
    title: 'Settings',
    path: '/',
    icon: <img src={Settings}  style={{ width: '20px', height: '20px' }} />,
    className: 'nav-text',
    action:true
  },

];



function MainDrawer({onChnageTheState}) {

  // Access the themeContext using useContext
  const theme = useContext(themeContext); 
  const darkMode = theme.state.darkMode;


  const isLTR = document.body.dir === "ltr";
  const [t, il8n] = useTranslation();

  const navigate = useNavigate()

  const navToFav = () => {
    // Navigate to the new page
    navigate('/Favorite-Products');
  };

  const navToRend = () => {
    // Navigate to the new page
    navigate('/Trend-Products');
  };
  const navToStepper= () => {
    // Navigate to the new page
    navigate('/Stepper');
  };
  
  const handleItemClick = (item) => {
    // Perform different actions based on the item's title
    switch (item.title) {
      case 'Home':
        // Action for notification item
        break;
      case 'Message':
        // Action for profile item
        break;
      case 'Explore':
        // Action for products item
        break;
      case 'Trend':
        {navToRend()}
        break;
      case 'Add Product':
        {navToStepper()}
        break;
      case 'Notification':
        {navToFav()}
        break;

        case 'Settings':
           {onChnageTheState()}
          break;  
      default:
        // Default action
        break;
    }
  };

  return (
    <div>
     
      {DrawrData.map((item, index) => (
          <div   onClick={() => handleItemClick(item)}>
                  <li key={index} className={item.className}  style={index%2 ?{background:darkMode ? BACKGROUND_COLOR_DARKMODE : GREY_COLOR_LightMode,color: darkMode ? GREY_COLOR_LightMode : "",}     :{background:darkMode ? SECONDARY_COLOR_DARKMODE : "",color: darkMode ? "white" : "",}}>
                    <div className='text-section-link' to={item.path}>
                        {item.icon}
                        <span>{t(item.title)}</span>      
                    </div>
                        { isLTR ?
                          <BsArrowRightCircleFill size={33} style={{color: darkMode ? "white" : "grey"}} className='arrow-icons-style' />:
                          <BsArrowLeftCircleFill size={33} style={{color: darkMode ? "white" : "grey"}} className='arrow-icons-style' />
                        }
                  </li>
        </div> ))}
    </div>
  );
}

export default MainDrawer;