import React from "react";
import ReactDOM from "react-dom/client";

import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css' //css : bootstrap


// import App from './App';

import App from './components/functional/app'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <div style={{
      width : "100%",  padding : "100px", fontSize : "20px ", backgroundColor: "antiquewhite",
    textAlign: "left",
    padding:" 2% 10%",

     }}>
          <hr></hr>  358f4fc --> Lifecycle in functional components
          <hr></hr>  b87b874 --> Update & Unmount Lifecycle - Phase
          <hr></hr>  1ef7ca6 --> Mount Life Cycle - Phase
          <hr></hr>  ef5aa38 --> Context in a functional component
          <hr></hr>  5400bac --> Context in a class component
          <hr></hr>  8fa3f91 --> Access to Sibling Estate ComponentFunctional
          <hr></hr>  933ccc9 --> Access to Sibling Estate ComponentClass
          <hr></hr>  a15f1a5 --> map an array to a FunctionalComponent
          <hr></hr>  56b416c --> Controlled ClassComponent
          <hr></hr>  8e23ded --> map an array to a ClassComponent
          <hr></hr>  90904ce --> change the State of the parent ClassComponent
          <hr></hr>  4d29901 --> map an array to a FunctionalComponent
          <hr></hr>  13e42e3 --> map an array to a ClassComponent
          <hr></hr>  0724ee8 --> discrator props in functional
          <hr></hr>  aa10e55 --> props at function
          <hr></hr>  ece2105 --> propes at class Component
          <hr></hr>  17eb6c6 --> convert component class to function & useState
          <hr></hr>  8e94b57 --> state & setState
          <hr></hr>  b3e0833 --> Event management
          <hr></hr>  18d1a73 --> syntax jsx part 3
          <hr></hr>  c3805be --> syntax jsx part 2
          <hr></hr>  f6fe953 --> syntax jsx part 1
          <hr></hr>  a5ad78e --> create component product
          <hr></hr>  3985204 --> export & import & default
          <hr></hr>  10f8a03 --> component function
          <hr></hr>  ab332ae --> component class in react
          <hr></hr>  8c02531 --> Explaining how React works
          <hr></hr>  83dce29 --> creat-react-app
     </div>
);

reportWebVitals();
