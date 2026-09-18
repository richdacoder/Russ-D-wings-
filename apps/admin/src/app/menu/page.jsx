"use client";

import {useState, useEffect} from "react";
import Post from "../../../../lib/post.js";
import Get from "../../../../lib/get.js";
import Main from "./extras/main.jsx";

export default function Menu(){
const [category, setCategory] = useState("main");
const [menuItem, setMenuItem] = useState("");
const [price, setPrice] = useState("");
const [description, setDescription] = useState("");
const [stock, setStock] = useState(true);
const [menu, setMenu] = useState([]);

useEffect(() =>{
  const getMenu = async () => {
  const data = await Get('menu');
  setMenu(data);
  };

getMenu();
},
[]
)

console.log('menu', menu);

const handleSubmit = async (e) => {
  e.preventDefault();
  if(!category || !menuItem || !price) return;
const newItem = {
  category: category,
  dish: menuItem,
  price: price,
  stock: stock,
  description: description,
  type: 'menu'
}
console.log(newItem);
await Post(newItem);

console.log('after await post');

setCategory("");
setMenuItem("");
setPrice("");
}
/*

** there would be get post put and delete on this page

- catergory
- inside of input option selection will drop down (GET) with what was added

- dish will be an input

- mkae sure stock pop on GET

9/18/26
- get menu
- seperate main , side, and drink with their own headers
- will mention dish price and description
- add x for delete for each item

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
          required
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
            value={menuItem}
            required
            />
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
            value={price}
            required
            />
          </div>
          <div>
            <label> Description </label>
            <input
            onChange={(e)=>{
              setDescription(e.target.value)
            }}
            />
          </div>
        </div>
        <button type="submit">Add</button>
      </form>
      <div>
        <div>
          <h1>Menu</h1>
        </div>
            <Main/>
        <div>
        </div>

      </div>
      </div>
  )
}
