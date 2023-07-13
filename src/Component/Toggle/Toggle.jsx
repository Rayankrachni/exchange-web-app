import React, { useContext } from "react";
import { themeContext } from "../../Context.js";
import Switch from 'react-switch';
import "./Toggle.css";


const Toggle = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const handleClick = () => { theme.dispatch({ type: "toggle" });};

  
  return (
    <div className="t-button" >
        <Switch
          
          checked={darkMode}
          // Set the desired height
          height={15} 
          width={45} 
          
          onChange={handleClick}
          onColor="grey"
          offColor="#d9d9d9"
        
          checkedIcon={false}
          uncheckedIcon={false}
          
        />
    </div>
  );
};

export default Toggle;
