import React, { createContext, useState} from 'react'

export const context = createContext ();

export default function GenericContext({ children }) {
    const [color, setColor] = useState('#00FF00');
    const [cart, setCart] = useState([]);

    function addItem(item, quantity){

    }

    function removeItem(itemId){

    }

    function clear(){

    }   

    function isInCart (id){

    }

  return (
    <context.Provider value={{color, setColor}}>
        <div>GenericContext</div>
    </context.Provider>
  )
}
