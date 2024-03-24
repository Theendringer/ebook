//import logo from './logo.svg';

import './App.css';

import Navbar from './componentes/navbar';
import Parte1 from './componentes/parte1';
import Parte2 from './componentes/parte2';
import Parte3 from './componentes/parte3';
import Perguntas from './componentes/perguntas'
import Termos from './componentes/termos'

function App() {

  const AppStyle = {
    margin: '0'
  }

  return (
     <div style={AppStyle}>
      
      <Navbar/>
      <Parte1/>
      <Parte2/>
      <Parte3/>
      <Perguntas/>
      <Termos/>
      
      </div>
  );
}

export default App;
