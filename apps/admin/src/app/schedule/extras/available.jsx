"use client";

export default function Available({timeSlot, ConvertToEastern}){
  console.log('time slot', timeSlot);
return(
  <>
  <div>
    <h1>Start Time </h1>
      {timeSlot.map((time, index) =>(
        <p key={index}>{ConvertToEastern(time.start_time, true)}</p>
      )
      )}
          <h2>End Time </h2>
      {timeSlot.map((time, index) =>(
        <p key={index}>{ConvertToEastern(time.end_time, true)}</p>
      )
      )}

  </div>
  </>
)
}
