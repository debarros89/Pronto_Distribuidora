import './App.css'
import { MiBoton } from './MiBoton'
function App() {
  
  return (
    <>
    <h1 className="titulo"> Pronto Distribuidora </h1>

    <h2>Clase 2</h2>
    <MiBoton texto="Aceptar" color="green" />
    <MiBoton texto="Cancelar" color="red" />

    </>

  )
}

export default App

function Subtitulo() {
  
  return (
    <h2>Talento Tech</h2>
  )
} export {Subtitulo}

function Boton () {

  return(

    <button onClick={()=>alert("Bienvenidos")}>Clic</button>


  )
  
} export{Boton}