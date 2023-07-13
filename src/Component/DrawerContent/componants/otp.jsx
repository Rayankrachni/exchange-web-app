
import '../style/otp.css';
import '../style/login-section.css';
import React, { useState } from 'react';
import { useContext } from "react";
import { themeContext } from "../../../Context.js";
import { Link } from 'react-scroll';

import { useTranslation } from "react-i18next";


const  OtpSection = ({navToLogin})=> {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const [t, il8n] = useTranslation();
    const [otp,setOtp]= useState( new Array(4).fill(""));

    
  
    return (
        <div className='OtpGlobalSection'>
          <div className='Otp-Text' >
          <p className='Otp-Text-title'>{t('OTPVerification')}</p>
          <p className='Otp-Text-detail'>{t('OTPVerificationtext')}  </p>
          <p className='Otp-Text-detail'>{t('to')} +213 540087776 </p>
          </div>
          <div className='Otp-input-section'>

          {
            otp.map((data ,index)=>{
              return <input style={{border: !darkMode ? "2px solid #92B4EC" : " 2px solid #FFD24C" }} 
              className='otpInput' name='otp' maxLength={1} type='text' key={index}/>
            })
          }
          </div>


          <li className="last-text-section" >                      
                <p>{t('dont-recieve-msg')} </p>
                <Link onClick={navToLogin} className='last-text-section-Link'>{t('resend')}</Link>
          </li>

          <div className='Otp-Text' > <button className="button-otp"  style={{background: !darkMode ? "#92B4EC" : "#FFD24C" }}>{t('confirmation')}</button>  </div>

        
         
          
        </div>
    );
}
export default OtpSection;