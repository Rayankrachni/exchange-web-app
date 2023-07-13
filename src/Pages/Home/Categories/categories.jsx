import "react-multi-carousel/lib/styles.css";
import "./style/categories.css"
import "./style/slicks/slick.css";
import "./style/slicks/slick-theme.css";
import { useContext } from "react";
import { themeContext } from "../../../Context";
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from "react-i18next";
import {PRIMARY_COLOR,SECONDARY_COLOR,BACKGROUND_COLOR_DARKMODE } from "../../../Constant/Color.js";
import ArrowLeft from "../../../Component/Slick-Component/Left-Arrows-slick-component";
import ArrowRight from "../../../Component/Slick-Component/Right-Arrows-slick-component";
import { getCategories } from "../../../store/category-slice";

const imgs=[
  {
    title:"vehicules",
    url: "https://cdn.ouedkniss.com/medias/category_icons/light/RAvfRmulDHv3OmIgyhbei1cFs9mQYl9Gyv0haP3F.svg",

  },
  {
    title:"Telephone",
    url:  "https://www.ouedkniss.dz/img/ouedkniss_artisanat.0e12849f.svg",

  },
  {
    title:"informatique",
    url: "https://www.ouedkniss.dz/img/intel_store.aaab234e.svg",

  },
  {
    title:"vetement",
    url:  "https://cdn.ouedkniss.com/medias/category_icons/light/QM0zpHD9VJtTkpgehrT9nZUhWhcxATg68yhTtkV4.svg",

  },

  {
    title:"cosmetique",
    url:   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9hxIGIRPVvvpnSQjDGNI0undzKEHbVYvWe-7bvt9W4A&s",

  },
 
  {
    title:"accessoire",
    url:   "https://www.ouedkniss.dz/img/ouedkniss_artisanat.0e12849f.svg",

  },
 




]


const Categories = ()=>{

    //theme Mode
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const [t, il8n] = useTranslation();
    const navigate = useNavigate();

    const navToAdd = () => {
      // Navigate to the new page
      navigate('/Stepper');
    };

      //get Data
      const dispatch = useDispatch();
      const categories = useSelector((state) => state.categories.categories);
      const status = useSelector((state) => state.categories.status);
    
      useEffect(() => {
        dispatch(getCategories());
      }, [dispatch]);
  
  
      // manage State
      if (status === 'loading') {
        return <div>Loading...</div>;
      }

      if (status === 'rejected') {
        return <div>Error fetching products.</div>;
      }
  
 


    const settings = {
    centerMode: true,   
   
    centerPadding: '1px',
    slidesToScroll:3,
    slidesToShow:5,
    rows:1,
    speed: 500,
    infinite:true,
    nextArrow: <ArrowRight />,
    prevArrow: 
    <ArrowLeft />,
    slidesToScroll: 1,
    arrows: true,
   
    autoplay: false,
    autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll:5,
            centerMode:true
          },
        },
        {
          breakpoint: 1001,
          settings: {
            slidesToShow: 5,
            slidesToScroll:5,
          },
        },
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
            slidesToShow: 5,
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
          breakpoint: 570,
          settings: {
            slidesToShow: 4,
            slidesToScroll:5,
            
            
            
          },
        },
        {
          breakpoint: 540,
          settings: {
            slidesToShow: 4,
            slidesToScroll:4,
            centerMode:true,
          },
        },
        {
          breakpoint: 481,
          settings: {
            slidesToShow: 3,
            arrows: false,
           
          },
        },
        {
          breakpoint: 391,
          settings: {
            slidesToShow: 3,
            
            centerMode: true,
            arrows: false,
          },
        },
        {
          breakpoint: 280,
          settings: {
            slidesToShow:3,
            centerMode:true,
            arrows: false,
          },
        },
     
      ],
    };
    
    const renderSlides = categories && categories.map((num, key) => (
      <div className="category-grid-container" key={key}>
        <div className="category-circle-container" style={{ background: !darkMode ? PRIMARY_COLOR : SECONDARY_COLOR }}>
          <div onClick={navToAdd} className="global-category-image">
            <img src={num.url} alt={num.title} className="category-image" />
          </div>
          <p className="category-image-p" style={{ justifyContent: "center", textAlign: "center" }}>
            {num.title}
          </p>
        </div>
      </div>
    ));

 
    

    return (
        <div style={{marginBottom:"5%"}}>
          
          <div >
            <Slider {...settings}>{renderSlides}</Slider>
          </div>
        </div>
  
    );
}
export default Categories;