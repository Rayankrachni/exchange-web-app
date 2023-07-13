
import { Container } from '@material-ui/core';
import './style/profile-settings.css'

import React, { useState,useRef } from 'react';
import { TextField , InputAdornment, IconButton } from '@material-ui/core';
import { AiTwotoneCamera } from 'react-icons/ai';
import {BsFillPersonFill} from 'react-icons/bs';
import {MdEmail} from 'react-icons/md';
import {MdModeEditOutline} from 'react-icons/md';
import {BsTelephoneFill} from 'react-icons/bs';

import Avatar from '../../Component/Avatar/Avatar';
import User from '../../images/icons/user.png';
import Person from "../../images/person.png";
import '../../App.css';
import '../../Component/DrawerContent/style/login-section.css';

import { use } from 'i18next';
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { themeContext } from "../../Context.js";
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../Constant/Color';
import Footer from '../../Component/Footer/Footer';
import NavBar from '../../Component/Navbar/Navbar';
const Profile =()=>{

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const [image, setImage] = useState(User)

    const fileInputRef = useRef(null);

    const onImageChange = (event) => {
      if (event.target.files && event.target.files[0]) {
        setImage(URL.createObjectURL(event.target.files[0]));
      }
    };
    const handleImageClick = () => {
      fileInputRef.current.click();
    };

    const [t, il8n] = useTranslation();
    document.body.dir = il8n.dir();

    return(
        <div>
         <NavBar/>
         <div 
           className='Profile'
           style={{background: darkMode ? "#1c1c1c" : "",
                   color: darkMode ? "white" : "black", }} >

              <ul className="log-nav-menu-items" >
                    <li  className="TextForm" >
                    
                       <Avatar image={image} handleImageClick={handleImageClick} />
  
                    </li>

                    <div className='div-input-container' style={{background: darkMode ? "#1c1c1c" : "",color: darkMode ? "white" : "black", }}>


                    <li className="TextForm">
                       <p className='setting-title'>{t('edit')}</p>
                    </li>

                    <li className="setting-text-section">
                       <BsFillPersonFill className='setting-icons-style'/>
                       <p>{t('name')}</p>
                    </li>

                    <div className='div-input' >
                        <TextField 
                           id={!darkMode ? "inputID1":"inputID2"}
                           placeholder='+213 540060592 '     
                           fullWidth={true} 
                           variant="standard" 
                           InputProps={{   
                             }} />
                    </div>
                

                    <li className="setting-text-section">
                       <MdEmail className='setting-icons-style'/>
                       <p>{t('email')}</p>
                    </li>


                    <div className='div-input'  >
                        <TextField 
                           id={!darkMode ? "inputID1":"inputID2"}
                           placeholder='email@example.com '     
                           fullWidth={true} 
                           variant="standard" 
                           InputProps={{  
                              color: darkMode ? "white" : "grey",
                             
                     }} />
                    </div>

                   <li className="setting-text-section">
                       <BsTelephoneFill className='setting-icons-style'/>
                       <p>{t('phoneNumber')}</p>
                   </li>

                   <div className='div-input'  >
                        <TextField 
                           id={!darkMode ? "inputID1":"inputID2"}
                           placeholder='+213 540060592 '     
                           fullWidth={true} 
                           variant="standard" 
                           InputProps={{   
                             }} />
                   </div>


                   <li className="setting-text-section">
                       <BsTelephoneFill className='setting-icons-style'/>
                       <p>{t('Location')}</p>
                   </li>

                   <div className='div-input'  >
                        <TextField 
                           id={!darkMode ? "inputID1":"inputID2"}
                           placeholder='Location '     
                           fullWidth={true} 
                           variant="standard" 
                           InputProps={{   
                             }} />
                   </div>
                
                  <li className="TextForm" >    
                       <button className="button-save" 
                       style={{background: !darkMode ? "#92B4EC" : "#FFD24C" }}
                       >{t('save')}</button>  
                  </li>

                 </div>

                 
              </ul>
         
               <input type="file" accept="image/*"  onChange={onImageChange} ref={fileInputRef} style={{ display: 'none' }}  />
                 
   
        </div>
         <Footer/>
        </div>
  );
}
export default Profile;
