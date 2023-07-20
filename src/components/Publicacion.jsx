import "../assets/css/Publicacion.css";
import imagen from "../assets/img/bolamundo.jpg";
function Publicacion() {
  return (
    <div className="contenedor-publicaciones">
      <img
        className="imagen-publicacion"
        src={imagen}
        alt="imagen de la publicacion"
      />

      <div className="contenedor-texto-publicacion">
        <p className="nombre-publicacion">Primera Publicación.</p>
        <p className="nombre-publicador">Juan Carlos Cardenas.</p>
        <p className="Texto-publicacion">Hoy fue un buen día.</p>
      </div>
    </div>
  );
}

export default Publicacion;