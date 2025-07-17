import "./globals.css"
import Navbar from "@/app/components/navbar"
import Footer from "@/app/components/footer"
import { CartProvider } from "@/app/context/cart-context" 


export const metadata = {
  title: "My Next.js App",
  description: "A modern Next.js application with navbar",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <CartProvider>
          {" "}
          {/* Wrap children with CartProvider */}
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
