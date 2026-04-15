"use client";

import {useState, useEffect} from "react";
import Post from "../../../lib/post.js";

export default function Schedule(){
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const actualTime = (t) => {
     const [y, m, d] = new Date()
     .toISOString()
     .split("T")[0]
     .split("-")
     .map(Number);

     const [hour, min] = t.split(":").map(Number);
     return new Date(y,m - 1,d,hour, min);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  const timeBlocks = {
    start_time: actualTime(startTime),
    end_time: actualTime(endTime)
  }
  console.log(timeBlocks);
  await Post(timeBlocks);
  setStartTime("");
  setEndTime("");
}
/*
- most likely a form

- choose a time block between certain times
  in the same day(since thats what request is for
    creating a weekly schedule is kinda redondent)

 - how to create a time listing selection

 *** make the time legit data
 - make the time not able to over lap each other
 - the timing is for todayxxx
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
          min={startTime}
          onChange={(e) => {setEndTime(e.target.value)}}
        />
      </div>

      <button type="submit"> Add Time Block </button>
      </form>

    </div>
  )
}
