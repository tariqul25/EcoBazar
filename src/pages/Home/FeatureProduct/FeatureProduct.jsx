import { useState } from "react";
import { FaStar, FaRegHeart, FaShoppingCart } from "react-icons/fa";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Green Apple",
      price: 14.99,
      oldPrice: 29.99,
      discount: "50%",
      img: "https://i.ibb.co/5nMKhzD/green-apple.png",
      rating: 4,
    },
    {
      id: 2,
      name: "Chinese Cabbage",
      price: 14.99,
      img: "https://i.ibb.co/D9RFD4d/chinese-cabbage.png",
      rating: 4,
    },
    {
      id: 3,
      name: "Green Capsicum",
      price: 14.99,
      img: "https://i.ibb.co/7kkHKnJ/green-capsicum.png",
      rating: 4,
    },
    {
      id: 4,
      name: "Ladies Finger",
      price: 14.99,
      img: "https://i.ibb.co/sPgJrGk/ladies-finger.png",
      rating: 4,
    },
  ];

  const [wishlist, setWishlist] = useState([]);

  return (
    <section className="py-10 max-w-6xl mx-auto px-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Featured Products</h2>
        <a
          href="#"
          className="text-green-600 font-medium flex items-center gap-1 hover:underline"
        >
          View All →
        </a>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="relative border rounded-xl shadow-sm p-4 group hover:shadow-lg transition"
          >
            {/* Discount Badge */}
            {item.discount && (
              <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                Sale {item.discount}
              </span>
            )}

            {/* Wishlist + Cart Icons */}
            <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition">
              <button
                onClick={() =>
                  setWishlist((prev) =>
                    prev.includes(item.id)
                      ? prev.filter((id) => id !== item.id)
                      : [...prev, item.id]
                  )
                }
                className="bg-white p-2 rounded-full shadow hover:text-red-500"
              >
                <FaRegHeart
                  className={`${
                    wishlist.includes(item.id) ? "text-red-500" : "text-gray-600"
                  }`}
                />
              </button>
              <button className="bg-white p-2 rounded-full shadow hover:text-green-600">
                <FaShoppingCart />
              </button>
            </div>

            {/* Product Image */}
            <img
              src={item.img}
              alt={item.name}
              className="h-40 mx-auto object-contain"
            />

            {/* Product Info */}
            <div className="mt-4 text-center">
              <h3 className="font-medium text-gray-800">{item.name}</h3>
              <div className="flex items-center justify-center gap-2 mt-1">
                <span className="text-green-600 font-semibold">
                  ${item.price}
                </span>
                {item.oldPrice && (
                  <span className="line-through text-gray-400 text-sm">
                    ${item.oldPrice}
                  </span>
                )}
              </div>

              {/* Rating */}
              <div className="flex justify-center mt-2">
                {Array.from({ length: 5 }, (_, i) => (
                  <FaStar
                    key={i}
                    className={`${
                      i < item.rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
