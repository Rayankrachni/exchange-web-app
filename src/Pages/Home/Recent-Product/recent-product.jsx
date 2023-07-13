import ChipList from '../../../Component/ChipComponent/chip-component';
import './recent-product.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { themeContext } from "../../../Context";
import DecoLight from "../../../images/initial-deco-light.png";
import DecoDark from "../../../images/initial-deco-dark.png";
import { useTranslation } from "react-i18next";
import {PRIMARY_COLOR,SECONDARY_COLOR,BACKGROUND_COLOR_DARKMODE, SECONDARY_COLOR_DARKMODE } from "../../../Constant/Color";
import { getAllProducts } from '../../../store/product-slice';
import { Base_url } from '../../../Constant/ActionType';


const product=[
{
  img:"https://th.bing.com/th/id/R.9734ee00abfe774de9122342529c9075?rik=Ej3PMy6dMpLiDQ&riu=http%3a%2f%2fwww.irdes.fr%2fimgs2017%2fimages%2flogo-1.gif&ehk=kBZl6%2bwBZVoeIwuj9%2f%2bX0o22Y6iHjSc1MWp9uozghRc%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",
  prix:4000,
  nom_prod:"First product Name",
  chiplist:['oooo','aaaaaaaaaaaaaaaa','aaaaa','cccc','aaaaa','cccc','aaaaa','cccc','cccc','aaaaa','cccc']
},
{
  img:"https://sayartii.com/static/img/use-cases2/w720-family.jpg",
  prix:4000,
  nom_prod:"First product Name",
  chiplist:['oooo','aaaa','aaaaa','cccc']
},
{
  img:"https://sayartii.com/static/img/use-cases2/w720-family.jpg",
  prix:4000,
  nom_prod:"First product Name",
  chiplist:['oooo','aaaa','aaaaa','cccc']
},
{
  img:"https://sayartii.com/static/img/use-cases2/w720-family.jpg",
  prix:4000,
  nom_prod:"First product Name",
  chiplist:['oooo','aaaa','aaaaa','cccc']
},
{
  img:"https://sayartii.com/static/img/use-cases2/w720-family.jpg",
  prix:4000,
  nom_prod:"First product Name",
  chiplist:['oooo','aaaa','aaaaa','cccc']
},
{
  img:"https://sayartii.com/static/img/use-cases2/w720-family.jpg",
  prix:4000,
  nom_prod:"First product Name",
  chiplist:['oooo','aaaa','aaaaa','cccc']
},
{
  img:"https://sayartii.com/static/img/use-cases2/w720-family.jpg",
  prix:4000,
  nom_prod:"First product Name",
  chiplist:['oooo','aaaa','aaaaa','cccc']
},
];

const RecentProduct =()=>{
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const [t, il8n] = useTranslation();
    const navigate = useNavigate();

        //get Data
      const dispatch = useDispatch();
      const products = useSelector((state) => state.products.product);
      const status = useSelector((state) => state.products.status);

      useEffect(() => {

        console.log("products",products);
        dispatch(getAllProducts());
      }, [dispatch]);

    const navToRecentProduct = () => {
      // Navigate to the new page
      navigate('/All-Recent-Product');
    };
    

    return (
     <div>

          <div>
           <div className='deco-image-box' >
               <img className='img-deco-position' src={ !darkMode ?DecoLight: DecoDark}></img>
            </div>
            <div className='row'>
            <div className='big-title'>Most Viewd</div>
            <div className='big-title' onClick={navToRecentProduct} style={{cursor:"pointer"}}>See All</div>
            </div>
        </div>

      <div className='first-div' >
        
         <div className='grid-container'>
         {products && products.length > 0 ?products.map((element)=>{
          return (
            <div  key={element.id}  className='div-product'  style={{background: !darkMode ? "white" : SECONDARY_COLOR_DARKMODE }}>
            
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
         
        
       
      </div>
     </div>
    
    );
}

export default RecentProduct;