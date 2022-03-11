import './App.css';
import Subtitulo from './components/Subtitulo';
import Titulo from './components/Titulo';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormTareas from './components/FormTareas';


function App() {
  //aqui va la logica del componente
  return (
    //aqui va el maquetado HTML y un poquito de logica
    <div>
      <Titulo/>
      <Subtitulo comision='17i' estado={true}/>
      <FormTareas/>
    </div>
  );//comision y estado son props, propiedades, 
  //cuando es texto no importa y lo pongo entre comillas,
  //pero cuando es un valor booleano o logica (funciones o lo q sea) va entre llaves{}
}

export default App;
