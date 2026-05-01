"use client";

import React from 'react';
import Image from "next/image";
import Link from "next/link";


function Home(){

return(
  <div>
    <Link href="#"><Image src="/logo.png" width={100} height={100}  alt="logo"/></Link>
    <h1 className="russ-d-wings" >Russ D wings</h1>

    <Image
      width={100} height={100}
      class="russ-animation"
      alt="russ-animation"
    />

    <div>
    <button className="order-btn" href="#">Order</button>
    </div>

    <h2 class="quote" >We Litty</h2>

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
