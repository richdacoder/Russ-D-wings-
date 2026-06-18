"use client";

import { useState, useEffect } from "react";
import Get from "../../../../lib/get.js";

/*
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
  const [quantity, setQuantity] = useState(1);
  const [formData, setFormData] = useState({})
  const [menu, setMenu] = useState([]);
  const [list, setList] = useState(["main", "side", "drink"]);

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

  const sortByType = menu.map((item, index) => {

  })



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

          {
            menu.map((item, index) => {
              console.log('item?', item);
            return <div>
            <div key={item.id || item.id || item.dish || index} >{item.dish}</div>
            </div>
            }
            )
          }

            <div>
            <h2> Main </h2>
            <button
            type="button"
            onClick={()=> { setQuantity( quantity + 1)} }
            >+</button>
            <label>{quantity}</label>
            <button>-</button>
            </div>

            <div>
            <h3> Side </h3>
            </div>

            <div>
            <h4> Drink </h4>
            </div>


      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
)
}
