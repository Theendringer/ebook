import React from 'react';
import './App.css';
import Navbar from './componentes/navbar';
import Parte1 from './componentes/parte1';
import Parte2 from './componentes/parte2';
import Parte3 from './componentes/parte3';
import Perguntas from './componentes/perguntas';
import TermosDeUso from './componentes/termos';

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Parte1 />
        <Parte2 />
        <Parte3 />
        <Perguntas />
        <TermosDeUso />
      </div>
    </div>
  );
}

export default App;
