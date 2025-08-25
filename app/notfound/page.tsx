import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center  justify-center py-20">
      <div className="text-center text-red-500 text-xl ">
        Sahifa topilmadi (404)
      </div>
      <Link href={"/"}>
        <button className="bg-green-700 cursor-pointer  px-4 h-[40px] mt-2 hover:bg-green-600 text-white rounded-[10px]   text-center">
          Home
        </button>
      </Link>
    </div>
  );
}
