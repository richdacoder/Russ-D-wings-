"use client";

export default function BlockTime({ConvertToEastern, blockTime}){
  console.log('block time', blockTime)
return(
  <div>
    {
    blockTime.map((time, index) => (
      <p key={index}> {time.start_time} </p>
    ))
    }
  </div>
)
}
