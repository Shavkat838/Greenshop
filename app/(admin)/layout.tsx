import { Metadata } from "next";
import AdminSidebar from "./_components/AdminSideBar";
import AdminGuard from "./_components/adminguard";

export const metadata: Metadata = {
  title: "Admin page",
  description: "Admin mahsulotlarni boshqaradi",
};

export default function Adminlayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AdminGuard>
      <div className="max-w-[1200px] w-full mx-auto flex gap-[28px] mt-[29px]">
        <div className="max-w-[310px] w-full ">
          <AdminSidebar />
        </div>
        <div className="max-w-[862px] w-full min-h-auto">{children}</div>
      </div>
    </AdminGuard>
  );
}
