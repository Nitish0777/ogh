import React from 'react';

const PartnersSection = () => {
  const corporateClients = [
    {
      name: "Tata Consultancy Services",
      logo: "https://via.placeholder.com/200x100/003366/FFFFFF?text=TCS"
    },
    {
      name: "Infosys Limited",
      logo: "https://via.placeholder.com/200x100/007CC3/FFFFFF?text=Infosys"
    },
    {
      name: "Reliance Industries",
      logo: "https://via.placeholder.com/200x100/0039A6/FFFFFF?text=Reliance"
    },
    {
      name: "HDFC Bank",
      logo: "https://via.placeholder.com/200x100/004C8F/FFFFFF?text=HDFC"
    },
    {
      name: "Wipro Technologies",
      logo: "https://via.placeholder.com/200x100/9B1C1F/FFFFFF?text=Wipro"
    },
    {
      name: "Tech Mahindra",
      logo: "https://via.placeholder.com/200x100/C5003E/FFFFFF?text=Tech+Mahindra"
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Our Corporate Clients
          </h2>
          <div className="w-16 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Trusted healthcare partner for leading corporations. We provide comprehensive healthcare services 
            and wellness programs to employees of top organizations across India.
          </p>
        </div>

        {/* Corporate Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {corporateClients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300 group"
            >
              <div className="text-center">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-20 h-12 object-cover rounded mx-auto mb-2 grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                <p className="text-sm font-medium text-gray-600 group-hover:text-gray-800">
                  {client.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            Providing quality healthcare services to over 50+ corporate clients and their employees
          </p>
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;