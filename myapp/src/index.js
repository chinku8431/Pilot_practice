import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import loginpage from './components/login';
// import ReactDOM from 'react-dom';  
// import { Route, Link, BrowserRouter as Router } from 'react-router-dom'  
// import Home from './Home';
// import Macros from './Macros';
// import Rates from './Rates';
// import OMS from './OMS';
// import Services from './Services';
// import Trails from './Trails_Out';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
