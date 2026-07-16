"use client";

import {useEffect, useState} from "react";

export default function TimeDisplay({get}){
  console.log('time display');
  const [time, setTime] = useState("");

useEffect(() => {

  const data = get('availability');
    console.log('time display DATA', data);

});
return(
<div>working time display </div>
)
}
