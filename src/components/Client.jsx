import React from "react";
import { BASE_URL } from "../config";

const ClientLogos = ({ categories }) => {
  return (
    <div className="min-h-screen  py-12">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-orange-600 mb-4">Our Clients</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-3xl mx-auto">
            We're proud to work with leading financial institutions both domestically and internationally. Our clients trust us to deliver exceptional debt recovery services.
          </p>
        </div>

        {categories.map((category, index) => (
          <div key={index} className="mb-12 bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center justify-center mb-6 overflow-x-auto whitespace-nowrap">
              <div className="h-1 w-10 bg-orange-500 mr-3 shrink-0"></div>
              <h2 className="text-2xl font-bold text-blue-700 shrink-0">{category.title}</h2>
              <div className="h-1 w-10 bg-orange-500 ml-3 shrink-0"></div>
            </div>

            <div
              className={`grid gap-6 ${category.title === "International Clients"
                ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 justify-center"
                : "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
                }`}
            >
              {category.logos.map((logo, idx) => (
                <div
                  key={idx}
                  className={`flex justify-center items-center p-4 bg-gray-50 shadow-md rounded-lg w-full border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 ${category.title === "International Clients" ? "h-32" : "h-24"
                    }`}
                >
                  <img
                    src={BASE_URL + logo.src}
                    alt={logo.alt}
                    className="h-full max-w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};


const clientData = [
  {
    title: "Domestic Clients",
    logos: [
      { src: "/clients/volkswagan.jpg", alt: "Volkswagen Financial Services" },
      { src: "/clients/tvs.jpg", alt: "TVS Finance & Services Ltd." },
      { src: "/clients/tatamotors.jpg", alt: "TATA Motorfinance" },
      { src: "/clients/ltfinance.jpg", alt: "L&T Finance" },
      { src: "/clients/icicibank.jpg", alt: "ICICI Bank" },
      { src: "/clients/hdfcbank.jpg", alt: "HDFC Bank" },
      { src: "/clients/fullerton.jpg", alt: "Fullerton India" },
      { src: "/clients/citibank.jpg", alt: "Citibank" },
      { src: "/clients/bajajfinance.jpg", alt: "Bajaj Finserv" },
      { src: "/clients/axisbank.jpg", alt: "Axis Bank" },
      { src: "/clients/capital-first.png", alt: "Capital First" },
      { src: "/clients/indusind-bank.png", alt: "IndusInd Bank" },
      { src: "/clients/sbi-card.png", alt: "SBI Card" },
      { src: "/clients/yes-bank.png", alt: "Yes Bank" },
      { src: "/clients/vodafone.jpg", alt: "Vodafone" },
      { src: "/clients/airtel.jpg", alt: "Airtel" },
      { src: "/clients/RBL-Bank.png", alt: "RBL Bank" },
    ],
  },
  {
    title: "International Clients",
    logos: [
      { src: "/clients/internationalClients/rakbank.jpg", alt: "RAKBank" },
      { src: "/clients/internationalClients/FabLogo-1.png", alt: "First Abu Dhabi Bank" },
      { src: "/clients/internationalClients/DIB-1.png", alt: "Dubai Islamic Bank" },
      { src: "/clients/internationalClients/Cbi.jpeg", alt: "CBI Bank" },
    ],
  },
];

const App = () => {
  return (
    <div className="">
      <ClientLogos categories={clientData} />
    </div>
  );
};

export default App;
