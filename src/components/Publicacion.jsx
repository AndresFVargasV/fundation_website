function Publicacion() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 mx-auto bg-white rounded-xl shadow-lg">
      <div className="shrink-0">
        <img
          className="h-96 w-96 md:h-auto md:w-full"
          src={imagen}
          alt="Publication image"
        />
      </div>
      <div className="text-center">
        <div className="text-xl font-medium text-black">
          Primera Publicacion
        </div>
        <p className="text-slate-950">You have a new message!</p>
        <p className="text-slate-950">Juan Carlos Cardenas.</p>
        <p className="text-slate-950">Hoy fue un buen día.</p>
      </div>
    </div>
  );
}

export default Publicacion;
