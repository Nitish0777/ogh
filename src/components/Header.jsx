import { Phone, MapPin } from 'lucide-react';
import logo from '../assets/logo.jpg';

const Header = () => {
  return (
    <>
      {/* Top bar */}
      <div className="bg-slate-800 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-1">
              <MapPin className="w-4 h-4" />
              <span>Address: Shubham CHS., Sector 18, Plot No. 77, Kopar Khairane, Navi Mumbai, Thane-400709, Maharashtra, India</span>
            </div>
            <div className="flex items-center space-x-1">
              <span>drprakash@gagangirihospital.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <Phone className="w-4 h-4" />
            <span>Call Now: +91 9833571031</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className='w-17 h-10'>
                <img src={logo} alt="Logo" />
              </div>
              {/* <span className="text-2xl font-bold text-slate-800"></span> */}
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Home</a>
              <a href="#" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">About</a>
              <a href="#" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Services</a>
              <a href="#" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Department</a>
              <a href="#" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Doctors</a>
              <a href="#" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Blog</a>
              <a href="#" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Contact</a>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-slate-700 hover:text-blue-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;