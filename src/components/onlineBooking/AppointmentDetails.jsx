import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Header from '../Header'

export default function AppointmentDetails() {
  const location = useLocation()
  const navigate = useNavigate()
  const { donorInfo, appointmentDetails } = location.state || {}

  if (!donorInfo || !appointmentDetails) {
    return <div>No appointment details available. Please book an appointment first.</div>
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="max-w-[1920px] mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-8">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 text-gray-600 hover:bg-gray-200 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>BACK</span>
          </button>
          <button 
            className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 text-gray-600 hover:bg-gray-200 transition-colors"
            onClick={() => navigate("/successful-login")}
         >
            <span>Proceed</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <h1 className="text-2xl font-bold text-center mb-8">
          <span className="bg-gray-100 px-8 py-2 rounded-full">
            Your Appointment Details
          </span>
        </h1>

        <div className="max-w-2xl mx-auto bg-red-50 rounded-lg p-8">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="space-y-6">
              <div>
                <h2 className="font-semibold mb-4">Personal Information:</h2>
                <div className="space-y-2">
                  <div className="flex">
                    <span className="w-48 text-[#C91C1C] font-medium">FULL NAME:</span>
                    <span>{donorInfo.fullName}</span>
                  </div>
                  <div className="flex">
                    <span className="w-48 text-[#C91C1C] font-medium">EMAIL ADDRESS:</span>
                    <span>{donorInfo.email}</span>
                  </div>
                  <div className="flex">
                    <span className="w-48 text-[#C91C1C] font-medium">CONTACT NUMBER:</span>
                    <span>{donorInfo.contactNumber}</span>
                  </div>
                  <div className="flex">
                    <span className="w-48 text-[#C91C1C] font-medium">BLOOD TYPE:</span>
                    <span>{donorInfo.bloodType}</span>
                  </div>
                  <div className="flex">
                    <span className="w-48 text-[#C91C1C] font-medium">DATE OF BIRTH:</span>
                    <span>{donorInfo.dateOfBirth}</span>
                  </div>
                  <div className="flex">
                    <span className="w-48 text-[#C91C1C] font-medium">MEDICAL CONDITIONS:</span>
                    <span>{donorInfo.medicalConditions}</span>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-semibold mb-4">Appointment Information:</h2>
                <div className="space-y-2">
                  <div className="flex">
                    <span className="w-48 text-[#C91C1C] font-medium">DATE:</span>
                    <span>{appointmentDetails.appointmentDate}</span>
                  </div>
                  <div className="flex">
                    <span className="w-48 text-[#C91C1C] font-medium">TIME:</span>
                    <span>{appointmentDetails.timeSlot}</span>
                  </div>
                  <div className="flex">
                    <span className="w-48 text-[#C91C1C] font-medium">LOCATION:</span>
                    <span>{appointmentDetails.donationCenter}</span>
                  </div>
                  <div className="flex">
                    <span className="w-48 text-[#C91C1C] font-medium">NOTES/COMMENTS:</span>
                    <span>{appointmentDetails.notes}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}