import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { RiSecurePaymentLine } from "react-icons/ri";

const cardInfo = [
  {
    image: <FaShippingFast />,
    name: "Free Shipping",
    description: "Free shipping with discount",
  },
  {
    image: <BiSupport />,
    name: "Great Support 24/7",
    description: "Instant access to Contact",
  },
  {
    image: <RiSecurePaymentLine />,
    name: "100% Secure Payment",
    description: "We ensure your money is save",
  },
  {
    image: <FaShippingFast />,
    name: "Money-Back Guarantee",
    description: "30 days money-back",
  },
];

const Card = () => {
  return (
    <div className="flex gap-4 justify-center  space-x-3 my-2 ">
      {cardInfo.map((card) => (
        <div className="flex flex-col space-y-2 justify-center p-4 rounded-md shadow-xs">
          <p  className="flex justify-center">{card.image}</p>
          <h2 className="flex justify-center">{card.name}</h2>
          <h3 className="flex justify-center">{card.description }</h3>
        </div>
      ))}
    </div>
  );
};

export default Card;
