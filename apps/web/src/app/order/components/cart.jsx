"use client";

import {useState} from 'react';

/*
add   const [quantity, setQuantity] = useState(0);xx
  const [itemQuantity, setItemQuantity] = useState({})xx
  - make an objects to add arrayxx
  - what we need(dish,type,price)xx
  - add subtract and deletexx
    - prevent double adding to cartxxx
  - make you when item is available
  - make sure cents math is correct


onjective for 7/6/26
- go to parent page and turn add to cart to an actual arry and then pass it as a prop to this pagexxx

objective 7/8/26
- you can delete item of cartxxx
- make plus and negative button workxxx
- add and subtract pricesxx

objective 7/10/26
- clear cart button
- subtotal
- move quantity back?
*/

export default function Cart({addToCart, setAddToCart, itemQuantity, setItemQuantity}){

    console.log('item quantity', itemQuantity);

    const total = addToCart.reduce((sum, item) => {
      const quantity = itemQuantity[item.id] || 1
      return sum + Number(item.price) * quantity ;
    }, 0);

    const itemCount = (id) => {
      const currentQtty = itemQuantity[id] || 1;
          console.log('working itemcount', currentQtty );
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
  console.log('removed item from cart', addToCart[removedIndex].id, addToCart[removedIndex].price, addToCart[removedIndex].dish );
  const id = addToCart[removedIndex].id;
  setItemQuantity((qtty) => {
    const { [id]:_, ...restOfIds} = qtty;
    return restOfIds
 })
  const updatedCart = addToCart.filter((item, index) =>{
    return removedIndex !== index;
  })
    console.log('removed item from cart', removedIndex, updatedCart );


return setAddToCart(updatedCart) ;
 }

return(
<div>
  <h1>Cart</h1>
  {
    addToCart.length === 0 && (
    <div> Your cart is empty.</div>
    )
  }
{
  addToCart.map((item, index)  => {
    return(
    <div key={item.id}>
  <div>dish:{item.dish}</div>
<div>price:${item.price}</div>
<div>type:{item.category}</div>
<button
type="button"
onClick={() => removeItem(index)}
>delete</button>
{itemCount(item.id)}
</div>
  );} )
}
<h2>Total</h2>
<p>${total.toFixed(2)}</p>
  </div>
 )
}
