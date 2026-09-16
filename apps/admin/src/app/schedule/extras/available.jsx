"use client";

import { useEffect } from 'react';

/*
9/12/26
- delete all unwanted time slots


*/

export default function Available({timeSlot, setTimeSlot, ConvertToEastern, TimeFormat, Delete}){
  console.log('time slot in available pag', timeSlot[0]?.start_time);


  useEffect(async () => {
  timeSlot.forEach((value, index) =>{
  console.log('value time',value.id, 'index', index);
  if( index !== 0){
    Delete('availability', value.id );
  };
});

 setTimeSlot(prev => prev.filter((value, index) => index === 0));
  },
  []
);

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
