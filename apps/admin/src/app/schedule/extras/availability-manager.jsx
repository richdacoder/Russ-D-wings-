"use client";

import {useState, useEffect} from "react";

/*
objective
- add delete make sure timeslot exist when save.,
- add post
- onclick will have handle submit

- creat function where shows which id is being overlapped


*/

export default function AvailabilityManager({
  onDelete, onPost, timeSlot, setContinueSubmit,
  handleSubmit, isActive, blockTime, setBlockTime,
  startTime, endTime, ConvertToEastern
}){

  const overLapTimes = blockTime.filter(time =>  {
            const easternStart = ConvertToEastern(time.start_time, false);
            const easternEnd = ConvertToEastern(time.end_time, false);


          const existingStart = easternStart.split(".")[0].slice(0,5);
          const existingEnd = easternEnd.split(".")[0].slice(0,5);

          console.log(' exist times start and end', existingStart, existingEnd );
          console.log('starttime then endtime', startTime, endTime);

    return endTime > existingStart && startTime < existingEnd;
  } );

  /*
  - use overlap
  - set new blocktime array in setblocktime
  - new array for blocktime where evver there isnt useoverlap time.id


  */

  return(
    <div>
      <h1>
  {isActive
    ? "Saving these changes will replace your existing available time slots. Do you want to continue?"
    : "Saving these changes will replace the existing overlapping time block(s). Do you want to continue?"
  }
</h1>
           <button type="submit" onClick={() => {setContinueSubmit(true);
            if(isActive){
              onDelete('availability', timeSlot[0].id)
            } else{
              console.log('stops here before overlap delete', overLapTimes);
              overLapTimes.forEach(time => onDelete('availability', time.id));
           };
           }}
           onSubmit={handleSubmit}
           >Continue</button>
           <button type="button">Cancel</button>

    </div>
  )
}
