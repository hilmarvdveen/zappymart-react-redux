// src/features/cart/components/CartTotalRow.tsx

interface Props {
  total: number;
}

export default function CartTotalRow({ total }: Props) {
  return (
    <div className="flex justify-between items-center mt-6 pt-4 border-t text-lg font-semibold">
      <span>Totaal:</span>
      <span>€{total.toFixed(2)}</span>
    </div>
  );
}
