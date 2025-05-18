import React from "react";
import ReactDOM from "react-dom/client";
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css' //css : bootstrap

// import Product from './components/product';
// import Product  from "./components/functional/product";
import Products from "./components/products";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Products productName = "labtop"/>
        <Products productName = "phone"/>
        <Products productName = "airpods"/>
    </>
   
);

reportWebVitals();
