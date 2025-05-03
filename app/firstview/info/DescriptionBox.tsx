'use client';
import { useState } from 'react';

const DescriptionBox = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="flex flex-col gap-6 px-4 md:px-12 py-8 bg-white rounded-lg shadow-md relative">
      <div className="border-b pb-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Thailand: The Best Destination Asia Pacific Awaits
        </h1>
      </div>

      <blockquote className="text-xl md:text-2xl font-semibold text-gray-800 border-l-4 border-blue-500 pl-4 italic">
        “One of the dreams on my wish list is to spend more time in Thailand.”
        <footer className="text-base not-italic mt-2 font-bold text-gray-700">- Kevin Kwan</footer>
      </blockquote>

      <div className="text-gray-700 text-lg space-y-4">
        <p>
          Thailand is the heart of Southeast Asia. A land of magic and wonder, it is the perfect vacation destination,
          catering to solo adventurers, families with kids, and even honeymoon couples.
        </p>
        <p>
          Nestled on the Indo-Chinese Peninsula, this country is a treasure trove of rich history, culture, and traditions,
          offering many unique experiences that more than one visit is needed to grasp fully. From its vibrant art scene to
          its lively entertainment, Thailand will captivate you with its beauty.
        </p>

        {/* Conditionally render extended content */}
        {isExpanded && (
          <>
            <p>
              If Thailand is on your to-go bucket list, you have found your best travel partner for planning your unforgettable trip
              to Thailand. We provide the best Thailand tour package at a very affordable price. We have designed travel itineraries
              to ensure that you don’t miss out on any highlights that the country has to offer.
            </p>
            <p>
              With destinations like Phuket, Krabi, Koh Samui, Bangkok, Pattaya, Chiang Mai, and Chiang Rai, we help you uncover
              the best of Thailand through custom-tailored tour packages suited to your preferences and budget.
            </p>
          </>
        )}
      </div>

      {/* Floating Button Group */}
      {isExpanded ? (
        <div className="fixed bottom-4 left-0 w-full z-40 px-4 md:px-12">
<div
  className="rounded-lg shadow-md py-4 border border-gray-200 flex items-center justify-center gap-6 flex-wrap"
  style={{ background: 'rgba(0, 0, 0, 0.24)' }}
>           <a
  href="https://wa.me/918192812557?text=Hi%20Crafted%20Vacays%2C%20I%20am%20interested%20in%20a%20Thailand%20tour%20package."
  target="_blank"
  rel="noopener noreferrer"
  className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full flex items-center gap-2"
>
  <img src="/images/whatsapp.png" alt="WhatsApp" className="w-5 h-5" />
  Get Quote
</a>

            <button
              onClick={handleToggle}
              className="text-blue-600 hover:underline flex items-center gap-2"
            >
              View Less
              <img
                src="/images/arrow-right.png"
                alt="Toggle arrow"
                className="w-5 h-5 transform rotate-180 transition-transform duration-200"
              />
            </button>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center pt-4">
          <button
            onClick={handleToggle}
            className="text-blue-600 hover:underline flex items-center gap-2"
          >
            View More
            <img
              src="/images/arrow-right.png"
              alt="Toggle arrow"
              className="w-5 h-5 transform transition-transform duration-200"
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default DescriptionBox;
