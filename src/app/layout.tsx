import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SessionWrapper from "./component/SessionWrapper";
import { Metadata } from "next";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: "Nimble Concepts Homepage",
    template: "%s | Nimble Concepts",
  },
  description: "Nimble Concepts Blog App",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className={`${poppins.className} ${inter.className}`}>
        <SessionWrapper>
          <div className="container mx-auto px-4 min-h-screen flex flex-col justify-between">
            <Navbar />
            {children}
          </div>
        </SessionWrapper>
      </body>
    </html>
  );
}