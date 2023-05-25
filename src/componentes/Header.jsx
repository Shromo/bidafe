import React from 'react';
import '../estilos/Header.css';

function Header(props) { //personalizar. para recibir valores y usarlos en nuestros componentes.
  return (
    <div className='header'>
      <p className='texto-header'>
        {props.direccion}  |  {props.horario}
      </p>
    </div> 
  );
} 

export default Header; //exportacion por defecto
