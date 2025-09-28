import { Mail, Phone, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#f8fcff] border-t border-gray-200 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 flex items-center space-x-2">
            <span className="text-red-600">✚</span>
            <span>OGH</span>
          </h2>
          <p className="mt-4 text-gray-600 text-sm leading-relaxed">
            Tempora dolorem voluptatum nam vero assumenda voluptate,
            facilis ad eos obcaecati tenetur veritatis eveniet
            distinctio possimus.
          </p>
          <div className="flex space-x-3 mt-4">
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-red-500 hover:text-white transition"
            >
              f
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-red-500 hover:text-white transition"
            >
              t
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-red-500 hover:text-white transition"
            >
              in
            </a>
          </div>
        </div>

        {/* Department */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3 relative">
            Department
            <span className="absolute bottom-0 left-0 w-12 h-[2px] bg-red-500"></span>
          </h3>
          <ul className="mt-4 space-y-2 text-gray-600 text-sm">
            <li><a href="#">General Surgery</a></li>
            <li><a href="#">Gynecology & Obstetrics</a></li>
            <li><a href="#">Oncology</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3 relative">
            Services
            <span className="absolute bottom-0 left-0 w-12 h-[2px] bg-red-500"></span>
          </h3>
          <ul className="mt-4 space-y-2 text-gray-600 text-sm">
            <li><a href="#">Pathology Center</a></li>
            <li><a href="#">Pre-Employment Checkup</a></li>
            <li><a href="#">Mobile Annual Checkup Bus</a></li>
            <li><a href="#">OGH Health center, Ulwe</a></li>
            <li><a href="#">Company Licence</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3 relative">
            Get In Touch
            <span className="absolute bottom-0 left-0 w-12 h-[2px] bg-red-500"></span>
          </h3>
          <ul className="mt-4 space-y-3 text-gray-600 text-sm">
            <li className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-red-500" />
              <span>Support Available 24/7</span>
            </li>
            <li className="font-semibold text-gray-900">drprakash@gagangirihospital.com</li>
            <li className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-red-500" />
              <span>Mon to Fri : 08:30 - 18:00</span>
            </li>
            <li className="flex items-center space-x-2 font-bold text-gray-900">
              <Phone className="w-4 h-4 text-red-500" />
              <span>+91 7666 6711 11</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 mt-10 border-t border-gray-200 pt-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <p className="text-gray-500 text-sm">
          © Copyright Reserved to <span className="text-red-500">OGH</span> by{" "}
          <span className="font-medium">OGH</span>
        </p>
        <div className="flex items-center space-x-2">
          <input
            type="email"
            placeholder="Your Email address"
            className="px-4 py-2 rounded-l-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
          />
          <button className="px-4 py-2 bg-red-500 text-white rounded-r-full hover:bg-red-600 text-sm font-semibold">
            SUBSCRIBE
          </button>
        </div>
        <p className="text-gray-500 text-sm">Distributed by OGH</p>
      </div>
    </footer>
  );
}
