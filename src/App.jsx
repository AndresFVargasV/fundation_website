import Publicacion from "./components/Publicacion";
import "./app.css";
function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Publicaciones</h1>
        <Publicacion />
      </div>
    </div>
  );
}

export default App;
