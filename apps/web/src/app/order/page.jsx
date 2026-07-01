"use client";

import { useState, useEffect } from "react";
import Get from "../../../../lib/get.js";
import Cart from "./components/cart.jsx";

/*
*** each function gets own file
- seperate items by types xxx
- make ammount and subtract with and total (create cart component)
(send menu, send list)
- create construct varibales
- make GET request for menu and availablity <<<<<<
- make timslots display for sameday
- make menu display
- put them in the input with onchange
- put them in an object
- handle submit


- create array name, email,
-----------------------------------------

for catering use type to differient in code base all coding logic for catering done
on next and express route

*/

export default function Order(){
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [dish, setDish] = useState("");
  const [side, setSide] = useState("");
  const [drink, setDrink] = useState("");
  const [total, setTotal] = useState(0);
  const [pickUpTime, setPickUpTime] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [itemQuantity, setItemQuantity] = useState({})
  const [formData, setFormData] = useState({});
  const [menu, setMenu] = useState([]);
  const [list, setList] = useState(["main", "side", "drink"]);
  const [addToCart, setAddToCart] = useState([]);

  useEffect( () => {
    async function getMenu(){
      const dataArray = await Get("menu");
      setMenu(dataArray);
      console.log('here is data array',  dataArray);
    }
    getMenu();
  },
  []
  );

  console.log('item quantitiy', itemQuantity);

  console.log('testing test menu', menu.map((i) => { return i }));
  console.log('list', typeof list);

  const changeType = (field) => {
    if(field !== 'Phone' && field !== 'Email'){
             return "text"
            } else if(field === 'Phone'){
              return "tel"
  } else {
    return "email"
  }
  }

  console.log('test click addtocart', addToCart);

  const sortByType = (type) => {
    console.log('type', type);
    return menu.map((item, index) => {

    const currentQtty = itemQuantity[item.id] || 0;
    console.log('currentQtty', currentQtty );
    console.log('itemQuantity', itemQuantity);
    console.log('item category', item.category);

    if (type === item.category)

    return <div
    key={item.id}>
      {item.dish}
                  <button
            type="button"
            onClick={()=> {
              setItemQuantity(prev => ({
                ...prev,
                [item.id]: currentQtty + 1
              }))
            } }
            >+</button>
            <label
            >{currentQtty}</label>
            <button
            type="button"
            onClick={() => { setItemQuantity(prev => ({
              ...prev,
              [item.id]: currentQtty > 1 ? currentQtty - 1 : 0
            }))}}
            >-</button>
            <div>
              <p>${item.price} </p>
            </div>
            <div>
              <button
              value={item}
                type="button"
                onClick={() => { console.log('button clicked'), setAddToCart( JSON.stringify(item)) } }
                >
                Add To Cart
              </button>
            </div>
    </div>
  })
}


  console.log(changeType("Email"));
console.log(changeType("Phone"));
console.log(changeType("First Name"));


return(
  <div>
    <form >
      {
        ['First Name', 'Last Name', 'Phone', 'Email'].map( (field) =>(
          <div key={field}>
            <label> {field} </label>
            <input
            type={field}
            required/>
          </div>
         ) )
      }

      <div>
        <h1>
          Menu
        </h1>
            <div>
            <h2> Main </h2>
            {sortByType('main')}

            </div>

            <div>
            <h3> Side </h3>
            {sortByType('side')}
            </div>

            <div>
            <h4> Drink </h4>
            {sortByType('drink')}

            </div>

            <div>
              <Cart
              menu={menu}
              />
              <h5>Total Amount</h5>
            </div>

            <div>
              <h6>Pick up time</h6>
              <input/>
            </div>


      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
)
}
