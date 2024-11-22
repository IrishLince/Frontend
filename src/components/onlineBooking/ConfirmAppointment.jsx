import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import logo from '../../assets/Logo.png';
import Header from '../Header'

export default function ConfirmAppointment() {
  const location = useLocation()
  const navigate = useNavigate()
  const { selectedHospital, appointmentDate, appointmentTime, formData } = location.state || {}

  const [showSuccess, setShowSuccess] = useState(false)
  const [countdown, setCountdown] = useState(30)
  const [donorInfo, setDonorInfo] = useState({
    fullName: 'Daniel Padilla',
    email: 'danielpadilla@gmail.com',
    contactNumber: '+63 967 654 3210',
    bloodType: 'A+',
    dateOfBirth: 'April 26, 1995',
    medicalConditions: 'N/A',
  })

  useEffect(() => {
    let timer
    if (showSuccess && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prevCount) => prevCount - 1)
      }, 1000)
    } else if (countdown === 0) {
      handleCloseSuccess()
    }
    return () => clearInterval(timer)
  }, [showSuccess, countdown])

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowSuccess(true)
  }

  const handleCancel = () => {
    navigate('/')
  }

  const handleCloseSuccess = () => {
    setShowSuccess(false)
    navigate('/appointment-details', {
      state: {
        donorInfo,
        appointmentDetails: {
          donationCenter: selectedHospital?.name,
          appointmentDate: appointmentDate?.toDateString(),
          timeSlot: appointmentTime,
          notes: 'N/A'
        }
      }
    })
  }

  return (
    <div className="min-h-screen bg-white relative">
      <Header />

      <main className="max-w-[1920px] mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-8">
          <Link 
            to="/eligibility" 
            className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 text-gray-600 hover:bg-gray-200 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>BACK</span>
          </Link>
          <button 
            onClick={handleSubmit}
            className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 text-gray-600 hover:bg-gray-200 transition-colors"
          >
            <span>CONFIRM</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <h1 className="text-2xl font-bold text-center mb-8">
          <span className="bg-gray-100 px-8 py-2 rounded-full">
            Confirm Appointment
          </span>
        </h1>

        <div className="max-w-4xl mx-auto bg-red-50 rounded-lg p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold mb-4 text-[#C91C1C]">DONOR INFORMATION:</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Full Name:</label>
                  <input
                    type="text"
                    value={donorInfo.fullName}
                    readOnly
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email:</label>
                  <input
                    type="email"
                    value={donorInfo.email}
                    readOnly
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Contact Number:</label>
                  <input
                    type="tel"
                    value={donorInfo.contactNumber}
                    readOnly
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Blood Type:</label>
                  <input
                    type="text"
                    value={donorInfo.bloodType}
                    readOnly
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Date of Birth:</label>
                  <input
                    type="text"
                    value={donorInfo.dateOfBirth}
                    readOnly
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Medical Conditions:</label>
                  <input
                    type="text"
                    value={donorInfo.medicalConditions}
                    readOnly
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50"
                  />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4 text-[#C91C1C]">APPOINTMENT DETAILS:</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Donation Center:</label>
                  <input
                    type="text"
                    value={selectedHospital?.name}
                    readOnly
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Appointment Date:</label>
                  <input
                    type="text"
                    value={appointmentDate?.toDateString()}
                    readOnly
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Time Slot:</label>
                  <input
                    type="text"
                    value={appointmentTime}
                    readOnly
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Notes/Comments:</label>
                  <input
                    type="text"
                    value="N/A"
                    readOnly
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50"
                  />
                </div>
              </div>

              <div className="mt-6">
                <p className="text-[#C91C1C] font-semibold">REMINDER:</p>
                <p className="text-gray-600">Please arrive 15 minutes earlier.</p>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <div className="inline-block bg-red-100 rounded-lg px-4 py-2">
              <p className="text-sm text-gray-600">Donation Eligibility Status:</p>
              <p className="font-semibold text-green-600">ELIGIBLE</p>
            </div>
          </div>
        </div>
      </main>

      {showSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
            <button 
              onClick={handleCloseSuccess}
              className="absolute top-4 right-4"
            >
              <X className="w-6 h-6 text-gray-500" />
            </button>
            
            <div className="text-center">
              <h2 className="text-2xl font-bold text-[#C91C1C] mb-2">CONGRATULATIONS!</h2>
              <p className="text-xl mb-6">You have successfully booked your appointment!</p>
              
              <div className="w-32 h-32 mx-auto mb-6 relative">
                <div className="w-full h-full bg-[#C91C1C] rounded-full flex items-center justify-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                  <img src={logo} alt="Logo" className="w-12 h-12" />
                  </div>
                </div>
              </div>

              <p className="text-gray-600 mb-8">
                You will receive a confirmation message<br />
                and more information via SMS.
              </p>

              <button 
                onClick={handleCancel}
                className="bg-[#C91C1C] text-white px-6 py-2 rounded-md hover:bg-red-700 mb-4"
              >
                CANCEL APPOINTMENT
              </button>

              <p className="text-sm text-gray-500">
                Redirecting you to appointment details in {countdown}s
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}