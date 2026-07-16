"use client";

import {useEffect, useState} from "react";

export default function TimeDisplay({get}){
  const [time, setTime] = useState("");
useEffect(() => {
  const data = get();
    console.log('time display', data);

});
return(
<div>working time display </div>
)
}
