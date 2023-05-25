import React from "react";
import { 
  Route, 
  BrowserRouter as Router 
} from "react-router-dom";

import "../estilos/Navegacion.css";
import LogoBida from "../logos/Logo Bida Blanco.svg";
import TextoLogoBida from "../logos/textlogobida.svg";
import LogoBidaC from "../logos/Logocompleto.svg";
import Contacto from "../pantallas/Contacto";
import App from "../App";

function Navegacion(props) {
  //personalizar. para recibir valores y usarlos en nuestros componentes.
  return (
    
      <header className="contenedor-navegacion">
        <a href="/" className="contenedor-logo">
          <img src={LogoBidaC} alt="Logo Bida" className="logo-bida" />
          <img
            src={TextoLogoBida}
            alt="Texto Logo Bida"
            className="texto-logo-bida"
          />
        </a>
        <nav className="navegacion">
          <a href="/" className="inicio">
            incio
          </a>
          <a href="/menu" className="menu">
            menu
          </a>
          <a href="/sobrebida" className="sobre">
            sobre bida
          </a>
          <a href="/contact" className="contacto">
            contacto
          </a>
          <a href="admin" className="admin">
            admin
          </a>
        </nav>
        <div className="redes">Logos de redes.jpg</div>
      </header>
    
  );
}

export default Navegacion; //exportacion por defecto

{
  /* <Route path='/contacto'>
  <Contacto />
</Route>
<Route path='/'>
  <App />
</Route> */
}

/*
appjsx/navjsx // navcss // imagen

terminar los demas componentes

iconos redes sociales buscar  

tipo serio: navbar
indu: no recuerdo xd
conciertos: css grid para orden
argentino: poner debajo de otro links



*/
