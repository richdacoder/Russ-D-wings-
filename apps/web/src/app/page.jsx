"use client";

import React from 'react';
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

/*
10/3/26

- make video wider
- put order on video
- find nice font
- find logo
- center menu on for laptop
- add a div line for laptop header

*/

function Home(){

return(
  <div>
    <h1 className=" text-4xl text-white-500"  >Russ D wings</h1>

    <video
      width={500}
      height={500}
      className="russ-animation"
      alt="russ-animation"
      src="/videos/intro-video.mov"
      autoPlay
      loop
      muted
      playsInline
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
