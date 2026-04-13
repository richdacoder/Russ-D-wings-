"use client";

import { useState, useEffect } from "react";


export default function HomePage() {
const [selectedOrders, setSelectedOrders] = useState(null);

return(
  <>
  <div>
  <h1>orders</h1>
  <span>Date</span>
  <span>Name</span>
  <span>Time</span>
<div>
  <button>
    <span>4/15/26</span>
    <span>Jim Jones</span>
    <span>5:30 PM</span>
  </button>
  </div>
  </div>
  </>
)
}
