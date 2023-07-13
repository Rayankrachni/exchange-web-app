import React from 'react';
import './style/login-section.css';
import { useState } from "react";
import Toggle from "../Toggle/Toggle";
import { useTranslation } from "react-i18next";
import { BsArrowRightCircleFill } from 'react-icons/bs';
import { BsArrowLeftCircleFill } from 'react-icons/bs';
import Products from '../../images/products.png';
import Support from '../../images/assistance.png';
import DarkMode from '../../images/dark-mode.png';
import { useDispatch } from 'react-redux';
import Logout from '../../images/icons/logout.png';
import Profile from '../../images/profile.png';
import Favorite from '../../images/star.png';
import Notification from '../../images/notification.png';
import Tranlate from '../../images/translate.png';
import { useContext } from "react";
import { useNavigate } from 'react-router';
import { themeContext } from "../../Context.js";
import { BACKGROUND_COLOR_DARKMODE, GREY_COLOR_LightMode, SECONDARY_COLOR_DARKMODE } from '../../Constant/Color';
import { logOut } from '../../store/auth-slice';




 const DrawrData = [
    
  {
    title: 'notification',
    path: '/',
    icon: <img src={Notification}  style={{ width: '20px', height: '20px' }} />,
    className: 'nav-text',
    action:true
  },
  {
    title: 'profile',
    path: '/',
    icon: <img src={Profile}  style={{ width: '20px', height: '20px' }} />,
    className: 'nav-text',
    action:true
  },
  {
    title: 'products',
    path: '/',
    icon: <img src={Products}  style={{ width: '20px', height: '20px' }} />,
    className: 'nav-text',
    action:true
  },
  {
    title: 'languages',
    path: '/',
    icon: <img src={Tranlate}  style={{ width: '20px', height: '20px' }} />,
    className: 'nav-text',
    action:true
  },
  {
    title: 'darkMode',
    path: '/',
    icon: <img src={DarkMode}  style={{ width: '20px', height: '20px' }} />,
    className: 'nav-text',
    action:  false,
  
  },
  {
    title: 'favorite',
    path: '/',
    icon: <img src={Favorite}  style={{ width: '20px', height: '20px' }} />,
    className: 'nav-text',
    action:true
  },

  {
    title: 'logout',
    path: '/',
    icon: <img src={Logout}  style={{ width: '20px', height: '20px' }} />,
    className: 'nav-text',
    action:true
  },

];



function DrawerComponent({onChnageTheState}) {

  // Access the themeContext using useContext
  const theme = useContext(themeContext); 
  const darkMode = theme.state.darkMode;


  const isLTR = document.body.dir === "ltr";
  const [t, il8n] = useTranslation();
  const navigate = useNavigate()
  const dispatch =useDispatch();

  const navToFav = () => {
    // Navigate to the new page
    navigate('/Favorite-Products');
  };


  const hundelLogOut = () => {
    // Navigate to the new page
    console.log("logging out ")
    dispatch(logOut);
    onChnageTheState();
  };





  const handleItemClick = (item) => {
    // Perform different actions based on the item's title
    switch (item.title) {
      case 'notification':
        // Action for notification item
        break;
      case 'profile':
        // Action for profile item
        break;
      case 'products':
        // Action for products item
        break;
      case 'languages':
        if (il8n.language === 'en') {
          // Change language to Arabic
          il8n.changeLanguage('ar'); 
        } else {
          // Change language back to English
          il8n.changeLanguage('en'); 
        }
        break;
      case 'darkMode':
        // Action for darkMode item
        break;
      case 'favorite':
        {navToFav()}
        break;

        case 'logout':
           {hundelLogOut()}
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
                        {item.action ? isLTR ?
                          <BsArrowRightCircleFill size={33} style={{color: darkMode ? "white" : "grey"}} className='arrow-icons-style' />:
                          <BsArrowLeftCircleFill size={33} style={{color: darkMode ? "white" : "grey"}} className='arrow-icons-style' />:
                          <Toggle /> }
                  </li>
        </div> ))}
    </div>
  );
}

export default DrawerComponent;