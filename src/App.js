import "./App.css";
import Header from './Components/contacto.js';
import Nanvar from './Components/nanvar.js';
import Carousel from "./Components/Carousel";
import Nur from './Components/nur.js';
import Soporte from './Components/soporte';
import Linea from './Components/linea';
import Ayudar from './Components/ayudar';
import Donante from './Components/donante';
import Final from './Components/final';





import React from "react";
function App() {
  return (
    <div className="App">
          <Header/>
          <Nanvar/>
      <Carousel />
      <Nur/>
      <Soporte/>
      <Linea/>
      <Ayudar/>
      <Donante/>
      <Final/>

    </div>
  );
}

export default App;
