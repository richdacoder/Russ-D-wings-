"use client";

import { useEffect, useState } from "react";


export default function Drink({ drink, setDrink, Delete, stock, setStock, Put}){
  console.log('page for drink  working', drink.map(d => d.stock));

  return(
    <>
      <div>
        <h2 className=" flex justify-center text-2xl"> Drinks </h2>
      </div>
      <div className="grid grid-cols-2 gap-6">
      { drink.map((dish, index) => (
      <div className="border rounded-md p-3" key={index}>
        <div className="grid grid-cols-2">
           <p> {dish.dish} </p>
           <button type="button"
           className="justify-self-end hover:text-black/20"
        onClick={() => {
          Delete('menu', dish.id)
          setDrink(prev => prev.filter(m => m.id !== dish.id))
        }
         }> X </button>

        </div>
        <div>
           <p> {dish.price} </p>
        </div>
        <div>
           <p> {dish.description} </p>
        </div>
         <div>
          <button type="button"
            onClick={() => {

              const newStock = !dish.stock;
              setDrink(prev => prev.map(d => {
                return d.id === dish.id?
                {...d, stock: newStock}:
                d;
              }))
              Put({
                id: dish.id ,
                type: dish.type,
                stock: newStock
              });
          }}
          > {dish.stock ? 'In stock': 'Out of stock'} </button>
         </div>
      </div>
      ))
      }
      <div>
      </div>
      </div>

    </>

  )
}
