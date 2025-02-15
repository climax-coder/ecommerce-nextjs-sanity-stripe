import type { Metadata } from "next";
import Navbar from "@/components/Navbar"
import ShoppingCart from "@/components/ShoppingCart";
import CartProvider from "@/providers/CartProvider";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ecomm",
  description: "Tech demo of e-commerce powered by Stripe checkout",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Navbar />
          <ShoppingCart/>
          <main className="grid grid-cols-1 auto-rows-max mx-auto max-w-screen-sm px-4 sm:px-6 lg:max-w-screen-xl">
            {children}
          </main>
        </CartProvider>
      </body>
    </html>
  )
}
