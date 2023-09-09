export function Boton({texto, nombreImagen}) {
  // codigo de logica que quieran
    return (
    <div>
        <button>
            <img 
            src={`../../public/${nombreImagen}`} 
            alt="" />
            {texto}
        </button>
        
    </div>
    );
}
export default Boton;
