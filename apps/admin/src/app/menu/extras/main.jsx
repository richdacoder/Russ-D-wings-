"use client";

import { useEffect, useState } from "react";

/*
- do a GET inside use effectxxx
- pass GET to page,jsxxxxxx
- create react variable for dish price and descrition (arrays)xxxx
- pass main variable as propxx
- create an array call main to make the headers
- create delete for menu in backend
-
 9/19/26
 - send props through
 - loop through each main
 - make delete
 - make edit
 - add if in stock or not


*/

export default function Main({ main, setMain, Delete, stock, setStock, Put}){
  console.log('page for main dish working', main);

  return(
    <div className="flex flex-col">
      <div >
        <h2 className="text-2xl flex justify-center items-center"> Main Dish </h2>
      </div>
      <div className="grid grid-cols-2">
      { main.map((dish, index) => (
      <div className="grid-auto" key={index}>
        <div>
           <p> {dish.dish} </p>
        </div>
        <div>
           <p> {dish.description} </p>
        </div>
        <div>
           <p> {dish.price} </p>
        </div>

        <button type="button"
        onClick={() => {
          Delete('menu', dish.id)
          setMain(prev => prev.filter(m => m.id !== dish.id))
        }
         }> X </button>
         <div>
          <button type="button"
            onClick={() => {
              const newStock = !dish.stock;
               setMain(prev => prev.map(m => {
               return m.id === dish.id ?
                {...m, stock: newStock } :
                m;
              }
              ))
              Put({
                id:dish.id,
                type:dish.type,
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

    </div>

  )
}
