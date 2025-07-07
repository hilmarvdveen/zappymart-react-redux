import ProductGrid from "@/features/product/components/ProductGrid";
import { getProducts } from "@/lib/data/getProducts";

export default async function HomePage() {
  const products = await getProducts();
  return (
    <div className="pt-8 md:pt-10">
      <h1 className="text-2xl font-bold mb-6">Producten overzicht</h1>
      <ProductGrid products={products} />;
    </div>
  );
}
