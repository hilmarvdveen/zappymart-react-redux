// features/wishlist/WishlistDrawer.tsx
"use client";

import { useAppSelector } from "@/store/hooks/useAppSelector";
import { X } from "lucide-react";
import { useAppDispatch } from "@/store/hooks/useAppDispatch";
import { Product } from "@/models/product";
import {
  clearWishlist,
  closeDrawer,
  removeFromWishlist,
  selectWishlistDrawerOpen,
  selectWishlistItems,
} from "@/features/wishlist/slices/wishlistSlice";
import Image from "next/image";

export default function WishlistDrawer() {
  const wishlistItems: Product[] = useAppSelector(selectWishlistItems);
  const dispatch = useAppDispatch();
  const isDrawerOpen = useAppSelector(selectWishlistDrawerOpen);
  return (
    <>
      {isDrawerOpen && (
        <aside className="fixed top-0 right-0 z-50 w-80 h-full bg-white shadow-lg p-4 overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Wishlist</h2>
            <button
              onClick={() => dispatch(clearWishlist())}
              className="text-sm text-red-500"
            >
              Clear all
            </button>
            <button
              onClick={() => dispatch(closeDrawer())}
              className="text-sm cursor-pointer"
            >
              <X size={24} />
            </button>
          </div>

          {wishlistItems.length === 0 ? (
            <p className="text-gray-500">Your wishlist is empty.</p>
          ) : (
            <ul className="space-y-4">
              {wishlistItems.map((item) => (
                <li key={item.id} className="flex items-start gap-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={64}
                    height={64}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="text-sm font-medium">{item.title}</h3>
                    <p className="text-sm text-gray-600">
                      €{item.price.toFixed(2)}
                    </p>
                  </div>
                  <button
                    onClick={() => dispatch(removeFromWishlist(item.id))}
                    className="text-gray-400 hover:text-red-500 cursor-pointer"
                  >
                    <X size={24} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </aside>
      )}
    </>
  );
}
