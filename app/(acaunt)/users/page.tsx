
import prisma from "@/lib/db";
import UserComponent from "./_components/User-component";


export default async  function UserPage() {


  const users=await prisma.users.findMany()

  return (
    <div className="max-w-[868px] w-full flex flex-col">
    < UserComponent data={users} />
    </div>
  );
}
