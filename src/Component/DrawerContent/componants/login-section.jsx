
import '../style/login-section.css';
import React, { useState } from 'react';
import { TextField , InputAdornment, IconButton } from '@material-ui/core';
import { useContext } from "react";
import { MdOutlineVisibility } from 'react-icons/md';
import { MdOutlineVisibilityOff } from 'react-icons/md';
import { themeContext } from "../../../Context.js";
import { BsLockFill } from 'react-icons/bs';
import { BsTelephoneFill } from 'react-icons/bs';
import { Link } from 'react-scroll';
import Facebook from '../../../images/icons/facebook.png';
import Google from '../../../images/icons/google.png';
import Twitter from '../../../images/icons/twitter.png';
import { useDispatch,useSelector} from 'react-redux';
import { useTranslation } from "react-i18next";
import { Login, login, selectCurrentStatus } from '../../../store/auth-slice';
import { PinDropSharp } from '@material-ui/icons';


const  LoginSection = ({navToSetting,navToRegister})=> {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const [t, il8n] = useTranslation();
   
    const [showPassword,setShowPassword]=useState(false);
    
    const dispatch = useDispatch();
    const status = useSelector((state) => state.auth.status);
    const user = useSelector((state) => state.auth.user);

  

    const [formData, setFormData] = useState({
      phone_number: '',
      password: '',
    });
    
    const {phone_number, password} = formData;
    const [formError, setFormError] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    //Error
    const [phone_error,setPhoneError]=useState('');
    const [password_error,setPasswordError]=useState('');
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
      }; 


   
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form fields
    if (phone_number.trim() === '') {
      setPhoneError('Please enter your phone.');
    }
    if (password.trim() === '') {
      setPasswordError('Please enter your password.');
    }


    // If there are no errors, submit the form
    if (
      phone_number.trim() !== '' &&
      password.trim() !== ''
    ){

       dispatch(login({phone_number,password}));  
       if(status=== "success"){
        setLoading(false);
        navToSetting();
       }
       if(status=== "loading"){
        setLoading(true);
       }
   
    
    }
  }; 
  const handleMouseDownPassword = (event) => {
      event.preventDefault();
  };
  const handleKeyPress = (event) => {
      const keyCode = event.keyCode || event.which;
      const keyValue = String.fromCharCode(keyCode);
  
      if (!/^[0-9]+$/.test(keyValue)) {
        event.preventDefault();  }};


    return (
        <div className='div-style' style={{background: darkMode ? "#0A0A0A" : "",color: darkMode ? "white" : "black", }}>
        <nav className="log-nav-menu">
          <ul className="log-nav-menu-items" >
           
         
               <div className='log-title-section'>{t('login')}</div>
                   <form onSubmit={handleSubmit}>
                          <li className="text-section">
                              <BsTelephoneFill className='log-icons-style'/>
                              <p>{t('phoneNumber')}</p>
                          </li>



                          <li className="TextForm" style={{background:darkMode ? "#1c1c1c" : "",color: darkMode ? "white" : ""}}>         
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
                                  name='password'
                                  value={password}
                                  helperText={password_error}
                                  onChange={(e) =>
                                    setFormData({ ...formData, password: e.target.value })
                                  }
                                  error={phone_error}
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

                          <li className="text-section-checkbox" >
                              <input type="checkbox" id="myCheck"  class="checkbox-custom" onclick="myFunction()" color='#146C94'></input>
                              <p>{t('rememberMyAccount')} </p>      
                          </li>

                          <li className="TextForm" style={{background:darkMode ? "#1c1c1c" : "",color: darkMode ? "#DCDCDC" : "",}}>    
                              <button className="button-login" 
                              type='submit'

                             
                              style={{background: !darkMode ? "#92By4EC" : "#FFD24C" }}
                              >{loading ? "loading":t('login')} </button>  
                          </li>

                    </form>      

                          <li className="last-text-section" >                      
                              <p>{t('dontHaveAnAccount')} </p>
                              <Link onClick={navToRegister} className='last-text-section-Link'>{t('register')}</Link>
                          </li>


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
     </div>
    );
}
export default LoginSection;