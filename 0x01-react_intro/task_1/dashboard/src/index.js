// File: ~/alx-react/0x01-react_intro/task_1/dashboard/src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Notifications from './Notifications';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <div id="root-notifications">
      <Notifications />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
