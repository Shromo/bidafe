import './Contacto.css';
import Header from '../componentes/Header';
import Contactar from '../componentes/Contactar';
import Navegacion from '../componentes/Navegacion';


function Contacto() {
  return (
    <div className='Contacto'>
      <Header
        direccion='Cra. 54 #55-53 Barranquilla, Atlántico'
        horario='Lunes a Sábado 9AM-8:30PM'
      />
      <div className="home">
        <Navegacion
          //props redes
        />   
        <Contactar

        />
      </div> 
    </div>
  )
}

export default Contacto;


