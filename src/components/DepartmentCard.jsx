import React from 'react';

const DepartmentCard = ({ title, description, keyProcedures, onLearnMore }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
      <div className="p-6 flex flex-col h-full">
        <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 text-center">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-4 leading-relaxed flex-shrink-0">
          {description}
        </p>
        
        <div className="mb-6 flex-grow">
          <h4 className="font-semibold text-gray-700 mb-2">Key Procedures:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            {keyProcedures.map((procedure, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                {procedure}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mt-auto">
          <button
            onClick={onLearnMore}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-200"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};


export default DepartmentCard;
