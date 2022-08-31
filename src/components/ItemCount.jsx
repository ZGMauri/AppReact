import React, {useState , useEffect} from 'react'

export default function ItemCount( {stock, initial, onAdd}) {
  
    const [contador, setContador] = useState(initial);

    useEffect (() =>{
    }, [])

    useEffect (() =>{
        if (contador > stock){
            alert('No hay mas stock disponible')
        }
    });

    useEffect (() =>{

        return () => {

        }
    },[])

    return (
        <div>
            <h1>contador: {contador}</h1>
            <button
                onClick={()=>{
                    setContador(contador+1);
                }}>+</button>
                
                <div><button onClick={()=>{
                    onAdd(contador)
                }}>Agregar al carrito</button></div>

                <button
                onClick={()=>{
                    setContador(contador-1);
                }}>-</button>
        </div>
    )

}
