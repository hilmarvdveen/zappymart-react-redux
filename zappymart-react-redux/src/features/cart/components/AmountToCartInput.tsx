// src/components/AmountToCartInput.tsx
"use client";

import { useState } from "react";
import { Product } from "@/models/product";

export default function AmountToCartInput({ product }: { product: Product }) {
  const [amount, setAmount] = useState(1);

  return (
    <div className="flex items-center gap-2 mt-2">
      <label htmlFor={`amount-${product.id}`} className="text-sm font-medium">
        Aantal:
      </label>
      <input
        id={`amount-${product.id}`}
        type="number"
        min={1}
        value={amount}
        onChange={(e) => setAmount(parseInt(e.target.value) || 1)}
        className="w-16 border rounded px-2 py-1 text-sm"
      />
    </div>
  );
}
