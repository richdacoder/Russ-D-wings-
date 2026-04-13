"use client";
import {useState, useEffect} from "react";
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



  */

  const [requests, setRequests] = useState([]);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [loading, setLoading ] = useState(true);
  const [error, setError] = useState(null);


if (loading) return <p className="loading">Loading Bookings...</p>;
  if (error) return <p className="error">{error}</p>;


  return(
    <div>working yeah</div>
  )
}
