import React, {useState , useEffect} from 'react'
import { data } from '../../mock/DataBase';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const[producto, setProducto]= useState({})
  useEffect(()=>{
    data
    .then((res)=> setProducto(res[0]))
  },[])
  console.log('producto', producto)
  return (
    <div>
      <ItemDetail producto={producto}/>
    </div>
  )
}

export default ItemDetailContainer