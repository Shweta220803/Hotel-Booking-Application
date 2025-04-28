import React from "react";
import Title from "./Title";
import { assets, exclusiveOffers } from "../assets/assets/assets";

const ExclusiveOffer = () => {
  return (
    <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 pt-20 pb-30">
      <div className="flex flex-col md:flex-row items-center justify-between w-full">
        <Title
          align="left"
          title="Exclusive Offers"
          subTitle="Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories."
        />
        <button className="group flex items-center gap-2 font-medium cursor-pointer max-md:mt-12">
          View All Offers
          <img
            src={assets.arrowIcon}
            alt="arrow-icon"
            className="group-hover:translate-x-1 transition-all"
          />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 w-full">
        {exclusiveOffers.map((item) => (
          <div
            key={item._id}
            className="group relative flex flex-col items-start justify-between gap-4 pt-12 md:pt-18 px-4 rounded-xl text-white bg-no-repeat bg-cover bg-center h-80"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <p className="px-3 py-1 absolute top-4 left-4 text-xs bg-white text-gray-800 font-medium rounded-full">
              {item.priceOff}% OFF
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              <p className="text-2xl font-medium font-playfair">{item.title}</p>
              <p className="text-sm mt-2">{item.description}</p>
              <p className="text-xs text-white/70 mt-3">
                Expires {item.expiryDate}
              </p>
            </div>
            <button className="flex items-center gap-2 font-medium cursor-pointer mt-4 mb-5">
              View Offers
              <img
                src={assets.arrowIcon}
                alt="arrow-icon"
                className="invert group-hover:translate-x-1 transition-all"
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExclusiveOffer;
