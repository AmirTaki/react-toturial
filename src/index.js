import React from "react";
import ReactDOM from "react-dom/client";
import App from './App';
import reportWebVitals from './reportWebVitals';


// const element = React.createElement("h1", '', 'hello world')
// const element = <h1>hello word</h1>

// ReactDOM.render(element, document.getElementById('root'))



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

reportWebVitals();
