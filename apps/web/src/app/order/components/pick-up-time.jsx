"use client"

import {useState} from "react";

export default function PickUpTime({times, TimeFormat, blockTimes, ConvertToEastern}){

  const startHour = new Date(times[0]?.start_time).getHours();
  const endHour = new Date(times[0]?.end_time).getHours();

const availableHours = Array.from({length: Math.ceil(endHour - startHour)}, (_, i) => i + startHour)
  .flatMap(hour => [
    `${String(hour).padStart(2,'0')}:00:00`,
    `${String(hour).padStart(2,'0')}:15:00`,
    `${String(hour).padStart(2,'0')}:30:00`,
    `${String(hour).padStart(2,'0')}:45:00`
  ]
  );

  const formattedAvailableTimes = blockTimes.flatMap(time =>
    availableHours.filter(hour => hour < ConvertToEastern(time.start_time, false) || hour > ConvertToEastern(time.end_time, false)

    ))
  ;

  console.log('new times that are tiimes', times, startHour  );


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

    formattedAvailableTimes.map((time) => (
      console.log('chekc if format time time time working', TimeFormat(time))
    ))



      console.log('availableHours', availableHours);

      // console.log('start and end', startHour, endHour);

          // const hourMaker = formattedBlockTimes.map((time) => {


          // })

  return(
    <div>
      <label>Time Slots</label>
      {
        formattedAvailableTimes.map((time, i) => (
            <div key={i}>
              {TimeFormat(time)}
            </div>

        ))
      }
    </div>
  )
};
