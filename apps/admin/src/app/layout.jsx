"use client";

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
  <div> logo place here
      <link className="logo"></link>
      </div>
      <div>

      <button className="nav-button" onClick={toggleMenu} > ☰</button>

     <nav className={`navbar ${menuOpen? "open" : "" }`}>
      <a href="/">Home</a>
      <a href="/request">Request</a>
      <a href="/schedule">Schedule</a>
      <a href="/menu">Menu</a>
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
