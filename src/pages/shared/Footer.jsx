import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 pt-12">
      <div className="container mx-auto grid md:grid-cols-4 gap-10 pb-10">
        {/* Left - Logo + Desc */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">Ecobazar</h2>
          <p className="text-sm mb-4">
            Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna.
          </p>
          <div className="flex gap-3">
            <a href="#" className="bg-green-600 w-8 h-8 rounded-full flex items-center justify-center text-white">F</a>
            <a href="#" className="bg-green-600 w-8 h-8 rounded-full flex items-center justify-center text-white">T</a>
            <a href="#" className="bg-green-600 w-8 h-8 rounded-full flex items-center justify-center text-white">P</a>
            <a href="#" className="bg-green-600 w-8 h-8 rounded-full flex items-center justify-center text-white">I</a>
          </div>
        </div>

        {/* My Account */}
        <div>
          <h3 className="text-white font-semibold mb-3">My Account</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-green-500">My Account</a></li>
            <li><a href="#" className="hover:text-green-500">Order History</a></li>
            <li><a href="#" className="hover:text-green-500">Shopping Cart</a></li>
            <li><a href="#" className="hover:text-green-500">Wishlist</a></li>
          </ul>
        </div>

        {/* Helps */}
        <div>
          <h3 className="text-white font-semibold mb-3">Helps</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-green-500">Contact</a></li>
            <li><a href="#" className="hover:text-green-500">FAQs</a></li>
            <li><a href="#" className="hover:text-green-500">Terms & Condition</a></li>
            <li><a href="#" className="hover:text-green-500">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Download Mobile App */}
        <div>
          <h3 className="text-white font-semibold mb-3">Download Mobile App</h3>
          <div className="flex flex-col gap-3">
            <a href="#" className="bg-gray-800 px-4 py-2 rounded-lg flex items-center justify-center text-white">
               Download on the App Store
            </a>
            <a href="#" className="bg-gray-800 px-4 py-2 rounded-lg flex items-center justify-center text-white">
              ▶ Download on Google Play
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4 text-center text-sm flex flex-col md:flex-row justify-between items-center container mx-auto">
        <p>Ecobazar eCommerce © 2021. All Rights Reserved</p>
        <div className="flex gap-4 mt-3 md:mt-0">
          <span> Pay</span>
          <span>VISA</span>
          <span>Mastercard</span>
          <span>Discover</span>
          <span className="text-green-500">Secure Payment</span>
        </div>
      </div>
    </footer>
  );
}
