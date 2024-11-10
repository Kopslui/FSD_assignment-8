// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';  // Import BrowserRouter
import App from './App.jsx';  // Your main app component

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>  {/* Wrap your app with BrowserRouter */}
    <App />
  </Router>
);

