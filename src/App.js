// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;




















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
