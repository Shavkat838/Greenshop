import React from 'react'
import AdminOrder from './_compponents/AdminOrder'
import prisma from '@/lib/db'
import { Products } from '@prisma/client';


type OrdersType = {
  id: number;
  order: { product: Products; quantity: number }[];
  userInformation: {
    lastname: string;
    email: string;
    phone: string;
  };
  status: string;
  userId: number;
}[];

export default async  function AdminOrders() {

  const ordersForm=await prisma.orders.findMany()


    const orders: OrdersType = ordersForm.map((item) => ({
      ...item,
      order: item.order as unknown as { product: Products; quantity: number }[],
      userInformation: item.userInformation as {
        lastname: string;
        email: string;
        phone: string;
      },
    }));
  return (
    <div>
      < AdminOrder data={orders} />
    </div>
  )
}
