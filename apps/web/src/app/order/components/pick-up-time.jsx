"use client"


export default function PickUpTime({times}){
  // const timesObject =
  console.log('times on page', times?.[0]?.id);
    //.split('T')

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
