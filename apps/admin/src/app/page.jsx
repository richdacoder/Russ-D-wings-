"use client";

import { useState, useEffect } from "react";
import ActiveOrder from "./order/page.jsx";



export default function HomePage() {
  /*

  - add status and send emails for each status

  11/6/26
  - change structure make date in same element as data date and same for all
  */
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [orders, setOrders] = useState([
    {date:'11/2/26', name:'roberto', time:'9:00PM'},
    {date:'11/2/26', name:'carlos', time:'10:00PM'},
    {date:'11/2/26', name:'john', time:'7:00PM'}
  ])
;
  const [loading, setLoading ] = useState(true);
  const [error, setError] = useState(null);


  // if (loading) return <p className="loading">Loading Bookings...</p>;
  // if (error) return <p className="error">{error}</p>;
const dateNameTime = "flex justify-center"
return(
  <>
<div>
  <h1 className="flex justify-center text-4xl my-5">Orders</h1>

  <div className="grid grid-cols-3 justify-center ">

    <h2 className={`${dateNameTime}`}>Date</h2>
    <h3 className={`${dateNameTime}`}>Name</h3>
    <h4 className={`${dateNameTime}`}>Time</h4>
    {orders.map(i => (
  <button
  className="col-span-3 grid grid-cols-3 hover:bg-black/20"
  onClick={
    (e) =>{
      e.stopPropagation();
      setSelectedOrder(orders)

    }
  }>
    <p>{i.date}</p>
    <p>{i.name}</p>
    <p>{i.time}</p>
  </button>
  ))}
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
