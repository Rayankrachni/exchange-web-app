import { PRIMARY_COLOR } from '../../Constant/Color';
import './Form-Stepper.css';

import { TextField } from '@material-ui/core';

function Step2() {
    return (
        <div className='step1'>
             <div className='field-container' style={{background:PRIMARY_COLOR}} >
            <TextField 
              id='#placeholder'
              placeholder='Name'     
              type="text"
              fullWidth={true} 
              variant="standard"        
              InputProps={{      
                style: { color:"white"},
                disableUnderline: true,
                fontSize: "12px", 
               }}   
          />
          </div>  

       
          <div className='field-container' style={{background:PRIMARY_COLOR}} >

            <TextField 
              id='#placeholder'
              placeholder='Description'     
              type="text"
              fullWidth={true} 
              variant="standard"    
              InputProps={{      
                style: { color:"white"},
                disableUnderline: true,
                fontSize: "12px", 
               }}      
          />
          </div> 
        </div>
    );     
    
  }

  export default Step2;
