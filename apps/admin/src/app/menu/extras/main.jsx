"use client";

import { useEffect, useState } from "react";

/*
- do a GET inside use effectxxx
- pass GET to page,jsxxxxxx
- create react variable for dish price and descrition (arrays)xxxx
- pass main variable as prop
- create an array call main to make the headers
-
 9/19/26
 - send props through
 - loop through each main
 - make delete
 - make edit
 - add if in stock or not


*/

export default function Main({ main, setMain}){

  const [ dish, setDish ] = useState([]);
  const [ price, setPrice ] = useState([]);
  const [ description, setDescription ] = useState([]);

  return(
    <>
      <div>
        <h2> Main </h2>
      </div>
      <div>
        <div>
          <h3>Dish</h3>
        </div>
        <div>
          <h4>Price</h4>
        </div>
        <div>
          <h5>Description</h5>
        </div>
      </div>
      <div>

      </div>

    </>

  )
}
