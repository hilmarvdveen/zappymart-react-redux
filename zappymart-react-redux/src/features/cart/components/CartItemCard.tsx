// src/features/cart/components/CartItemCard.tsx
"use client";

import { CartItem } from "@/features/cart/slices/cartSlice";
import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";

interface Props {
  item: CartItem;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemove: (id: number) => void;
}

export default function CartItemCard({
  item,
  onUpdateQuantity,
  onRemove,
}: Props) {
  return (
    <div className="flex items-center gap-4 border-b pb-4">
      <Image
        src={item.image}
        alt={item.title}
        width={80}
        height={80}
        className="object-contain h-20 w-20"
      />

      <div className="flex-1">
        <h2 className="font-semibold">{item.title}</h2>
        <p className="text-gray-500">€{item.price.toFixed(2)} per stuk</p>
        <p className="text-sm text-gray-600">
          Subtotaal: €{(item.price * item.quantity).toFixed(2)}
        </p>
      </div>

      <div className="flex items-center gap-2 flex-wrap">
        <button
          className="px-2 py-1 border rounded hover:bg-gray-100"
          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
          disabled={item.quantity <= 1}
        >
          <Minus size={16} />
        </button>

        <span>{item.quantity}</span>

        <button
          className="px-2 py-1 border rounded hover:bg-gray-100"
          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
        >
          <Plus size={16} />
        </button>

        <button
          className="ml-4 text-red-500 hover:text-red-700"
          onClick={() => onRemove(item.id)}
          aria-label="Verwijder uit winkelwagen"
        >
          <Trash2 size={20} />
        </button>
      </div>
    </div>
  );
}
