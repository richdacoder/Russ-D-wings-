"use client";

import {useState} from 'react';

/*
add   const [quantity, setQuantity] = useState(0);
  const [itemQuantity, setItemQuantity] = useState({})
  - make an objects to add array
  - what we need(dish,type,price)
  - add subtract and delete
  - make you when item is available
  - prevent double adding to cart


onjective for 7/6/26
- go to parent page and turn add to cart to an actual arry and then pass it as a prop to this pagexxx

objective 7/8/26
- you can delete item of cartxxx
- make plus and negative button work
- add and subtract prices
*/

export default function Cart({addToCart, setAddToCart}){

    const [itemQuantity, setItemQuantity] = useState({});

    // make function itemCountxx
    //map through addtocart
    //
    //


    const itemCount = (id) => {
      const currentQtty = itemQuantity[id] || 1;
          console.log('working itemcount', currentQtty, id);

      return(
      <div>
       <button
       type="button"
       onClick={() => {
        setItemQuantity(prev => ({
          ...prev,
          [id]: currentQtty + 1
        })
      );
       }}> + </button>
       <label>{currentQtty}</label>
       <button
       type="button"
       onClick={() => {
        setItemQuantity(prev => (
          {
            ...prev,
            [id]: currentQtty > 1? currentQtty -1 : 1
          }
        )
        )
       }
       }> - </button>
       </div>
    )}

  console.log('see if addToCart works on cart', addToCart, addToCart.map(obj => {
   return { dish:obj.dish,
  price:obj.price,
type:obj.category
}
 }));

 const removeItem = (removedIndex) => {
  console.log('removed item from cart', removedIndex );
  const updatedCart = addToCart.filter((item, index) =>{
    return removedIndex !== index;
  })
    console.log('removed item from cart', removedIndex );

return setAddToCart(updatedCart) ;
 }

return(
<div>
  <h1>Cart</h1>
{
  addToCart.map((item, index)  => {
    return(
    <div key={index}>
  <div>dish:{item.dish}</div>
<div>price:{item.price}</div>
<div>type:{item.category}</div>
<button
type="button"
onClick={() => removeItem(index)}
>delete</button>
{itemCount(item.id)}
</div>
  );} )
}

  </div>
 )
}
