import React, {useState , useEffect} from 'react'
import ItemList from './ItemList';
import fotoReal from '../img/real.jpg';
import fotoCity from '../img/city.jpg';
import fotoBayern from '../img/bayern.jpg';
import fotoArsenal from '../img/arsenal.jpg';
import { useParams } from 'react-router-dom'

const productosHC = [
  {idproduct: 100, title: 'camiseta Real Madrid', description: 'camiseta futbol 2022', price: 170, pictureURL: <img src={ fotoReal } alt='algo'></img>, idcategory: 'ligaespañola'},
  {idproduct: 101, title: 'camiseta Manchester City', description: 'camiseta futbol 2022', price: 200, pictureURL: <img src={ fotoCity } alt='algo'></img>, idcategory: 'ligainglesa'},
  {idproduct: 102, title: 'camiseta Arsenal', description: 'camiseta futbol 2022', price: 150, pictureURL: <img src={ fotoArsenal } alt='algo'></img>, idcategory: 'ligainglesa'},
  {idproduct: 102, title: 'camiseta Bayern Munich', description: 'camiseta futbol 2022', price: 150, pictureURL: <img src={ fotoBayern } alt='algo'></img>, idcategory: 'ligaalemana'},
];

export default function ItemListContainer() {
  const {idcategory, idproduct} = useParams();

  const [productos, setProductos] = useState();
  

  useEffect (() => {
    if (!idcategory){
      setProductos(productosHC);
    }else {
      setProductos(productosHC.filter((product) => product.idcategory === idcategory))
    }
    }, [idcategory]);

    useEffect (() => {
      if (!idproduct){
        setProductos(productosHC);
      }else {
        setProductos(productosHC.filter((product) => product.idproduct === idproduct))
      }
      }, [idproduct]);


  return (
    <div>
      {<ItemList item = {productos}/>}
    </div>
  )
}


