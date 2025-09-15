export default function BestSellerProducts() {
  const products = [
    { id: 1, name: "Green Apple", price: "$14.99", img: "/apple.png", rating: 4.5 },
    { id: 2, name: "Cabbage", price: "$12.50", img: "/cabbage.png", rating: 4.3 },
    { id: 3, name: "Lettuce", price: "$11.20", img: "/lettuce.png", rating: 4.2 },
    { id: 4, name: "Green Chili", price: "$9.99", img: "/chili.png", rating: 4.7 },
    { id: 5, name: "Corn", price: "$7.49", img: "/corn.png", rating: 4.6 },
  ];

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Best Seller Products</h2>
          <a href="#" className="text-green-600 hover:underline">View All</a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {products.map((product) => (
            <div key={product.id} className="bg-white border rounded-2xl shadow p-4 text-center">
              <img src={product.img} alt={product.name} className="w-20 h-20 mx-auto object-contain" />
              <h3 className="mt-3 font-semibold">{product.name}</h3>
              <p className="text-green-600 font-bold">{product.price}</p>
              <p className="text-yellow-500 text-sm">⭐ {product.rating}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
