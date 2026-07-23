"use client";

import {useState, useEffect} from "react";

/*
objective
- add delete when save
- add post

*/

export default function AvailabilityManager({onDelete, onPost}){

  return(
    <div>
      <h1>Saving these changes will replace your existing available time slots. Do you want to continue?</h1>
           <button type="button">Continue</button>
           <button type="button">Cancel</button>

    </div>
  )
}
