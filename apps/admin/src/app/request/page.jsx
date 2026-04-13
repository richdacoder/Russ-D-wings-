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


  // if (loading) return <p className="loading">Loading Bookings...</p>;
  // if (error) return <p className="error">{error}</p>;


  return(
    <>
    <div>
     <h1>Requests</h1>
      <div>
        <span>Date</span>
        <span>Name</span>
        <span>Time</span>
      </div>
      <div>
        <button onClick={ (e) =>{
          e.stopPropagation();
          setSelectedRequest(requests)
        }
        }>
          <span>4/15/26</span>
          <span>Timmy Turner</span>
          <span>5:00 PM</span>
        </button>
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
