import { Metadata } from "next"

export const metadata:Metadata={
    title:"Shop page",
    description:"Mahsulotlar tolovi",
}


export default function Shoplayout({children,}:Readonly<{children:React.ReactNode}>) {
  return (
    <div>{children}</div>
  )
}
