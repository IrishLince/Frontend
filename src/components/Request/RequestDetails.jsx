import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Header from '../Header';

export default function RequestDetails() {
  const location = useLocation();
  const { bloodType, unitsRequested, requestDate, dateNeeded } = location.state || {};

  return (
    <div className="bg-white flex flex-col min-h-screen">
      <Header />

      <div className="flex justify-end px-4 py-4">
        <Link to="/successful-login">
          <button className="flex items-center text-gray-600 text-sm hover:text-gray-800">
            <span>PROCEED</span> <ChevronRight className="ml-1" />
          </button>
        </Link>
      </div>

      <div className="flex justify-center items-center pt-4 pb-6">
        <div className="bg-[#F2F2F2] p-4 rounded-full w-[90%] sm:w-[60%] md:w-[35%] text-center">
          <h1 className="text-[#C91C1C] text-xl font-bold">Your Request Details</h1>
        </div>
      </div>

      <div className="flex justify-center items-start px-4 pb-8">
        <div className="bg-[#FFE7E7] p-6 rounded-lg w-full max-w-[800px]">
          <div className="bg-white p-4 rounded-lg space-y-4 mx-auto">
            {[
              {
                label: 'HOSPITAL NAME:',
                value: 'Riverside Community Medical Center',
              },
              {
                label: 'HOSPITAL ADDRESS:',
                value: '456 River Ave., Townsville',
              },
              {
                label: 'CONTACT INFORMATION:',
                value: '(555) 987-6543',
              },
              {
                label: 'BLOOD TYPE:',
                value: bloodType || 'Not Provided',
              },
              {
                label: 'UNITS REQUESTED:',
                value: unitsRequested || 'Not Provided',
              },
              {
                label: 'REQUEST DATE:',
                value: requestDate || 'Not Provided',
              },
              {
                label: 'DATE NEEDED:',
                value: dateNeeded || 'Not Provided',
              },
            ].map((detail, index) => (
              <div
                key={index}
                className={`flex justify-between items-center py-2 ${
                  index < 6 ? 'border-b border-gray-300' : ''
                }`}
              >
                <label className="font-bold text-black w-1/3">{detail.label}</label>
                <p className="w-2/3 text-black">{detail.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}