import React from "react";
import "../stylesheets/Publicacion.css";

function Publicacion(props) {
  return (
    <div className="contenedor-publicaciones">

      <img 
      className="imagen-publicacion" 
      src={require("../image/bolamundo.jpg")} 
      alt="imagen de la publicacion"/>

      <div className="contenedor-texto-publicacion">

        <p className="nombre-publicacion">{props.nombrePublicacion}</p>
        <p className="nombre-publicador">{props.nombre}</p>
        <p className="texto-publicacion">{props.contenido}</p>
      </div>
    </div>
  );
}

export default Publicacion;