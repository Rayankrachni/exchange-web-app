
import '../style/login-section.css';
import React, { useState,useRef } from 'react';
import { TextField , InputAdornment, IconButton } from '@material-ui/core';
import { useContext } from "react";
import { MdOutlineVisibility } from 'react-icons/md';
import { MdOutlineVisibilityOff } from 'react-icons/md';
import {MdModeEditOutline} from 'react-icons/md';
import Avatar from "../../Avatar/Avatar";
import { useDispatch } from 'react-redux';
import { themeContext } from "../../../Context.js";
import { BsLockFill } from 'react-icons/bs';
import { BsTelephoneFill } from 'react-icons/bs';
import Facebook from '../../../images/icons/facebook.png';
import Google from '../../../images/icons//google.png';
import User from '../../../images/icons/user.png';
import Twitter from '../../../images/icons/twitter.png';
import { useTranslation } from "react-i18next";
import { Register } from '../../../store/auth-slice';


const  RegisterSection = ({navTLogin,navTotp})=> {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const [t, il8n] = useTranslation();
    const [showPassword,setShowPassword]=useState(false);
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

    
    const [formData, setFormData] = useState({
      device_token:"token",
      username: "rghy", 
      phone_number:"+21370243740",
      password:"17081998",
      confirm_password: "17081998", 
      is_paid:false
    });
    
    const {username,phone_number,password,confirm_password,is_paid} = formData;
    const [formError, setFormError] = useState('');

    //Error
    const [phone_error,setPhoneError]=useState('');
    const [password_error,setPasswordError]=useState('');
    const [confirm_password_error,setConfirmPasswordError]=useState('');
    const [user_name_error,setUserNameError]=useState('');
    const dispatch = useDispatch();


    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
      }; 
   const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate the form fields

        if (username.trim() === '') {
          setUserNameError('Please enter your Name.');
        }

        if (phone_number.trim() === '') {
          setPhoneError('Please enter your phone.');
        }
        if (password.trim() === '') {
          setPasswordError('Please enter your password.');
        }
       


        // If there are no errors, submit the form
        if (
          phone_number.trim() !== '' &&
          password.trim() !== ''&&
          confirm_password.trim() !== ''&&
          password.trim() !== ''
        ) {
          //(Register(formData)); 
          }
      };  
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleKeyPress = (event) => {
        const keyCode = event.keyCode || event.which;
        const keyValue = String.fromCharCode(keyCode);
    
        if (!/^[0-9]+$/.test(keyValue)) {
          event.preventDefault();
        }};


        
    return (
        <div className='div-style' style={{background: darkMode ? "#0A0A0A" : "",color: darkMode ? "white" : "black", }}>
        <nav className="log-nav-menu">
          <ul className="log-nav-menu-items" >
        
                 
                   <li  className="TextForm" >
                    
                      <Avatar image={image} handleImageClick={handleImageClick} />
                   
                   
                    </li>

                    <form onSubmit={handleSubmit}>
                        <li className="text-section" >
                          <BsLockFill width={40} className='log-icons-style'/>
                          <p> user Name</p>
                      </li>


                      <li className="TextForm"  >  
                        <TextField style={{width:"80%" , color: darkMode ? "white" : "grey"}}
                            
                              value={username}
                              error={user_name_error}
                              helperText={user_name_error}
                              InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <IconButton
                                      style={{background:darkMode ? "#1c1c1c" : "",color: darkMode ? "white" : "", height:"30px" ,marginBottom:"10px"}}
                                      onClick={handleClickShowPassword}
                                      onMouseDown={handleMouseDownPassword}
                                      edge="end" >
                                        {showPassword ? (
                                            <MdOutlineVisibility className='visibility-icons-style' style={{ color: darkMode ? 'white' : 'grey' }} />
                                        ) : (
                                            <MdOutlineVisibilityOff className='visibility-icons-style' style={{ color: darkMode ? 'white' : 'grey' }} />
                                        )}
                                    </IconButton>
                                  </InputAdornment>
                                ),
                              }}
                              inputProps={{
                                style: { color: darkMode ? "white" : ""}
                                
                              }}
                            
                              id="inputID" className='input' placeholder="User Naame"  variant="standard" />      
                      </li>

                        <li className="text-section">
                          <BsTelephoneFill className='log-icons-style'/>
                          <p>{t('phoneNumber')}</p>
                        </li>

                      <li className="TextForm">         
                      <TextField style={{width:"80%",}}  
                            name='phone'
                            value={phone_number}
                            error={phone_error}
                            helperText={phone_error}
                            onChange={(e) => setFormData({ ...formData, phone_number: e.target.value })}
                          
                                inputProps={{
                                    inputMode: 'numeric',
                                    style: { color: darkMode ? "white" : ""}
                                  }}
                                  onKeyPress={handleKeyPress}
                                  id="inputID" placeholder={t('phoneNumberPlaceholder')} variant="standard" />        
                           </li>

                      

                      <li className="text-section" >
                          <BsLockFill width={40} className='log-icons-style'/>
                          <p> {t('password')}</p>
                      </li>


                      <li className="TextForm"  >  
                        <TextField style={{width:"80%" , color: darkMode ? "white" : "grey"}}
                              name="pass word"
                              value={password}
                              error={password_error}
                              helperText={password_error}
                              InputProps={{
                                type: showPassword?"text":"password",
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <IconButton
                                      style={{background:darkMode ? "#1c1c1c" : "",color: darkMode ? "white" : "", height:"30px" ,marginBottom:"10px"}}
                                      onClick={handleClickShowPassword}
                                      onMouseDown={handleMouseDownPassword}
                                      edge="end" >
                                        {showPassword ? (
                                            <MdOutlineVisibility className='visibility-icons-style' style={{ color: darkMode ? 'white' : 'grey' }} />
                                        ) : (
                                            <MdOutlineVisibilityOff className='visibility-icons-style' style={{ color: darkMode ? 'white' : 'grey' }} />
                                        )}
                                    </IconButton>
                                  </InputAdornment>
                                ),
                              }}
                              inputProps={{
                                style: { color: darkMode ? "white" : ""}
                                
                              }}
                            
                              id="inputID" className='input' placeholder={t('passwordPlaceholder')}  variant="standard" />      
                      </li>

                      <li className="text-section" >
                          <BsLockFill width={40} className='log-icons-style'/>
                          <p> {t('confirme-password')}</p>
                      </li>

                      <li className="TextForm"  >  
                        <TextField style={{width:"80%" , color: darkMode ? "white" : "grey"}}
                              name="confirm password"
                              value={confirm_password}
                              error={confirm_password_error}
                              helperText={confirm_password_error}
                              InputProps={{
                                type: showPassword?"text":"password",
                                
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <IconButton
                                      style={{background:darkMode ? "#1c1c1c" : "",color: darkMode ? "white" : "", height:"30px" ,marginBottom:"10px"}}
                                      onClick={handleClickShowPassword}
                                      onMouseDown={handleMouseDownPassword}
                                      edge="end" >
                                        {showPassword ? (
                                            <MdOutlineVisibility className='visibility-icons-style' style={{ color: darkMode ? 'white' : 'grey' }} />
                                        ) : (
                                            <MdOutlineVisibilityOff className='visibility-icons-style' style={{ color: darkMode ? 'white' : 'grey' }} />
                                        )}
                                    </IconButton>
                                  </InputAdornment>
                                ),
                              }}
                              inputProps={{
                                style: { color: darkMode ? "white" : ""}
                                
                              }}
                            
                              id="inputID" className='input' placeholder={t('confirme-passwordPlaceholder')}  variant="standard" />      
                      </li>

                      <li className="TextForm" style={{background:darkMode ? "#1c1c1c" : "",color: darkMode ? "#DCDCDC" : "",}}>    
                       <button className="button-login" 
                         type='submit'
                       style={{background: !darkMode ? "#92B4EC" : "#FFD24C" }}
                       >{t('register')}</button>  
                       {/*onClick={navTotp} */}
                     </li>
                    </form>
                  

                

                  

                   <li className="last-text-section" >                      
                       <p>{t('or-sign-up')} </p>
                       
                   </li>


                   
                   <li className="textSection" >             
                   <img src={Google}  className='social-icons' />

                    <img src={Facebook} className='social-icons' />

                    <img src={Twitter}  className='social-icons' />
    
                   </li>
           
          </ul>
        </nav>

        <input
        type="file"
        accept="image/*"
        onChange={onImageChange}
        ref={fileInputRef}
        style={{ display: 'none' }}
      />
     </div>
    );
}
export default RegisterSection;