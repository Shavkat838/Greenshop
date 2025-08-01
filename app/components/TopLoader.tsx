"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

export default function TopLoader() {
  const pathname = usePathname();

  useEffect(() => {
    NProgress.start();

    const timeout = setTimeout(() => {
      NProgress.done();
    }, 300); // 300ms dan keyin tugaydi, istasangiz ko‘proq ham qilishingiz mumkin

    return () => clearTimeout(timeout); // Memory leakning oldini olish
  }, [pathname]);

  return null;
}
