import React from "react";
import './App.css'
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Lesson from "./components/LifeCycle/lesson";
import Component1 from "./components/Props/Component1";
import Component2 from "./components/Props/Component2";
import State1 from "./components/State/State1";

function App() {
  return (
    <>
      {/* <Header />
      <Home />
      <Footer /> */}
      {/* <Component1 name ='Botir' age= '20'/> */}
      {/* <Component2 text='React Tutorial' /> */}
      {/* <State1 /> */}
      <Lesson  favcol='yellow'/>
    </>
  )
}


export default App;
