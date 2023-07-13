import { useState } from "react";
import Step1 from "../Add-Product/step1";
import Step2 from "../Add-Product/step2";
import Step3 from "../Add-Product/step3";
import './Stepper.css';
const CustomStepper = () => {
    const [activeStep, setActiveStep] = useState(0);
  
    const handleNext = () => {
      setActiveStep(prevStep => prevStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep(prevStep => prevStep - 1);
    };
    const steps = [
        { content: <Step1/> },
        { content:<Step2/> },
        { content: <Step3/> },
      ];
      
  
    return (
      <div>
        {/* Render the active step */}
        {steps[activeStep].content}
  
        {/* Render navigation buttons */}
        <div>
          <button onClick={handleBack} disabled={activeStep === 0}>
            Back
          </button>
          <button onClick={handleNext} disabled={activeStep === steps.length - 1}>
            Next
          </button>
          <div className="stepper">
          <div className="step">
          <div className="circle-step">1</div>
          <p>hhh</p>
          </div>
          
          <div className="step">
          <div className="circle-step">1</div>
          <p>hhh</p>
          </div>
          <div className="step">
          <div className="circle-step">1</div>
          <p>hhh</p>
          </div>
          <div className="step">
          <div className="circle-step">1</div>
          <p>hhh</p>
          </div>
          </div>
         
        </div>

      </div>
    );
  };
  
  export default CustomStepper;
  