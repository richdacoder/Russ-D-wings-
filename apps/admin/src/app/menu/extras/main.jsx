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

export default function Main({ main, setMain, Delete, stock }){
  console.log('page for main dish working', Delete);

  return(
    <>
      <div>
        <h2> Main </h2>
      </div>
                <h3>Dish</h3>
      { main.map((dish, index) => (
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
          setMain(prev => prev.filter(m => m.id !== dish.id))
        }
         }> X </button>
                  <div>
          <button type="button"
          onClick={() => {
            setStock(prev => !prev)
          }}
          > {stock ? 'In sock': 'Out of stock'} </button>
         </div>

      </div>
      ))
      }
      <div>

      </div>

    </>

  )
}
