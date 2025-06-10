import Footer from "./components/footer";

import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>

        <Footer />
      </body>
    </html>
  );
}
