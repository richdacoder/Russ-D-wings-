"use client";

export default function Available({timeSlot, ConvertToEastern, TimeFormat, Delete}){
  console.log('time slot in available page', timeSlot[0]?.start_time);
const unwantedTimeSlot = timeSlot.forEach((value, index) =>{
  console.log('value time',value.id, 'index', index);
  if( index !== 0){
    Delete('availability', value.id );
  };

});
console.log('unwanted time slot', unwantedTimeSlot);

return(
  <>
  <div>
    <h1>Start Time </h1>
      {timeSlot.map((time, index) =>(
        <p key={index}>{TimeFormat(time.start_time)}</p>
      )
      )}
          <h2>End Time </h2>
      {timeSlot.map((time, index) =>(
        <p key={index}>{TimeFormat(time.end_time)}</p>
      )
      )}

  </div>
  </>
)
}
