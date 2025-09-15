import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const TopCategories = () => {
  const categories = [
    {
      id: 1,
      name: "Vegetables",
      count: 165,
      img: "https://i.ibb.co/ZH1rcyD/vegetable.png",
    },
    {
      id: 2,
      name: "Fresh Fruit",
      count: 137,
      img: "https://i.ibb.co/YLFGgS2/fruit.png",
    },
    {
      id: 3,
      name: "Fish",
      count: 34,
      img: "https://i.ibb.co/xhNjMdv/fish.png",
    },
    {
      id: 4,
      name: "Meat",
      count: 165,
      img: "https://i.ibb.co/SKpznkS/meat.png",
    },
    {
      id: 5,
      name: "Water and Drinks",
      count: 48,
      img: "https://i.ibb.co/xDBXcyL/drink.png",
    },
    {
      id: 6,
      name: "Snacks",
      count: 165,
      img: "https://i.ibb.co/1J6KmKv/snack.png",
    },
  ];

  const [active, setActive] = useState(1);

  return (
    <section className="py-10 max-w-6xl mx-auto px-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Shop by Top Categories</h2>
        <a
          href="#"
          className="text-green-600 font-medium flex items-center gap-1 hover:underline"
        >
          View All →
        </a>
      </div>

      {/* Categories Wrapper */}
      <div className="relative">
        {/* Left Button */}
        <button className="absolute -left-6 top-1/2 -translate-y-1/2 bg-white border rounded-full p-2 shadow hover:bg-green-50">
          <FaArrowLeft />
        </button>

        {/* Categories */}
        <div className="flex gap-4 overflow-x-auto scrollbar-hide">
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`flex flex-col items-center justify-center border rounded-xl px-6 py-6 min-w-[160px] cursor-pointer transition ${
                active === cat.id
                  ? "border-green-500 bg-green-50"
                  : "border-gray-200"
              }`}
            >
              <img src={cat.img} alt={cat.name} className="h-16 mb-3" />
              <h3 className="font-semibold text-gray-800">{cat.name}</h3>
              <p className="text-gray-500 text-sm">{cat.count} Products</p>
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button className="absolute -right-6 top-1/2 -translate-y-1/2 bg-white border rounded-full p-2 shadow hover:bg-green-50">
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default TopCategories;