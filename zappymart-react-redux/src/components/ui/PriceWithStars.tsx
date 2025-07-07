import { Star } from "lucide-react";

interface Props {
  price: number;
  rating: { rate: number; count: number };
}

export default function PriceWithStars({ price, rating }: Props) {
  return (
    <div className="flex items-center justify-between">
      <p className="text-blue-600 font-bold">€{price}</p>
      <div className="flex items-center gap-1 my-2">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star
            key={i}
            size={16}
            className={
              rating.rate >= i
                ? "fill-yellow-400 stroke-yellow-500"
                : "fill-white stroke-gray-400"
            }
          />
        ))}
        <span className="text-sm text-gray-600">({rating.count})</span>
      </div>
    </div>
  );
}
