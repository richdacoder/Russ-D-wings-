"use client";

import { useState, useEffect } from "react";

/*
- create construct varibales
- make GET request for menu and availablity
- make timslots display for sameday
- make menu display
- put them in the input with onchange
- put them in an object
- handle submit
-----------------------------------------

for catering use type to differient in code base all coding logic for catering done
on next and express route

*/
export default function Order(){
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [dish, setDish] = useState("");
  const [total, setTotal] = useState(0);
  const [quantity, setQuantity] = useState(1);





return(
  <div>
    <form>


    </form>
  </div>
)
}
