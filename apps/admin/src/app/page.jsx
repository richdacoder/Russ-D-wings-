"use client";

import { useState, useEffect } from "react";
import ActiveOrder from "./order/page.jsx";


export default function HomePage() {
const [selectedOrder, setSelectedOrder] = useState(null);
const [orders, setOrders] = useState([]);
return(
  <>
  <div>
  <h1>orders</h1>
  <span>Date</span>
  <span>Name</span>
  <span>Time</span>
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
