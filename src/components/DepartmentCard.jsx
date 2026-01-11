import React from 'react';
import { useNavigate } from 'react-router-dom';

const DepartmentCard = ({ title, description, keyProcedures, departmentId }) => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    if (departmentId) {
      navigate(`/departments/${departmentId}`);
    } else {
      // Fallback to a general departments page
      navigate('/departments');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
      <div className="p-4 sm:p-6 flex flex-col h-full">
        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 line-clamp-2 text-center">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-4 leading-relaxed flex-shrink-0 text-sm sm:text-base">
          {description}
        </p>
        
        <div className="mb-6 flex-grow">
          <h4 className="font-semibold text-gray-700 mb-2 text-sm sm:text-base">Key Procedures:</h4>
          <ul className="text-xs sm:text-sm text-gray-600 space-y-1">
            {keyProcedures.map((procedure, index) => (
              <li key={index} className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                {procedure}
              </li>
            ))}
          </ul>
        </div>
        
        
      </div>
    </div>
  );
};

export default DepartmentCard;
