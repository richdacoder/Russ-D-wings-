"use client";

import {useState, useEffect} from "react";

/*
objective
- add delete make sure timeslot exist when save
- add post
- onclick will have handle submit


*/

export default function AvailabilityManager({onDelete, onPost, timeSlot, setContinueSubmit}){
  return(
    <div>
      <h1>Saving these changes will replace your existing available time slots. Do you want to continue?</h1>
           <button type="button" onClick={() => {setContinueSubmit(true);
            onDelete('availability', timeSlot.id)
           }}>Continue</button>
           <button type="button">Cancel</button>

    </div>
  )
}
