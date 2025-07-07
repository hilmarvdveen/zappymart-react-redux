"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Image from "next/image";
import { Heart, ShoppingCart } from "lucide-react"; // Lucide icon import
import { useAppDispatch } from "@/store/hooks/useAppDispatch";
import { useAppSelector } from "@/store/hooks/useAppSelector";
import {
  selectWishlistCount,
  toggleDrawer,
} from "@/features/wishlist/slices/wishlistSlice";
import { selectCartCount } from "@/features/cart/slices/cartSlice";

const menuLinks = [
  { path: "/over-ons", label: "Over ons" },
  { path: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const wishListCount = useAppSelector(selectWishlistCount);
  const cartCount = useAppSelector(selectCartCount);

  return (
    <div className="container mx-auto">
      <div className="hidden md:flex justify-between items-center h-[60px] px-4">
        {/* Logo */}
        <div className="h-[60px]">
          <Link
            href="/"
            aria-label="Logo en home knop"
            className="inline-block h-full"
          >
            <Image
              src="/assets/logo_zappy_mart.png"
              alt="Logo"
              className="h-full w-auto block"
              width={200}
              height={40}
            />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex">
          <ul className="flex p-0 m-0">
            {menuLinks.map((link) => {
              const isActive = pathname === link.path;

              return (
                <li
                  key={link.path}
                  data-active={isActive}
                  className={clsx(
                    "relative list-none inline-block mx-4 py-2 px-3 hover:bg-blue-100 rounded transition-colors",
                    isActive &&
                      "after:absolute after:left-0 after:-bottom-4 after:h-[2px] after:w-full after:bg-purple-800"
                  )}
                >
                  <Link
                    href={link.path}
                    className="relative text-black text-lg font-semibold"
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="flex gap-2">
          <Link
            href="/winkel-wagen"
            aria-label="Bekijk je winkelwagen"
            className="relative text-emerald-900 bg-green-100 rounded-lg px-3 py-2 hover:bg-green-200 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ShoppingCart className="w-5 h-5" strokeWidth={2} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white rounded-full px-2 py-0.5 text-xs font-bold">
                {cartCount}
              </span>
            )}
          </Link>
          <button
            onClick={() => dispatch(toggleDrawer())}
            disabled={wishListCount === 0}
            aria-label="Bekijk je favorieten"
            className="relative text-emerald-900 bg-pink-100 rounded-lg px-3 py-2 hover:bg-pink-200 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <Heart className="w-5 h-5" strokeWidth={2} />
            {wishListCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white rounded-full px-2 py-0.5 text-xs font-bold">
                {wishListCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
