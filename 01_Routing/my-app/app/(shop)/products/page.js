export default function ShopProducts() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Our Products</h1>
      <div className="grid grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="p-4 bg-white shadow rounded">
            <div className="aspect-square bg-gray-200 mb-2"></div>
            <h2 className="font-bold">Product {item}</h2>
            <p className="text-gray-600">$99.99</p>
          </div>
        ))}
      </div>
    </div>
  );
}
