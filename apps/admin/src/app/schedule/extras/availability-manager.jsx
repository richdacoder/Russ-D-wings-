"use client";

import {useState, useEffect} from "react";

/*
objective
- add delete make sure timeslot exist when save.,
- add post
- onclick will have handle submit

- creat function where shows which id is being overlapped


*/

export default function AvailabilityManager({onDelete, onPost, timeSlot, setContinueSubmit, handleSubmit, isActive}){
  return(
    <div>
      <h1>
  {isActive
    ? "Saving these changes will replace your existing available time slots. Do you want to continue?"
    : "Saving these changes will replace the existing overlapping time block(s). Do you want to continue?"
  }
</h1>
           <button type="submit" onClick={() => {setContinueSubmit(true);
            isActive? onDelete('availability', timeSlot[0].id) : onDelete('availability', blockTime[0].id);
           }}
           onSubmit={handleSubmit}
           >Continue</button>
           <button type="button">Cancel</button>

    </div>
  )
}
