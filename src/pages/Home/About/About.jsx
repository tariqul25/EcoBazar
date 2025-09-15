import { FaCheckCircle } from "react-icons/fa";

const About = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
      {/* Images */}
      <div className="grid grid-cols-2 gap-4">
        <img
          src="https://i.ibb.co/F6PThy3/farmer1.jpg"
          alt="Farmer"
          className="rounded-xl object-cover h-64 w-full"
        />
        <img
          src="https://i.ibb.co/xF1mFYj/farmer2.jpg"
          alt="Farmer with basket"
          className="rounded-xl object-cover h-64 w-full"
        />
      </div>

      {/* Content */}
      <div>
        <h2 className="text-3xl font-bold mb-4">
          100% Trusted Organic Food Store
        </h2>
        <ul className="space-y-4 mb-6">
          <li className="flex items-start gap-3">
            <FaCheckCircle className="text-green-500 mt-1" />
            <p>
              Healthy & natural food for lovers of healthy food. Fresh organic
              vegetables and fruits directly from farms.
            </p>
          </li>
          <li className="flex items-start gap-3">
            <FaCheckCircle className="text-green-500 mt-1" />
            <p>
              Every day fresh and quality products for you. Clean and safe food
              with premium packaging.
            </p>
          </li>
        </ul>
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700">
          Shop Now →
        </button>
      </div>
    </section>
  );
};

export default About;
