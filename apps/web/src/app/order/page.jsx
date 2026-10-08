"use client";

import { useState, useEffect } from "react";
import Get from "../../../../lib/get.js";
import Cart from "./components/cart.jsx";
import PickUpTime from "./components/pick-up-time.jsx"
import { Bungee } from "next/font/google";


/*
*** each function gets own file
- seperate items by types xxx
- make ammount and subtract with and total (create cart component)xx
(send menu, send list)
- create construct varibales
- make GET request for menuxxx and availablity <<<<<<
- make timslots display for sameday
- make menu displayxx
- put them in the input with onchangexxx
- put them in an objectxxx
- handle submit


- create array name, email,
-----------------------------------------


objective 7/13/26
- add time slots

for catering use type to differient in code base all coding logic for catering done
on next and express route

10/1/26
- we want to show all the times thats not block time
-

*/

const bungee = Bungee({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bungee",
});


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
  const [itemQuantity, setItemQuantity] = useState({});
  const [formData, setFormData] = useState({});
  const [menu, setMenu] = useState([]);
  const [list, setList] = useState(["main", "side", "drink"]);
  const [addToCart, setAddToCart] = useState([]);
  const [times, setTimes] = useState([]);

  useEffect( () => {
    async function getMenu(){
      const dataArray = await Get("menu");
      setMenu(dataArray);
    }
    getMenu();
  },
  []
  );

  const changeType = (field) => {
    if(field !== 'Phone' && field !== 'Email'){
             return "text"
            } else if(field === 'Phone'){
              return "tel"
  } else {
    return "email"
  }
  }


  const sortByType = (type) => {
    console.log('type', type);
    return menu.map((item, index) => {

    const currentQtty = itemQuantity[item.id] || 1;
    if (type === item.category)

    return <div className="flex flex-wrap border border-white"
    key={item.id}>
      {item.dish}
            <div>
              <p>${item.price} </p>
            </div>
            <div>
                     <button
       type="button"
       onClick={() => {
        setItemQuantity(prev => (
          {
            ...prev,
            [item.id]: currentQtty > 1? currentQtty -1 : 0
          }
        )
        )
       }
       }> - </button>
       <label>{currentQtty}</label>
                            <button
       type="button"
       onClick={() => {
        setItemQuantity(prev => ({
          ...prev,
          [item.id]: currentQtty + 1
        })
      );
       }}> + </button>
            </div>
            <div>
              <button
              value={item}
                type="button"
                onClick={() => {
                  console.log('button clicked'),
                  setAddToCart(prevCart => {
                    const matchId = prevCart.some(obj => obj.id === item.id);
                    if(matchId){
                      return prevCart;
                    }
                      return [...prevCart, item]

                 }
                )}
                    }
                >
                Add To Cart
              </button>
            </div>
    </div>
  })
}

const classNameMenu ="flex justify-center text-xl font-bold mt-5 [text-shadow:0_0_5px_#fff,0_0_10px_#fff,0_0_20px_#ff2d2d,0_0_40px_#ff2d2d,0_0_80px_#ff2d2d]";

console.log(changeType("Email"));
console.log(changeType("Phone"));
console.log(changeType("First Name"));


return(
  <div>
    <form className="flex flex-col items-center max-w-md w-full mx-auto">
      {
        ['First Name', 'Last Name', 'Phone', 'Email'].map( (field) =>(
          <div className="flex flex-col w-full text-xl font-bold mt-5" key={field}>
            <label className="mx-auto
            [text-shadow:0_0_5px_#fff,0_0_10px_#fff,0_0_20px_#ff2d2d,0_0_40px_#ff2d2d,0_0_80px_#ff2d2d]"> {field} </label>
            <input
            type={field}
            className="bg-white/5 border border-white/50 rounded-md mt-2 w-[90%] sm:w-full mx-auto"
            required/>
          </div>
         ) )
      }

      <div>
        <h1 className="flex justify-center text-4xl mt-10
        [text-shadow:0_0_5px_#fff,0_0_10px_#fff,0_0_20px_#ff2d2d,0_0_40px_#ff2d2d,0_0_80px_#ff2d2d]">
          Menu
        </h1>
            <div >
            <h2 className={classNameMenu}> Main </h2>
            {sortByType('main')}

            </div>

            <div>
            <h3 className={classNameMenu} > Side </h3>
            {sortByType('side')}
            </div>

            <div>
            <h4 className={classNameMenu} > Drinks </h4>
            {sortByType('drink')}

            </div>

            <div>
              <Cart
                addToCart={addToCart}
                setAddToCart={setAddToCart}
                itemQuantity={itemQuantity}
                setItemQuantity={setItemQuantity}
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
