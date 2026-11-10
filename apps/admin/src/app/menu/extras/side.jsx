"use client";

import { useEffect, useState } from "react";


export default function Side({ side, setSide, Delete, stock, setStock, Put  }){
                console.log('stock?', stock);


  return(
    <>
      <div>
        <h2 className="flex justify-center text-2xl my-5"> Side </h2>
      </div>
      <div className="grid grid-cols-2 gap-6 ">
      { side.map((dish, index) => (
      <div className="border rounded-md p-3 bg-black/40" key={index}>
        <div className="grid grid-cols-2 ">
        <p className="font-semibold"> {dish.dish} </p>
        <button
        className="hover:text-black/20"
        type="button"
        onClick={() => {
          Delete('menu', dish.id)
          setSide(prev => prev.filter(m => m.id !== dish.id))
        }
         }> X </button>
        </div>
        <div>
           <p > {dish.price} </p>
        </div>
        <div>
           <p className="text-black/70"> {dish.description} </p>
        </div>
         <div>
          <button type="button"
          className="hover:text-black/20"
            onClick={() => {
              const newStock = !dish.stock;
              setSide(prev => prev.map(s => {
                return s.id === dish.id?
                {...s, stock:newStock}:
                s
              }));
              Put({
                id: dish.id,
                type: dish.type,
                stock: newStock
              })
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
