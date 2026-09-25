"use client";

import { useEffect, useState } from "react";


export default function Drink({ drink, setDrink, Delete, stock, setStock, Put}){
  console.log('page for drink  working', stock);

  return(
    <>
      <div>
        <h2> Drink </h2>
      </div>
                <h3>Dish</h3>
      { drink.map((dish, index) => (
      <div key={index}>
        <div>
           <p> {dish.dish} </p>
        </div>
        <div>
          <h4>Price</h4>
           <p> {dish.price} </p>
        </div>
        <div>
          <h5>Description</h5>
           <p> {dish.description} </p>
        </div>
        <button type="button"
        onClick={() => {
          Delete('menu', dish.id)
          setDrink(prev => prev.filter(m => m.id !== dish.id))
        }
         }> X </button>
         <div>
          <button type="button"
            onClick={() => {

              const newStock = !dish.stock;
              setDrink(prev => prev.map(d => {
                return d.id === dish.id?
                {...d, stock:newStock}:
                d;
              }))
              setStock(newStock);
              Put({
                id: dish.id ,
                type: dish.type,
                stock: stock
              });
          }}
          > {dish.stock ? 'In stock': 'Out of stock'} </button>
         </div>
      </div>
      ))
      }
      <div>

      </div>

    </>

  )
}
