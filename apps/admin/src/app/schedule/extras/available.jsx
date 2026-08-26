"use client";

export default function Available({timeSlot, ConvertToEastern}){
  console.log('time slot', timeSlot);

const timeFormat = (time) => {
 const actualTime = ConvertToEastern(time, true).split(':');
 return `${actualTime[0]}:${actualTime[1]} ${actualTime[2].split(' ')[1]}`;
};

return(
  <>
  <div>
    <h1>Start Time </h1>
      {timeSlot.map((time, index) =>(
        <p key={index}>{timeFormat(time.start_time)}</p>
      )
      )}
          <h2>End Time </h2>
      {timeSlot.map((time, index) =>(
        <p key={index}>{timeFormat(time.end_time)}</p>
      )
      )}

  </div>
  </>
)
}
