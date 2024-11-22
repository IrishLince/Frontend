import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Header from '../Header'

export default function Schedule() {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedHospital, selectedRequest } = location.state || {};
  const [date, setDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');

  const availableTimeSlots = [
    "10:00 AM",
    "2:00 PM",
    "4:00 PM",
    "6:00 PM"
  ];

  const handleConfirm = () => {
    if (selectedTime) {
      navigate('/request-sheet', { 
        state: { 
          selectedHospital,
          selectedRequest,
          appointmentDate: date,
          appointmentTime: selectedTime
        } 
      });
    } else {
      alert('Please select a time slot before proceeding.');
    }
  };

  const handleBackClick = () => {
    navigate('/requests', { state: { selectedHospital } });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="max-w-[1920px] mx-auto px-6 py-6">
        
        <div className="flex items-center space-x-2 mt-2">
          <ChevronLeft onClick={handleBackClick} className="text-xl cursor-pointer" />
          <button onClick={handleBackClick} className="text-black text-sm">
            BACK
          </button>
        </div>

        
        <div className="flex justify-center mb-8">
          <h1 className="text-2xl font-bold text-center">
            <span className="bg-gray-100 px-8 py-2 rounded-full text-[#C91C1C]">
              Select Delivery Date and Time
            </span>
          </h1>
        </div>

        
        <div className="max-w-4xl mx-auto bg-red-50 rounded-3xl p-12 mt-12">
          <div className="grid md:grid-cols-2 gap-6 justify-items-center">
            
            <div className="flex flex-col items-center">
              <h2 className="text-xl font-bold mb-5">
                Select Date
              </h2>
              <div className="bg-white rounded-2xl p-4 shadow-sm flex justify-center items-center">
                <DatePicker
                  selected={date}
                  onChange={(date) => setDate(date)}
                  inline
                  minDate={new Date()} 
                  highlightDates={[new Date()]} 
                  dayClassName={(date) => 
                    date < new Date() 
                      ? "bg-gray-200" 
                      : "bg-white"} 
                  className="!font-sans"
                />
              </div>
            </div>

            
            <div className="flex flex-col items-center">
              <h2 className="text-xl font-bold mb-5">
                Select Time
              </h2>
              <div className="bg-white rounded-2xl p-4 shadow-sm">
                <p className="mb-3 text-lg">Select a preferred time for delivery!</p>
                <div className="space-y-2">
                  {availableTimeSlots.map((time) => (
                    <label
                      key={time}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="timeSlot"
                        value={time}
                        checked={selectedTime === time}
                        onChange={(e) => setSelectedTime(e.target.value)}
                        className="w-4 h-4 text-red-600 border-2 border-gray-300 focus:ring-red-600"
                      />
                      <span className="text-lg">{time}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          
          <div className="mt-8 flex justify-center">
            <button
              onClick={handleConfirm}
              className="px-6 py-2 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 transition"
            >
              CONFIRM
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
