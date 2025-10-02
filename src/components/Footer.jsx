import { Mail, Phone, Clock, MapPin, Facebook, Twitter, Instagram, Linkedin, Heart, Award, Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-600 to-transparent rounded-full transform -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-green-600 to-transparent rounded-full transform translate-x-40 translate-y-40"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-purple-600/20 to-transparent rounded-full transform -translate-x-32 -translate-y-32"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Logo & About */}
            <div className="lg:col-span-1">
              <div className="mb-8">
                <h2 className="text-4xl font-bold flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">✚</span>
                  </div>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">OGH</span>
                </h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Om Gagangiri Hospital & Occupational Health - Your trusted partner in comprehensive healthcare, 
                  providing exceptional medical services with cutting-edge technology and compassionate care.
                </p>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                  <Heart className="w-6 h-6 text-red-400 mx-auto mb-2" />
                  <div className="text-sm font-semibold">1L+ Patients</div>
                </div>
                <div className="text-center p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                  <Award className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                  <div className="text-sm font-semibold">20+ Awards</div>
                </div>
                <div className="text-center p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                  <Shield className="w-6 h-6 text-green-400 mx-auto mb-2" />
                  <div className="text-sm font-semibold">40+ Years</div>
                </div>
              </div>

              {/* Social Media */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Follow Us</h4>
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Departments</span>
                <div className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
              </h3>
              <ul className="space-y-4 text-gray-300">
                <li>
                  <a href="#" className="group flex items-center space-x-3 hover:text-white transition-colors duration-300">
                    <div className="w-2 h-2 bg-blue-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                    <span>General Surgery</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="group flex items-center space-x-3 hover:text-white transition-colors duration-300">
                    <div className="w-2 h-2 bg-green-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                    <span>Gynecology & Obstetrics</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="group flex items-center space-x-3 hover:text-white transition-colors duration-300">
                    <div className="w-2 h-2 bg-purple-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                    <span>Oncology</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="group flex items-center space-x-3 hover:text-white transition-colors duration-300">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                    <span>Cardiology</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="group flex items-center space-x-3 hover:text-white transition-colors duration-300">
                    <div className="w-2 h-2 bg-red-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                    <span>Emergency Medicine</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-2xl font-bold mb-6 relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">Quick Links</span>
                <div className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
              </h3>
              <ul className="space-y-4 text-gray-300">
                <li>
                  <a href="#" className="group flex items-center space-x-3 hover:text-white transition-colors duration-300">
                    <div className="w-2 h-2 bg-blue-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                    <span>About Us</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="group flex items-center space-x-3 hover:text-white transition-colors duration-300">
                    <div className="w-2 h-2 bg-green-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                    <span>Services</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="group flex items-center space-x-3 hover:text-white transition-colors duration-300">
                    <div className="w-2 h-2 bg-purple-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                    <span>Blog</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="group flex items-center space-x-3 hover:text-white transition-colors duration-300">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                    <span>Gallery</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="group flex items-center space-x-3 hover:text-white transition-colors duration-300">
                    <div className="w-2 h-2 bg-red-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                    <span>Contact</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold mb-6 relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Get In Touch</span>
                <div className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
              </h3>
              
              <div className="space-y-6">
                <div className="group">
                  <div className="flex items-start space-x-1 p-4 mx-auto bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-300 mb-1">Email Support 24/7</p>
                      <p className="text-sm text-white">drprakash@gagangirihospital.com</p>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-start space-x-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-300 mb-1">Emergency Helpline</p>
                      <p className="font-bold text-white text-lg">+91 7666 6711 11</p>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-start space-x-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-300 mb-1">Working Hours</p>
                      <p className="font-semibold text-white">24/7 Emergency Services</p>
                      <p className="text-sm text-gray-300">Mon-Fri: 08:30 - 18:00</p>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-start space-x-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                    <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-300 mb-1">Location</p>
                      <p className="font-semibold text-white">Om Gagangiri Hospital</p>
                      <p className="text-sm text-gray-300">Ulwe, Navi Mumbai</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-blue-900/50 to-green-900/50 backdrop-blur-sm border-t border-white/10">
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
        </div>

        {/* Bottom Bar */}
        <div className="bg-gray-900/80 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
              <div className="text-center lg:text-left">
                <p className="text-gray-300">
                  © 2025 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 font-semibold">Om Gagangiri Hospital</span>. All rights reserved.
                </p>
                <p className="text-sm text-gray-400 mt-1">
                  Providing quality healthcare with compassion and excellence.
                </p>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-gray-300">
                <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
                <span className="text-gray-500">|</span>
                <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
                <span className="text-gray-500">|</span>
                <a href="#" className="hover:text-white transition-colors duration-300">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}