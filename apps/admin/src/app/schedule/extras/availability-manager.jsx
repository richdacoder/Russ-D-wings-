"use client";

import {useState, useEffect} from "react";

/*
objective
- add delete make sure timeslot exist when save.,
- add post
- onclick will have handle submit

- creat function where shows which id is being overlapped


*/

export default function AvailabilityManager({onDelete, onPost, timeSlot, setContinueSubmit, handleSubmit, isActive, blockTime, startTime, endTime}){

  const overLapTimes = blockTime.filter(time =>  endTime > time.start_time && startTime < time.end_time );
  console.log('overlap times', overLapTimes)

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
              overLapTimes.forEach(time => onDelete('availability', time.id))
           };
           }}
           onSubmit={handleSubmit}
           >Continue</button>
           <button type="button">Cancel</button>

    </div>
  )
}
