import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css'; 
import Apps from './components/Apps';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <Apps/>
  </React.StrictMode>
);


