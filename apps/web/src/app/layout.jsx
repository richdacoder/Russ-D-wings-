"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function RootLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <html
      lang="en"
    >
      <body className="min-h-full flex flex-col">
              <header class="flex items-center justify-between px-6 py-4 shadow-md w-full">
        <Link href="/" >
        <Image
          src="/logo.png"
          alt="logo"
          width={100}
          height={100}
         />
        </Link>

        <button
        className="md: hidden"
        onClick={toggleMenu}>
            ☰
        </button>
        <nav >
            <Link href="/menu"> Menu </Link>
            <Link href="/order"> Order </Link>
            <Link href="/catering"> Catering </Link>
            <Link href="/about-us"> about Us </Link>
            <Link href="/contact-us"> Contact Us </Link>
        </nav>
      </header>
            {children}
  </body>
    </html>
  );
}
