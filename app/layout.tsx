import type { Metadata } from "next";
import { Cormorant } from "next/font/google";



import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"
import { WixClientContextProvider } from "@/context/wixContext";




const cormorant = Cormorant({ 
  
  subsets: ["latin"],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: "Larose store",
  description: "A complete e-commerce application with Next.js and Wix",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <body className={cormorant.className}>
     <WixClientContextProvider>
          <Navbar />
          {children}
          <Footer />
        </WixClientContextProvider>

        </body>
    </html>
  );
}
