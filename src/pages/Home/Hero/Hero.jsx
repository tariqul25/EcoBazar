import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="bg-[url(/src/assets/images/hero-bg.png)] h-[630px] flex justify-center items-center space-x-20">
      <img src="/src/assets/images/fruits.png" alt="" />
      <div className="space-y-3">
        <p className="text-green-400 ">Welcome to shopery</p>
        <h4 className="text-6xl font-bold">Fresh & Healthy <br /> Organic Food</h4>
        <h2 className="text-3xl ">Sale up to 30% OFF</h2>
        <h5>Free shipping on all your order. we deliver, you enjoy</h5>
        <button className="btn bg-green-500 rounded-xl text-white">Shop now <FaLongArrowAltRight className="text-white"/></button>
      </div>
    </div>
  );
};

export default Hero;
