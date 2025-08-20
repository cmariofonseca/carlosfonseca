import ChatButton from "./components/chat/ChatButton";
import Footer from "./components/layout/Footer";

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

        <ChatButton />

        <Footer />
      </body>
    </html>
  );
}
