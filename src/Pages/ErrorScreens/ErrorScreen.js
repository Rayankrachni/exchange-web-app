
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts, getProducts } from '../../store/product-slice';
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { themeContext } from "../../Context";
import { useTranslation } from "react-i18next";
import {PRIMARY_COLOR,SECONDARY_COLOR,BACKGROUND_COLOR_DARKMODE, SECONDARY_COLOR_DARKMODE } from "../../Constant/Color";
import Footer from '../../Component/Footer/Footer';
import NavBar from '../../Component/Navbar/Navbar';

const ErrorComponents =()=>{
  //theme
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const [t, il8n] = useTranslation();
    const navigate = useNavigate();


    
  //get Data
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.product);
    const status = useSelector((state) => state.products.status);
  
    useEffect(() => {
      dispatch(getAllProducts());
    }, [dispatch]);



  // manage State
    if (status === 'loading') {
      return <div>Loading...</div>;
    }
  
    if (status === 'rejected') {
      return <div>Error fetching products.</div>;
    }

    const handleClick = () => {
      // Navigate to the new page
      navigate('/Product-Detail');
    };
    

    return (
      <div className='App'>
      <div className='globaldiv'>
      <NavBar/>
       <p>Errorr</p>
     <Footer/>
      </div>
       
     </div>
      
    );
}

export default ErrorComponents;