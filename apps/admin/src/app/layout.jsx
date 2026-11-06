"use client";

import Image from "next/image";
import Link from "next/link";
import RussDLogo from "../../../lib/img/russ-d-logo.png";
import { useState, useEffect } from "react";
import "./styles/globals.css";

export default function  RootLayout( {children} ){
const [menuOpen, setMenuOpen] =  useState(false);

console.log( 'menu', menuOpen );

const toggleMenu = ()=>{setMenuOpen(!menuOpen) };



/*
- nav open when in full scrren no hamburger button
- make toggle
- is toggle open?
- if so open navbar

*/
return(

<html >
<head>
</head>
<body>
  <header className="header border-b-1 py-5">
    <Link href="/">
    <Image src={RussDLogo} width={100} height={100} alt="russ-d-wings logo" href="/"/>
    </Link>

      <div>

      <button className="nav-button" onClick={toggleMenu} > ☰</button>

     <nav className={` ${menuOpen? "flex flex-col" : "hidden" } md:flex md:flex-1`}>
      <Link href="/">Home</Link>
      <Link href="/request">Request</Link>
      <Link href="/schedule">Schedule</Link>
      <Link href="/menu">Menu</Link>
      </nav>
      </div>
  </header>
  <main>
{children}
  </main>

<footer>
  </footer>
</body>
</html>


)
}
