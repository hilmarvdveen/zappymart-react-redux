// src/lib/data/getProducts.ts
import { Product } from "@/models/product";
import path from "path";
import { promises as fs } from "fs";

export async function getProducts(): Promise<Product[]> {
  const filePath = path.join(process.cwd(), "src", "data", "products.json");
  const fileContents = await fs.readFile(filePath, "utf-8");
  return JSON.parse(fileContents);
}
