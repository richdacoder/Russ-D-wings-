"use client";

import { useEffect } from "react";

export default function BlockTime({ConvertToEastern, blockTime, setBlockTime, TimeFormat, Delete}){
  console.log('block times', blockTime);
return(
  <div className="flex justify-center " >
    <div>
    <h1>Start Time</h1>
    {
    blockTime.map((time, index) => (
      <p key={index}> {TimeFormat(time.start_time)} </p>
    ))
    }
    </div>
    <div>
      <h2> End Time </h2>
      {
        blockTime.map((time, index) => (
          <div key={index} className="flex flex-row">
          <p> {TimeFormat(time.end_time)} </p>
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
)
}
