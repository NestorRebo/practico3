import logo from './R.png';
import './App.css';
import Input from './Componentes/input'
import Boton from './Componentes/boton';
import useState from 'react';



function App() {
  const pStyle = {
    color: "red",
    fontSize: "40px",
    backgroundColor: "blue",
    padding: "20px",
    margin: "20px",
  };

  const [desbloquear, setDesbloquear] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
    
    <section>
      <>
        <Input desbloquear = {desbloquear} setDesbloquear={setDesbloquear}></Input>
      </>
    </section>
    



    <section>
      <>
      <Boton texto = "Piedra"></Boton>
      <Boton texto = "Papel"></Boton>
      <Boton texto = "Tijera"></Boton>
      </>
    </section>
    
      </header>
    </div>
  );
}

export default App;
