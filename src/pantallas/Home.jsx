import "./Home.css";
import { 
  Route, 
  BrowserRouter as Router 
} from "react-router-dom";
import Header from "../componentes/Header";
import Navegacion from "../componentes/Navegacion";
import Banner from "../componentes/Banner";
import Shake from "../componentes/Shake";
import Noticia from "../componentes/Noticia";

function Home() {
  return (
    
      <div className="Home">
        <Header
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
        </div>
      </div>
     
  );
}

export default Home;
