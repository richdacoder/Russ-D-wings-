"use client";

import {useState} from 'react';

/*
add   const [quantity, setQuantity] = useState(0);
  const [itemQuantity, setItemQuantity] = useState({})
  - make an array to add objects
  - what we need(dish,type,price)
  - add subtract and delete



*/

export default function Cart(addToCart){

  const cart = addToCart.addToCart; //object in an object

  console.log('see if addToCart works on cart', cart, {
    dish:cart.dish,
  price:cart.price,
type:cart.category
 });

return(
<div>works working!</div>
)
}
