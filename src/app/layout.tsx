import GetQuote from "@/components/custom/GetQuote";
import Contact from '@/components/custom/Contact'
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Elevator Company",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
        suppressHydrationWarning
        suppressContentEditableWarning
      >
        <Navbar/>
        {/* <GetQuote/> */}
        {children}
        <Contact/>
      </body>
    </html>
  );
}
