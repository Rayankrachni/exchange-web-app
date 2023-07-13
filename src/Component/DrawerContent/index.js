
import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { themeContext } from "../../Context";
import LoginSection from "./componants/login-section";
import Settings from "./componants/settings";
import Drawer from 'react-modern-drawer';
import RegisterSection from './componants/register';
import 'react-modern-drawer/dist/index.css';
import './style/settings.css';
import OtpSection from './componants/otp';
import MainDrawer from './Main_Drawe';
import MainSettings from './componants/drawer-index';





    const  SideBar = ({isOpen,toggleDrawer})=> {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    //Translate
    const [t, il8n] = useTranslation();

    // Adjust the breakpoint as needed for the side bar width
    const [drawerWidth, setDrawerWidth] = useState(300);
    const isMobile = useMediaQuery({ maxWidth: 600 });
    const isSmallSize = useMediaQuery({ maxWidth: 414 });
    const isTablet = useMediaQuery({ maxWidth: 912 });
    const isLarge = useMediaQuery({ maxWidth: 1024 });
 
    
    useEffect(() => {
      if (isMobile) {
        setDrawerWidth("90%");
      } else if (isTablet) {
        setDrawerWidth("50%");
      } else if (isSmallSize) {
        setDrawerWidth("90%");
      } else {
        setDrawerWidth("40%");
      }
    }, [isMobile, isTablet, isSmallSize, isLarge]);

    
    const [navto, setnavto] = React.useState('login');

   const isLogging=localStorage.getItem('islogin')

    const navToLogin = () => {
      setnavto("login");
    };
  
    const navToRegister = () => {
      setnavto("register");
    };

    const navToOtp = () => {
      setnavto("otp");
    };
  
    const navToSetting = () => {
      setnavto("settings");
    };

    const navToMainSetting = () => {
      setnavto("main-settings");
    };


    const handleItemClick = (nav) => {
      // Perform different actions based on the item's title
      switch (nav) {


        case 'main-settings':
          return <MainSettings onChnageTheState={navToSetting}/>;
          
         
        
        case 'login':

           if(!isLogging){    
               return <LoginSection navToRegister={navToRegister} navToSetting={navToSetting}/>;
             }
           else  {return <MainSettings onChnageTheState={navToSetting}/>;}

              
          
        case 'register':
          return  <RegisterSection navTLogin={navToLogin} navTotp={navToOtp}/>;
         
        case 'settings':

        
          return  <Settings onChnageTheState={navToLogin}/>

        case 'otp':
          return  <OtpSection navToLogin={navToLogin}/>  
          
     
     
        
        default:
          break;
      }
    };
  
    document.body.dir = il8n.dir();
    const isLTR = document.body.dir === "ltr";

  return (
    
    
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction= {isLTR ? 'left' : 'right'} 
                
                style={{height:"100%" , width: `${drawerWidth}`,background: darkMode ? "#1c1c1c" : "",color: darkMode ? "white" : "",}}
                className='drawer' >

                  
                <div className="DrawerButton_Container">
                 {handleItemClick(navto)}
                </div>
            </Drawer>
 

  );
}

export default SideBar;