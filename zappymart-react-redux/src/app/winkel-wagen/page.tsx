// src/app/cart/page.tsx
"use client";

import { useAppDispatch } from "@/store/hooks/useAppDispatch";
import { useAppSelector } from "@/store/hooks/useAppSelector";
import {
  selectCartItems,
  selectCartTotal,
  removeFromCart,
  updateQuantity,
} from "@/features/cart/slices/cartSlice";
import CartTotalRow from "@/features/cart/components/CartTotalRow";
import CartItemCard from "@/features/cart/components/CartItemCard";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CartPage() {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(selectCartItems);
  const total = useAppSelector(selectCartTotal);

  const handleQuantityChange = (id: number, quantity: number) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const handleRemove = (id: number) => {
    dispatch(removeFromCart(id));
  };

  return (
    <section className="max-w-4xl mx-auto p-6">
      <button className="border border-gray-300 text-gray-600 px-4 py-2 rounded-md flex items-center gap-2 hover:bg-gray-100 transition-colors mb-6">
        <Link
          href="/"
          className="flex items-center gap-2"
          aria-label="Terug naar producten"
        >
          <ArrowLeft size={16} /> Terug naar producten
        </Link>
      </button>
      <h1 className="text-2xl font-bold mb-6">🛒 Mijn Winkelwagen</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Je winkelwagen is leeg.</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <CartItemCard
              key={item.id}
              item={item}
              onUpdateQuantity={handleQuantityChange}
              onRemove={handleRemove}
            />
          ))}
          <CartTotalRow total={total} />
        </div>
      )}
    </section>
  );
}
