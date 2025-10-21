import React from 'react';

const DepartmentCard = ({ title, description, icon, keyProcedures, onLearnMore }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="text-center mb-4">
        <div className="text-4xl mb-3">{icon}</div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      </div>
      
      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
        {description}
      </p>

      {keyProcedures && (
        <div className="mb-4">
          <h4 className="font-semibold text-gray-800 mb-2 text-sm">Key Services:</h4>
          <ul className="text-xs text-gray-600 space-y-1">
            {keyProcedures.map((procedure, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                {procedure}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="text-center">
        <button
          onClick={onLearnMore}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-200 w-full"
        >
          → Learn More
        </button>
      </div>
    </div>
  );
};

export default DepartmentCard;
