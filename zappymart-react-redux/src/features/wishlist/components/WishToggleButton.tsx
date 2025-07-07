"use client";

import { useAppDispatch } from "@/store/hooks/useAppDispatch";
import { useAppSelector } from "@/store/hooks/useAppSelector";
import {
  addToWishlist,
  removeFromWishlist,
  selectWishlistItems,
} from "@/features/wishlist/slices/wishlistSlice";
import { Product } from "@/models/product";
import clsx from "clsx";
import { Heart } from "lucide-react";

export default function WishlistToggleButton({
  product,
}: {
  product: Product;
}) {
  const dispatch = useAppDispatch();
  const wishlistItems = useAppSelector(selectWishlistItems);
  const inWishlist = wishlistItems.some((item) => item.id === product.id);

  const toggleWishlist = () => {
    if (inWishlist) {
      dispatch(removeFromWishlist(product.id));
    } else {
      dispatch(addToWishlist(product));
    }
  };

  return (
    <button
      onClick={toggleWishlist}
      className={clsx(
        "mt-2 px-3 py-2 border border-gray-500 rounded text-black transition-colors duration-500",
        inWishlist && "hover:bg-pink-200 cursor-pointer",
        !inWishlist && "hover:bg-green-200 cursor-pointer",
        inWishlist && "bg-green-200"
      )}
    >
      <Heart size={24} />
    </button>
  );
}
