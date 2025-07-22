"use client";
import { useWishlist } from "@/app/context/wishlist-context";
import { FaHeart } from "react-icons/fa";
import Link from "next/link";

export default function WishlistCounter() {
  const { wishlistCount } = useWishlist();

  return (
    <Link href="/wishlist" className="relative">
      <button className="p-1 sm:p-2 text-gray-100 hover:text-red-400 transition-colors relative">
        <FaHeart className="h-5 w-5 sm:h-6 sm:w-6" />
        {wishlistCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] sm:text-xs rounded-full h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center font-bold">
            {wishlistCount > 99 ? "99+" : wishlistCount}
          </span>
        )}
      </button>
    </Link>
  );
}
