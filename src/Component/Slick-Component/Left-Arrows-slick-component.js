import '../../Pages/Home/Categories/style/slicks/slick-theme.css';
import '../../Pages/Home/Categories/style/slicks/slick.css';
import { AiOutlineLeft } from 'react-icons/ai';
import { useContext } from "react";
import { themeContext } from "../../Context";
import {PRIMARY_COLOR,SECONDARY_COLOR,BACKGROUND_COLOR_DARKMODE } from "../../Constant/Color.js";

const ArrowLeft = ({ currentSlide, slideCount, ...props }) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return  (
    <button
        {...props}
        style={{ color:!darkMode? PRIMARY_COLOR : SECONDARY_COLOR}}
        
        className={'prev LeftButton'+
        (currentSlide === 0 ? " slick-disabled" : "")}
        aria-hidden="true"
        aria-disabled={currentSlide === 0 ? true : false}
        type="button" > 
        <AiOutlineLeft/>
     </button>
  );
};

export default ArrowLeft;
