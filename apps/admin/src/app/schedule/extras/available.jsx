"use client";

import { useEffect } from 'react';

/*
9/12/26
- delete all unwanted time slots


*/

export default function Available({timeSlot, setTimeSlot, ConvertToEastern, TimeFormat, Delete}){
  console.log('time slot in available page', timeSlot[0]?.start_time);



  timeSlot.forEach((value, index) =>{
  console.log('value time',value.id, 'index', index);
  if( index !== 0){
    // Delete('availability', value.id );
      console.log('use effect timslot working');
  };
});

 setTimeSlot(prev => prev.filter((value, index) => index === 0));

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
