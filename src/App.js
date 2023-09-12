import logo from "./R.png";
import "./App.css";
import Boton from "./Componentes/Boton";
import Input from "./Componentes/Input";
import useState from "react";
import TebleroFinal from "./Componentes/TableroParcial";
import TableroParcial from "./Componentes/TableroParcial";

function App() {
  const [desbloquear, setDesbloquear] = useState(0)




  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <section>
          <>
            <Input
              desbloquear={desbloquear}
              setDesbloquear={setDesbloquear}
            ></Input>
          </>
        </section> 

        <section className="botonera">
          <>
            <Boton texto="Piedra"></Boton>
            <Boton texto="Papel"></Boton>
            <Boton texto="Tijera"></Boton>
          </>
        </section>

        <section>
              <TableroParcial name ={"jugador"}></TableroParcial>
              <TableroParcial name={"CPU"}></TableroParcial>

        </section>

        <section>
          <TebleroFinal ganador={"algo"}></TebleroFinal>
        </section>



      </header>
    </div>
  );
}

export default App;
