import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {Rye,Libre_Bodoni} from "next/font/google"

const rye =Rye({subsets:["latin"],weight:["400","400"] });
const libre_Bodoni =Libre_Bodoni({subsets:["latin"],weight:["400","700"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rye.className} 
        
      >
        {children}
      </body>
    </html>
  );
}