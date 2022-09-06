import React, {useState , useEffect} from 'react'

export default function Item({itemProp}) {
    return (
      <div>
          <b><p>Id: {itemProp.id}</p></b>
          <b><p>Nombre: {itemProp.title}</p></b>
          <b><p>Descripcion: {itemProp.description}</p></b>
          <b><p>Precio: {itemProp.price}</p></b>
          <b><p>Foto del producto: {itemProp.pictureURL}</p></b>
      </div>
    )
  }