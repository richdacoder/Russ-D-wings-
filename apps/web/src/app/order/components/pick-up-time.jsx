"use client"

import {useState} from "react";

export default function PickUpTime({times, TimeFormat, blockTimes, ConvertToEastern}){
  // const timesObject =
  // console.log('times on page', TimeFormat(times?.[0]?.start_time));

  const [ hours, setHours ] = useState([]);
  const time = times;

  const start = time[0]?.start_time;
  const end = time[0]?.end_time;
  const startHour = new Date(start).getHours();
  const endHour = new Date(end).getHours();

const availableHours = Array.from({length: Math.ceil(endHour - startHour)}, (_, i) => i + startHour)
  .flatMap(hour => [
    `${String(hour).padStart(2,'0')}:15:00`,
    `${String(hour).padStart(2,'0')}:30:00`,
    `${String(hour).padStart(2,'0')}:45:00`
  ]
  );

  // const block = blockTimes.map(time =>  ConvertToEastern(time.start_time, false) )
// console.log('BLOCK', block)
// 11:15 should be missing from array when tested on console
  const formattedStartBlockTimes = availableHours.map(hour =>
    blockTimes.map(time => ConvertToEastern(time.start_time, false)

    // === hour.slice(0,2)) &&
    // time.slice(3,8) > hour.slice(3,8)
    ))
  ;
  const formattedEndBlockTimes = blockTimes.map(time => ConvertToEastern(time.end_time, false)
    .slice(3,8)
  );

  console.log('blockTimes START FORAMted', formattedStartBlockTimes , 'blockTimes END FORAMted', formattedEndBlockTimes);


    /*
    - convert to eastern
    - cinvert to display
    - mAKE TIME between start and end time

    seperate
    - function that creates loop numbers through start and end times

    11/3/26
    create array where the start and end hours are from scheduled start and end with
    minutes going up by 15
    - get the hours xxx
    - make a list between start and end xxx
    - create blocktimesxx
    - compare the times arry and blocktimes arry (add minutes to times)
    - make it an array
    - in nonactive times must time should be prevented displayed
    - display
    (create condidtion)
    - put it in bubble or slot

    */





      console.log('availableHours', availableHours);

      console.log('start and end', startHour, endHour);

          // const hourMaker = formattedBlockTimes.map((time) => {


          // })

  return(
    <div>
      <label>Time</label>
      <input
        type="time"
      />
    </div>
  )
};
