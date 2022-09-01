import { isDisabled } from '@testing-library/user-event/dist/utils';
import React, {useState , useEffect} from 'react'

export default function ItemCount( {stock, initial, onAdd}) {
  
    const [contador, setContador] = useState(initial);

    return (
        <div>
            <h1>contador: {contador}</h1>
            <button
                disabled = {contador === stock}
                onClick={()=>{
                    setContador(contador+1);
                }}>+</button>
                
                <div><button 
                    disabled = {contador === initial}
                    onClick={()=>{
                    onAdd(contador)
                }}>Agregar al carrito</button></div>

                <button
                    disabled = {contador === 0}
                    onClick={()=>{
                    setContador(contador-1);
                }}>-</button>
        </div>
    )

}
