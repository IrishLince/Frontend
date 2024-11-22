import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'
import Header from '../Header'

export default function RequestList() {
  const navigate = useNavigate()
  const location = useLocation()
  const { selectedHospital } = location.state || {}

  if (!selectedHospital) {
    return <div className="min-h-screen bg-white flex flex-col">No Hospital Selected</div>
  }

  const generateRequests = (bloodTypes) => {
    return bloodTypes.split(', ').map(bloodType => ({
      bloodType,
      units: Math.floor(Math.random() * 5) + 1,
      requestDate: new Date().toISOString().split('T')[0]
    }))
  }

  const requests = generateRequests(selectedHospital.bloodTypes)

  const handleSelectRequest = (request) => {
    
    navigate('/schedule', { state: { selectedHospital, selectedRequest: request } })
  }

  const handleBackClick = () => {
    navigate('/hospital')
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <div className="flex items-center space-x-2 mb-4 mt-4 px-6">
        <IoIosArrowBack onClick={handleBackClick} className="text-xl cursor-pointer" />
        <button onClick={handleBackClick} className="text-black text-sm">
          BACK
        </button>
      </div>

      <div className="flex justify-center mb-8">
        <h1 className="text-2xl font-bold text-center">
          <span className="bg-gray-100 px-8 py-2 rounded-full text-[#C91C1C]">
            Blood Requests for {selectedHospital.name}
          </span>
        </h1>
      </div>

      <main className="flex-grow max-w-[1920px] mx-auto px-6 py-8">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
          <table className="w-full border-collapse text-lg border border-gray-400">
            <thead>
              <tr className="bg-gray-100 text-lg text-gray-600">
                <th className="text-left p-6 border-b border-gray-400">Blood Type</th>
                <th className="text-left p-6 border-b border-gray-400">Units</th>
                <th className="text-left p-6 border-b border-gray-400">Request Date</th>
                <th className="p-6 border-b border-gray-400"></th>
              </tr>
            </thead>
            <tbody>
              {requests.map((request, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="p-6 border-b border-gray-300">{request.bloodType}</td>
                  <td className="p-6 border-b border-gray-300">{request.units}</td>
                  <td className="p-6 border-b border-gray-300">{request.requestDate}</td>
                  <td className="p-6">
                    <button
                      onClick={() => handleSelectRequest(request)}
                      className="px-6 py-3 text-xs text-white bg-[#F05B5B] rounded-full hover:bg-[#e04d4d] shadow-md hover:shadow-lg transition"
                    >
                      SELECT
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
