// src/components/CartAddButton.tsx
"use client";

import { Product } from "@/models/product";
import { useAppDispatch } from "@/store/hooks/useAppDispatch";
import { addToCart } from "@/features/cart/slices/cartSlice";
import { Plus, ShoppingCart } from "lucide-react";

export default function CartAddButton({ product }: { product: Product }) {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <button
      onClick={handleAddToCart}
      className="mt-2 px-4 py-2 rounded text-sm font-medium bg-green-100 text-green-700 hover:bg-green-200 transition-colors cursor-pointer flex items-center gap-2"
    >
      <Plus size={16} /> <ShoppingCart size={16} />
    </button>
  );
}
