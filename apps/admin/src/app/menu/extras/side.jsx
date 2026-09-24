"use client";

import { useEffect, useState } from "react";


export default function Side({ side, setSide, Delete, stock  }){
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
      </div>
      ))
      }
      <div>

      </div>

    </>

  )
}
