"use client";

import Image from "next/image";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
    >
      <header>
        <Link>
        <Image
        src="/"
        alt="logo"
        />
        </Link>
        <div>logo place here</div>
        <nav>
            <a href="/menu"> Menu </a>
            <a href="/order"> Order </a>
            <a href="/catering"> Catering </a>
            <a href="/about-us"> About Us </a>
            <a href="/contact-us"> Contact Us </a>
        </nav>
      </header>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
