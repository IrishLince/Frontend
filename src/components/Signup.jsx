import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Background from './Background';
import flagLogo from '../assets/Logophonenumber.png';
import LogoSignup from '../assets/LogoSignup.png';

export default function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    email: '',
    bloodGroup: '',
    phoneNumber: '',
    password: '',
    dateOfBirth: '',
    gender: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Required";
    if (!formData.address.trim()) newErrors.address = "Required";
    if (!formData.email.trim()) newErrors.email = "Required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email";
    if (!formData.bloodGroup) newErrors.bloodGroup = "Required";
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = "Required";
    else if (!/^\d{10}$/.test(formData.phoneNumber)) newErrors.phoneNumber = "10 digits required";
    if (!formData.password.trim()) newErrors.password = "Required";
    else if (formData.password.length < 8) newErrors.password = "Min 8 characters";
    if (!formData.dateOfBirth) newErrors.dateOfBirth = "Required";
    if (!formData.gender) newErrors.gender = "Required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        console.log("Form submitted:", formData);
        await new Promise(resolve => setTimeout(resolve, 1000));
        navigate('/login');
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <Background>
      <div className="flex flex-col items-center justify-center min-h-screen w-full px-4 py-8">
        <div className="mb-4">
          <img src={LogoSignup} alt="BloodBank Logo" className="w-20 h-20" />
        </div>
        <form onSubmit={handleSubmit} className="w-full max-w-4xl p-4 bg-white rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="fullName" className="block text-gray-700 text-xs font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={`w-full p-2 rounded-lg border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} text-sm`}
                placeholder="Full name"
              />
              {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
            </div>

            <div>
              <label htmlFor="address" className="block text-gray-700 text-xs font-medium mb-1">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className={`w-full p-2 rounded-lg border ${errors.address ? 'border-red-500' : 'border-gray-300'} text-sm`}
                placeholder="Address"
              />
              {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 text-xs font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-2 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} text-sm`}
                placeholder="Email"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="bloodGroup" className="block text-gray-700 text-xs font-medium mb-1">
                Blood Group
              </label>
              <select
                id="bloodGroup"
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleChange}
                className={`w-full p-2 rounded-lg border ${errors.bloodGroup ? 'border-red-500' : 'border-gray-300'} text-sm`}
              >
                <option value="">SELECT</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
              {errors.bloodGroup && <p className="text-red-500 text-xs mt-1">{errors.bloodGroup}</p>}
            </div>

            <div>
              <label htmlFor="phoneNumber" className="block text-gray-700 text-xs font-medium mb-1">
                Contact Number
              </label>
              <div className="flex">
                <div className="bg-white p-2 rounded-l-lg border border-r-0 border-gray-300 flex items-center">
                  <img src={flagLogo} alt="Philippines flag" className="w-4 h-3 mr-1" />
                  <span className="text-gray-800 text-xs">+63</span>
                </div>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className={`flex-1 p-2 rounded-r-lg border ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'} text-sm`}
                  placeholder="Phone number"
                  maxLength={10}
                />
              </div>
              {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>}
            </div>

            <div>
              <label htmlFor="password" className="block text-gray-700 text-xs font-medium mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full p-2 rounded-lg border ${errors.password ? 'border-red-500' : 'border-gray-300'} text-sm pr-10`}
                  placeholder="Password"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
            </div>

            <div>
              <label htmlFor="dateOfBirth" className="block text-gray-700 text-xs font-medium mb-1">
                Date of Birth
              </label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className={`w-full p-2 rounded-lg border ${errors.dateOfBirth ? 'border-red-500' : 'border-gray-300'} text-sm`}
              />
              {errors.dateOfBirth && <p className="text-red-500 text-xs mt-1">{errors.dateOfBirth}</p>}
            </div>

            <div>
              <span className="block text-gray-700 text-xs font-medium mb-1">Sex</span>
              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={formData.gender === 'male'}
                    onChange={handleChange}
                    className="form-radio text-red-600 focus:ring-red-500 h-4 w-4"
                  />
                  <span className="ml-2 text-gray-700 text-xs">Male</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={formData.gender === 'female'}
                    onChange={handleChange}
                    className="form-radio text-red-600 focus:ring-red-500 h-4 w-4"
                  />
                  <span className="ml-2 text-gray-700 text-xs">Female</span>
                </label>
              </div>
              {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender}</p>}
            </div>
          </div>

          <div className="mt-6 flex flex-col items-center">
            <button
              type="submit"
              className="w-auto px-4 py-1.5 bg-red-600 text-white rounded-full text-xs font-semibold hover:bg-red-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              REGISTER
            </button>

            <p className="mt-4 text-xs text-gray-600">
              Already have an account?{' '}
              <button
                type="button"
                onClick={() => navigate('/login')}
                className="text-red-600 hover:text-red-700 font-medium transition-colors duration-200"
              >
                Login here
              </button>
            </p>
          </div>
        </form>
      </div>
    </Background>
  );
}

