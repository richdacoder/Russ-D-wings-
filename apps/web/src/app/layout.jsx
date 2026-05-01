"use client";

import Image from "next/image";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
    >
      <body className="min-h-full flex flex-col">
              <header>
        <Link href="/" >
        <Image
          src="/logo.png"
          alt="logo"
          width={100}
          height={100}        />
        </Link>

        <nav>
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
