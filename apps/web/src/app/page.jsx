"use client";

import React from 'react';
import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import { Bungee } from "next/font/google";


/*
10/3/26

- make video widerxx
- put order on videoxx
- find nice font
- find logoxx
- center menu on for laptop
- add a div line for laptop headerxx

10/7/26
- import fancy logo
- put instagram page
- customize we litty

*/

const bungee = Bungee({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bungee",
});

function Home(){

return(
  <div >
    <h1 className={` ${bungee.className}  [text-shadow:0_0_5px_#fff,0_0_10px_#fff,0_0_20px_#ff2d2d,0_0_40px_#ff2d2d,0_0_80px_#ff2d2d]
    flex justify-center mt-40 mb-20 text-5xl font-bold text-white-500 m-5`}  >Russ D Wings</h1>

    <div className="relative h-[500px] z-0 overflow-hidden">
    <video
      className="absolute w-full md:h-[900px] object-fill inset-0 z-0 "
      alt="russ-animation"
      src="/videos/intro-video.mov"
      autoPlay
      loop
      muted
      playsInline
    />

    <div className='relative z-3 flex items-center h-full justify-center '>
    <Link className="inline-block rounded-lg bg-red-500 px-8 py-4 text-xl font-semibold text-white
    transition hover:bg-red-600 md:px-12 md:py-5 md:text-2xl z-1" href="/order">Order</Link>
    </div>

    </div>
    <h2 className={`${bungee.className} [text-shadow:0_0_5px_#fff,0_0_10px_#fff,0_0_20px_#ff2d2d,0_0_40px_#ff2d2d,0_0_80px_#ff2d2d]
    text-6xl  quote flex justify-center font-bold mt-40`} >We Litty</h2>

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
