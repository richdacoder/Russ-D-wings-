"use client"

import {useState} from "react";

export default function PickUpTime({times, TimeFormat, blockTimes, ConvertToEastern, bungee}){

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



    /*
    - convert to eastern
    - cinvert to display
    - mAKE TIME between start and end time

    seperate
    - function that creates loop numbers through start and end times

    11/3/26
    create array where the start and end hours are from scheduled start and end with
    minutes going up by 15 xx
    - get the hours xxx
    - make a list between start and end xxx
    - create blocktimesxx
    - compare the times arry and blocktimes arry (add minutes to times)
    - make it an array xx
    - in nonactive times must time should be prevented displayedxx
    - displayxx
    (create condidtion)
    - put it in bubble or slotxx

    11/5/26
    - design submit buttonxx
    - build phone formatxxx
    - make popup when someone click add to cartxx
    - make phone number and email type for inputxxx
    - fixed inputxxx
    - make time light up onclick for phone
    - design admin layout
    - confirmiation page

    */


  return(<>
  <div className={`${bungee.className} flex justify-center mt-3 mb-10 text-xl`}>
    <label>Choose a Pick Up Time</label>
  </div>
    <div className="grid grid-cols-4 ">
      {
        formattedAvailableTimes.map((time, i) => (
            <button type="button" className="flex justify-evenly mb-5 mx-2 border rounded-lg
            bg-white/15
              [box-shadow:0_0_5px_#fff,0_0_1px_#fff,0_0_1px_#ff2d2d,0_0_4px_#ff2d2d,0_0_10px_#ff2d2d]
              hover:bg-[#e02626]
              active:bg-[#e02626]"
             key={i}>
              {TimeFormat(time)}
            </button>

        ))
      }
    </div>
    </>
  )
};
