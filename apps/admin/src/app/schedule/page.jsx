"use client";

import {useState, useEffect} from "react";
import Post from "../../../../lib/post.js";
import Get from "../../../../lib/get.js";
import Delete from "../../../../lib/delete.js";
import TimeDisplay from "./extras/time-display.jsx";
import AvailabilityManager from "./extras/availability-manager.jsx";



/*
- get GET with import
- send endpoint through GET function
- plug return in a variable

button
- avaible and not avaible (toggle)
- when avaivle is active is true, when not availble thats the time block when not availble
- make update able to web
- make it that when is saves isactive is false
- web: time slots will appear for true(isactive)

handle submit
- check database if an available time exist
- if do pop up saying that time exist for the day and that if you save its replace current time
- create delete
*/
export default function Schedule(){
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [showStartTime, setShowStartTime] = useState([]);
  const [showEndTime, setShowEndTime] = useState([]);
  const [showAvailabilityManager, setShowAvailabilityManager] = useState(false);
  const [timeSlot, setTimeSlot] = useState([]);


  useEffect(() =>  {
        const loadData = async () =>{
  try{
  const data = await Get('availability');
      setShowStartTime(data.map(time => time.start_time));
      setShowEndTime(data.map(time => time.end_time));



  } catch(err){
    console.error(err)
  }
};    loadData();

}, []);


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
    if (!startTime || !endTime) return;

    if(isActive){
      console.log('if you save this youll be deleting current time');
      setShowAvailabilityManager(true);//send to child page to put it back to false
      return;
    }

    console.log('Post:', Post);
console.log('typeof Post:', typeof Post);

  const timeBlocks = {
    start_time: actualTime(startTime),
    end_time: actualTime(endTime),
    type:'availability',
    is_active: isActive
  }
  console.log(timeBlocks, 'is active', isActive);
  await Post(timeBlocks);
  console.log('after post')
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

-


 **
 semnd confirmation of meal and time
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
      <div>
        <button type="button" onClick={() => setIsActive(!isActive)} >{isActive? 'Available Time' : 'Block Time'}</button>
      </div>
      <button type="submit"> Add Time Block </button>
      </form>
      <TimeDisplay
      startTime={showStartTime}
      endTime={showEndTime}

        />

      { showAvailabilityManager && <AvailabilityManager
      onDelete={Delete}
      onPost={Post}
      />}

    </div>
  )
}
