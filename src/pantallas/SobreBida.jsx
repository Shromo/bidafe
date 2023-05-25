import './SobreBida.css';
import Header from '../componentes/Header';
import Navegacion from '../componentes/Navegacion';


function SobreBida() {
  return (
    <div className='SobreBida'>
      <Header
        direccion='Cra. 54 #55-53 Barranquilla, Atlántico'
        horario='Lunes a Sábado 9AM-8:30PM - Sobrebida'
      />
      <div className="home">
        <Navegacion
          //props redes
        />   
      </div> 
    </div>
  )
}

export default SobreBida;
