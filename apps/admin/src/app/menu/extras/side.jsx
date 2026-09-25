"use client";

import { useEffect, useState } from "react";


export default function Side({ side, setSide, Delete, stock, setStock, Put  }){
  console.log('page for side dish working', Delete);

  return(
    <>
      <div>
        <h2> Side </h2>
      </div>
                <h3>Dish</h3>
      { side.map((dish, index) => (
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
          setSide(prev => prev.filter(m => m.id !== dish.id))
        }
         }> X </button>
         <div>
          <button type="button"
            onClick={() => {
              const newStock = !stock.dish;
              setSide(prev => prev.map(s => {
                return s.id === dish.id?
                {...s, stock:newStock}:
                s
              }));
              setStock(newStock);
              Put({
                id: dish.id,
                type: dish.type,
                stock: stock
              })
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
