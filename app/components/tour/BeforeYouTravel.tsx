'use client';
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Info } from 'lucide-react';

interface TravelInfoRow {
  pax: number;
  price: string;
  vehicle: string;
}

interface BeforeYouTravelData {
  table: TravelInfoRow[];
  points: string[];
}

const beforeYouTravelData: BeforeYouTravelData = {
  table: [
    { pax: 2, price: '₹ 30000', vehicle: 'AC Etios/Ertiga' },
    { pax: 4, price: '₹ 28000', vehicle: 'AC Innova' },
    { pax: 6, price: '₹ 26000', vehicle: 'AC Innova' },
    { pax: 8, price: '₹ 25500', vehicle: 'AC Tempo Traveller' },
    { pax: 12, price: '₹ 25000', vehicle: 'AC Tempo Traveller' },
  ],
  points: [
    '₹1000 per person will be added to the package if picked up and dropped off in Jammu.',
    'Prices mentioned are indicative and may vary depending on seasonality and availability.',
    'Tour prices will differ according to flight availability; please inquire before booking.',
    'Prices include sightseeing, hotel, tickets, transfers, and GST.',
    'To know exact prices, kindly fill out the Quote Request Form.',
    'Please do not litter and keep the destination clean.',
    'Refunds and cancellations will be made as per the Cancellation and Refund Policy.',
    'No bill will be reimbursed against any missed service/facility.',
  ],
};

const BeforeYouTravel: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <div className="space-y-3 mt-6">
      <div
        className={`border rounded-lg transition-all duration-300 ${
          isOpen ? 'border-orange-500' : 'border-orange-300'
        }`}
      >
        <div
          className={`flex justify-between items-center cursor-pointer px-4 py-3 rounded-t-lg ${
            isOpen ? 'bg-orange-500 text-white' : 'bg-orange-100 text-black'
          } dark:bg-orange-700 dark:text-white dark:border-orange-500`}
          onClick={toggleOpen}
        >
          <div className="flex items-center gap-2 font-semibold">
            <Info className="w-5 h-5" />
            <h4 className="text-lg">Before You Travel</h4>
          </div>
          {isOpen ? (
            <ChevronUp className="w-5 h-5" />
          ) : (
            <ChevronDown className="w-5 h-5" />
          )}
        </div>

        {isOpen && (
          <div className="p-4 bg-white border-t border-orange-200 space-y-4 dark:bg-gray-800 dark:text-gray-300">
            {/* Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full border text-sm">
                <thead className="bg-orange-100 text-orange-700 dark:bg-orange-700 dark:text-orange-300">
                  <tr>
                    <th className="border px-4 py-2">Minimum Pax</th>
                    <th className="border px-4 py-2">Price per person</th>
                    <th className="border px-4 py-2">Vehicle for Transfers</th>
                  </tr>
                </thead>
                <tbody>
                  {beforeYouTravelData.table.map((row, index) => (
                    <tr key={index} className="text-center">
                      <td className="border px-4 py-2">{row.pax}</td>
                      <td className="border px-4 py-2">{row.price}</td>
                      <td className="border px-4 py-2">{row.vehicle}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Points List */}
            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700 dark:text-gray-400">
              {beforeYouTravelData.points.map((point, index) => (
                <li key={index}>
                  {point.includes('Cancellation and Refund Policy') ? (
                    <span>
                      Refunds and cancellations will be made as per the{' '}
                      <a
                        href="https://craftedvacays.com/cancel-refund"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-600 underline dark:text-orange-400"
                      >
                        Cancellation and Refund Policy
                      </a>.
                    </span>
                  ) : (
                    point
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default BeforeYouTravel;
