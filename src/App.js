

// src/App.js
import React, { useState } from 'react';
import Form from './Form';
import Success from './Success';

const App = () => {
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (data) => {
    setSubmittedData(data);
  };

  const handleBack = () => {
    setSubmittedData(null);
  };

  return (
    <div>
      {submittedData ? (
        <Success formData={submittedData} onBack={handleBack} />
      ) : (
        <Form onSubmit={handleSubmit} />
      )}
    </div>
  );
};

export default App;
