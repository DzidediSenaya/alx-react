// File: ~/alx-react/0x01-react_intro/task_1/dashboard/src/App.js

import React from 'react';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        {/* ... existing code ... */}
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <div className="App-footer">
        <p>{getFooterCopy(true)}</p>
        <p>{`Copyright ${getFullYear()} - ${getFooterCopy(false)}`}</p>
      </div>
    </div>
  );
}

export default App;
