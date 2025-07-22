export default function ProductSkeleton() {
  return (
    <div className="w-full min-h-[380px] sm:min-h-[420px] bg-[#1F1F1F] rounded-sm overflow-hidden flex flex-col animate-pulse">
      {/* Image Skeleton */}
      <div className="relative w-full h-[200px] sm:h-[220px] md:h-[240px] lg:h-[260px] xl:h-[280px] border border-[#CE9F56] overflow-hidden">
        <div className="w-full h-full bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-[length:200%_100%] animate-shimmer"></div>
      </div>

      {/* Content Skeleton */}
      <div className="flex flex-col items-center justify-center text-center p-2 sm:p-3 gap-2 flex-grow">
        {/* Product Name Skeleton */}
        <div className="w-3/4 h-4 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-[length:200%_100%] animate-shimmer rounded"></div>

        {/* Stars Skeleton */}
        <div className="flex items-center justify-center gap-1 mt-1">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-[length:200%_100%] animate-shimmer rounded-full"
            ></div>
          ))}
          <div className="w-8 h-3 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-[length:200%_100%] animate-shimmer rounded ml-2"></div>
        </div>

        {/* Price Skeleton */}
        <div className="w-1/2 h-4 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-[length:200%_100%] animate-shimmer rounded mt-1"></div>

        {/* Button Skeleton */}
        <div className="w-20 h-7 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-[length:200%_100%] animate-shimmer rounded-md mt-2"></div>
      </div>
    </div>
  )
}
