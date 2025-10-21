import React from 'react';

const PartnersSection = () => {
  const partners = [
    {
      name: "AAMC",
      logo: "https://images.pexels.com/photos/48148/document-agreement-documents-sign-48148.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop"
    },
    {
      name: "Medical Board",
      logo: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop"
    },
    {
      name: "Authentic",
      logo: "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop"
    },
    {
      name: "Recognized",
      logo: "https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop"
    },
    {
      name: "Medical Council",
      logo: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop"
    },
    {
      name: "Healthcare Alliance",
      logo: "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop"
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Partners who support us
          </h2>
          <div className="w-16 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lets know myriads neque/facilibus dolor sapiente illum possimus sint voluptates incidunt 
            molestias nostrum laudantium. Maiores porro cumque quaerat.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300 group"
            >
              <div className="text-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-20 h-12 object-cover rounded mx-auto mb-2 grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                <p className="text-sm font-medium text-gray-600 group-hover:text-gray-800">
                  {partner.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            Trusted by leading healthcare organizations and medical institutions worldwide
          </p>
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;