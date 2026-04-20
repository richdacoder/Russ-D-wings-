"use client";

import {useState, useEffect} from "react";

export default function Menu(){
const [category, setCategory] = useState("");
const [menuItem, setMenuItem] = useState("");
const [price, setPrice] = useState("");

const handleSubmit = (e) => {
  e.preventDefault();
const newItem = {
  category: category,
  name: menuItem,
  price: price
}
console.log(newItem);
setCategory("");
setMenuItem("");
setPrice("");
}
/*

** there would be get post and delete on this page

- catergory
- inside of input option selection will drop down (GET) with what was added

- dish will be an input

*/
  return(
    <div>
      <h1>Menu</h1>
      <form onSubmit={handleSubmit}>
        <div>
        <label>Category</label>
        <select
          value={category}
          onChange={(e) => {
          setCategory(e.target.value)}}
        >
            <option value="main">Main</option>
            <option value="side">Side</option>
            <option value="drink">Drink</option>
        </select>
        </div>

        <div>
          <label>Menu Item</label>
          <input
            onChange={(e) => {
              setMenuItem(e.target.value)
            }}
            value={menuItem}/>
        </div>
        <div>
          <label>Price</label>
          <div>
            <span>$</span>
            <input
            step='0.01'
            type="number"
            min="0"


            onChange={(e)=> {
              setPrice(e.target.value)
            }}
            />
          </div>
        </div>
        <button type="submit">Add</button>
      </form>
      </div>
  )
}
