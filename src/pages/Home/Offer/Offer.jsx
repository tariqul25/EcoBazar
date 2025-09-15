const Offer = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-6">
      {/* Left Card */}
      <div className="relative rounded-xl overflow-hidden">
        <img
          src="https://i.ibb.co/nrfNq5X/vegetables.jpg"
          alt="Fruit & Vegetable"
          className="w-full h-72 object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start p-6">
          <h4 className="text-white text-xl mb-2">100% Organic</h4>
          <h2 className="text-white text-3xl font-bold mb-3">
            Fruit & Vegetable
          </h2>
          <span className="bg-yellow-400 text-black px-3 py-1 rounded text-sm font-semibold mb-4">
            Starting @ $11.99
          </span>
          <button className="bg-green-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-green-700">
            Shop Now →
          </button>
        </div>
      </div>

      {/* Right Card */}
      <div className="relative rounded-xl overflow-hidden">
        <img
          src="https://i.ibb.co/ypnJpLr/sale.jpg"
          alt="Sales of the Year"
          className="w-full h-72 object-cover"
        />
        <div className="absolute inset-0 bg-blue-600/70 flex flex-col justify-center items-start p-6">
          <h4 className="text-white text-xl mb-2">Sale of the Week</h4>
          <h2 className="text-white text-3xl font-bold mb-3">
            Sales of the Year
          </h2>
          {/* Countdown */}
          <div className="flex gap-4 mb-4 text-white">
            <div className="text-center">
              <p className="text-2xl font-bold">00</p>
              <span className="text-sm">Days</span>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">02</p>
              <span className="text-sm">Hrs</span>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">18</p>
              <span className="text-sm">Min</span>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">48</p>
              <span className="text-sm">Sec</span>
            </div>
          </div>
          <button className="bg-green-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-green-700">
            Shop Now →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Offer;
