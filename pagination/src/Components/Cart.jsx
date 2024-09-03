import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext'

const Cart = () => {
  const {cart,removeFromCart} = useContext(CartContext)
  const handleRemove = (item)=>{
    removeFromCart(item)
  }
  return (
    <>
    <ul>
    {cart.map((item)=>(
      <li key={item.id}>
        {item.title} - ${item.price}
        <button onClick={()=>handleRemove(item)}>Remove</button>
      </li>
    ))}
    </ul>
    </>
  )
}

export default Cart