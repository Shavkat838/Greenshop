
import type { Metadata } from "next";
import {Poppins } from "next/font/google";
import "./globals.css";
import Header from "./_Header/header";
import Footer from "./_Footer/footer";
import Providers from "./providers";
import { ToastContainer } from "react-toastify";
import TopLoader from "./components/TopLoader";
import HyProvider from "./hydretionProvider";
import SignINModal from "./components/Rodal-component";
import SignUpModal from "./components/SignUp-rodal";
import prisma from "@/lib/db";


const poppins=Poppins({
  subsets:["latin"],
  weight:"400",
  display:"swap"
})

export const metadata: Metadata = {
  title: "Green Shop",
  description: "Gullar uchun moljallangan online do`kon",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
  return (
    <html lang="en">
      <body className={` ${poppins.className} antialiased`}>
        <TopLoader />
        <HyProvider>
          <Providers>
            <div className="max-w-full container w-full  bg-white">
              <div className="max-w-full hidden sm:block   w-full fixed z-50 top-0 h-[63px] bg-[#FBFBFB] sm:border-b-[0.3px]   sm:border-b-[#46A35880] ">
                <Header />
              </div>
              <div className="sm:mt-[80px]  mb-[100px] sm:mb-0">{children}</div>
              <div className="max-w-full  w-full bg-[#FBFBFB]">
                <Footer />
              </div>
            </div>
            <SignUpModal />
          </Providers>
        </HyProvider>
        <ToastContainer position="top-center" className={"px-[20px]  mt-[10px] "} />
      </body>
    </html>
  );
}

