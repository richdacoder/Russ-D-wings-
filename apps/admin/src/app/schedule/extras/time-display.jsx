"use client";

import {useEffect, useState} from "react";

export default function TimeDisplay({get}){
  console.log('time display');
  const [time, setTime] = useState("");

useEffect(() =>  {
  try{
    const loadData = async () =>{
  const data = await get('availability');
      console.log('time display DATA', data);

    }
    loadData();
  } catch(err){
    console.error(errr)
  }
}, []);
return(
<div>working time display </div>
)
}
