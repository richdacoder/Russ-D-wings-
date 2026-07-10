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
    // const [total, setTotal] = useState(0);

    console.log('item quantity', itemQuantity);
    const total = addToCart.reduce((sum, item) => {
      const quantity = itemQuantity[item.id] || 1
      return (sum + Number(item.price)) * quantity ;


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
    const { [id]:_, ...restOfIds} = itemQuantity;
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
<h2>Total</h2>
<p>{total}</p>
  </div>
 )
}
