import Introduce from '../../../images/introduction-img.png';
import DecoLight from '../../../images/initial-deco-light.png';
import DecoDark from '../../../images/initial-deco-dark.png';
import './initial-section.css';
import { useContext } from "react";
import { themeContext } from "../../../Context";
import Typist from 'react-typist';


import { useTranslation } from "react-i18next";
import { BACKGROUND_COLOR_DARKMODE } from '../../../Constant/Color';
const InitialSection=()=>{

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return(
        <div className='initial-global-div'>
        
              <div className=  'initial-div'
        
                    style={{
                background: darkMode ? BACKGROUND_COLOR_DARKMODE: "",
                color: darkMode ? "white" : "black",
                fontFamily: 'Myriad Pro' 
                }}
                >

            
                    
                   <div className='initial-div-1'>
                   <Typist cursor={{ show: false, blink: true, element: '|', hideWhenDone: true }} >
                        <p>Your Big Title Here</p>
                    </Typist>
                    </div>
                    <img className='introduce-img' src={Introduce}></img>


                


                    
                </div>
                
        </div>
      
    );
}

export default InitialSection;