import React from 'react';
import './App.css';
import HolbertonLogo from './Holberton_Logo.jpg';  // Updated image filename
import favicon from './favicon.ico';  // Updated favicon import

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={HolbertonLogo} alt="Holberton Logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <div className="App-footer">
        <p>Copyright 2020 - Holberton School</p>
      </div>
      {/* Use the imported favicon for the entire document */}
      <link rel="icon" href={favicon} />
    </div>
  );
}

export default App;
