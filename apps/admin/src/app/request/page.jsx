"use client";
import {useState, useEffect} from "react";
import ActiveRequest from "./extras/active-request.jsx";

export default function Request(){
  /*
- request doesnt need checking if exist system because he can take more than two orders
  in one hour

  - so basically is just yes or no of he is available or have enough wings to cook in the moment

  flow:
  - list of requests will pop up
  -  click name
  - information of order will pop up you will hit accept they will get text or email on
    either if their order have been accepted or not and message them on what can be done.

  - request gets deleted

  when request get no response when should it be deleted?
  -  for pop up mention when request was made(even for orders)
  - mention type of request (cater)

  */

  const [requests, setRequests] = useState([]);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [loading, setLoading ] = useState(true);
  const [error, setError] = useState(null);
  const [request, setRequest] = useState([
    {date:'11/2/26', name:'roberto', time:'9:00PM'},
    {date:'11/2/26', name:'carlos', time:'10:00PM'},
    {date:'11/2/26', name:'john', time:'7:00PM'}
  ])


  // if (loading) return <p className="loading">Loading Bookings...</p>;
  // if (error) return <p className="error">{error}</p>;
/*

- make 2 rows

*/
const dateNameTime = "flex justify-center";

  return(
    <>
    <h1 className="flex justify-center text-4xl pt-5 mb-5">Requests</h1>

    <div>
     <div className="grid grid-cols-3 grid-auto justify-center">
        <h1 className={`${dateNameTime}`}>Date</h1>
        <h2 className={`${dateNameTime}`}>Name</h2>
        <h3 className={`${dateNameTime}`}>Time</h3>
        {request.map(i =>(
        <button
        className="col-span-3 grid grid-cols-3 hover:bg-black/20"
        onClick={ (e) =>{
          e.stopPropagation();
          setSelectedRequest(requests)
        }
        }>
          <p>{i.date}</p>
          <p>{i.name}</p>
          <p>{i.time}</p>
        </button>
        ))}
      </div>

      {
        selectedRequest &&
        <ActiveRequest
        onClose={() =>{
          setSelectedRequest(null);
        }}
        requests={requests}
        />
      }
    </div>
    </>
  )
}
