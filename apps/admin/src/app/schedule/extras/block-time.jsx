"use client";

export default function BlockTime({ConvertToEastern, blockTime, TimeFormat}){
  console.log('block time', blockTime)
return(
  <div className="flex justify-center " >
    <div >
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
          <p key={index}> {TimeFormat(time.end_time)} </p>
        ))
      }
    </div>
  </div>
)
}
