import React from 'react';

const PartnersSection = () => {
  const corporateClients = [
    {
      name: "Tata Steel",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Tata_Steel_Logo.svg"
    },
    {
      name: "Tata Chemicals",
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Tata_Chemicals_Logo.svg"
    },
    {
      name: "Adani Power",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Adani_Group_logo.svg"
    },
    {
      name: "IndianOil Adani Ventures",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Indian_Oil_Logo.svg"
    },
    {
      name: "Rashtriya Chemicals and Fertilizers",
      logo: "https://upload.wikimedia.org/wikipedia/en/9/98/Rashtriya_Chemicals_and_Fertilizers_Logo.png"
    },
    {
      name: "JSW Paints",
      logo: "https://www.jswpaints.in/sites/default/files/jsw-paints-logo.png"
    },
    {
      name: "Gateway Terminals India",
      logo: "https://www.gatewayterminals.com/assets/images/logo.png"
    },
    {
      name: "D'Decor Exports",
      logo: "https://www.ddecor.com/wp-content/uploads/2021/09/ddecor-logo.png"
    },
    {
      name: "Viraj Profiles",
      logo: "https://www.viraj.com/images/logo.png"
    },
    {
      name: "Mazda Colours",
      logo: "https://www.mazdacolours.com/images/logo.png"
    },
    {
      name: "Technova Imaging Systems",
      logo: "https://www.technovaworld.com/images/technova-logo.png"
    },
    {
      name: "BDH Industries",
      logo: "https://www.bdhltd.com/images/logo.png"
    },
    {
      name: "Shreechem Pharmaceuticals",
      logo: "https://www.shreechem.in/images/logo.png"
    },
    {
      name: "Praveen Industries",
      logo: "https://www.praveenindustries.com/images/logo.png"
    },
    {
      name: "Aarti Industries",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Aarti_Industries_Logo.svg"
    },
    {
      name: "Hindustan Platinum",
      logo: "https://www.hindustanplatinum.com/images/logo.png"
    },
    {
      name: "NOCIL",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7e/NOCIL_Logo.svg"
    },
    {
      name: "Supreme Petrochem",
      logo: "https://www.supremepetrochem.com/images/logo.png"
    },
    {
      name: "Deepak Fertilisers",
      logo: "https://www.dfpcl.com/images/logo.png"
    },
    {
      name: "Pidilite Industries",
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Pidilite_Logo.svg"
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
                  className="w-24 h-16 object-contain mx-auto mb-2 grayscale group-hover:grayscale-0 transition-all duration-300"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
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