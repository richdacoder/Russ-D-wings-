"use client";

import {useState, useEffect} from "react";
import Post from "../../../../lib/post.js";
import Get from "../../../../lib/get.js";
import Put from  "../../../../lib/put.js";
import Delete from "../../../../lib/delete.js";
import Main from "./extras/main.jsx";
import Side from "./extras/side.jsx";
import Drink from "./extras/drink.jsx";

export default function Menu(){
const [category, setCategory] = useState("main");
const [menuItem, setMenuItem] = useState("");
const [price, setPrice] = useState("");
const [description, setDescription] = useState("");
const [stock, setStock] = useState(true);
const [menu, setMenu] = useState([]);
const [main, setMain] = useState([]);
const [side, setSide] = useState([]);
const [drink, setDrink] = useState([]);

useEffect(() =>{
  const getMenu = async () => {
    const data = await Get('menu');
    setMain(data.filter(dish => dish.category === 'main'));
    setSide(data.filter(dish => dish.category === 'side'));
    setDrink(data.filter(drink => drink.category === 'drink'));
  };

getMenu();
},
[]
);


console.log({
    'mains': main,
    'sides': side,
    'drinks': drink
});

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
setDescription("");
}
/*

** there would be get post put and delete on this page

- catergory
- inside of input option selection will drop down (GET) with what was added

- dish will be an input

- mkae sure stock pop on GET

9/18/26
- get menuxx
- seperate main , side, and drink with their own headersxxx
- will mention dish price and descriptionxx
- add x for delete for each itemxx

9/23/26
- make a button that can show if something is in stock and control if it is or is notxx

9/24/26
make put route and make api call file

*/
  return(
    <div>
    <div className=" w-1/2 mx-auto">
      <h1 className="text-5xl my-5">Menu</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col my-5 ">
        <label className="text-2xl">Category</label>
        <select
        className="border w-1/2"
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

        <div  className="text-2xl my-5">
          <label >Menu Item</label>
          <input  className="border"
            onChange={(e) => {
              setMenuItem(e.target.value)
            }}
            value={menuItem}
            required
            />
        </div>
        <div  className=" my-5">
          <label className="text-2xl">Price</label>
          <div>
            <span>$</span>
            <input
             className="border"
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
          <div  className=" my-5 flex flex-col">
            <label  className="text-2xl "> Description </label>
            <textarea
             className="border w-full min-h-32 "
            onChange={(e)=>{
              setDescription(e.target.value)
            }}
            value={description}

            required
            />
          </div>
        </div>
        <button  className="border rounded-md py-3 px-7 text-2xl mb-5 bg-red-900 text-white hover:bg-black/20" type="submit">Add</button>
      </form>
      <div >
        <div>
          <h1>Menu</h1>
        </div>
        <div >
          <div className="grid grid-cols-2">
            <Main
              setStock={setStock}
              stock={stock}
              main={main}
              setMain={setMain}
              Delete={Delete}
              Put={Put}
            />
            </div>
            <div>
              <Side
                Delete={Delete}
                stock={stock}
                setStock={setStock}
                side={side}
                setSide={setSide}
                Put={Put}

              />
            </div>
            <div>
              <Drink
                Delete={Delete}
                stock={stock}
                setStock={setStock}
                drink={drink}
                setDrink={setDrink}
                Put={Put}

              />
            </div>
            </div>
        <div>
        </div>

      </div>
      </div>
      </div>
  )
}
