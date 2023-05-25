// import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { 
  Route, 
  BrowserRouter as Router, 
  Routes
} from "react-router-dom";
// import Header from "../componentes/Header";
// import Navegacion from "../componentes/Navegacion";
// import Banner from "../componentes/Banner";
// import Shake from "../componentes/Shake";
// import Noticia from "../componentes/Noticia";
import Home from "./pantallas/Home";
import Menu from "./pantallas/Menu";
import SobreBida from "./pantallas/SobreBida";
import Contacto from "./pantallas/Contacto";
import Admin from "./pantallas/Admin";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/sobrebida" element={<SobreBida />} />
          <Route path="/contact" element={<Contacto />} />
          <Route path="/admin" element={<Admin />} />

        </Routes>
        {/* <Header
          direccion="Cra. 54 #55-53 Barranquilla, Atlántico"
          horario="Lunes a Sábado 9AM-8:30PM"
        />
        <div className="home">
          <Navegacion
          //props redes
          />
          <div className="contenido-derecha">
            <Shake></Shake>
            <Banner img_ban="02" />
            <div className="contenedor-noticias">
              <Noticia img_new="1" />
              <Noticia img_new="2" />
              <Noticia img_new="3" />
            </div>
          </div>
        </div> */}
      </div>
    </Router>
    
  );
}

export default App;

/*
<Noticia
/> 
*/

/* Para poner links
        <a
          className="App-link"
          href="https://i.pinimg.com/564x/64/e6/2f/64e62fc5e2eac2317cf4f6d459fcbb06.jpg"
          target="_blank"
          rel="noopener noreferrer"
        >
          No undas aqui jajaja
        </a>
*/

