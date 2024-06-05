// src/Success.js
import React from 'react';
import './Success.css';

const Success = ({ formData, onBack }) => {
  return (
    <div>
      <h1>Form Submitted Successfully!</h1>
      <ul>
        {Object.keys(formData).map((key) => (
          <li key={key}>
            {key}: {formData[key]}
          </li>
        ))}
      </ul>
      <button onClick={onBack}>Go Back</button>
    </div>
  );
};

export default Success;
