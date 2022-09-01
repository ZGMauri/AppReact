import React, {useState , useEffect} from 'react'

export default function Item({itemProp}) {
  return (
    <div>
        <p>{itemProp.id}</p>
        <p>{itemProp.name}</p>
        <p>{itemProp.price}</p>
    </div>
  )
}
