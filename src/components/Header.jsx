import { useState } from 'react';
import { Phone, MapPin, Mail, Menu, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Departments', href: '/departments' },
    { name: 'Doctors', href: '/doctors' },
    { name: 'Contact', href: '/contact' }
  ];

  const isActive = (href) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <>
      {/* Enhanced Top bar */}
      <div className="bg-gradient-to-r from-emerald-800 to-emerald-700 text-white py-2 px-4 hidden lg:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 hover:text-emerald-200 transition-colors">
              <MapPin className="w-4 h-4 flex-shrink-0" />
              <span className="truncate">Shubham CHS., Sector 18, Plot No. 77, Kopar Khairane, Navi Mumbai</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-emerald-200 transition-colors">
              <Mail className="w-4 h-4 flex-shrink-0" />
              <span>drprakash@gagangirihospital.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 hover:text-emerald-200 transition-colors">
            <Phone className="w-4 h-4" />
            <span className="font-medium">Call Now: +91 9833571031</span>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-emerald-800 to-emerald-700 text-white py-2 px-4 hidden lg:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 hover:text-emerald-200 transition-colors">
              {/* Quick Services label */}
              <span className="font-medium mr-3">Quick Services:</span>
              <nav className="flex items-center space-x-2">
                <a
                  href="/services/hospital-koparkhairne"
                  className="px-2 py-1 rounded hover:text-emerald-200 hover:bg-emerald-900/20 transition-colors text-white"
                  aria-label="Outpatient services"
                >
                  OGH Hospital Koparkhairne
                </a>
                <a
                  href="/services/ulwe-centre"
                  className="px-2 py-1 rounded hover:text-emerald-200 hover:bg-emerald-900/20 transition-colors text-white"
                  aria-label="Laboratory services"
                >
                  OGH Ulwe Centre
                </a>
                <a
                  href="/services/health-checkup"
                  className="px-2 py-1 rounded hover:text-emerald-200 hover:bg-emerald-900/20 transition-colors text-white"
                  aria-label="Emergency services"
                >
                  OGH Health Checkup Services
                </a>
                <a
                  href="/services/lab-yatharth"
                  className="px-2 py-1 rounded hover:text-emerald-200 hover:bg-emerald-900/20 transition-colors text-white"
                  aria-label="Pharmacy"
                >
                  Yatharth – Pathology & Diagnostics
                </a>
              </nav>
            </div>
          </div>
          <div className="flex items-center space-x-2 hover:text-emerald-200 transition-colors">
            {/* Optional small note on availability */}
            <span className="text-sm text-white/90">24x7 Availability · Walk-ins welcome</span>
          </div>
        </div>
      </div>

      {/* Enhanced Main header */}
      <header className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Enhanced Rectangular Logo */}
            <div className="flex items-center">
              <div className="h-12 w-auto max-w-48 rounded-lg overflow-hidden shadow-md ring-2 ring-emerald-50 bg-white">
                <img 
                  src={logo} 
                  alt="Gagan Giri Hospital Logo" 
                  className="h-full w-full object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div>
                <h1 className="ml-3 text-1xl font-bold text-emerald-800">OmGaganGiri Hospital</h1>
                <p className="ml-3 text-sm text-gray-500 font-bold">& Occupational Health Services</p>
              </div>
            </div>

            {/* Enhanced Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(item.href)
                      ? 'bg-emerald-600 text-white shadow-md'
                      : 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50'
                  }`}
                  aria-label={`Navigate to ${item.name}`}
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Mobile contact info & menu button */}
            <div className="flex items-center space-x-3 md:hidden">
              <a 
                href="tel:+919833571031"
                className="flex items-center space-x-1 text-emerald-600 hover:text-emerald-800 transition-colors"
                aria-label="Call hospital"
              >
                <Phone className="w-4 h-4" />
                <span className="text-xs font-medium">Call</span>
              </a>
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-lg text-gray-700 hover:text-emerald-600 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500"
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Enhanced Mobile menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200 pb-4 animate-in slide-in-from-top duration-200">
              <nav className="flex flex-col space-y-1 pt-4">
                {navigationItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? 'bg-emerald-600 text-white'
                        : 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50'
                    }`}
                    aria-label={`Navigate to ${item.name}`}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="pt-3 mt-3 border-t border-gray-200">
                  <div className="px-4 py-2">
                    <div className="flex items-center space-x-2 text-gray-600 mb-2">
                      <Mail className="w-4 h-4" />
                      <span className="text-sm">drprakash@gagangirihospital.com</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">Navi Mumbai, Maharashtra</span>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;