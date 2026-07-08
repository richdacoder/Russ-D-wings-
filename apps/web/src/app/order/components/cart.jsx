"use client";

import {useState} from 'react';

/*
add   const [quantity, setQuantity] = useState(0);
  const [itemQuantity, setItemQuantity] = useState({})
  - make an objects to add array
  - what we need(dish,type,price)
  - add subtract and delete


onjective for 7/6/26
- go to parent page and turn add to cart to an actual arry and then pass it as a prop to this pagexxx

objective 7/7/26
- you can delete item of cart
- make plus and negative button work
- add and subtract prices
*/

export default function Cart({addToCart}){

  const [cart, setCart] = useState([])

  console.log('see if addToCart works on cart', addToCart, addToCart.map(obj => {
   return { dish:obj.dish,
  price:obj.price,
type:obj.category
}
 }));

 const removeItem = () => {

 }
return(
<div>
{
  addToCart.map((item, index)  => {
    return(
    <div key={index}>
  <div>dish:{item.dish}</div>
<div>price:{item.price}</div>
<div>type:{item.category}</div>
<button> + </button>
<button> - </button>
<button>delete</button>
</div>
  );} )
}
  </div>
 )
}
