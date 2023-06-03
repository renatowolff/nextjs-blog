"use client";

import { Exo } from "next/font/google";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";
import "./globals.css";

const exo = Exo({ subsets: ["latin"] });

export const metadata = {
  title: "My NextJS Blog",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={exo.className}>
        <div className="container">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}

