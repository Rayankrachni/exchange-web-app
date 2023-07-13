import React, { useState ,useEffect} from 'react';
import Stepper from 'react-stepper-horizontal';
import { PRIMARY_COLOR } from '../../Constant/Color';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Step1 from './step1';
import Step3 from './step3';
import Step2 from './step2';
import Step4 from './step4';
import Step5 from './step5';
import Footer from '../../Component/Footer/Footer';
import NavBar from '../../Component/Navbar/Navbar';

import Divider from '@mui/material/Divider';

const FormStepper = () => {
  const [activeStep, setActiveStep] = useState(0);


  const steps = [
    { title: 'Video and Image' },
    { title: 'Name and Description' },
    { title: 'Select Category' },
    { title: 'Choose the Expected Price' },
    { title: 'Close the Condition ' },
  ]
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  }
  
  const handlePrevious = () => {
    setActiveStep(activeStep - 1);

  }
  






function getSectionComponent() {
  switch(activeStep) {
    case 0: return <Step1/>;
    case 1: return <Step2/>;
    case 2: return <Step3/>;
    case 3: return <Step5/>;
    case 4: return <Step4/>;
    default: return null;
  }
}

const [animateStepper, setAnimateStepper] = useState(false);

useEffect(() => {
  // Add a delay before applying the animation class
  const timeout = setTimeout(() => {
    setAnimateStepper(true);
  }, 100);

  // Clean up the timeout when the component unmounts or activeStep changes
  return () => clearTimeout(timeout);
}, [activeStep]);

return (
  <div >
       <NavBar/>
      <div className="add-container">

      <div style={{padding: '20px'}}>
        { getSectionComponent()  }
      { (activeStep !== 0 && activeStep !== steps.length - 1)
            &&<div className='step1'> <div className='step1-next' onClick={ () => setActiveStep(activeStep - 1) }>Previous</div></div>
        }
        { activeStep !== steps.length - 1
          &&<div className='step1' >  <div className='step1-next' onClick={ () => setActiveStep(activeStep + 1) }>Next</div></div>
        }

        { activeStep ===4
          &&<div className='step1' >  <div className='step1-next' onClick={ () => setActiveStep(activeStep -4) }>Add Product</div></div>
        }

      </div>
      <div className='stepper-container'>
       <Stepper
            connectorStateColors={false}
            activeColor={PRIMARY_COLOR}
            defaultColor="#eee"
            completeColor={PRIMARY_COLOR}
            activeTitleColor="black"
            completeTitleColor="black"
            defaultTitleColor="#bbb"
            completeBarColor={PRIMARY_COLOR}
            stepLabelFontSize="10px"
        
        
            steps={steps}
            activeStep={activeStep}
          />
      </div>    

      </div>
      <Divider/> 
      <Footer/>
  </div>
 
);
}


export default FormStepper;
