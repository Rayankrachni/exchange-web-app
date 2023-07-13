import React from 'react';
import './Avatar.css'; // Create a separate CSS file for styling the avatar
import {MdModeEditOutline} from 'react-icons/md';
import { useContext } from "react";
import { themeContext } from "../../Context.js";
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../Constant/Color';

const Avatar = ({ image ,handleImageClick}) => {
  const avatarStyle = {
    backgroundImage: `url(${image})`,
  };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return  (
    <div className="avatar-container">
      <div className="avatar" style={avatarStyle}></div>
       <div 
        className= "avatar-icon-container" style={{background: !darkMode ? PRIMARY_COLOR : SECONDARY_COLOR }} >
        <MdModeEditOutline onClick={handleImageClick}/>                    
       </div>
    </div>
  );
};

export default Avatar;
