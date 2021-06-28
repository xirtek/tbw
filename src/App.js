import logo from './logo.svg';
import './App.css';
import Encabezado from './components/Encabezado.js';
import Footer from './components/Footer.js';
import Menu from './components/Menu.js';
import Contenido from './components/Contenido.js';

function App() {
  return (
    <div className="App">
      <Encabezado/>
      <Menu/>
      <hr/>
      <Contenido/>
      <hr/>
      <Footer/>
    </div>
  );
}

export default App;
