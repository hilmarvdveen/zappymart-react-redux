import ProductCard from "./ProductCard";
import { Product } from "@/models/product";

export default function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
