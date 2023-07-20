import './App.css';
import Publicacion from './component/Publicacion'

function App() {
  return (
    <div className='App'>

      <div className='contenedor-principal'>
        <h1>Publicaciones</h1>

        <Publicacion 
          nombrePublicacion='Hablemos de Colombia'
          nombre='Juan Carlos Bodoque'
          contenido='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        />
        
      </div>
      
    </div>
  );
}

export default App;
