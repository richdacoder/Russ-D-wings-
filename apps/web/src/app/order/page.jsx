"use client";

import { useState, useEffect } from "react";
import Get from "../../../../lib/get.js";
import Cart from "./components/cart.jsx";
import PickUpTime from "./components/pick-up-time.jsx";
import TimeFormat from "../../../../lib/time-format/display-time.js";
import ConvertToEastern from "../../../../lib/time-format/convert-to-eastern.js";
import PopUp from "./components/pop-up.jsx";
import { Bungee } from "next/font/google";
import "./../globals.css";



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
- we want to show all the times thats not block timexxx
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
  const [blockTimes, setBlockTimes] = useState([]);
  const [itemName, setItemName] = useState("");
  const [showElement, setShowElement] = useState("");


  useEffect( () => {
    async function getOrder(){
      const dataArray = await Get("menu");
      const getTimes = await Get("availability");
      setMenu(dataArray.filter(dish => dish.stock));
      //.filter(dish => )
      setTimes(getTimes.filter(time => time.is_active));
      setBlockTimes(getTimes.filter(time => !time.is_active));
    }
    const timer = setTimeout(() => {
      setItemName("");
    }, 3000);
    timer

    getOrder();
  },
  [itemName]
  );

console.log('check stock in menu',menu);

  const phoneNumerFormatter = (number) => {
      let digits = number.replace(/\D/g, "").substring(0,10);
      if(digits.length <= 3) return setPhone(digits);
      if(digits.length <= 6) return setPhone(`(${digits.slice(0,3)})${digits.slice(3)}`);

    return setPhone(`(${digits.slice(0,3)})${digits.slice(3,6)}-${digits.slice(6)}`);
  }


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
    return menu.map((item, index) => {

    const currentQtty = itemQuantity[item.id] || 1;
    if (type === item.category)

    return <div className=" border border-white/20 bg-white/5 transition
    hover:[box-shadow:0_0_5px_#fff,0_0_10px_#fff,0_0_20px_#ff2d2d,0_0_40px_#ff2d2d,0_0_80px_#ff2d2d]
    p-4 mt-5 mb-5 w-full rounded-xl"
    key={item.id}>
     <div className="flex item-start justify-between gap-4
     text-lg semibold capitalize">
     {item.dish}
     </div>
      <div>
        <p className="font-sans mt-2 text-sm text-white/70 capitalize">{item.description}</p>
      </div>
            <div>
              <p className="font-sans flex item-start justify-between gap-4
              text-lg font-bold">${item.price} </p>
            </div>
            <div className="flex items-center rounded-full mr-19 border border-white/30">
                     <button
        className="w-8 h-8 rounded-full hover:bg-white/10"
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
       <label
        className="w-8 text-center"

       >{currentQtty}</label>
                            <button
       className="w-8 h-8 rounded-full hover:bg-white/10"
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
              value={item.dish}
              className="rounded-full mt-2
              bg-[#ff2d2d] px-4 py-2 text-sm font-semibold transition hover:bg-[#e02626] active:scale-95"
                type="button"
                onClick={(e) => {
                  setAddToCart(prevCart => {
                    const matchId = prevCart.some(obj => obj.id === item.id);
                    if(matchId){
                      return prevCart;
                    }
                    console.log('inside function item.dish', item.dish);
                    setItemName(e.target.value)
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


const classNameMenu =`${bungee.className} flex justify-center text-xl font-bold mt-5 [text-shadow:0_0_5px_#fff,0_0_10px_#fff,0_0_20px_#ff2d2d,0_0_40px_#ff2d2d,0_0_80px_#ff2d2d]`;

const change = (k,v) => {
 k === 'First Name'? setFirstName(v) :
  k === 'Last Name'? setLastName(v) :
  k === 'Email'? setEmail(v) : "";
}

const OrderButton = () => {
  return(<button
    type="submit"
    className={`${bungee.className} border p-4 text-lg rounded-md bg-[#ff2d2d]/70
    hover:[box-shadow:0_0_5px_#fff,0_0_10px_#fff,0_0_20px_#ff2d2d,0_0_40px_#ff2d2d,0_0_80px_#ff2d2d]
    transition-shadow duration-300 col-start-2 row-start-2`}
  >
        Order
      </button>)
}

return(
  <div>
    <PopUp
      showElement={showElement}
      addToCart={addToCart}
      itemName={itemName}
      menu={menu}
      bungee={bungee}
    />
    <form className={` md:grid md:grid-cols-3 gap-3`}>
      <div className="col-start-2 ">
      {
        ['First Name', 'Last Name', 'Phone', 'Email'].map( (field) =>(
          <div className="flex flex-col w-full text-xl font-bold mt-5" key={field}>
            <label className={`${bungee.className} mx-auto
            [text-shadow:0_0_5px_#fff,0_0_10px_#fff,0_0_20px_#ff2d2d,0_0_40px_#ff2d2d,0_0_80px_#ff2d2d]`}> {field} </label>
            <input
            type={field === 'Phone'? 'tel': field}
            className="bg-white/5 border border-white/50 rounded-md mt-2 w-[90%] sm:w-full mx-auto"
            onChange={e => field === 'Phone'? phoneNumerFormatter(e.target.value): change(field,e.target.value) }
            value={field === 'Phone'?
            phone : field === 'Email'?
             email : field.split(" ")[0] === "First"?
             firstName : field.split(" ")[0] === "Last"?
             lastName : ""
              }
            required/>
          </div>
         ) )
      }
                  <div className="hidden md:flex justify-center md:mt-5">
            <OrderButton />
            </div>

      </div>

      <div className="col-start-3">
      <div>
        <h1 className={`${bungee.className} flex justify-center text-4xl mt-10
        [text-shadow:0_0_5px_#fff,0_0_10px_#fff,0_0_20px_#ff2d2d,0_0_40px_#ff2d2d,0_0_80px_#ff2d2d]
        `}>
          Menu
        </h1>

        <div>
        <h2 className={classNameMenu}> Main </h2>
            <div className="grid grid-cols-2 gap-4">
            {sortByType('main')}
            </div>
            </div>

            <div>
              <h3 className={classNameMenu} > Sides </h3>
              <div className="grid grid-cols-2 gap-4">
              {sortByType('side')}
              </div>
            </div>

            <div>
              <h4 className={classNameMenu} > Drinks </h4>
              <div className="grid grid-cols-2 gap-4">
              {sortByType('drink')}
              </div>
            </div>
            </div>
            </div>

            <div className="col-start-1 row-start-1">
            <div>
              <Cart
                addToCart={addToCart}
                setAddToCart={setAddToCart}
                itemQuantity={itemQuantity}
                setItemQuantity={setItemQuantity}
              />
            </div>

            <div>
              <h6 className={`${bungee.className} mt-20 mb-15 flex justify-center
                [text-shadow:0_0_5px_#fff,0_0_10px_#fff,0_0_20px_#ff2d2d,0_0_40px_#ff2d2d,0_0_80px_#ff2d2d]
                text-4xl font-bold mt-10`}>Pick up time</h6>
               <PickUpTime
               TimeFormat={TimeFormat}
               times={times}
               blockTimes={blockTimes}
               ConvertToEastern={ConvertToEastern}
               bungee={bungee}
               />
              <input/>
            </div>
            </div>
            <div className="md:hidden flex justify-center">
            <OrderButton />
            </div>
  </form>
  </div>
)
}
