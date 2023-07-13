
import '../style/login-section.css';
import DrawerComponent from '../Drawe_data';
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useContext } from "react";
import { themeContext } from "../../../Context.js";
import MainDrawer from '../Main_Drawe';

const  MainSettings = ({onChnageTheState})=> {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const [t, il8n] = useTranslation();
    return (
        
        <div  style={{
            background: darkMode ? "#0A0A0A" : "",
            color: darkMode ? "white" : "",
          }}>
        <nav className="nav-menu">
          <ul className="nav-menu-items" >
        
         
               <div className='Set-text'>{t('settings')}</div>
             {/* <li className="profile" style={{background:"white"}}>
                <img src={Profile} alt="Profile" className="profile-image" />
                <span className="user-name">user Name</span>

                <BsArrowRightCircleFill size={33} color="grey" className='icons-style' />
             </li>*/}

             <MainDrawer  onChnageTheState={onChnageTheState}/>
             
           
          </ul>
        </nav>
     </div>
    );
}
export default MainSettings;