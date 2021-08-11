import React from "react";
import ReactDOM from "react-dom";
import TodoContainer from "./components/TodoContainer/TodoContainer.js";

//const reactElement = <p>Hallo aus index.js!</p>; // intern: React.createElement('h1',...)

// Rendert unsere Components/React-Elemente im DOM
// hier wird es an das HTML Element #root hinzugefügt 
// (siehe public -> index.html -> <body>)
ReactDOM.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>, 
  document.getElementById('root') 
);