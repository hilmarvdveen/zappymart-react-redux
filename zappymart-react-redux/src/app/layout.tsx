// app/layout.tsx
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/layout/Header";
import ReduxProvider from "@/lib/providers/ReduxProvider";
import WishlistDrawer from "@/features/wishlist/components/wishlistDrawer";

const inter = localFont({
  src: [
    {
      path: "../assets/fonts/static/Inter_18pt-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/static/Inter_18pt-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/static/Inter_18pt-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../assets/fonts/static/Inter_18pt-Medium.ttf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "ZappyMart",
  description: "React - NextJS - Redux E-Commerce App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <ReduxProvider>
          <Header />
          <WishlistDrawer />
          <main className="container mx-auto">{children}</main>
        </ReduxProvider>
      </body>
    </html>
  );
}
