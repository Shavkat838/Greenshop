export const dynamic = "force-dynamic";
import prisma from "@/lib/db";
import OrderComponent from "./_components/OrderPage";
import { Product } from "@/helpers/types";

interface orderItem {
  product: Product;
  quantity: number;
}

type OrdersType = {
  id: number;
  order: orderItem[];
  userInformation: {
    lastname: string;
    email: string;
    phone: string;
  };
  status: string;
  userId: number;
}[];

export default async function OrderPage() {
  const ordersForm = await prisma.orders.findMany();

  const orders: OrdersType = ordersForm.map((item) => ({
    ...item,
    order: item.order as unknown as orderItem[],
    userInformation: item.userInformation as {
      lastname: string;
      email: string;
      phone: string;
    },
  }));

  return (
    <div>
      <OrderComponent data={orders} />
    </div>
  );
}
