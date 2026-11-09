"use client";

import { useEffect } from 'react';

/*
9/12/26
- delete all unwanted time slots


*/

export default function Available({timeSlot, setTimeSlot, ConvertToEastern, TimeFormat, Delete}){
  console.log('time slot in available page', timeSlot[0]?.start_time);

const startEnd = 'flex flex-col justify-center';
const centerOnFlex = 'flex justify-center';

return(
  <>
  <div className='grid grid-cols-2'>
    <div className={startEnd}>
    <h1 className={centerOnFlex}>Start Time </h1>
      {timeSlot.map((time, index) =>(
        <p key={index} className={centerOnFlex}>{TimeFormat(time.start_time)}</p>
      )
      )}
      </div>
          <div className={startEnd}>
          <h2 className={centerOnFlex}>End Time </h2>
      {timeSlot.map((time, index) =>(
        <p key={index} className={centerOnFlex}>{TimeFormat(time.end_time)}</p>
      )
      )}
      </div>

  </div>
  </>
)
}
