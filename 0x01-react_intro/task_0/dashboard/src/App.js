// File: ~/alx-react/0x01-react_intro/task_0/dashboard/src/App.js

import React from 'react';
import './App.css';
import HolbertonLogo from './HolbertonLogo.png';

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
    </div>
  );
}

export default App;
