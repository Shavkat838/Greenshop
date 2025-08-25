"use client";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

interface Props{
    children:ReactNode
}

export default function AdminGuard({ children }:Props) {
  const router = useRouter();

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role !== "admin") {
      router.push("/notfound");
    }
  }, []);

  return <>{children}</>;
}
