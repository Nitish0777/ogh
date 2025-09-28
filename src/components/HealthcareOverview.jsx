import React from "react";
import { Users, Award, MapPin, Clock } from "lucide-react";

const HealthcareOverview = () => {
  const stats = [
    { number: "58", label: "Expert Doctors" },
    { number: "700", label: "Happy Patients" },
    { number: "40", label: "Years Experience" },
    { number: "20", label: "Awards Won" },
  ];

  return (
    <>
      <div className="">
        <div className="bg-white py-7">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="">
              {/* Left side - Image and content */}
              <div className="relative">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <div className="flex items-center mb-6">
                    <img
                      src="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                      alt="Medical team"
                      className="w-130 h-160 object-cover rounded-lg mr-6"
                    />
                    <div>
                      <h3 className="text-3xl font-bold text-slate-800 mb-22">
                        Comprehensive Healthcare
                        <br />
                        All In One Place
                      </h3>
                      <p className="text-gray-600 mb-7">
                        From preventive health checkups to specialized
                        departments and mobile medical units, we provide
                        complete healthcare solutions tailored to your needs.
                      </p>
                      <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-semibold text-sm transition-colors">
                        Explore Our Services
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right side - Statistics */}
        <div className="px-4 sm:px-4 lg:px-8 mt-16">
          <div className="bg-slate-800 rounded-lg p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-3xl font-bold text-white">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HealthcareOverview;
