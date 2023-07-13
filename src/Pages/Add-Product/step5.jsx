import React, { useState } from 'react';
import './Form-Stepper.css';

const Step5 = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="slider-container-add">
      <div className="slider-value-add">{value}</div>
      <input
        type="range"
        min={0}
        max={2000}
        value={value}
        onChange={handleChange}
        className="slider-add"
      />
    
    </div>
  );
};

export default Step5;
