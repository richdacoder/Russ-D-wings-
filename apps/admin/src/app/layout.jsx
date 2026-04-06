"use client";

import { useState, useEffect } from "react";

export default function  RootLayout( {children} ){


return(

<html >
<head>
</head>
<body>
  <header>
    <nav>
      <link className="logo"></link>
      <button> ☰</button>
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
