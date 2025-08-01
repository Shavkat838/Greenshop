import { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Product page",
  description: "Barcha categoriyalar va mahsulotlar shu yerda",
};

export default function MoreLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className={`${poppins.className}`}>{children}</div>;
}
