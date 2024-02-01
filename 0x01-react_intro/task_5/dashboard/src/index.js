// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
};

render();

// Enable Hot Module Replacement (HMR)
if (module.hot) {
  module.hot.accept('./App', render);
}
