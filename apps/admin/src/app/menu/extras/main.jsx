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
    <>
      <div>
        <h2 className="text-2xl my-5 flex justify-center items-center"> Main Dish </h2>
      </div>
      <div className="grid grid-cols-2 gap-6">
      { main.map((dish, index) => (
      <div className=" bg-black/10 rounded-md p-3 border" key={index}>
          <div className="grid grid-cols-2">
           <p className=" font-semibold "> {dish.dish} </p>
           <button type="button"
                className="justify-self-end hover:text-black/10"
        onClick={() => {
          Delete('menu', dish.id)
          setMain(prev => prev.filter(m => m.id !== dish.id))
        }
         }> X </button>

        </div>
        <div>
           <p className="text-black/70"> {dish.description} </p>
        </div>
        <div>
           <p>${dish.price} </p>
        </div>

         <div>
          <button type="button"
          className="hover:text-black/20"
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

    </>
  )
}
