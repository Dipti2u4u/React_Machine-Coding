import React, { createContext, useState } from "react";

//create context
export const CartContext = createContext()

//create a cart provider
export const CartProvider = ({children})=>{
    const [cart,setCart] = useState([])
    const addToCart = (items)=>{
        setCart([...cart,items])
    }
    const removeFromCart = (item)=>{
        setCart(cart.filter((cartItems)=>cartItems.id !== item.id))
    }
    return (
        <CartContext.Provider value={{cart,addToCart,removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}