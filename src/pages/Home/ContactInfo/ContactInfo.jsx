import React from 'react';

export default function ContactInfo() {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto grid md:grid-cols-3 gap-6">
        {/* Location */}
        <div className="border rounded-lg p-6 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start mb-3">
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 text-green-600">
              📍
            </span>
          </div>
          <h3 className="font-semibold mb-1">OUR LOCATION</h3>
          <p className="text-gray-600 text-sm">
            1901 Thornridge Cir. Shiloh, Washington DC 20020, United States
          </p>
        </div>

        {/* Call us */}
        <div className="border rounded-lg p-6 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start mb-3">
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 text-green-600">
              📞
            </span>
          </div>
          <h3 className="font-semibold mb-1">CALL US 24/7</h3>
          <p className="text-green-600 font-bold text-lg">(303) 555-0105</p>
        </div>

        {/* Newsletter */}
        <div className="border rounded-lg p-6">
          <div className="flex items-center mb-3">
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 text-green-600">
              ✉️
            </span>
            <h3 className="ml-3 font-semibold">SUBSCRIBE NEWSLETTER</h3>
          </div>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 border border-gray-300 rounded-l-lg px-3 py-2 text-sm focus:outline-none"
            />
            <button className="bg-green-600 text-white px-4 rounded-r-lg hover:bg-green-700">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}