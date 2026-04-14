"use client";

import {useState, useEffect} from "react";

export default function Schedule(){
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  const timeBlocks = {
    start_time: startTime,
    end_time: endTime
  }
  console.log(timeBlocks);
  setStartTime("");
  setEndTime("");
}
/*
- most likely a form

- choose a time block between certain times
  in the same day(since thats what request is for
    creating a weekly schedule is kinda redondent)

 - how to create a time listing selection

 *** make handle submit and put values
*/
  return(
    <div>
      <h1>
        Create Time Blocks
      </h1>
      <form onSubmit={handleSubmit}>
      <div>
        <label>
          Start Time
        </label>
        <input
          type="time"
          value={startTime}
          onChange={(e) => {setStartTime(e.target.value)}}
       />
      </div>

      <div>
        <label>
          End Time
        </label>
        <input
          type="time"
          value={endTime}
          onChange={(e) => {setEndTime(e.target.value)}}
        />
      </div>

      <button type="submit"> Add Time Block </button>
      </form>

    </div>
  )
}
