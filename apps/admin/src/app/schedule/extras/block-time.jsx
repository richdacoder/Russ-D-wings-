"use client";

export default function BlockTime({ConvertToEastern, blockTime}){
  console.log('block time', blockTime)
return(
  <div>
    <div>
    <h1>Start Time</h1>
    {
    blockTime.map((time, index) => (
      <p key={index}> {time.start_time} </p>
    ))
    }
    </div>
    <div>
      <h2> End Time </h2>
      {
        blockTime.map()
      }
    </div>
  </div>
)
}
