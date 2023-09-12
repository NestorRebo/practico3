


export function Input({desbloquear, setDesbloquear}) {
  function iniciar(){
    return setDesbloquear(1)
  }
  
  //prevee el relogeo
      function escrituraAMano(e) {
        // Prevent the browser from reloading the page
        e.preventDefault();
    

        if(Input.length !== ""){
          // lee la informacion
          const form = e.target;
          const formData = new FormData(form);
      
         //  podemos trabajar con un objeto:
          const formJson = Object.fromEntries(formData.entries());
          console.log(formJson);
        }else{
          alert('no ha agregado su Nombre')}
        }


    
    return (
    <form method="post" onSubmit={escrituraAMano} >
        <label>
            Nombre: <input name="Input" placeholder="Ingrese su Nombre" />
        </label>
        <hr />
        <button type="reset">Reset</button>
        <button type="submit" onClick={iniciar}>Submit</button>
    </form>
    
    );
}
export default Input;