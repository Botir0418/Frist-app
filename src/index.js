import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


//JSX ishlatilmaganda
const myElement = React.createElement('h1',{ style: {color : "black"}}, "salom aka")
ReactDOM.render(myElement,document.getElementById('h1'));

//JSX ishlatilganda
const myElement1 = <h3 style={{color: "blue"}}>qalay</h3>
ReactDOM.render(myElement1,document.getElementById('h3'));


const myElement3 = <h2>2 ga 2ni ko'paytirsak {2*2} </h2>
ReactDOM.render(myElement3,document.getElementById('h5'));

const name = "Botir"
const myel= <h1>salom,{name}</h1>
ReactDOM.render(myel,document.getElementById('h6'));


function getGreeting(name){
  if (name) {
    return <h2>Salom {name}</h2>
  }else{
    return <h2>Ism Kiriting</h2>
  }
} 
const myElement4 = getGreeting("Botir") ;

ReactDOM.render(myElement4,document.getElementById('h7'))
  

ReactDOM.render(<App />,
  document.getElementById('root')
);




reportWebVitals();
