"use client";

import React from 'react';
import Image from "next/image";
import Link from "next/link";


function Home(){

return(
  <div>
    <h1 className="russ-d-wings" >Russ D wings</h1>

    <Image
      width={100} height={100}
      className="russ-animation"
      alt="russ-animation"
      src="/russ-animation.png"
    />

    <div>
    <Link className="order-btn" href="/order">Order</Link>
    </div>

    <h2 className="quote" >We Litty</h2>

    <Image
      src="/logo.png"
      width={100} height={100}
      className="wings"
      alt="wings"
    />
  </div>
)

}

export default Home
