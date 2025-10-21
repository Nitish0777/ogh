import { Mail, Phone, Clock, MapPin, Facebook, Twitter, Instagram, Linkedin, Heart, Award, Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Dark green background similar to HealthcareOverview */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-green-900 to-gray-900"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-green-600/10"></div>
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-green-400 to-transparent rounded-full transform -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-emerald-400 to-transparent rounded-full transform translate-x-40 translate-y-40"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-lime-400/20 to-transparent rounded-full transform -translate-x-32 -translate-y-32"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Logo & About */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold mb-6 relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">OmGagangiri Hospital & Occupational Services</span>
                <div className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"></div>
              </h3>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-3 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
                  <Heart className="w-6 h-6 text-red-400 mx-auto mb-2" />
                  <div className="text-sm font-semibold text-white">1L+ Patients</div>
                </div>
                <div className="text-center p-3 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
                  <Award className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                  <div className="text-sm font-semibold text-white">20+ Awards</div>
                </div>
                <div className="text-center p-3 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
                  <Shield className="w-6 h-6 text-green-400 mx-auto mb-2" />
                  <div className="text-sm font-semibold text-white">40+ Years</div>
                </div>
              </div>

              {/* Social Media */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="group w-12 h-12 flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-110 shadow-lg">
                    <Facebook className="w-5 h-5 text-white" />
                  </a>
                  <a href="#" className="group w-12 h-12 flex items-center justify-center bg-gradient-to-r from-blue-400 to-blue-500 rounded-full hover:from-blue-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-110 shadow-lg">
                    <Twitter className="w-5 h-5 text-white" />
                  </a>
                  <a href="#" className="group w-12 h-12 flex items-center justify-center bg-gradient-to-r from-pink-500 to-red-500 rounded-full hover:from-pink-600 hover:to-red-600 transition-all duration-300 transform hover:scale-110 shadow-lg">
                    <Instagram className="w-5 h-5 text-white" />
                  </a>
                  <a href="#" className="group w-12 h-12 flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-110 shadow-lg">
                    <Linkedin className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>
            </div>

            {/* Departments */}
            <div>
              <h3 className="text-2xl font-bold mb-6 relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Departments</span>
                <div className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"></div>
              </h3>
              <ul className="space-y-4 text-green-100">
                <li>
                  <a href="#" className="group flex items-center space-x-3 hover:text-white transition-colors duration-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                    <span>General Surgery</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="group flex items-center space-x-3 hover:text-white transition-colors duration-300">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                    <span>Gynecology & Obstetrics</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="group flex items-center space-x-3 hover:text-white transition-colors duration-300">
                    <div className="w-2 h-2 bg-lime-400 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                    <span>Oncology</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="group flex items-center space-x-3 hover:text-white transition-colors duration-300">
                    <div className="w-2 h-2 bg-teal-400 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                    <span>Cardiology</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="group flex items-center space-x-3 hover:text-white transition-colors duration-300">
                    <div className="w-2 h-2 bg-red-400 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                    <span>Emergency Medicine</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-2xl font-bold mb-6 relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400">Quick Links</span>
                <div className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full"></div>
              </h3>
              <ul className="space-y-4 text-green-100">
                <li>
                  <a href="#" className="group flex items-center space-x-3 hover:text-white transition-colors duration-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                    <span>About Us</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="group flex items-center space-x-3 hover:text-white transition-colors duration-300">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                    <span>Services</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="group flex items-center space-x-3 hover:text-white transition-colors duration-300">
                    <div className="w-2 h-2 bg-lime-400 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                    <span>Blog</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="group flex items-center space-x-3 hover:text-white transition-colors duration-300">
                    <div className="w-2 h-2 bg-teal-400 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                    <span>Gallery</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="group flex items-center space-x-3 hover:text-white transition-colors duration-300">
                    <div className="w-2 h-2 bg-red-400 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                    <span>Contact</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold mb-6 relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-lime-400">Get In Touch</span>
                <div className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-green-400 to-lime-400 rounded-full"></div>
              </h3>
              
              <div className="space-y-6">
                <div className="group">
                  <div className="flex items-start space-x-1 p-4 mx-auto bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-green-100 mb-1">Email Support 24/7</p>
                      <p className="text-sm text-white">drprakash@gagangirihospital.com</p>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-start space-x-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-green-100 mb-1">Emergency Helpline</p>
                      <p className="font-bold text-white text-lg">+91 7666 6711 11</p>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-start space-x-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-green-100 mb-1">Working Hours</p>
                      <p className="font-semibold text-white">24/7 Emergency Services</p>
                      <p className="text-sm text-green-100">Mon-Fri: 08:30 - 18:00</p>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-start space-x-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-green-100 mb-1">Location</p>
                      <p className="font-semibold text-white">OmGagangiri Hospital & Occupational Services</p>
                      <p className="text-sm text-green-100">Koparkhairane, Navi Mumbai</p>
                      <p className="text-sm text-green-100">OGH Health Services, Ulwe, Navi Mumbai</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        {/* <div className="bg-gradient-to-r from-blue-900/50 to-green-900/50 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  Stay Updated with Health Tips
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Subscribe to our newsletter for the latest health insights, medical updates, and exclusive healthcare tips from our expert team.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <input
                  type="tel"
                  placeholder="Enter your Mobile number"
                  className="flex-1 px-6 py-4 rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </div> */}

        {/* Bottom Bar */}
        <div className="bg-gray-900/80 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
              <div className="text-center lg:text-left">
                <p className="text-green-100">
                  © 2025 <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 font-semibold">Om Gagangiri Hospital</span>. All rights reserved.
                </p>
                <p className="text-sm text-green-200 mt-1">
                  Providing quality healthcare with compassion and excellence.
                </p>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-green-100">
                <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
                <span className="text-green-300">|</span>
                <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
                <span className="text-green-300">|</span>
                <a href="#" className="hover:text-white transition-colors duration-300">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}