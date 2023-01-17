import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Routes from "./Routes/routes";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
);

reportWebVitals();
