export default function ShopLayout({ children }) {
  return (
    <div className="shop-layout">
      {/* Shop-specific navigation */}
      <nav className="bg-blue-600 p-4 text-white">
        <div className="container mx-auto">
          <ul className="flex space-x-4">
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/categories">Categories</a>
            </li>
            <li>
              <a href="/cart">Cart</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main content */}
      <main className="container mx-auto p-4">{children}</main>

      {/* Shop footer */}
      <footer className="bg-gray-100 p-4 mt-8">
        <div className="container mx-auto">
          <p>© 2025 Our Shop. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
