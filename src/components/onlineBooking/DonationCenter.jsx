import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Header from '../Header'

export default function DonationCenter() {
  const navigate = useNavigate()
  
  const hospitals = [
    {
      name: "St. Mary's General Hospital",
      location: "123 Maple St., Cityville",
      phone: "(555) 123-4567",
      hours: "10:00 AM - 4:00 PM",
      bloodTypes: "O+, A+, B-"
    },
    {
      name: "Riverside Community Medical Center",
      location: "456 River Ave., Townsville",
      phone: "(555) 987-6543",
      hours: "8:30 AM - 5:30 PM",
      bloodTypes: "AB+, O-"
    },
    // ... other hospitals
  ]

  const handleHospitalSelect = (hospital) => {
    navigate('/schedule', { state: { selectedHospital: hospital } })
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-grow max-w-[1920px] mx-auto px-6 py-8">
        <h1 className="text-2xl font-bold text-center mb-8">
          <span className="bg-gray-100 px-8 py-2 rounded-full">
            Select Donation Center
          </span>
        </h1>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50 text-sm text-gray-600">
                <th className="text-left p-4">Blood Bank</th>
                <th className="text-left p-4">Location</th>
                <th className="text-left p-4">Contact Number</th>
                <th className="text-left p-4">Available Time Slots</th>
                <th className="text-left p-4">Blood Types Needed</th>
                <th className="p-4"></th>
              </tr>
            </thead>
            <tbody>
              {hospitals.map((hospital, index) => (
                <tr 
                  key={index}
                  onClick={() => handleHospitalSelect(hospital)}
                  className="border-b hover:bg-gray-50 cursor-pointer"
                >
                  <td className="p-4">{hospital.name}</td>
                  <td className="p-4">{hospital.location}</td>
                  <td className="p-4">{hospital.phone}</td>
                  <td className="p-4">{hospital.hours}</td>
                  <td className="p-4">{hospital.bloodTypes}</td>
                  <td className="p-4">
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  )
}