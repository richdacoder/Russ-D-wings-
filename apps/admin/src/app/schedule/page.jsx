"use client";

export default function Schedule(){
/*
- most likely a form

- choose a time block between certain times
  in the same day(since thats what request is for
    creating a weekly schedule is kinda redondent)

 - how to create a time listing selection
*/
  return(
    <div>
      <h1>
        Create Time Blocks
      </h1>
      <form>
      <div>
        <label>
          Start Time
        </label>
        <input
        type="time">
        </input>
      </div>

      <div>
        <label>
          End Time
        </label>
        <input
        type="time">
        </input>
      </div>

      <button type="submit"> Add Time Block </button>
      </form>

    </div>
  )
}
