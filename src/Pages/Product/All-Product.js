import ChipList from '../../Component/ChipComponent/chip-component';
import './Products.css';
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

import DecoLight from '../../images/initial-deco-light.png';
import DecoDark from '../../images/initial-deco-dark.png';
import ErrorComponents from '../ErrorScreens/ErrorScreen';
import { Base_url } from '../../Constant/ActionType';

const AllProducts =()=>{
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
      return <div>
        <ErrorComponents/>
      </div>;
    }

    const handleClick = () => {
      // Navigate to the new page
      navigate('/Product-Detail');
    };
    

    return (
      <div className='App'>
      <div className='globaldiv'>
      <NavBar/>
      <div>
           <div className='deco-image-box' >
               <img className='img-deco-position' src={ !darkMode ?DecoLight: DecoDark}></img>
            </div>
            <div className='row'>
            <div className='big-title'>{t('categories')}</div>
            <div className='big-title'>{t('see-all')}</div>
            </div>
        </div>
        <div className='first-div' >

          
       
         <div className='grid-container'>
        {products.map((element)=>{
          return (
            <div onClick={handleClick} className='div-product'>
            
            <div className='img' style={{ background: `url(${Base_url+element.images[0].name})`, backgroundSize: '100% 100% ', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>

          
            <div className='div-product-description' style={{background: !darkMode ? "" : SECONDARY_COLOR_DARKMODE }}>
              <p className='title'>{element.nom_prod}</p>
            
              <div className='div-row-description'>
                <div className='div-decoration' style={{background: !darkMode ? PRIMARY_COLOR : SECONDARY_COLOR }}>a  </div>
                <div className='div-col-description'>
                <div className='mypatagraph-desc'><p>Category:{element.category_name}</p></div> 
                <div className='mypatagraph-desc'><p>Condition:{element.condition}</p></div> 
              
              

                <p >{element.prix} DA</p>
              
                </div>
              
            
              
              </div>    
            </div>
            
          
            
            </div>     
          );
        })}
        </div>
         
        
       
     </div>
     <Footer/>
      </div>
       
     </div>
      
    );
}

export default AllProducts;