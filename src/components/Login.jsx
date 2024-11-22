import React, { useState } from 'react';
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import LogoSignup from '../assets/LogoSignup.png';
import { useNavigate } from 'react-router-dom';
import Background from './Background';

const Login = ({ setIsLoggedIn }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleLogin = () => {
    setError('');

    if (!username.trim()) {
      setError('Username is required');
      return;
    }

    if (!password.trim()) {
      setError('Password is required');
      return;
    }

    if (username === 'Donor' && password === '12345') {
      localStorage.setItem('userToken', 'donor-token');
      localStorage.setItem('username', username);
      localStorage.setItem('email', 'user@donor.com');
      localStorage.setItem('userRole', 'Donor');
      setIsLoggedIn(true);
      navigate('/successful-login');
    } 
    else if (username === 'Hospital' && password === '12345') {
      localStorage.setItem('userToken', 'hospital-token');
      localStorage.setItem('username', username);
      localStorage.setItem('email', 'admin@hospital.com');
      localStorage.setItem('userRole', 'Hospital');
      setIsLoggedIn(true);
      navigate('/successful-login');
    }
    else if (username === 'BloodBankAdmin' && password === '12345') {
      localStorage.setItem('userToken', 'bloodbank-admin-token');
      localStorage.setItem('username', username);
      localStorage.setItem('email', 'admin@bloodbank.com');
      localStorage.setItem('userRole', 'BloodBankAdmin');
      setIsLoggedIn(true);
      navigate('/successful-login');
    }
    else {
      setError('Invalid username or password');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <Background>
      <div className="min-h-full w-full flex items-center justify-center">
        <div className="max-w-md w-full space-y-8 bg-white p-10">
          <div className="text-center">
            <img 
              src={LogoSignup} 
              alt="Blood Bank Logo" 
              className="mx-auto h-24 w-24 mb-4"
            />
          </div>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
              <span className="block sm:inline">{error}</span>
            </div>
          )}

          <form 
            className="mt-8 space-y-6" 
            onSubmit={handleSubmit}
          >
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="mb-4">
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                  Username or Email
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                  placeholder="Enter your username"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 pr-10"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
                  >
                    {showPassword ? (
                      <RiEyeOffLine className="h-5 w-5" />
                    ) : (
                      <RiEyeLine className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                />
                <label 
                  htmlFor="remember-me" 
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <button
                  type="button"
                  onClick={() => navigate('/forgot-password')}
                  className="font-medium text-red-600 hover:text-red-500"
                >
                  Forgot your password?
                </button>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Sign in
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <div className="text-sm">
              <span className="text-gray-600">Don't have an account? </span>
              <button
                onClick={() => navigate('/signup')}
                className="font-medium text-red-600 hover:text-red-500"
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </Background>
  );
};

export default Login;

