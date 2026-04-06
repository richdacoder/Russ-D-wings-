"use client";

import { useState, useEffect } from "react";

export default function  RootLayout( {children} ){
const [menuOpen, setMenuOpen] = useState(false);

return(

<html >
<head>
</head>
<body>
  <header>
    <nav>
      <link className="logo"></link>
      <button> ☰</button>
      <a>Home</a>
      <a>Schedule</a>
      <a>Menu</a>

    </nav>
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
