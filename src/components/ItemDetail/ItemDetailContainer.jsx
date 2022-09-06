import React, {useState , useEffect} from 'react'
import ItemDetail from './ItemDetail';
import fotoCamisa from '../../img/camisa.jpg';


export default function ItemDetailContainer() {
  const [loading, setLoading] = useState(true);
  const [producto, setProducto] = useState([]);
  const [error, setError] = useState('');

  useEffect (() => {
    const getItem = new Promise((resolve, reject) => {
       setTimeout(() => {
          resolve ([
            {id: 100, title: 'camisa', description: 'camisa blanca formal', price: 100, pictureURL: <img src={ fotoCamisa } alt='algo'></img> },
          ]);
       }, 2000);
    })

  getItem
    .then ((res) =>{
      setProducto(res)
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
      <ItemDetail item = {producto}/>
    </div>
  )
}
