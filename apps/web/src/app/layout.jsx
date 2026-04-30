
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
    >
      <header>
        <img
        src="#"/>
        <div>logo place here</div>
        <nav>
            <a href="#"> Menu </a>
            <a href="#"> About Us </a>
            <a href="#"> Contact Us </a>
        </nav>
      </header>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
