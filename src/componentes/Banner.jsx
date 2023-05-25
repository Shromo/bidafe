import React from "react";
import "../estilos/Banner.css";



function Banner({img_ban}) {
  return (
    <div className="contenedor-imagen">
      <img 
        className='imagen-banner'
        src={require(`../imagenes-noticias/banner-${img_ban}.jpg`)} //no podemos escribir directamente la ubicacion debemos usar el required
        alt='Banner' /> 
    </div>
  );
}

export default Banner; //exportacion por defecto

/*
appjsx/navjsx // navcss // imagen
hacer logo bida completo
terminar los demas componentes

iconos redes sociales buscar  

tipo serio: navbar
indu: no recuerdo xd
conciertos: css grid para orden
argentino: poner debajo de otro links

como importo muchas imagenes?
importar
coleee cambiar ubicacion imafenes!!!
*/
