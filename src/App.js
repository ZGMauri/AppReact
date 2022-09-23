import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import GenericContext from './components/GenericContext';
import CartWidget from './components/CartWidget';

function App() {
  return (
    <>
      <GenericContext>
        <BrowserRouter>
          <NavBar />
          
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path='/cart' element = {<CartWidget />} />
            <Route path="/category/:idcategory" element={<ItemListContainer />} />
            <Route path="/product/:idproduct" element={<ItemListContainer />} />
          </Routes>

        </BrowserRouter>
      </GenericContext>
      </>
  );
}

export default App;
