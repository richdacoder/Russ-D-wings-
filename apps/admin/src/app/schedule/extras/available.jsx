"use client";

export default function Available({timeSlot, ConvertToEastern, TimeFormat}){
  console.log('time slot', timeSlot);


return(
  <>
  <div>
    <h1>Start Time </h1>
      {timeSlot.map((time, index) =>(
        <p key={index}>{TimeFormat(time.start_time)}</p>
      )
      )}
          <h2>End Time </h2>
      {timeSlot.map((time, index) =>(
        <p key={index}>{TimeFormat(time.end_time)}</p>
      )
      )}

  </div>
  </>
)
}
