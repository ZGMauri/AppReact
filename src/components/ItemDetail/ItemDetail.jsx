import React, {useState , useEffect} from 'react'
import Item from './Item'

export default function ItemList({item}) {
  return (
    <div>
    {item.map((mapeado) =>(
          <Item itemProp = {mapeado}/>
      ))}
    </div>
  )
}