"use client";

import {useState} from 'react';

/*
add   const [quantity, setQuantity] = useState(0);
  const [itemQuantity, setItemQuantity] = useState({})
  - make an objects to add array
  - what we need(dish,type,price)
  - add subtract and delete



*/

export default function Cart({addToCart}){

  const [cart, setCart] = useState([])

  console.log('see if addToCart works on cart', cart.map(item => item), {
    dish:addToCart.dish,
  price:addToCart.price,
type:addToCart.category
 });

return(
<div>
{
  cart.map((item, index)  => {
    return(
    <div key={index}>
  <div>dish:{item.dish}</div>
<div>price:{item.price}</div>
<div>type:{item.category}</div>
<button> + </button>
<button> - </button>
</div>
  );} )
}
  </div>
 )
}
