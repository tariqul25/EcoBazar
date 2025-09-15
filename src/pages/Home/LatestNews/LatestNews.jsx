import React from 'react';

export default function LatestNews() {
  const news = [
    { id: 1, title: "Cucumber protects against cancer", img: "/orange.png", date: "18 Jan" },
    { id: 2, title: "Carrot boosts immunity", img: "/soup.png", date: "20 Jan" },
    { id: 3, title: "Avocado prevents aging", img: "/salad.png", date: "22 Jan" },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Latest News</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {news.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow overflow-hidden">
              <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <span className="text-sm text-gray-500">{item.date}</span>
                <h3 className="mt-2 font-semibold">{item.title}</h3>
                <p className="text-gray-600 text-sm mt-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <a href="#" className="text-green-600 text-sm font-medium mt-2 block">
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


