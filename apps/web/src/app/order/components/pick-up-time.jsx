"use client"

import {useState} from "react";

export default function PickUpTime({times, TimeFormat, blockTimes}){
  // const timesObject =
  // console.log('times on page', TimeFormat(times?.[0]?.start_time));

  const [ hours, setHours ] = useState([]);
  const time = times;


  console.log('time:', time, times);
  console.log('map() sent to timeformat time page', times.map( time => TimeFormat(time.start_time))[0]);//TimeFormat(time.start_time)
  console.log('first item:', times?.[0]);
  console.log('start_time:', times?.[0]?.start_time);

    /*
    - convert to eastern
    - cinvert to display
    - mAKE TIME between start and end time

    seperate
    - function that creates loop numbers through start and end times

    11/3/26
    - get the hours xxx
    - make a list between start and end xxx
    - in nonactive times must time should be prevented displayed
    (create condidtion)
    - put it in bubble or slot

    */

    //const hourMaker = () => {

          const start = time[0]?.start_time;
      const end = time[0]?.end_time;
      const startHour = new Date(start).getHours();
      const endHour = new Date(end).getHours();




      const availableHours = Array.from({length: Math.ceil(endHour - startHour)}, (_, i) => i + startHour);


      console.log('availableHours', availableHours);

      console.log('start and end', startHour, endHour);

  //}

  return(
    <div>
      <label>Time</label>
      <input
      type="time"
      min={startHour}
      />
    </div>
  )
};
