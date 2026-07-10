"use client";

import {useState} from 'react';

/*
add   const [quantity, setQuantity] = useState(0);
  const [itemQuantity, setItemQuantity] = useState({})
  - make an objects to add array
  - what we need(dish,type,price)
  - add subtract and delete
  - make you when item is available
  - prevent double adding to cartxxx


onjective for 7/6/26
- go to parent page and turn add to cart to an actual arry and then pass it as a prop to this pagexxx

objective 7/8/26
- you can delete item of cartxxx
- make plus and negative button workxxx
- add and subtract prices
*/

export default function Cart({addToCart, setAddToCart}){

    const [itemQuantity, setItemQuantity] = useState({});
    const [total, setTotal] = useState(0);

    const totalAmount = addToCart((price) => {
      const number = Number(price);
      setTotal(total + number)
      console.log('converted to number', number, );

    });

    const itemCount = (id, price) => {
      const currentQtty = itemQuantity[id] || 1;
          console.log('working itemcount', currentQtty, price );
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
{itemCount(item.id, item.price)}
</div>
  );} )
}
<h2>Total</h2>
<p>{total}</p>
  </div>
 )
}
