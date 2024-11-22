import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import Header from '../Header'

export default function Schedule() {
  const location = useLocation()
  const navigate = useNavigate()
  const { selectedHospital } = location.state || {}
  const [date, setDate] = useState(new Date())
  const [selectedTime, setSelectedTime] = useState('')

  const availableTimeSlots = [
    "10:00 AM",
    "2:00 PM",
    "4:00 PM",
    "6:00 PM"
  ]

  const handleConfirm = () => {
    if (selectedTime) {
      navigate('/eligibility', { 
        state: { 
          selectedHospital,
          appointmentDate: date,
          appointmentTime: selectedTime
        } 
      })
    } else {
      alert('Please select a time slot before proceeding.')
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="max-w-[1920px] mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-8">
          <Link 
            to="/donation-center" 
            className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 text-gray-600 hover:bg-gray-200 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>BACK</span>
          </Link>
          <button 
            onClick={handleConfirm}
            className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 text-gray-600 hover:bg-gray-200 transition-colors"
          >
            <span>CONFIRM</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <h1 className="text-3xl font-bold text-center mb-8">
          <span className="bg-gray-100 px-12 py-3 rounded-full text-red-600">
            Select Date and Time
          </span>
        </h1>

        <div className="max-w-5xl mx-auto bg-red-50 rounded-3xl p-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Select Donation Date</h2>
              <div className="bg-white rounded-2xl p-6 shadow-sm flex justify-center items-center">
                <DatePicker
                  selected={date}
                  onChange={(date) => setDate(date)}
                  inline
                  className="!font-sans"
                />
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Select Time Slot</h2>
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <p className="mb-6 text-lg">Select an available time slot!</p>
                <div className="space-y-3">
                  {availableTimeSlots.map((time) => (
                    <label
                      key={time}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="timeSlot"
                        value={time}
                        checked={selectedTime === time}
                        onChange={(e) => setSelectedTime(e.target.value)}
                        className="w-5 h-5 text-red-600 border-2 border-gray-300 focus:ring-red-600"
                      />
                      <span className="text-lg">{time}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <div className="inline-block">
              <p className="text-gray-600 mb-1">Donation Eligibility Status:</p>
              <p className="font-bold text-red-600 bg-red-100 px-6 py-2 rounded-full">
                FOR REVIEW
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}