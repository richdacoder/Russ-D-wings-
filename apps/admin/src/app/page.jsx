"use client";

import { useState, useEffect } from "react";
import ActiveOrder from "./order/page.jsx";



export default function HomePage() {
  /*

  - add status and send emails for each status
  */
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading ] = useState(true);
  const [error, setError] = useState(null);


  // if (loading) return <p className="loading">Loading Bookings...</p>;
  // if (error) return <p className="error">{error}</p>;

return(
  <>
<div>
  <h1 className="flex justify-center text-4xl">orders</h1>

  <div className="grid grid-col-3 justify-center ">

  <div className="flex justify center">
    <h2>Date</h2>
    <h3>Name</h3>
    <h4>Time</h4>
    </div>
<div>
  <button
  onClick={
    (e) =>{
      e.stopPropagation();
      setSelectedOrder(orders)

    }
  }>
    <span>4/15/26</span>
    <span>Jim Jones</span>
    <span>5:30 PM</span>
  </button>
  </div>
  </div>
  </div>


  {
    selectedOrder &&
  <ActiveOrder
  orders={orders}
  onClose={()=> setSelectedOrder(null)}
  />
  }

  </>
)
}
