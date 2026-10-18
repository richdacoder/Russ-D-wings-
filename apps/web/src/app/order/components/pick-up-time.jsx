"use client"


export default function PickUpTime({times}){
  // const timesObject =
  console.log('times on page', times?.[0]?.start_time.split("T")[1]);
    /*
    - convert to eastern
    - cinvert to display
    - mAKE TIME between start and end time


    */

  return(
    <div>
    {
      times.map((time, index) => {
        <div>{time?.id}</div>
      })
    }
    <p>pick up times</p>
    </div>
  )
};
