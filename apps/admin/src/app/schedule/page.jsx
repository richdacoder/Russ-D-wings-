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

7/28
- now that theres block time finsh logic that block time doesnt over lap each other
- make so that when showavailmanager is open you cant click isactive buttons



problem
there might always be time slot(delete all timeslots isactive===true )
object
strucuture
              xx  Add Time Block
                       │
                       ▼
            xx What type is it?
               /            \
              /              \
      xAvailability x       xx Break
     (is_active=true)   (is_active=false)
            │                 │
            ▼                 ▼
   Find existingxx       Find overlapping
    availability          break(s) (delete and replace)
            │                 │
            ├── None          ├── None
            │                 │
            ▼                 ▼
         POST row          POST row
            │                 │
            └──── Exists      └──── Overlap found
                     │                 │
                     ▼                 ▼
           Show confirmation    Show confirmation
                     │                 │
               Continue?        Continue?
                     │                 │
                     ▼                 ▼
              DELETE old row     DELETE overlapping row
                     │                 │
                     ▼                 ▼
                   POST             POST

*/
export default function Schedule(){
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [showStartTime, setShowStartTime] = useState([]);
  const [showEndTime, setShowEndTime] = useState([]);
  const [showAvailabilityManager, setShowAvailabilityManager] = useState(false);
  const [timeSlot, setTimeSlot] = useState([]);
  const [blockTime, setBlockTime] = useState([]);
  const [continueSubmit, setContinueSubmit] = useState(false);
  const [allTimes, setAllTimes] = useState([]);



  useEffect(() =>  {
        const loadData = async () =>{
  try{
  const data = await Get('availability');
      setAllTimes(data)
      setShowStartTime(data.map(time => time.start_time));
      setShowEndTime(data.map(time => time.end_time));
      setBlockTime(data.filter(time => !time.is_active))
      setTimeSlot(data.filter(time => time.is_active));


  } catch(err){
    console.error(err)
  }
};    loadData();

}, [continueSubmit]);

console.log('block time start time', blockTime.some(time =>  endTime > time.start_time && startTime < time.end_time ), ' active?', !isActive);

  const actualTime = (t) => {
     const [y, m, d] = new Date()
     .toISOString()
     .split("T")[0]
     .split("-")
     .map(Number);

     const [hour, min] = t.split(":").map(Number);
     return new Date(y,m - 1,d,hour, min);
  }

  const overlapCheck = blockTime.some(time =>  endTime > time.start_time && startTime < time.end_time );

const testOverLap = blockTime.map(time => {
  const [, start] = time.start_time.split("T")[1].split(":").slice(0, 2);
  const [day, end] = time.end_time;

  return {
    start,
    end,
    day
  };
});
console.log(testOverLap);



  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!startTime || !endTime) return;

    let submit = continueSubmit;
        console.log('before isactive', continueSubmit, 'submit', submit);

        /*
        - if isactive
        - pop up availmanager if if timeslot exist
        - if not isactive
        - pop up availmanager if blocktime overlap




        */

      if(isActive && timeSlot){
         setShowAvailabilityManager(true);//send to child page to put it back to false
         console.log('theres a time slot');
    } ;
    if (!isActive && overlapCheck ){
               setShowAvailabilityManager(true);
    };
    console.log('overlap', overlapCheck, 'test', testOverLap);
    if(!overlapCheck){
      submit = true;
      setContinueSubmit(true);
      console.log("after", continueSubmit);
    };

    console.log('before conitnue submit', continueSubmit, 'submit', submit);

    if(!continueSubmit){
      return ;
        } ;

        console.log('after conitnue submit', continueSubmit );

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
  setContinueSubmit(false);
  setShowAvailabilityManager(false);
}


console.log('delete on parent page', Delete)
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
        {/* <div>{timeSlot}</div> */}
        <button type="button" onClick={() => setIsActive(!isActive)} >{isActive? 'Available Time' : 'Block Time'}</button>
      </div>
      <button type="submit"> Add Time Block </button>

            { showAvailabilityManager && <AvailabilityManager
      timeSlot={timeSlot}
      onDelete={Delete}
      onPost={Post}
      setContinueSubmit={setContinueSubmit}
      handleSubmit={handleSubmit}
      isActive={isActive}
      blockTime={blockTime}
      startTime={startTime}
      endTime={endTime}
      />}

      </form>
      <TimeDisplay
      startTime={showStartTime}
      endTime={showEndTime}

        />


    </div>
  )
}
