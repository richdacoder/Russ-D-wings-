"use client";

import {useState, useEffect} from "react";

export default function Menu(){
/*

** there would be get post and delete on this page

- catergory
- inside of input option selection will drop down (GET) with what was added

- dish will be an input

*/
  return(
    <div>
      <h1>Menu</h1>
      <form>
        <div>
        <label>Catergory</label>
        <select>
            <option>Main</option>
            <option>Side</option>
            <option>Drink</option>
        </select>
        </div>


      </form>
      </div>
  )
}
