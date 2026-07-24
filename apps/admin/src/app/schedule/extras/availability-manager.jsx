"use client";

import {useState, useEffect} from "react";

/*
objective
- add delete make sure timeslot exist when save
- add post
- onclick will have handle submit


*/

export default function AvailabilityManager({onDelete, onPost, timeSlot}){
  console.log('working child page', timeSlot, timeSlot.id);
console.log('delete on child page', onDelete );
  return(
    <div>
      <h1>Saving these changes will replace your existing available time slots. Do you want to continue?</h1>
           <button type="button" onClick={() => onDelete('availability', timeSlot.id)}>Continue</button>
           <button type="button">Cancel</button>

    </div>
  )
}
