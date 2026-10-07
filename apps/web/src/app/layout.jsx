"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import RussDLogo from "../../../lib/img/russ-d-logo.png";



export default function RootLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <html
      lang="en"
    >
      <body className="min-h-full flex flex-col">
              <header className="sticky z-4 top-0 flex items-center justify-between px-6 py-4 bg-black shadow-md w-full">
        <Link href="/" >
        <Image
          src={RussDLogo}
          alt="logo"
          width={100}
          height={100}
         />
        </Link>

        <button
        className="md:hidden"
        onClick={toggleMenu}>
            ☰
        </button>
        <nav className={`${isOpen? "flex" : "hidden"} md:flex md:flex-1 md:justify-evenly`}>
            <Link href="/menu"> Menu </Link>
            <Link href="/order"> Order </Link>
            <Link href="/catering"> Catering </Link>
            <Link href="/about-us"> about Us </Link>
            <Link href="/contact-us"> Contact Us </Link>
        </nav>
      </header>
            {children}
            <footer>
  <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-white">Contact</h3>
          <p>123 Main St, Your City</p>
          <p>(555) 555-5555</p>
          <p>hello@example.com</p>
        </div>
      {/* Bottom line */}
      <div className="border-t border-gray-700 py-4 text-center text-sm">
        © {new Date().getFullYear()} Russ D Wings. All rights reserved.
      </div>

  </footer>

  </body>
    </html>
  );
}
