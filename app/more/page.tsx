export const dynamic = "force-dynamic";
import React from "react";
import Prodata from "../components/pro-data";
import prisma from "@/lib/db";

export default async function MorePage() {
  const categories = await prisma.category.findMany({
    include: {
      product: true,
    },
  });
  const products = await prisma.products.findMany();

  return (
    <div className="max-w-[1200px] w-full mx-auto hidden sm:block min-h-auto mt-[23px] ">
      <Prodata products={products} categories={categories} />
    </div>
  );
}
