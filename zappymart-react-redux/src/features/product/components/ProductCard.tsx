import Image from "next/image";
import { Product } from "@/models/product";
import AmountToCartInput from "@/features/cart/components/AmountToCartInput";
import AddToCartButton from "@/features/cart/components/AddToCartButton";
import WishlistToggleButton from "@/features/wishlist/components/WishToggleButton";
import PriceWithStars from "@/components/ui/PriceWithStars";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="border rounded p-4 shadow-sm hover:shadow-md transition-shadow">
      <Image
        src={product.image}
        alt={product.title || "Product image"}
        width={100}
        height={48}
        className="w-full h-40 object-contain mb-3"
        loading="lazy"
      />

      <div className="flex flex-col mt-4 justify-between">
        <div className="h-36 flex flex-col">
          <span className="font-semibold">{product.title}</span>
          <p className="text-gray-600">{product.category}</p>
        </div>

        <div className="mt-auto space-y-4">
          <PriceWithStars price={product.price} rating={product.rating} />

          <div className="flex items-center justify-between gap-2 flex-wrap">
            <AmountToCartInput product={product} />
            <div className="flex gap-2">
              <AddToCartButton product={product} />
              <WishlistToggleButton product={product} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
