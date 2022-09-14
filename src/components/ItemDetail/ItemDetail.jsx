import React, {useState , useEffect} from 'react'
import Item from './Item'
import ItemCount from '../ItemCount';


const ItemDetail = ({producto}) => {
  function onAdd (quantityToAdd) {
    alert ('Recibido de itemCount ' + quantityToAdd)
  }
  return (
    <ItemCount stock={10} initial={1} cart={onAdd}/>
  )
}

export default ItemDetail