
import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import "./App.css";
import { useContext } from "react";
import { themeContext } from "./Context";
import { useTranslation } from "react-i18next";
import Divider from '@mui/material/Divider';

import Navbar from "./Component/Navbar/Navbar";
import FloatingButton from "./Component/FloatingButton/FloatingButton";
import SideBar from './Component/DrawerContent';

import 'react-modern-drawer/dist/index.css';
import './Component/DrawerContent/style/settings.css';
import Categories from './Pages/Home/Categories/categories';
import { BACKGROUND_COLOR_DARKMODE, PRIMARY_COLOR, SECONDARY_COLOR } from './Constant/Color';
import ProductSetion from './Pages/Product/Product';
import Footer from './Component/Footer/Footer';
import ProductList from './Pages/Home/Products-List/products-list';
import RecentProduct from './Pages/Home/Recent-Product/recent-product';
import InitialSection from './Pages/Home/Initial-Section/initial-section';




function Main() {

 
    //theme Mode
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    //Translate
    const [t, il8n] = useTranslation();

    // Adjust the breakpoint as needed for the side bar width
    const [drawerWidth, setDrawerWidth] = useState(300);
    const [isOpen, setIsOpen] = React.useState(false)
    const isMobile = useMediaQuery({ maxWidth: 600 });
    const isSmallSize = useMediaQuery({ maxWidth: 414 });
    const isTablet = useMediaQuery({ maxWidth: 912 });
    const isLarge = useMediaQuery({ maxWidth: 1024 });
    const toggleDrawer = () => {
      setIsOpen((prevState) => !prevState)
    }
    
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






  
    document.body.dir = il8n.dir();
    

  return (
    
    <div
      className="App"
      style={{
        background: darkMode ? BACKGROUND_COLOR_DARKMODE: "",
        color: darkMode ? "white" : "black",
        fontFamily: 'Myriad Pro' 
      }}>
       
        <div className='globaldiv'>
          
        
          <InitialSection/>
          <FloatingButton onClick={toggleDrawer}/>
          <SideBar isOpen={isOpen} toggleDrawer={toggleDrawer}/>
          <Categories/>
          <Divider sx={{ bgcolor: darkMode ? SECONDARY_COLOR:PRIMARY_COLOR }}/>
          <ProductSetion/>
          <Divider sx={{ bgcolor: darkMode ? SECONDARY_COLOR:PRIMARY_COLOR  }}/>
          <RecentProduct/>
          <Divider sx={{ bgcolor: darkMode ? SECONDARY_COLOR:PRIMARY_COLOR  }}/>
          <Footer/>
          
        </div>
        
        
         
          
          
         
    </div>
  );
}

export default Main;