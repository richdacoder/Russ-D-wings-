"use client";

import {useState, useEffect} from "react";
import Post from "../../../../lib/post.js";
import Get from "../../../../lib/get.js";
import Put from  "../../../../lib/put.js";
import Delete from "../../../../lib/delete.js";
import TimeDisplay from "./extras/time-display.jsx";
import AvailabilityManager from "./extras/availability-manager.jsx";
import ConvertToEastern from "../../../../lib/time-format/convert-to-eastern.js";
import TimeFormat from "../../../../lib/time-format/display-time.js";
import RemoveTimeSlot from "../../../../lib/time-slot-actions/remove-time-slot.js"
import Available from "./extras/available.jsx";
import BlockTime from "./extras/block-time.jsx";



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

  const overlapCheck = blockTime.some(time =>  {
        const easternStart = ConvertToEastern(time.start_time, false);
        const easternEnd = ConvertToEastern(time.end_time, false);


      const existingStart = easternStart.split(".")[0].slice(0,5);
      const existingEnd = easternEnd.split(".")[0].slice(0,5);

   return( endTime > existingStart &&
    startTime < existingEnd )
  });


  console.log('isactive?????', isActive);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!startTime || !endTime) return;

    let submit = continueSubmit;

        /*
        - if isactive
        - pop up availmanager if if timeslot exist
        - if not isactive
        - pop up availmanager if blocktime overlap




        */

      if(isActive && timeSlot){
         setShowAvailabilityManager(true);//send to child page to put it back to false
    } ;
    if (!isActive && overlapCheck ){
               setShowAvailabilityManager(true);
    };
    console.log('overlap', overlapCheck);
    if(!overlapCheck){
      submit = true;
      setContinueSubmit(true);
    };


    if(!continueSubmit){
      return ;
        } ;

  const timeBlocks = {
    start_time: actualTime(startTime),
    end_time: actualTime(endTime),
    type:'availability',
    is_active: isActive
  }

  const newTimeBlocks = await Post(timeBlocks);
  const realBlock = newTimeBlocks.filter(block => !block.is_active);
  const realSlot = newTimeBlocks.filter(time => time.is_active);

if(realBlock[0]){
  setBlockTime(prev =>[...prev, realBlock[0]]);
}

  console.log('new time block from database:', newTimeBlocks[0], 'time blocks', timeBlocks);

  RemoveTimeSlot(timeSlot, setTimeSlot);
  if(realSlot[0]){
  setTimeSlot([realSlot[0]]);
}

  setStartTime("");
  setEndTime("");
  setContinueSubmit(false);
  setShowAvailabilityManager(false);

}


const timeInputs = 'border h-10 my-3 appearance-none w-2/4 rounded-md flex justify-center mx-auto';
const timeLabels = 'text-sm flex justify-center mx-auto';
const centerOnFlex = 'flex justify-center';


// console.log('delete on parent page', Delete)
/*
- most likely a form

- choose a time block between certain times
  in the same day(since thats what request is for
    creating a weekly schedule is kinda redondent)

 - how to create a time listing selection

 *** make the time legit data
 - make the time not able to over lap each other
 - the timing is for todayxxx

8/20/26
- make seperate page to display time and blck time


 **
 semnd confirmation of meal and time
*/
  return(
    <div>
      <h1 className="flex justify-center text-4xl my-5 italic">
        Create Time Blocks
      </h1>
      <form className="flex w-full justify-center" onSubmit={handleSubmit}>
        <div className="flex justify-center flex-col w-3/4 ">
      <div>
        <label
         className={timeLabels}
        >
          Start Time
        </label>
        <input
          className={timeInputs}
          type="time"
          value={startTime}
          onChange={(e) => {setStartTime(e.target.value)}}
       />
      </div>
      <div>
        <label
         className={timeLabels}
        >
          End Time
        </label>
        <input
          className={timeInputs}
          type="time"
          value={endTime}
          min={startTime}
          onChange={(e) => {setEndTime(e.target.value)}}
        />
      </div>
      <div >
        <select type="button"
        className="border mx-auto flex justify-center rounded-sm "
          onClick={(e) => setIsActive(e.target.value === "available")}
         >
          {/* {isActive? 'Available Time' : 'Block Time'} */}
          <option value="available" >Available Time</option>
          <option value="block">Block Time</option>

          </select>
      </div>
      <div>
      <button type="submit" className="border p-5 text-lg rounded-md bg-red-900 my-5 text-white hover:bg-black/20 flex justify-center mx-auto"> Add Time Block </button>
      </div>
            { showAvailabilityManager && <AvailabilityManager
      timeSlot={timeSlot}
      onDelete={Delete}
      onPost={Post}
      setContinueSubmit={setContinueSubmit}
      handleSubmit={handleSubmit}
      ConvertToEastern={ConvertToEastern}
      isActive={isActive}
      blockTime={blockTime}
      setBlockTime={setBlockTime}
      startTime={startTime}
      endTime={endTime}
      setShowAvailabilityManager={setShowAvailabilityManager}
      />}
      </div>

      </form>
      <TimeDisplay
      startTime={showStartTime}
      endTime={showEndTime}

        />
        <div>
          <div>
            <h1 className="flex justify-center text-3xl my-4">Schedule</h1>
            <Available
            timeSlot={timeSlot}
            setTimeSlot={setTimeSlot}
            ConvertToEastern={ConvertToEastern}
            TimeFormat={TimeFormat}
            Delete={Delete}
            />
          </div>
          <div>
            <h2>Block Times</h2>
            <BlockTime
            ConvertToEastern={ConvertToEastern}
            blockTime={blockTime}
            setBlockTime={setBlockTime}
            TimeFormat={TimeFormat}
            Delete={Delete}
            />
          </div>
        </div>


    </div>
  )
}
