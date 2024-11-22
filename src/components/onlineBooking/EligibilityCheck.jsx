import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Header from '../Header'

export default function EligibilityCheck() {
  const location = useLocation()
  const navigate = useNavigate()
  const { selectedHospital, appointmentDate, appointmentTime } = location.state || {}

  const [formData, setFormData] = useState({
    age: '',
    conditions: [],
    recentDonation: '',
    medications: '',
    medicationDetails: '',
    travel: '',
    travelDetails: ''
  })

  const conditions = [
    'Heart disease',
    'Diabetes',
    'High blood pressure',
    'Infectious disease (e.g., HIV, Hepatitis)',
    'Other'
  ]

  const handleConditionChange = (condition) => {
    setFormData(prev => ({
      ...prev,
      conditions: prev.conditions.includes(condition)
        ? prev.conditions.filter(c => c !== condition)
        : [...prev.conditions, condition]
    }))
  }

  const handleConfirm = () => {
    navigate('/confirm-appointment', { 
      state: { 
        selectedHospital,
        appointmentDate,
        appointmentTime,
        formData
      } 
    })
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

        <h1 className="text-2xl font-bold text-center mb-8">
          <span className="bg-gray-100 px-8 py-2 rounded-full">
            Eligibility Check
          </span>
        </h1>

        <div className="max-w-4xl mx-auto bg-[#C91C1C] text-white rounded-lg p-6">
          <p className="text-center mb-6">
            Please answer the following questions to determine your eligibility to donate blood.
            Your health and safety are our top priority.
          </p>

          <form className="space-y-6">
            <div>
              <p className="mb-2">1. Are you at least 18 years old?</p>
              <div className="space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="age"
                    value="yes"
                    checked={formData.age === 'yes'}
                    onChange={(e) => setFormData({...formData, age: e.target.value})}
                    className="form-radio text-white border-white"
                  />
                  <span className="ml-2">Yes</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="age"
                    value="no"
                    checked={formData.age === 'no'}
                    onChange={(e) => setFormData({...formData, age: e.target.value})}
                    className="form-radio text-white border-white"
                  />
                  <span className="ml-2">No</span>
                </label>
              </div>
            </div>

            <div>
              <p className="mb-2">2. Do you have any of the following conditions?</p>
              <p className="text-sm mb-2">(Select all that apply)</p>
              <div className="space-y-2">
                {conditions.map((condition) => (
                  <label key={condition} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.conditions.includes(condition)}
                      onChange={() => handleConditionChange(condition)}
                      className="form-checkbox text-white border-white"
                    />
                    <span className="ml-2">{condition}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-2">3. Have you donated blood in the last 56 days?</p>
              <div className="space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="recentDonation"
                    value="yes"
                    checked={formData.recentDonation === 'yes'}
                    onChange={(e) => setFormData({...formData, recentDonation: e.target.value})}
                    className="form-radio text-white border-white"
                  />
                  <span className="ml-2">Yes</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="recentDonation"
                    value="no"
                    checked={formData.recentDonation === 'no'}
                    onChange={(e) => setFormData({...formData, recentDonation: e.target.value})}
                    className="form-radio text-white border-white"
                  />
                  <span className="ml-2">No</span>
                </label>
              </div>
            </div>

            <div>
              <p className="mb-2">4. Are you currently taking any medications?</p>
              <div className="space-y-2">
                <div className="space-x-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="medications"
                      value="yes"
                      checked={formData.medications === 'yes'}
                      onChange={(e) => setFormData({...formData, medications: e.target.value})}
                      className="form-radio text-white border-white"
                    />
                    <span className="ml-2">Yes</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="medications"
                      value="no"
                      checked={formData.medications === 'no'}
                      onChange={(e) => setFormData({...formData, medications: e.target.value})}
                      className="form-radio text-white border-white"
                    />
                    <span className="ml-2">No</span>
                  </label>
                </div>
                {formData.medications === 'yes' && (
                  <input
                    type="text"
                    placeholder="Type here"
                    value={formData.medicationDetails}
                    onChange={(e) => setFormData({...formData, medicationDetails: e.target.value})}
                    className="w-full p-2 rounded bg-white/10 border border-white/20"
                  />
                )}
              </div>
            </div>

            <div>
              <p className="mb-2">5. Have you travelled outside the country in the last 12 months?</p>
              <div className="space-y-2">
                <div className="space-x-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="travel"
                      value="yes"
                      checked={formData.travel === 'yes'}
                      onChange={(e) => setFormData({...formData, travel: e.target.value})}
                      className="form-radio text-white border-white"
                    />
                    <span className="ml-2">Yes</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="travel"
                      value="no"
                      checked={formData.travel === 'no'}
                      onChange={(e) => setFormData({...formData, travel: e.target.value})}
                      className="form-radio text-white border-white"
                    />
                    <span className="ml-2">No</span>
                  </label>
                </div>
                {formData.travel === 'yes' && (
                  <input
                    type="text"
                    placeholder="Type here"
                    value={formData.travelDetails}
                    onChange={(e) => setFormData({...formData, travelDetails: e.target.value})}
                    className="w-full p-2 rounded bg-white/10 border border-white/20"
                  />
                )}
              </div>
            </div>
          </form>

          <div className="mt-6 text-center">
            <div className="inline-block bg-red-600 rounded-lg px-4 py-2">
              <p className="text-sm">Donation Eligibility Status:</p>
              <p className="font-semibold">ELIGIBLE</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}