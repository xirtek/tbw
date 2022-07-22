import Encabezado from './components/Header/Encabezado.js';
import Footer from './components/Footer/Footer.js';
import Menu from './components/Menu/Menu.js';
import Contenido from './components/Principal/Contenido.js';
import Historia from './components/Historia/Historia';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
        <Encabezado/>
        <Menu/>
        <Switch>
          <Route path="/historia">
            <Historia/>
          </Route>
          <Route path="/">
            <Contenido/>
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
