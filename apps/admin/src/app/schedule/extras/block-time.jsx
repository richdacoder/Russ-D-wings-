"use client";

import { useEffect } from "react";

export default function BlockTime({ConvertToEastern, blockTime, setBlockTime, TimeFormat, Delete}){
  console.log('block times ', blockTime);
return(
  <div className="">
  <div className="grid grid-rows-2" >
    <div className="grid grid-cols-2 ">
        <h1 className="grid justify-center">Start Time</h1>
         <h2 className="grid justify-center"> End Time </h2>
    </div>

    <div className="grid grid-cols-2">
    <div>
    {
    blockTime.map((time, index) => (
      <p key={index} className="grid justify-center"> {TimeFormat(time.start_time)} </p>
    ))
    }
    </div>
    <div>
      {
        blockTime.map((time, index) => (
          <div key={index} className="flex flex-row justify-center">
          <p> {TimeFormat(time.end_time)} </p>
          <p>ID:{time.id}</p>
          <button onClick={() => {
          Delete('availability', time.id)
          setBlockTime(prev => prev.filter(item => item.id !== time.id))
          }
          }>X</button>
          </div>
        ))
      }
    </div>
    </div>
  </div>
  </div>
)
}
