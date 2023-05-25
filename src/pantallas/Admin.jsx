import './Admin.css';
import Header from '../componentes/Header';
import Navegacion from '../componentes/Navegacion';


function Admin() {
  return (
    <div className='Admin'>
      <Header
        direccion='Cra. 54 #55-53 Barranquilla, Atlántico'
        horario='Lunes a Sábado 9AM-8:30PM - Admin'
      />
      <div className="home">
        <Navegacion
          //props redes
        />   
      </div> 
    </div>
  )
}

export default Admin;
