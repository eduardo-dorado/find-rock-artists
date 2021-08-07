import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(<App />,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


// Demostración con Javascript Vanilla
// let elemento = document.createElement("p")
// elemento.innerHTML = "Soy Eduardo Dorado"
// let contenedor = document.getElementById("root")
// contenedor.appendChild(elemento)


// Demostración con React.js - React Dom trabaja directamente con nuestros elementos sin tener que usar los createElement
let elemento = <p>Hola!</p>
let container = document.getElementById("root")
ReactDOM.render(elemento, container)