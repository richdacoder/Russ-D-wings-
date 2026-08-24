"use client";

export default function Available({timeSlot}){
  console.log('time slot', timeSlot);
return(
  <>
  <div>
      {timeSlot.map((time, index) =>(
        <p key={index}>{time.start_time}</p>
      )
      )}
  </div>
  </>
)
}
