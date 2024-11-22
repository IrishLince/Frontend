import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import ForgotPassword from './components/ForgotPassword';
import AboutUs from './components/abousus';
import SuccessfulLogin from './components/SuccesfulLogin';
import DonationCenter from './components/onlineBooking/DonationCenter';
import Schedule from './components/onlineBooking/Schedule';
import EligibilityCheck from './components/onlineBooking/EligibilityCheck';
import ConfirmAppointment from './components/onlineBooking/ConfirmAppointment';
import AppointmentDetails from './components/onlineBooking/AppointmentDetails';

import WelcomeMessage from './components/Hospitals/WelcomeMessage'
import NewRequest from './components/Hospitals/NewRequest';
import SuccessfulRequest from './components/Hospitals/SuccessfulRequest';
import RequestDetails from './components/Hospitals/RequestDetails';
import { Layout } from './components/Layout';
import ProfilePage from './components/profile/ProfilePage';

import FAQs from './components/FAQS'

import 'react-datepicker/dist/react-datepicker.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('userToken');
    const role = localStorage.getItem('userRole');
    if (token) {
      setIsLoggedIn(true);
      setUserRole(role || '');
    } else {
      setIsLoggedIn(false);
      setUserRole('');
    }
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Layout>
        <Routes>
          {/* Default route based on login status */}
          <Route
            path="/"
            element={isLoggedIn ? <Navigate to="/successful-login" /> : <Navigate to="/homepage" />}
          />

          {/* Public routes */}
          <Route path="/homepage" element={<Home />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/about-us" element={<AboutUs />} />

          {/* Protected routes */}
          {isLoggedIn ? (
            <>
              {/* Common routes for both user and admin */}
              <Route path="/successful-login" element={<SuccessfulLogin />} />
              <Route path="/donation-center" element={<DonationCenter />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/profile-page" element={<ProfilePage />} />

              {/* User-specific routes */}
              {userRole === 'user' && (
                <>
                  <Route path="/schedule" element={<Schedule />} />
                  <Route path="/eligibility" element={<EligibilityCheck />} />
                  <Route path="/confirm-appointment" element={<ConfirmAppointment />} />
                  <Route path="/appointment-details" element={<AppointmentDetails />} />
                </>
              )}

              {/* Admin-specific routes */}
              {userRole === 'admin' && (
                <>
                  <Route path="/hospital" element={<WelcomeMessage />} />
                  <Route path="/new-request" element={<NewRequest />} />
                  <Route path="/successful-request" element={<SuccessfulRequest />} />
                  <Route path="/request-details" element={<RequestDetails />} />
                  <Route path="/welcome-message" element={<WelcomeMessage />} /> 
                </>
              )}
            </>
          ) : (
            // Redirect to login if trying to access protected routes while not logged in
            <Route path="*" element={<Navigate to="/login" />} />
          )}


        </Routes>
      </Layout>
    </Router>
  );
}

export default App;