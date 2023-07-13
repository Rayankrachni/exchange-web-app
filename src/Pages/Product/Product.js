import ChipList from '../../Component/ChipComponent/chip-component';
import './Products.css';
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { themeContext } from "../../Context";
import { useTranslation } from "react-i18next";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../store/product-slice';
import DecoLight from '../../images/initial-deco-light.png';
import DecoDark from '../../images/initial-deco-dark.png';
import {PRIMARY_COLOR,SECONDARY_COLOR,BACKGROUND_COLOR_DARKMODE, SECONDARY_COLOR_DARKMODE } from "../../Constant/Color";
import {Link} from "react-router-dom";
import ErrorComponents from '../ErrorScreens/ErrorScreen';
import { Base_url } from '../../Constant/ActionType';



const ProductSetion =()=>{
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const [t, il8n] = useTranslation();
    const navigate = useNavigate();

    const handleClick = (element) => {

      console.log(element)
      // Navigate to the new page
      navigate('/Product-Detail',{state: { element } });
    };

        
  //get Data
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.product);
  const status = useSelector((state) => state.products.status);

  useEffect(() => {

    console.log("products",products);
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


    

    return (
      <div>
        <div>
           <div className='deco-image-box' >
               <img className='img-deco-position' src={ !darkMode ?DecoLight: DecoDark}></img>
            </div>
            <div className='row'>
              <div className='big-title'>{t('categories')}</div>
              <div className='big-title'>{t('see-all')}</div>
            </div>
        </div>
     
        <div className='first-div'  >
           <div className='left-deco-image-box' >
               <img className='left-img-deco-position' src={ !darkMode ?DecoLight: DecoDark}></img>
            </div>
         <div className='grid-container' >

      

        {products && products.length > 0 ?products.map((element)=>{
          return (
            <div  key={element.id} onClick={() => handleClick(element)} className='div-product'  style={{background: !darkMode ? "white" : SECONDARY_COLOR_DARKMODE }}>
            
            <div className='img' style={{ background: `url(${Base_url+element.images[0].name})`, backgroundSize: '100% 100% ', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>

          
            <div className='div-product-description' style={{background: !darkMode ? "white" : SECONDARY_COLOR_DARKMODE }} >
              <p className='title'>{element.name}</p>
            
              <div className='div-row-description'>
                <div className='div-decoration' style={{background: !darkMode ? PRIMARY_COLOR : SECONDARY_COLOR }}>av  </div>
                <div className='div-col-description'>
                <div className='mypatagraph-desc'><p>Category:{element.category_name}</p></div> 
                <div className='mypatagraph-desc'><p>Condition:{element.condition}</p></div> 
                <ChipList chiplist={element.listcategoriesacceptable}/>

                <p >{element.expected_price} DA</p>
              
                </div>
              
            
              
              </div>    
            </div>
            
          
            
            </div>     
          );
        }):null}
        </div>
         
        
       
     </div></div>
      
    );
}

export default ProductSetion;