import React from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Robert Fox",
      role: "Customer",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
      rating: 5,
      img: "/big1.png", // top big image
      profile: "/avatar1.png", // small profile img
    },
    {
      id: 2,
      name: "Kristin Watson",
      role: "Customer",
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
      rating: 4,
      img: "/big2.png",
      profile: "/avatar2.png",
    },
    {
      id: 3,
      name: "Brooklyn Simmons",
      role: "Customer",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      rating: 5,
      img: "/big3.png",
      profile: "/avatar3.png",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <p className="text-green-600 font-medium">Testimonial</p>
            <h2 className="text-2xl md:text-3xl font-bold">What Our Customer Says</h2>
          </div>
          <div className="flex gap-3">
            <button className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-green-500 hover:text-white">
              ←
            </button>
            <button className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-green-500 hover:text-white">
              →
            </button>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-gray-50 rounded-2xl shadow overflow-hidden flex flex-col"
            >
              {/* Top Big Image */}
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-40 object-cover"
              />

              {/* Comment */}
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-gray-600 mb-6">{item.text}</p>

                {/* Profile + Rating Row */}
                <div className="flex justify-between items-center mt-auto">
                  {/* Profile Info */}
                  <div className="flex items-center gap-3">
                    <img
                      src={item.profile}
                      alt={item.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-800">{item.name}</h3>
                      <p className="text-sm text-gray-500">{item.role}</p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="text-yellow-500 text-sm">
                    {"⭐".repeat(item.rating)}{"☆".repeat(5 - item.rating)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

