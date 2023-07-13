
import './style/products-list.css';
import '../Categories/style/slicks/slick.css';
import '../Categories/style/slicks/slick-theme.css';
import Slider from "react-slick";
import { useContext } from "react";
import {BsCart2} from 'react-icons/bs';
import { useTranslation } from "react-i18next";
import {PRIMARY_COLOR,SECONDARY_COLOR,BACKGROUND_COLOR_DARKMODE } from "../../../Constant/Color.js";
import { themeContext } from "../../../Context";
import ArrowLeft from "../../../Component/Slick-Component/Left-Arrows-slick-component";
import ArrowRight from "../../../Component/Slick-Component/Right-Arrows-slick-component";
import DecoLight from "../../../images/back-light.png";
import DecoDark from "../../../images/back-dark.png";

const imgs=[
    "https://beautysuccess.co/media/catalog/product/cache/2/small_image/196x/040ec09b1e35df139433887a97daa66f/l/a/layton.jpg",
    "https://sayartii.com/uploads/cars/17592228759193/da4ff8f4295e1a69afcabe04665d25adfc568eba_small.jpg",
    "https://th.bing.com/th/id/OIP.0x2UMecp1GdAmne4IRbZyQHaFT?w=237&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
    "https://cdn.ouedkniss.com/medias/category_icons/light/A8Nc6TqYkrMmpPEOsLp08tXoTJAIcD11dfgFW6fC.svg",
    "https://beautysuccess.co/media/catalog/product/cache/2/small_image/196x/040ec09b1e35df139433887a97daa66f/l/a/layton.jpg",
    "https://th.bing.com/th/id/OIP.LoyuluIDMjlQpjfz8aX6ugEsC7?w=273&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
    "https://sayartii.com/uploads/cars/17592324139232/ec63cb4ddd623523eb3fcb74b47dfc7fe636e8e3_small.jpg",
    "data:image/jpeg;base64,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",
    "https://cdn.ouedkniss.com/medias/category_icons/light/SNukItYskwk68gDbi8rMA4yw11iJPETt1rFerA8V.svg",
]
const ProductList =()=>{

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const [t, il8n] = useTranslation();

    const settings = {
        centerMode: false,   
        slidesToShow:5,
        centerPadding: '5px',
      
        speed: 500,
        infinite:false,
        nextArrow: <ArrowRight />,
        prevArrow: 
        <ArrowLeft/>,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        autoplay: false,
        autoplaySpeed: 2000,
          responsive: [
        
            {
              breakpoint: 851,
              settings: {
                slidesToShow: 5,
                slidesToScroll:5,
                
              },
            },
            {
              breakpoint: 820,
              settings: {
                slidesToShow:4,
                centerMode:true
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 5,
                slidesToScroll:5,
                
                
                
              },
            },
            {
              breakpoint: 540,
              settings: {
                slidesToShow: 4,
                centerMode:false,
              },
            },
            {
              breakpoint: 481,
              settings: {
                slidesToShow: 3,
                centerMode:false,
               
              },
            },
        
            {
              breakpoint: 280,
              settings: {
                slidesToShow:2,
                centerMode:true,
                centerPadding: '25px',
              },
            },
         
          ],
        };


    const renderProductsList = imgs.map((num, key) => (


        <div className= {darkMode?  "cart-style-dark" :"cart-style-light" } key={key}  >


            <div className="image-container">
              <img src={num} alt="Image" />
            </div>
    
            <div className='detail-section'>
            <p   >{t('product-title')}</p> 
            <div className='decription-section-p'>
            <p>{t('description')}</p> 
            </div>

            <div className='price-section'>
            <p >500$</p> 
            <BsCart2 className='cart-icon-style'style={{color:!darkMode ? PRIMARY_COLOR : SECONDARY_COLOR}}/> 
            </div>
            
            
            </div>
    
        </div>
      ));
    return (

        <div style={{margin:"5%"}}>
         
        <div class="row">
        <p className="Category-title">{t('products')}</p>
        <p className="Category-seeAll" 
            style={{color:!darkMode ? PRIMARY_COLOR : SECONDARY_COLOR}} >{t('see-all')}</p>
        </div>
               

        <div  >
        <Slider   {...settings}>{renderProductsList}</Slider>
        </div>
        </div>
    
        );
}

export default ProductList;

