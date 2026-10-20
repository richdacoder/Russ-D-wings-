"use client"


export default function PickUpTime({times, TimeFormat}){
  // const timesObject =
  // console.log('times on page', TimeFormat(times?.[0]?.start_time));

  console.log('times:', times);
  console.trace('timeformat time page', times.map( time => TimeFormat(time.start_time)));
console.log('first item:', times?.[0]);
console.log('start_time:', times?.[0]?.start_time);
    /*
    - convert to eastern
    - cinvert to display
    - mAKE TIME between start and end time


    */

  return(
    <div>
    {
      times.map((time, index) => {
        return <div><p>{time.id}</p></div>
      })
    }
    </div>
  )
};
