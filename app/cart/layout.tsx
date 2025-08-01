
import { Metadata } from "next"
import {Poppins} from "next/font/google"

const poppins=Poppins({
    subsets:["latin"],
    weight:"400",
    display:"swap"
})


export const metadata:Metadata={
    title:"Cart page",
    description:"Mahsulotlar cart qismi",
}


export default function Cartlayout({children}:Readonly<{children:React.ReactNode}>) {
  return (
    <div className={`${poppins.className}`}>{children}</div>
  )
}
