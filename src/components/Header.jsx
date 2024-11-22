import React, { useState, useEffect } from 'react';
import { Menu, X, UserCircle2, Settings, LogOut, User, Mail, Home, Calendar, Info, List } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/Logo.png';

const ProfileDropdown = ({ onLogout, userData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.profile-dropdown')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <div className="relative profile-dropdown">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-red-700 transition-colors duration-200"
        aria-label="Open profile menu"
      >
        <UserCircle2 className="w-8 h-8 text-white" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
          <div className="px-4 py-3 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                <UserCircle2 className="w-8 h-8 text-gray-600" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-1 text-sm text-gray-600 mb-1">
                  <User className="w-4 h-4" />
                  <span className="truncate">{userData.username}</span>
                </div>
                <div className="flex items-center space-x-1 text-sm text-gray-600">
                  <Mail className="w-4 h-4" />
                  <span className="truncate">{userData.email}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="py-2">
            <button
              onClick={() => {
                navigate('/profile-page');
                setIsOpen(false);
              }}
              className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
            >
              <User className="w-4 h-4" />
              <span>Profile Settings</span>
            </button>

            <button
              onClick={() => {
                navigate('/settings');
                setIsOpen(false);
              }}
              className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
            >
              <Settings className="w-4 h-4" />
              <span>Settings</span>
            </button>

            <div className="border-t border-gray-200 my-2"></div>

            <button
              onClick={onLogout}
              className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center space-x-2"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const NavLink = ({ to, children, isAuthenticated, isActive, icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-4 py-2 rounded-lg transition-all duration-300 flex items-center space-x-2
        ${isAuthenticated
          ? isActive
            ? "bg-white text-red-600 font-semibold"
            : "text-white hover:bg-white/20"
          : isActive
            ? "bg-white text-red-600 font-semibold"
            : "text-white hover:bg-white/20"
        }
      `}
    >
      {icon}
      <span>{children}</span>
    </button>
  );
};

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollPos, setLastScrollPos] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingUp = currentScrollPos < lastScrollPos;
      const isAtTop = currentScrollPos === 0;
      
      setIsVisible(isScrollingUp || isAtTop);
      setLastScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollPos]);

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('userToken');
      const role = localStorage.getItem('userRole');
      setIsAuthenticated(!!token);
      setUserRole(role || '');
    };

    checkAuth();
    window.addEventListener('storage', checkAuth);

    return () => {
      window.removeEventListener('storage', checkAuth);
    };
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      const token = localStorage.getItem('userToken');
      const role = localStorage.getItem('userRole');
      setIsAuthenticated(!!token);
      setUserRole(role || '');
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const hideHeaderPaths = ['/login', '/signup', '/forgot-password'];
  if (hideHeaderPaths.includes(location.pathname)) {
    return null;
  }

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    localStorage.removeItem('userRole');
    setIsAuthenticated(false);
    setUserRole('');
    navigate('/homepage');
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  const Donor = () => (
    <>
      <NavLink to="/successful-login" isAuthenticated={isAuthenticated} isActive={location.pathname === '/successful-login'} icon={<Home className="w-5 h-5" />} onClick={() => handleNavigation('/successful-login')}>Home</NavLink>
      <NavLink to="/donation-center" isAuthenticated={isAuthenticated} isActive={location.pathname === '/donation-center'} icon={<Calendar className="w-5 h-5" />} onClick={() => handleNavigation('/donation-center')}>Online Booking</NavLink>
      <NavLink to="/about-us" isAuthenticated={isAuthenticated} isActive={location.pathname === '/about-us'} icon={<Info className="w-5 h-5" />} onClick={() => handleNavigation('/about-us')}>About Us</NavLink>
    </>
  );

  const HospitalAdmin = () => (
    <>
      <NavLink to="/successful-login" isAuthenticated={isAuthenticated} isActive={location.pathname === '/successful-login'} icon={<Home className="w-5 h-5" />} onClick={() => handleNavigation('/successful-login')}>Home</NavLink>
      <NavLink to="/hospital" isAuthenticated={isAuthenticated} isActive={location.pathname === '/hospital'} icon={<Calendar className="w-5 h-5" />} onClick={() => handleNavigation('/hospital')}>Requests</NavLink>
      <NavLink to="/about-us" isAuthenticated={isAuthenticated} isActive={location.pathname === '/about-us'} icon={<Info className="w-5 h-5" />} onClick={() => handleNavigation('/about-us')}>About Us</NavLink>
    </>
  );

  const BloodBankAdmin = () => (
    <>
      <NavLink to="/successful-login" isAuthenticated={isAuthenticated} isActive={location.pathname === '/successful-login'} icon={<Home className="w-5 h-5" />} onClick={() => handleNavigation('/successful-login')}>Home</NavLink>
      <NavLink to="/hospital" isAuthenticated={isAuthenticated} isActive={location.pathname === '/hospital'} icon={<List className="w-5 h-5" />} onClick={() => handleNavigation('/hospital')}>Hospital</NavLink>
      <NavLink to="/inventory" isAuthenticated={isAuthenticated} isActive={location.pathname === '/inventory'} icon={<Calendar className="w-5 h-5" />} onClick={() => handleNavigation('/inventory')}>Inventory</NavLink>
      <NavLink to="/about-us" isAuthenticated={isAuthenticated} isActive={location.pathname === '/about-us'} icon={<Info className="w-5 h-5" />} onClick={() => handleNavigation('/about-us')}>About Us</NavLink>
    </>
  );

  const LoggedOutLinks = () => (
    <>
      <NavLink to="/homepage" isAuthenticated={isAuthenticated} isActive={location.pathname === '/homepage'} icon={<Home className="w-5 h-5" />} onClick={() => handleNavigation('/homepage')}>Home</NavLink>
      <NavLink to="/faqs" isAuthenticated={isAuthenticated} isActive={location.pathname === '/faqs'} icon={<Info className="w-5 h-5" />} onClick={() => handleNavigation('/faqs')}>FAQs</NavLink>
      <NavLink to="/about-us" isAuthenticated={isAuthenticated} isActive={location.pathname === '/about-us'} icon={<Info className="w-5 h-5" />} onClick={() => handleNavigation('/about-us')}>About Us</NavLink>
      <div className="flex gap-2">
        <button
          onClick={() => handleNavigation('/signup')}
          className="px-4 py-2 rounded-lg bg-white text-red-600 hover:bg-red-50 transition-colors duration-300"
        >
          Sign Up
        </button>
        <button
          onClick={() => handleNavigation('/login')}
          className="px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors duration-300"
        >
          Log In
        </button>
      </div>
    </>
  );

  const userData = {
    username: localStorage.getItem('username') || 'User',
    email: localStorage.getItem('email') || 'user@example.com',
  };

  return (
    <header 
     className={`
      fixed top-0 left-0 w-full
      z-50 
      transition-all duration-300 
      ${isVisible ? 'translate-y-0' : '-translate-y-full'}
      bg-red-600
      shadow-lg
      h-16
     `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <button onClick={() => handleNavigation(isAuthenticated ? '/successful-login' : '/homepage')}>
              <div className="w-10 h-10 flex items-center justify-center">
                <img src={logo} alt="Logo" className="w-8 h-8 object-contain" />
              </div>
            </button>
          </div>

          <nav className="hidden md:flex items-center space-x-2">
            {!isAuthenticated ? <LoggedOutLinks /> : 
             userRole === 'BloodBankAdmin' ? <BloodBankAdmin /> :
             userRole === 'Hospital' ? <HospitalAdmin /> : <Donor />}
          </nav>

          {isAuthenticated && (
            <div className="hidden md:block">
              <ProfileDropdown onLogout={handleLogout} userData={userData} />
            </div>
          )}

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden rounded-lg p-2 hover:bg-red-700 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-red-600 border-t border-red-700">
            <nav className="flex flex-col space-y-1 px-2 pb-3 pt-2">
              {!isAuthenticated ? <LoggedOutLinks /> : 
               userRole === 'BloodBankAdmin' ? <BloodBankAdmin /> :
               userRole === 'Hospital' ? <HospitalAdmin /> : <Donor />}
              {isAuthenticated && (
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 px-4 py-2 text-white hover:bg-red-700 rounded-lg"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

