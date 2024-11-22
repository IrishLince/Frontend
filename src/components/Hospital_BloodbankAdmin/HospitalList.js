import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../Header'

export default function HospitalList() {
  const navigate = useNavigate()

  const hospitals = [
    {
      name: "St. Mary's General Hospital",
      location: "123 Maple St., Cityville",
      phone: "(555) 123-4567",
      bloodTypes: "O+, A+, B-, O-"
    },
    {
      name: "Riverside Community Medical Center",
      location: "456 River Ave., Townsville",
      phone: "(555) 987-6543",
      bloodTypes: "AB+, O-, A+, B-"
    },
    {
      name: "Pinecrest Medical Center",
      location: "789 Hill Rd., Greendale",
      phone: "(555) 456-7890",
      bloodTypes: "A-, B+, O+, AB+"
    },
    {
      name: "Mount Hope Regional Hospital",
      location: "101 Mountain Dr., Hope City",
      phone: "(555) 222-3333",
      bloodTypes: "O+, A-, A+, B-"
    },
    {
      name: "Cityview Medical Center",
      location: "202 Cityview Blvd., Metropolis",
      phone: "(555) 111-4444",
      bloodTypes: "AB-, B+, A-, O-"
    },
    {
      name: "Lakeside General Hospital",
      location: "303 Lakeside Dr., Lakeview",
      phone: "(555) 555-7777",
      bloodTypes: "O-, AB+, A+, B-"
    },
    {
      name: "Sunrise Healthcare Facility",
      location: "606 Sunrise Dr., Sunnyside",
      phone: "(555) 444-6666",
      bloodTypes: "A+, B-, B+, AB-"
    },
    {
      name: "Evergreen Medical Hospital",
      location: "707 Evergreen Ave., Greentown",
      phone: "(555) 999-8888",
      bloodTypes: "AB-, O+, O-, A+"
    }
  ]

  const handleViewRequests = (hospital) => {
    navigate('/requests', { state: { selectedHospital: hospital } })
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-grow max-w-[1920px] mx-auto px-6 pt-12"> 
        <h1 className="text-2xl font-bold text-center mb-8">
          <span className="bg-gray-100 px-8 py-2 rounded-full text-[#C91C1C]">
            List of Hospitals
          </span>
        </h1>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8 pt-6"> 
          <table className="w-full border-collapse border border-gray-400">
            <thead>
              <tr className="bg-gray-100 text-sm text-gray-600">
                <th className="text-left p-4 border-b border-gray-400">Hospital</th>
                <th className="text-left p-4 border-b border-gray-400">Location</th>
                <th className="text-left p-4 border-b border-gray-400">Contact Number</th>
                <th className="text-left p-6 pl-10 border-b border-gray-400">Blood Types Requested</th>
                <th className="p-4 border-b border-gray-400"></th>
              </tr>
            </thead>
            <tbody>
              {hospitals.map((hospital, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="p-4">{hospital.name}</td>
                  <td className="p-4">{hospital.location}</td>
                  <td className="p-4">{hospital.phone}</td>
                  <td className="p-4 pl-10">{hospital.bloodTypes}</td>
                  <td className="p-4">
                    <button
                      onClick={() => handleViewRequests(hospital)}
                      className="px-3 py-1.5 text-sm text-white bg-[#F05B5B] rounded-full hover:bg-[#e04d4d] shadow-md hover:shadow-lg transition"
                    >
                      View Requests
                    </button>
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
