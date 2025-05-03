'use client';
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface TourPlanItem {
  day: string;
  title: string;
  description: string;
  image: string;
}

const tourPlans: TourPlanItem[] = [
  {
    day: 'Day 1',
    title: 'Arrival in Phuket and Patong Beach Exploration',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At volutpat diam ut venenatis tellus inmetus. Sem et tortor consequat id porta.',
    image: '/images/phuket1.jpg',
  },
  {
    day: 'Day 2',
    title: 'Phi Phi Islands Snorkeling Adventure',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At volutpat diam ut venenatis tellus inmetus. Sem et tortor consequat id porta.',
    image: '/images/n3.jpg',
  },
  {
    day: 'Day 3',
    title: 'Phang Nga Bay Cruise and Cultural Immersion',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At volutpat diam ut venenatis tellus inmetus. Sem et tortor consequat id porta.',
    image: '/images/n3.jpg',
  },
  {
    day: 'Day 4',
    title: 'Leisure Day and Departure',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At volutpat diam ut venenatis tellus inmetus. Sem et tortor consequat id porta.',
    image: '/images/n3.jpg',
  },
];

const TourPlan: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // default open first

  const toggleIndex = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="space-y-3 mt-6">
      <h2 className="text-xl font-bold mb-4">Tour Plans</h2>
      {tourPlans.map((plan, index) => (
        <div
          key={index}
          className={`border rounded-lg transition-all duration-300 ${
            openIndex === index ? 'border-orange-500' : 'border-orange-300'
          } dark:border-orange-700`}
        >
          <div
            className={`flex justify-between items-center cursor-pointer px-4 py-3 rounded-t-lg ${
              openIndex === index
                ? 'bg-orange-500 text-white'
                : 'bg-orange-100 text-black dark:bg-orange-700 dark:text-white'
            }`}
            onClick={() => toggleIndex(index)}
          >
            <div className="flex items-center gap-2 font-semibold">
              <span
                className={`text-xs font-bold px-2 py-1 rounded ${
                  openIndex === index
                    ? 'bg-white text-orange-600'
                    : 'bg-orange-300 text-white'
                }`}
              >
                {plan.day}
              </span>
              <span>{plan.title}</span>
            </div>
            {openIndex === index ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </div>

          {openIndex === index && (
            <div className="p-4 bg-white border-t border-orange-200 dark:bg-gray-800 dark:border-orange-600">
              <div className="flex flex-col md:flex-row gap-4">
                <p className="flex-1 text-sm text-gray-700 dark:text-gray-300">{plan.description}</p>
                {plan.image && (
                  <img
                    src={plan.image}
                    alt={plan.title}
                    className="w-full md:w-52 h-auto rounded-md shadow-md object-cover"
                  />
                )}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TourPlan;
