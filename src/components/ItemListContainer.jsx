import React, {useState , useEffect} from 'react'
import ItemList from './ItemList';
import fotoCamisa from '../img/camisa.jpg';
import fotoZapato from '../img/zapatos.jpg';
import fotoTraje from '../img/traje.jpg';


export default function ItemListContainer() {
  const [loading, setLoading] = useState(true);
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState('');

  useEffect (() => {
    let promesasProductos = new Promise((resolve, reject) => {
       setTimeout(() => {
          resolve ([
            {id: 100, title: 'camisa', description: 'camisa blanca formal', price: 100, pictureURL: <img src={ fotoCamisa } alt='algo'></img> },
            {id: 101, title: 'zapato', description: 'zapatos de vestir color negro', price: 200, pictureURL: <img src={ fotoZapato } alt='algo'></img>},
            {id: 102, title: 'saco', description: 'saco de traje con pantalon incluido', price: 150, pictureURL: <img src={ fotoTraje } alt='algo'></img>},
          ]);
       }, 2000);
    })

  promesasProductos
    .then ((res) =>{
      setProductos(res)
    })
    .catch ((err) =>{
      setError (err)
    })
    .finally (() =>{
      setLoading(false)
    })
  }, [])

  return (
    <div>
      <p>Loading: {loading ? 'loading..' : 'fin'}</p>
      <p>Error: {error ? error : null}</p>
      <ItemList item = {productos}/>
    </div>
  )
}


