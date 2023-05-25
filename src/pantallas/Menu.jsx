import './Menu.css';
import Header from '../componentes/Header';
import Navegacion from '../componentes/Navegacion';


function Menu() {
  return (
    <div className='Menu'>
      <Header
        direccion='Cra. 54 #55-53 Barranquilla, Atlántico'
        horario='Lunes a Sábado 9AM-8:30PM - Menu'
      />
      <div className="home">
        <Navegacion
          //props redes
        />   
      </div> 
    </div>
  )
}

export default Menu;
