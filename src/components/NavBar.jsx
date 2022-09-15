import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div>
      <Link to='/'>HOME</Link>
      <br />
      <Link to='/category/ligaespañola'>Liga Española</Link>
      <br />
      <Link to='/category/ligainglesa'>Liga Inglesa</Link>
      <br />
      <Link to='/category/ligaalemana'>Liga Alemana</Link>
      <br />
      <Link to='/product/100'>Producto por id</Link>
      <br />
      <Link to='/product/101'>Producto por id</Link>
      <br />
      <Link to='/product/102'>Producto por id</Link>
      <br />
      <Link to='/product/103'>Producto por id</Link>
    </div>
  )
}