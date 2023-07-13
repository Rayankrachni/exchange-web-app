import { useState } from "react";
import './Stepper.css';
import '../Add-Product/Form-Stepper.css'
import Step1 from "../Add-Product/step1";
import Step2 from "../Add-Product/step2";
import Step3 from "../Add-Product/step3";
import { BACKGROUND_COLOR_DARKMODE, PRIMARY_COLOR, SECONDARY_COLOR } from "../../Constant/Color";
import Step4 from "../Add-Product/step4";
import Step5 from "../Add-Product/step5";
import Footer from "../../Component/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "../../Context";
import Navbar from "../../Component/Navbar/Navbar";
const CustomStepper = () => {
    const [activeStep, setActiveStep] = useState(0);

    const list=['false','flase','false','flase','false']
    const [cirleActiveStep, setCirleActiveStep] = useState(0);
  
    const handleNext = () => {
      setActiveStep(prevStep => prevStep + 1);
      setCirleActiveStep(prevStep => prevStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep(prevStep => prevStep - 1);
      setCirleActiveStep(prevStep => prevStep - 1);
    };
    const steps = [
        { content: <Step1/> },
        { content:<Step2/> },
        { content: <Step3/> },
        { content: <Step5/> },  
        { content: <Step4/> },
           ];


      const stepIndex = [
        { title: "Add Your Video and Image",
          isActiveIndex: cirleActiveStep === 0,
    
        },
        { title: "Add Name and Description",
          isActiveIndex: cirleActiveStep === 1,
        },
        { title: "Select Ccategories",
          isActiveIndex: cirleActiveStep === 2, 
        },
        { title: "Choose the expected Price",
          isActiveIndex: cirleActiveStep === 3,
        },
        { title: "The condition of the product",

          isActiveIndex: cirleActiveStep === 4,
        },
      ];
      const theme = useContext(themeContext);
      const darkMode = theme.state.darkMode;
  
    return (
      <div className="App"  
      style={{
        background: darkMode ? BACKGROUND_COLOR_DARKMODE: "",
        color: darkMode ? "white" : "black",
        fontFamily: 'Myriad Pro' 
      }}>

        <Navbar/>
        <div className="gloal-stepper-section"> 
        {/* Render the active step */}
        <div className="add-container">
        {steps[activeStep].content}
        </div>
        
  
        {/* Render navigation buttons */}
        <div >

          <div className="next-prev-row">
            <div onClick={handleBack} disabled={activeStep === 0}>
            Back
            </div>
            <div onClick={handleNext} disabled={activeStep === steps.length - 1}>
                Next
            </div>
          </div>  
          


           {/* Render navigation buttons */}
          <div className="stepper">
           {
            stepIndex.map((i,index)=>{
                return (

                    <div className="stepper">
                          <div className="step" >
                            <div className= {i.isActiveIndex ?"active-circle-step":"circle-step"}
                           
                             style={{background: i.isActiveIndex ? !darkMode? PRIMARY_COLOR: SECONDARY_COLOR :  "grey" ,
                             color: i.isActiveIndex ?   "white" : "white"}}>{index+1}</div>
                            <p className="circle-step-p"  style={{color: i.isActiveIndex ? !darkMode? PRIMARY_COLOR: SECONDARY_COLOR: "grey" }}>{i.title}</p>
                          </div>
                          
                        </div>
                );

            })
           }

          
          

      
          </div>
         
        </div>
        </div>
    
       <Footer/>
      </div>
    );
  };
  
  export default CustomStepper;
  