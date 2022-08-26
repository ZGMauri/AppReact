import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import Navegacion from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';

function App() {

  let saludo = {msj: "Hola bienvenido"};

  return (
    <div>
      <Navegacion />
      
      <ItemListContainer mensaje = {saludo}/>

      
    </div>
  );
}

export default App;
