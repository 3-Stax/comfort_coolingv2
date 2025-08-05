import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'; // <--- Import BrowserRouter

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Wrap App with BrowserRouter */}
    <BrowserRouter basename="/comfort_coolingv2">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();