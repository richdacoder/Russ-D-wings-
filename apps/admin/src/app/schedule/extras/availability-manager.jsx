"use client";

import {useState, useEffect} from "react";

/*
objective
- add delete make sure timeslot exist when save.,
- add post
- onclick will have handle submit

- creat function where shows which id is being overlapped

9/10/26
- cant delete multiple block times at once
- id = undefine chck why


*/

export default function AvailabilityManager({
  onDelete, onPost, timeSlot, setContinueSubmit,
  handleSubmit, isActive, blockTime, setBlockTime,
  startTime, endTime, ConvertToEastern, setShowAvailabilityManager
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

  9/12/26
  - check why availibile not deleting
  - create system where it deletes all other timeslots besides the latest one added



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
              console.log('before isactive delete');
              onDelete('availability', timeSlot[0].id)
            } else{
              console.log('stops here before overlap delete', overLapTimes);
              overLapTimes.forEach(time => { onDelete('availability', time.id);
              console.log('time id', time.id);
              }
          );

                        console.log('overlap times', overLapTimes)

            setBlockTime(prev => prev.filter(time => overLapTimes.every(ltime => time !== ltime)))

           };
           }}
           onSubmit={handleSubmit}
           >Continue</button>
           <button type="button" onClick={() => setShowAvailabilityManager(false)}>Cancel</button>

    </div>
  )
}
