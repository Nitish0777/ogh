import React from 'react';

const DepartmentCard = ({ title, description, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
          <span className="text-blue-600 text-2xl">{icon}</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600 leading-relaxed">{description}</p>
      <button className="mt-4 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200">
        Learn More →
      </button>
    </div>
  );
};

export default DepartmentCard;
