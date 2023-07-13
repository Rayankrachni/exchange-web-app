
import './ProductDetail.css';
import '../../App.css'
import { useNavigate } from 'react-router';
import { useTranslation } from "react-i18next";
import { BsArrowRightCircleFill } from 'react-icons/bs';
import { BsArrowLeftCircleFill } from 'react-icons/bs';
import User from '../../images/icons/user.png';
import { useContext } from "react";
import { themeContext } from "../../Context";
import Divider from '@mui/material/Divider';
import CarListing from './photo';
import DecoLight from '../../images/initial-deco-light.png';
import DecoDark from '../../images/initial-deco-dark.png';
import Footer from '../../Component/Footer/Footer';
import NavBar from '../../Component/Navbar/Navbar';
import { BACKGROUND_COLOR_DARKMODE, GREY_COLOR_LightMode, PRIMARY_COLOR, SECONDARY_COLOR, SECONDARY_COLOR_DARKMODE } from '../../Constant/Color';
import ImageGallery from './image-gallery';
import ChipList from '../../Component/ChipComponent/chip-component';
import CategoriesChipList from './categories-chip-list';
import { useLocation } from 'react-router';
const ProductDetail =({})=>{
 
    //theme Mode
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const isLTR = document.body.dir === "ltr";
    const location = useLocation();
    const navigate =useNavigate()

    console.log("props.state");
    console.log(location.state.element.user);

    const detail=location.state.element;


    const navToUserProfile = () => {
      // Navigate to the new page
      navigate('/User-Profile');
    };


    //Translate
    const [t, il8n] = useTranslation();
    const avatarStyle = {
        backgroundImage:`url(https://i.pinimg.com/originals/98/10/76/9810762a8248ca30ec1be04204b45d3d.gif)` ,
      };
    const chiptextItem=["first","secondsecondsecond","third","forth","jjjjj","fokkkkkrth","888fth","third","third","third"]  
    const textItem=[
      {
        titile:"Product Type",
        type:"  Car"
      },
      {
        titile:"Expected Price",
        type:"Car"
      },
      {
        titile:"Conditions",
        type:"New"
      },   {
        titile:"Product",
        type:"Car"
      },
      {
        titile:"Product",
        type:"Car"
      },
    ]

    
    
    return(
        <div
       
        style={{
          background: darkMode ? BACKGROUND_COLOR_DARKMODE: "",
          color: darkMode ? "white" : "black",
          fontFamily: 'Myriad Pro' 
        }}>
        <div style={{marginLeft:"5%",marginRight:"5%"}}><NavBar/> </div>
       
        <div className="global-col">
                        {/*left side */}
                        <div className="left-column">
                        
                        <div className='cart-img'>
                        <CarListing images_list={detail.images}/>
                        </div>
                        </div>


                        {/*left side */}
                        <div className="right-column">
                      
                      <div className='deco-image-box' >
                        <img className='img-deco-position' src={ !darkMode ?DecoLight: DecoDark}></img>
                      </div>
        
        
                        <h1>{detail.expected_price}</h1>
                        <div className="show-number"
                          style={{
                            background: darkMode ? SECONDARY_COLOR: PRIMARY_COLOR,
                            color: darkMode ? "white" : "black",
                           
                          }}
                        >Show Number</div>
                        <div className="item" >
                        <p className="first-title">{detail.description}</p>
                        <p>02/05/2023</p>
                        </div>
                        <div>
                            


                                  <li  className="li-description" style={{background:darkMode ? BACKGROUND_COLOR_DARKMODE : GREY_COLOR_LightMode,color: darkMode ? GREY_COLOR_LightMode : ""}} 
                                  >
                                  <div>
                                  <p>Product Name : {detail.name} </p> 
                                  
                                  </div>
                                  
                                  {!isLTR ? <BsArrowRightCircleFill size={20} style={{color: darkMode ? "white" : "grey"}}  className='arrow-icons-style' />:
                                  <BsArrowLeftCircleFill size={20} style={{color: !darkMode?  "grey":"white"}}  className='arrow-icons-style' />
                                  } 
                                  </li>


                                  <li  className="li-description" style={{background:darkMode ? SECONDARY_COLOR_DARKMODE : "",color: darkMode ? "white" : "",}}>
                                  <div>
                                  <p>Category Name : {detail.category_name} </p> 
                                  
                                  </div>
                                  
                                  {!isLTR  ? <BsArrowRightCircleFill size={20} style={{color: darkMode ? "white" : "grey"}}  className='arrow-icons-style' />:
                                  <BsArrowLeftCircleFill size={20} style={{color: !darkMode?  "grey":"white"}}  className='arrow-icons-style' />
                                  } 
                                  </li>

                                  <li  className="li-description" style={{background:darkMode ? BACKGROUND_COLOR_DARKMODE : GREY_COLOR_LightMode,}}>
                                  <div>
                                  <p>Description : </p> 
                                  <p> {detail.description}</p> 
                                  </div>
                                  
                                  </li>


                                  
                                  <div className='li-description-chip'>
                                  <p>Expected Categories : </p> 
                                  
                                  <CategoriesChipList chiplist={detail.listcategoriesacceptable}/>
                                  </div>
                                  
                                


                     
                        </div>
                        
                </div>
            
        </div>
                     <div className=' <h1 >{detail.user.username}</h1>
                            <p>Mustang GT V8</p>'  style={{background:darkMode ? SECONDARY_COLOR_DARKMODE:"",color:darkMode ?"white":"black"}}>
                        <div className='user-section' style={{color:darkMode ?"white":"black"}}>
                            <div className="user-avatar-img" style={avatarStyle}/>
                                <div className='user-info-descrption' style={{color:darkMode ?"white":"black"}}>
                                <h1 onClick={navToUserProfile} style={{cursor:"pointer"}}>{detail.user.username}</h1>
                                <p>{detail.user.location}</p>
                                </div>
                            </div>    
                        <div  className='user-info-descrption' >
                            <div style={{paddingLeft:"10%",paddingRight:"10%"}}>
                              <h1 >{detail.user.username}</h1>
                              <p>Mustang GT V8</p>
                            </div>
                           
                        </div> 
                     
                      
        </div>
        <div style={{marginLeft:"5%",marginRight:"5%"}}><Divider sx={{ bgcolor: darkMode ? SECONDARY_COLOR:PRIMARY_COLOR }}/> </div>
        
        <Footer/>

    

    </div>    
   );
}

export default ProductDetail;