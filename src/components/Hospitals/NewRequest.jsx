import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { UserCircle2 } from 'lucide-react';
import Header from '../Header'


export default function NewRequest() {
  const [requestDate, setRequestDate] = useState('');
  const [dateNeeded, setDateNeeded] = useState('');
  const [bloodType, setBloodType] = useState('');
  const [unitsRequested, setUnitsRequested] = useState('');
  const [formError, setFormError] = useState(false); 
  const [errors, setErrors] = useState({}); 
  const navigate = useNavigate();

  const handleRequestDateChange = (e) => {
    setRequestDate(e.target.value);
    setErrors({ ...errors, requestDate: '' }); 
  };

  const handleDateNeededChange = (e) => {
    setDateNeeded(e.target.value);
    setErrors({ ...errors, dateNeeded: '' }); 
  };

  const handleBloodTypeChange = (e) => {
    setBloodType(e.target.value);
    setErrors({ ...errors, bloodType: '' }); 
  };

  const handleUnitsRequestedChange = (e) => {
    setUnitsRequested(e.target.value);
    setErrors({ ...errors, unitsRequested: '' }); 
  };

  const handleSubmit = () => {
    let newErrors = {};
    
    
    if (!bloodType) newErrors.bloodType = 'Blood type is required';
    if (!unitsRequested) newErrors.unitsRequested = 'Units requested is required';
    if (!requestDate) newErrors.requestDate = 'Request date is required';
    if (!dateNeeded) newErrors.dateNeeded = 'Date needed is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors); 
      setFormError(true); 
      return;
    }

    setFormError(false); 
    navigate('/successful-request', {
      state: { bloodType, unitsRequested, requestDate, dateNeeded },
    });
  };

  return (
    <div className="bg-white flex flex-col min-h-screen">
       <Header />

      <div className="flex justify-start px-6 py-4">
        <Link to="/welcome-message">
          <button className="flex items-center text-gray-600 text-sm">
            <ChevronLeft className="mr-1" /> BACK
          </button>
        </Link>
      </div>

      <div className="flex justify-center items-center pt-2 pb-4"> 
        <div className="container1 bg-[#F2F2F2] p-4 rounded-full w-[35%] text-center">
          <h1 className="text-[#C91C1C] text-xl font-bold">New Blood Request</h1>
        </div>
      </div>

      <div className="flex justify-center items-start pt-2 pb-8 px-8"> 
        <div className="container2 bg-[#FFE7E7] p-6 rounded-lg w-[50%]">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-sm font-semibold w-1/3">Hospital Name:</label>
              <input
                type="text"
                className="w-2/3 p-2 border rounded-md bg-[#F2F2F2] text-[#807373] font-bold"
                value="Riverside Community Medical Center"
                readOnly
              />
            </div>
            <div className="flex justify-between items-center">
              <label className="text-sm font-semibold w-1/3">Hospital Address:</label>
              <input
                type="text"
                className="w-2/3 p-2 border rounded-md bg-[#F2F2F2] text-[#807373] font-bold"
                value="456 River Ave., Townsville"
                readOnly
              />
            </div>
            <div className="flex justify-between items-center">
              <label className="text-sm font-semibold w-1/3">Contact Information:</label>
              <input
                type="text"
                className="w-2/3 p-2 border rounded-md bg-[#F2F2F2] text-[#807373] font-bold"
                value="(555) 987-6543"
                readOnly
              />
            </div>
            <div className="flex justify-between items-center">
              <label className="text-sm font-semibold w-1/3">Blood Type:</label>
              <select
                className={`w-2/3 p-2 border rounded-md ${errors.bloodType ? 'border-red-500' : 'border-black'}`}
                value={bloodType}
                onChange={handleBloodTypeChange}
              >
                <option value="">Select Blood Type</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>
            <div className="flex justify-between items-center">
              <label className="text-sm font-semibold w-1/3">Units Requested:</label>
              <input
                type="number"
                className={`w-2/3 p-2 border rounded-md ${errors.unitsRequested ? 'border-red-500' : 'border-black'}`}
                value={unitsRequested}
                onChange={handleUnitsRequestedChange}
                placeholder="Enter Units"
              />
            </div>
            <div className="flex justify-between items-center">
              <label className="text-sm font-semibold w-1/3">Request Date:</label>
              <input
                type="date"
                className={`w-2/3 p-2 border rounded-md ${errors.requestDate ? 'border-red-500' : 'border-black'}`}
                value={requestDate}
                onChange={handleRequestDateChange}
              />
            </div>
            <div className="flex justify-between items-center">
              <label className="text-sm font-semibold w-1/3">Date Needed:</label>
              <input
                type="date"
                className={`w-2/3 p-2 border rounded-md ${errors.dateNeeded ? 'border-red-500' : 'border-black'}`}
                value={dateNeeded}
                onChange={handleDateNeededChange}
              />
            </div>
          </div>

          {formError && (
            <div className="text-red-500 text-sm text-center pt-4">
              Please fill out all the required forms.
            </div>
          )}

          <div className="flex justify-center items-center pt-6">
            <button
              onClick={handleSubmit}
              className="bg-[#C91C1C] text-white py-2 px-6 rounded-lg font-semibold hover:bg-[#A81A1A]"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}