import React, {useState , useEffect} from 'react'
import ItemList from './ItemList';

export default function ItemListContainer() {
  const [loading, setLoading] = useState(true);
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState('');

  useEffect (() => {
    let promesasProductos = new Promise((resolve, reject) => {
       setTimeout(() => {
          resolve ([
            {id: 100, name: 'zapato nike', price: 100},
            {id: 101, name: 'zapato adidas', price: 200},
            {id: 102, name: 'zapato puma', price: 150},
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


