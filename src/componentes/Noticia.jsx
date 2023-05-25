import React from 'react';
import '../estilos/Noticia.css';

function Noticia(props) { //(props)
  return (
    <div className='contenedor-noticia'>
      <img 
        className='imagen-noticia'
        src={require(`../imagenes-noticias/new-${props.img_new}.jpg`)}
        alt='New' />
      <div className='contenedor-texto-noticia'>
        <p className='titulo-noticia'>
          Titulo noticia + degra
        </p>
      </div>
    </div>
  );
}

export default Noticia; 

/*
c.not>>  tamano recuadro
im.not>> imagen + degrado?

<p className='subtitulo-noticia'>
  Subtitulo noticia
</p>
<p className='descripcion-noticia'>
  Toda esta es la descripcion que debe llevar la noticia que se coloque en el home, recordar ponerle props para poder convertilo en eelemtnos react.
</p>

*/

