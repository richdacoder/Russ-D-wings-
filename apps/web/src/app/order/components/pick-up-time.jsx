"use client"


export default function PickUpTime({times, TimeFormat}){
  // const timesObject =
  // console.log('times on page', TimeFormat(times?.[0]?.start_time));

  console.log('times:', times);
  console.trace('timeformat time page', times.map( time => TimeFormat(time.start_time)[0]));
console.log('first item:', times?.[0]);
console.log('start_time:', times?.[0]?.start_time.split("T"));
    /*
    - convert to eastern
    - cinvert to display
    - mAKE TIME between start and end time

    seperate
    - function that creates loop numbers through start and end times

    */

    for (let i = times?.[0]?.start_time; i < times?.[0]?.end_time; i++) {
      console.log(i); }

  return(
    <div>
    {
      times.map((time, index) => {
        {let i = 0; 0 <= 9; i++}
        return <div key={index}><p>{time.dish}</p></div>
      })
    }
    </div>
  )
};
