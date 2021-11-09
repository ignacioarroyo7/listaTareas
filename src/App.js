import './App.css';
import Subtitulo from './components/Subtitulo';
import Titulo from './components/Titulo';

function App() {
  //aqui va la logica
  return (
    //aqui va el maquetado y un poquito de logica
    <div>
      <Titulo/>
      <Subtitulo comision='17i'/>
    </div>
  );
}

export default App;
