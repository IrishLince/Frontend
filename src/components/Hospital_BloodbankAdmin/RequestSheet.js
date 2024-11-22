import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Header from '../Header'

export default function RequestSheet() {
  const location = useLocation();
  const navigate = useNavigate();

  const {
    selectedHospital,
    selectedRequest,
    appointmentDate,
    appointmentTime, 
  } = location.state || {};

  const handleBackClick = () => {
    navigate('/schedule', { state: { selectedHospital, selectedRequest } });
  };

  const handleProceedClick = () => {
    navigate('/'); 
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="max-w-[1920px] mx-auto px-6 py-6">

        <div className="flex items-center justify-between mt-2">
          
          <div className="flex items-center space-x-2">
            <ChevronLeft onClick={handleBackClick} className="text-xl cursor-pointer" />
            <button onClick={handleBackClick} className="text-black text-sm">
              BACK
            </button>
          </div>

          
          <div className="flex items-center space-x-2">
            <button
              onClick={handleProceedClick}
              className="flex items-center text-sm font-normal text-black"
            >
              <span>PROCEED</span>
              <ChevronRight className="ml-2 text-xl" />
            </button>
          </div>
        </div>

        <div className="flex justify-center mb-8">
          <h1 className="text-2xl font-bold text-center">
            <span className="bg-gray-100 px-8 py-2 rounded-full text-[#C91C1C]">
              Request Sheet
            </span>
          </h1>
        </div>

        <div className="max-w-2xl mx-auto bg-[#FFE7E7] rounded-3xl p-8 mt-12">
          <div className="bg-white rounded-3xl p-8 shadow-lg max-w-xl mx-auto">

            <div className="mb-8">
              <h2 className="text-black font-bold text-xl mb-4">Hospital Details:</h2>
              <p><span className="text-[#C91C1C] font-semibold">Name:</span> {selectedHospital?.name || 'Hospital Name'}</p>
              <div className="border-b border-gray-300 my-2"></div>
              <p><span className="text-[#C91C1C] font-semibold">Location:</span> {selectedHospital?.location || 'Hospital Address'}</p>
              <div className="border-b border-gray-300 my-2"></div>
              <p><span className="text-[#C91C1C] font-semibold">Contact Number:</span> {selectedHospital?.phone || 'Hospital Contact'}</p>
              <div className="border-b border-gray-300 my-2"></div>
            </div>

            <div className="mb-8">
              <h2 className="text-black font-bold text-xl mb-4">Request Details:</h2>
              <p><span className="text-[#C91C1C] font-semibold">Blood Type:</span> {selectedRequest?.bloodType || 'Blood Type'}</p>
              <div className="border-b border-gray-300 my-2"></div>
              <p><span className="text-[#C91C1C] font-semibold">Units:</span> {selectedRequest?.units || 'Units'}</p>
              <div className="border-b border-gray-300 my-2"></div>
              <p><span className="text-[#C91C1C] font-semibold">Delivery Date:</span> {appointmentDate ? appointmentDate.toLocaleDateString() : 'Delivery Date'}</p>
              <div className="border-b border-gray-300 my-2"></div>
              <p><span className="text-[#C91C1C] font-semibold">Delivery Time:</span> {appointmentTime || 'Delivery Time'}</p>
              <div className="border-b border-gray-300 my-2"></div>
            </div>

            <div>
              <h2 className="text-black font-bold text-xl mb-4">Bloodbank Details:</h2>
              <p><span className="text-[#C91C1C] font-semibold">Name:</span> RedSource BloodBank</p>
              <div className="border-b border-gray-300 my-2"></div>
              <p><span className="text-[#C91C1C] font-semibold">Location:</span> 123 Makati Ave., Makati City</p>
              <div className="border-b border-gray-300 my-2"></div>
              <p><span className="text-[#C91C1C] font-semibold">Contact Number:</span> (555) 765-4321</p>
              <div className="border-b border-gray-300 my-2"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
