import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import Layout from './Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Home from './Components/Dynamic Render/Home'
import UserA from './Components/Dynamic Render/UserA';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <App />  
        {/* <Home/>    */}
       {/* <Layout/>   */}
     
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
