"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import "./styles/globals.css";

export default function  RootLayout( {children} ){
const [menuOpen, setMenuOpen] =  useState(false);

useEffect(() => {
  // Check if we are on a desktop screen on mount
  // if (window.innerWidth > 768) {
  //   setMenuOpen(true);
  //   setShowBurger(false);
  //   console.log('burger', showBurger, 'menu', menuOpen );
  // } else if(window.innerWidth <= 768){
  //   setMenuOpen(false);
  //   setShowBurger(true);

  // }
}, []);

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
  <header className="header">
  <div>
    <Link href="/">
      logo place here
      <link className="logo"></link>
    </Link>
  </div>
      <div>

      <button className="nav-button" onClick={toggleMenu} > ☰</button>

     <nav className={`navbar ${menuOpen? "open" : "" }`}>
      <Link href="/">Home</Link>
      <Link href="/request">Request</Link>
      <Link href="/schedule">Schedule</Link>
      <Link href="/menu">Menu</Link>
      </nav>
      </div>
  </header>
<footer>
<main>
{children}
  </main>
  </footer>
</body>
</html>


)
}
