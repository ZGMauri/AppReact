import React, {useState , useEffect} from 'react'
import Item from './Item'

const ItemDetail = ({producto}) => {
  return (
    <div>
      <h2>Detalle del producto:{producto.name}</h2>
      <p>{producto.description}</p>
    </div>
  )
}

export default ItemDetail