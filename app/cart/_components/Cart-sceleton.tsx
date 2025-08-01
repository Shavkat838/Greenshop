

export default function CartSceleton() {
  return (
    <>
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          className="max-w-[782px] w-full h-[70px] flex animate-pulse mb-[12px]"
        >
          {/* Image skeleton */}
          <div className="w-[70px] h-[70px] bg-gray-200 rounded-md" />

          {/* Product name and SKU */}
          <div className="ml-[14px] flex flex-col h-[70px] justify-center gap-[6px]">
            <div className="w-[150px] h-[16px] bg-gray-200 rounded" />
            <div className="w-[100px] h-[14px] bg-gray-200 rounded" />
          </div>

          {/* Price */}
          <div className="ml-[94px] h-[70px] flex items-center justify-center">
            <div className="w-[56px] h-[16px] bg-gray-200 rounded" />
          </div>

          {/* Quantity buttons */}
          <div className="w-[80px] h-[70px] ml-[92px] flex justify-between items-center">
            <div className="w-[21px] h-[25px] bg-gray-200 rounded-full" />
            <div className="w-[20px] h-[16px] bg-gray-200 rounded" />
            <div className="w-[21px] h-[25px] bg-gray-200 rounded-full" />
          </div>

          {/* Total */}
          <div className="w-[61px] h-[70px] flex items-center justify-center ml-[82px]">
            <div className="w-[61px] h-[16px] bg-gray-200 rounded" />
          </div>

          {/* Delete icon */}
          <div className="max-w-[24px] h-[70px] flex items-center justify-center ml-[50px]">
            <div className="w-[24px] h-[24px] bg-gray-200 rounded" />
          </div>
        </div>
      ))}

      {/* Delete All button Skeleton */}
      <div className="max-w-full flex justify-end px-[20px]">
        <div className="max-w-[140px] w-full h-[40px] bg-gray-200 rounded mt-[44px] animate-pulse" />
      </div>
    </>
  );

}
