import React from "react";
import ReactDOM from "react-dom/client";

import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css' //css : bootstrap


// import App from './App';

import App from './components/functional/app'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <App />
);

reportWebVitals();
