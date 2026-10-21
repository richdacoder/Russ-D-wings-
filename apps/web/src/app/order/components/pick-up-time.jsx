"use client"


export default function PickUpTime({times, TimeFormat}){
  // const timesObject =
  // console.log('times on page', TimeFormat(times?.[0]?.start_time));

  const time = times?.[0];


  console.log('time:', time);
  console.trace('timeformat time page', times.map( time => TimeFormat(time.start_time)[0]));
console.log('first item:', times?.[0]);
console.log('start_time:', times?.[0]?.start_time[0]);
    /*
    - convert to eastern
    - cinvert to display
    - mAKE TIME between start and end time

    seperate
    - function that creates loop numbers through start and end times

    */

    const start = new Date(time?.start_time);
    const end = new Date(time?.end_time);


    for (let i = start.getHours(); i < end.getHours(); i++) {
      console.log(i);
    }

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
