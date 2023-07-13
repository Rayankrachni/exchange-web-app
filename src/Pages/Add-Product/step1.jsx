import { PRIMARY_COLOR } from '../../Constant/Color';
import './Form-Stepper.css';
import { useState } from 'react';
import { useRef } from 'react';
import { AiFillCamera } from 'react-icons/ai';
import { AiFillVideoCamera } from 'react-icons/ai';

function Step1() {
    
    const [image, setImage] = useState("User")

    const fileInputRef = useRef(null);

    const onImageChange = (event) => {
      if (event.target.files && event.target.files[0]) {
        setImage(URL.createObjectURL(event.target.files[0]));
      }
    };
    const handleImageClick = () => {
      fileInputRef.current.click();
    };
    
    return (
        <div className='step1'>
          <div className='camera-div' style={{background:PRIMARY_COLOR}}>
            
             <div  style={{display:"flex",justifyContent:"center"}}>
                <AiFillCamera size={20} color='black' style={{marginRight:"5%"}}/> 
                <p style={{color:"black"}}>Add Image</p>    
            </div>
            
            
            </div>


            <div className='camera-div' style={{background:PRIMARY_COLOR}}>
            
            <div style={{display:"flex",justifyContent:"center"}}>
               <AiFillVideoCamera  size={20} color='black' style={{marginRight:"5%"}}/> 
               <p  style={{color:"black"}}>Add Video</p>    
           </div>
           
           
           </div>

       </div>
    );     
    
  }

  export default Step1;
