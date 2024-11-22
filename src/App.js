import React, { useState, useEffect, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import favicon from './assets/Logo.png'; // Replace with your actual logo path


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

import WelcomeMessage from './components/Request/WelcomeMessage'
import NewRequest from './components/Request/NewRequest';
import SuccessfulRequest from './components/Request/SuccessfulRequest';
import RequestDetails from './components/Request/RequestDetails';

import { Layout } from './components/Layout';
import ProfilePage from './components/profile/ProfilePage';
import FAQs from './components/FAQS'

import 'react-datepicker/dist/react-datepicker.css';


import HospitalList from './components/Hospital_BloodbankAdmin/HospitalList';
import RequestList from './components/Hospital_BloodbankAdmin/RequestList';
import ScheduleBloodbank from './components/Hospital_BloodbankAdmin/Schedule';
// import Inventory from './components/Hospital_BloodbankAdmin/Inventory';
import RequestSheet from './components/Hospital_BloodbankAdmin/RequestSheet';

import 'react-datepicker/dist/react-datepicker.css';

const TitleUpdater = () => {
  const location = useLocation();

  useEffect(() => {
    // Set favicon
    const link = document.querySelector("link[rel~='icon']") || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'icon';
    link.href = favicon;
    document.getElementsByTagName('head')[0].appendChild(link);

    // Update title based on route
    const pathToTitleMap = {
      '/homepage': 'RedSource - Home',
      '/login': 'RedSource - Login',
      '/signup': 'RedSource - Signup',
      '/forgot-password': 'RedSource - Reset Password',
      '/about-us': 'RedSource - About Us',
      '/successful-login': 'RedSource - Welcome',
      '/donation-center': 'RedSource - Donation Centers',
      '/schedule': 'RedSource - Schedule Donation',
      '/eligibility': 'RedSource - Eligibility Check',
      '/profile-page': 'RedSource - My Profile',
      '/faqs': 'RedSource - FAQs',
      '/hospital': 'RedSource - Hospital Dashboard',
      '/new-request': 'RedSource - New Blood Request',
      '/requests': 'RedSource - Blood Requests'
    };

    document.title = pathToTitleMap[location.pathname] || 'RedSource';
  }, [location]);

  return null;
};

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
    <BrowserRouter future={{ 
      v7_startTransition: true,
      v7_relativeSplatPath: true
    }}>
      <TitleUpdater />
      <Layout>
        <Suspense fallback={
          <div className="flex items-center justify-center min-h-screen">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-red-600"></div>
          </div>
        }>
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
                {/* Common routes for all authenticated users */}
                <Route path="/successful-login" element={<SuccessfulLogin />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/profile-page" element={<ProfilePage />} />

                {/* Donor-specific routes */} 
                {userRole === 'Donor' && (
                  <>
                    <Route path="/donation-center" element={<DonationCenter />} />
                    <Route path="/schedule" element={<Schedule />} />
                    <Route path="/eligibility" element={<EligibilityCheck />} />
                    <Route path="/confirm-appointment" element={<ConfirmAppointment />} />
                    <Route path="/appointment-details" element={<AppointmentDetails />} />
                  </>
                )}

                {/* Hospital-specific routes */}
                {userRole === 'Hospital' && (
                  <>
                    <Route path="/hospital" element={<WelcomeMessage />} />
                    <Route path="/new-request" element={<NewRequest />} />
                    <Route path="/successful-request" element={<SuccessfulRequest />} />
                    <Route path="/request-details" element={<RequestDetails />} />
                    <Route path="/welcome-message" element={<WelcomeMessage />} /> 
                  </>
                )}

                {/* BloodBankAdmin-specific routes */}
                {userRole === 'BloodBankAdmin' && (
                  <>
                    <Route path="/hospital" element={<HospitalList />} />
                    <Route path="/requests" element={<RequestList />} />
                    <Route path="/schedule" element={<ScheduleBloodbank />} />
                    <Route path="/request-sheet" element={<RequestSheet />} />
                  </>
                )}
              </>
            ) : (
              // Redirect to login if trying to access protected routes while not logged in
              <Route path="*" element={<Navigate to="/login" />} />
            )}
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}

export default App;