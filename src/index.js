import React from "react";
import ReactDOM from "react-dom/client";
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css' //css : bootstrap


// import Products from "./components/products";
import Products from "./components/functional/products";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <Products />
   
);

reportWebVitals();
