import '../../Pages/Home/Categories/style/slicks/slick-theme.css';
import '../../Pages/Home/Categories/style/slicks/slick.css';
import { AiOutlineRight } from 'react-icons/ai';

import { useContext } from "react";
import { themeContext } from "../../Context";
import {PRIMARY_COLOR,SECONDARY_COLOR,BACKGROUND_COLOR_DARKMODE } from "../../Constant/Color.js";


const ArrowRight = ({ currentSlide, slideCount, ...props }) => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return  (
    <button
        {...props}
        style={{ color:!darkMode? PRIMARY_COLOR : SECONDARY_COLOR}}
        className={'next RightButton'+
        (currentSlide === slideCount - 1 ? " slick-disabled" : "") } 
        aria-hidden="true"
        aria-disabled={currentSlide === slideCount - 1 ? true : false}
        type="button" >
        <AiOutlineRight/>
    </button>
  );
};

export default ArrowRight;
