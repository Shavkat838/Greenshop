import { Metadata } from "next";
import UserSidebar from "./_components/userSidebar";
import MobileHeader from "../_Header/mobile-header";
import Mobileheader from "./_components/mobile_header";



export const metadata: Metadata = {
  title: "User Accaunt",
  description: "User accaunti",
};

export default function Userlayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="max-w-[1200px] w-full  px-[15px] sm:px-0 mx-auto  mt-[31px] sm:mt-[61px]  sm:flex gap-[28px]">
      < Mobileheader />
      <div className="max-w-[310px] w-full sm:block hidden ">
        <UserSidebar />
      </div>
      <div className="max-w-[862px] px-[15px] sm:px-0 w-full min-h-auto">
        {children}
      </div>
    </div>
  );
}
