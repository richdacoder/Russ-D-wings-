"use client";

import {useState} from 'react';

/*
add   const [quantity, setQuantity] = useState(0);
  const [itemQuantity, setItemQuantity] = useState({})
  - make an array to add objects
  - what we need(dish,type,price)
  - add subtract and delete



*/

export default function Cart({addToCart}){

  console.log('see if addToCart works on cart', addToCart, {
    dish:addToCart.dish,
  price:addToCart.price,
type:addToCart.category
 });

return(
<div>
  <div>dish:{addToCart.dish}</div>
<div>price:{addToCart.price}</div>
<div>type:{addToCart.category}</div>

  </div>
)
}
