import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import Navegacion from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import Producto from './components/Producto';

function onAddfunction (valor) {
  return (
    alert('Agrego con exito ' + valor + ' productos')
  )
}

function App() {

  let saludo = {msj: "Hola bienvenido"};
  let item1 = {id: 1, name: 'cerveza', price: 10}
  let item2 = {id: 2, name: 'fernet', price: 15}
  let item3 = {id: 3, name: 'whisky', price: 20}

  return (
    <div>
      <Navegacion />
      
      <ItemListContainer mensaje = {saludo}/>

      <ItemCount stock={10} initial={1} onAdd={onAddfunction}/>

      <Producto />

      
    </div>
  );
}

export default App;
