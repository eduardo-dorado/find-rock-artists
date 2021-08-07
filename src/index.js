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
// let elemento = <p>Hola!</p>
// let container = document.getElementById("root")
// ReactDOM.render(elemento, container)

// Demostración de creación de elemento utilizando React.js
// let jsx = React.createElement("h1", {},"Hola, soy Eduardo Dorado utilizando create element de React.js")

let nombre = "Eduardo"
let apellido = "Dorado"
let edad = 29

let calcular = () => {
  return 20
}

let edadSumar = () => {
  return edad + 1
}

let pasandoParam = a => {
  return a
}

let pasandoParamMultiple = (a,b,c) => {
  return a + b + c
}

let jsxMultiple = (
      <div>
        <h1>Variable con muchos elementos</h1>
        <p>Lorem ipsum dolor, sit amet consectetur</p>
        <p>Mi nombre es {nombre}</p>
        <p>Mi apellido es {`${apellido} - Concateno usando template strings`}</p>
        <p>Mi edad es {edad + 1}</p>
        <p>Llamo a la función calcular = {calcular()}</p>
        <p>Llamo a la función edadSumar = {edadSumar()}</p>
        <p>LLamo a la función pasandoParam = {pasandoParam(100)}</p>
        <p>Llamo a la función pasandoParam = {pasandoParamMultiple(1,1,1)}</p>
      </div>
)
let contenedor = document.getElementById("root")
ReactDOM.render(jsxMultiple,contenedor)