import "./globals.css";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import { CartProvider } from "@/app/context/cart-context";
import CartPopup from "@/app/components/cart-popup";
import { WishlistProvider } from "@/app/context/wishlist-context";

export const metadata = {
  title: "Perfume Collection",
  description: "Explore our exquisite range of perfumes, crafted for elegance and sophistication.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <CartProvider>
          <WishlistProvider>
            {" "}
            {/* Wrap children with CartProvider */}
            <Navbar />
            <div className="fixed top-4 right-4 z-50 flex items-center gap-4"></div>
            <main className="min-h-screen">{children}</main>
            <Footer />
            <CartPopup />
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
