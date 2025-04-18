// import React from 'react';

// function Service() {
//   const serviceCards = [
//     {
//       title: "Comprehensive Banking Portfolio Coverage",
//       content: (
//         <>
//           <p>
//             We proudly serve <strong>99% of banks in India</strong>, managing portfolios from early-stage collections (BKT) to write-offs (WOFF). Our end-to-end coverage ensures efficient, compliant operations throughout the lifecycle.
//           </p>
//           <p className="mt-2 font-medium text-blue-800">Specialized Teams:</p>
//           <p><span className="text-blue-600 mr-2 font-bold">✓</span><strong>Field Teams:</strong> On-ground collections, verifications, customer interactions.</p>
//           <p><span className="text-blue-600 mr-2 font-bold">✓</span><strong>Back-End Teams:</strong> Data processing, coordination, and communication.</p>
//           <div className="p-6">
//             <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800">
//               {[
//                 'Personal Loan', 'Business Loan', 'Consumer Durable', 'Mortgage/Home Loan',
//                 'Auto Loan', 'Credit Card', 'Two Wheeler', 'Cellular'
//               ].map((service, index) => (
//                 <li key={index} className="flex items-center">
//                   <span className="text-blue-600 mr-2 font-bold">✓</span>
//                   <span>{service}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </>
//       ),
//     },
//     {
//       title: "Call Center Operations",
//       content: (
//         <>
//           <p>
//             With a <strong>500+ seat capacity</strong> across Pune, Mumbai, and Kerala, our call centers cover all regions of India efficiently.
//           </p>
//           <p className="mt-2 font-medium text-blue-800">Services Offered:</p>
//           <p><span className="text-blue-600 mr-2 font-bold">✓</span><strong>Collections:</strong> Recovery strategies that maintain customer trust.</p>
//           <p><span className="text-blue-600 mr-2 font-bold">✓</span><strong>Verification:</strong> Accurate, professional, and compliant verification.</p>
//           <p><span className="text-blue-600 mr-2 font-bold">✓</span><strong>Upselling:</strong> Targeted engagement for revenue opportunities.</p>
//         </>
//       ),
//     },
//     {
//       title: "RCU (Risk Containment Unit) Process",
//       content: (
//         <>
//           <p>
//             Our RCU team offers <strong>end-to-end fraud risk management</strong> through rigorous due diligence and monitoring.
//           </p>
//           <p><span className="text-blue-600 mr-2 font-bold">✓</span><strong>Application Screening:</strong> during onboarding.</p>
//           <p><span className="text-blue-600 mr-2 font-bold">✓</span><strong>Early Fraud Detection:</strong> to stop threats at inception.</p>
//           <p><span className="text-blue-600 mr-2 font-bold">✓</span><strong>Address & ID Verification:</strong> via digital and physical checks.</p>
//           <p><span className="text-blue-600 mr-2 font-bold">✓</span><strong>Transaction Monitoring:</strong> for anomalies and risks.</p>
//         </>
//       ),
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <div className="max-w-4xl mx-auto p-8">
//         {/* Header Section */}
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold text-orange-600 mb-4">Our Services</h1>
//           <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
//           <p className="text-gray-700 text-lg max-w-2xl mx-auto">
//             We offer tailored services designed to meet your specific needs. Our goal is to work collaboratively with you to
//             optimize your cash flow and reduce debtor days. We maintain a respectful and professional approach when
//             communicating with debtors, fostering positive business relationships while safeguarding our clients' interests.
//           </p>
//         </div>

//         {serviceCards.map((card, idx) => (
//           <div
//             key={idx}
//             className={`${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'
//               } rounded-xl shadow-lg mb-10 overflow-hidden`}
//           >
//             <div className={`${idx % 2 === 0 ? 'bg-orange-500' : 'bg-blue-600'} p-4`}>
//               <h2 className="text-2xl font-semibold text-white">{card.title}</h2>
//             </div>
//             <div className="p-6 text-gray-700 text-sm space-y-3">
//               {card.content}
//             </div>
//           </div>
//         ))}


//         {/* Operational Cities */}
//         <div className="bg-white rounded-xl shadow-lg mb-10 overflow-hidden">
//           <div className="bg-blue-600 p-4">
//             <h2 className="text-2xl font-semibold text-white">Operational Cities</h2>
//           </div>
//           <div className="p-6">
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//               {[
//                 {
//                   region: 'West Region',
//                   cities: 'Thane (Mumbai), Pune, Nasik, Aurangabad'
//                 },
//                 {
//                   region: 'Center Region',
//                   cities: 'Nagpur, Akola, Amravati'
//                 },
//                 {
//                   region: 'South Region',
//                   cities: 'Kerala'
//                 },
//                 {
//                   region: 'Eastern Region',
//                   cities: 'Kolkata'
//                 }
//               ].map((item, index) => (
//                 <div key={index} className="bg-gray-50 p-4 rounded-lg border-l-4 border-orange-500">
//                   <h3 className="font-semibold text-orange-600 mb-2">{item.region}</h3>
//                   <p className="text-gray-700">{item.cities}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default Service;

import React from 'react';

function Service() {
  const serviceCards = [
    {
      title: "Comprehensive Banking Portfolio Coverage",
      content: (
        <>
          <p>
            We proudly serve <strong>99% of banks in India</strong>, managing portfolios from early-stage collections (BKT) to write-offs (WOFF). Our end-to-end coverage ensures efficient, compliant operations throughout the lifecycle.
          </p>
          <p className="mt-4 font-semibold text-blue-800">Specialized Teams:</p>
          <p><span className="text-blue-600 mr-2 font-bold">✓</span><strong>Field Teams:</strong> On-ground collections, verifications, customer interactions.</p>
          <p><span className="text-blue-600 mr-2 font-bold">✓</span><strong>Back-End Teams:</strong> Data processing, coordination, and communication.</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 text-gray-800 pl-4">
            {[
              'Personal Loan', 'Business Loan', 'Consumer Durable', 'Mortgage/Home Loan',
              'Auto Loan', 'Credit Card', 'Two Wheeler', 'Cellular'
            ].map((service, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-600 mr-2 font-bold">✓</span>
                <span>{service}</span>
              </li>
            ))}
          </ul>
        </>
      ),
    },
    {
      title: "Call Center Operations",
      content: (
        <>
          <p>
            With a <strong>500+ seat capacity</strong> across Pune, Mumbai, and Kerala, our call centers cover all regions of India efficiently.
          </p>
          <p className="mt-4 font-semibold text-blue-800">Services Offered:</p>
          <p><span className="text-blue-600 mr-2 font-bold">✓</span><strong>Collections:</strong> Recovery strategies that maintain customer trust.</p>
          <p><span className="text-blue-600 mr-2 font-bold">✓</span><strong>Verification:</strong> Accurate, professional, and compliant verification.</p>
          <p><span className="text-blue-600 mr-2 font-bold">✓</span><strong>Upselling:</strong> Targeted engagement for revenue opportunities.</p>
        </>
      ),
    },
    {
      title: "RCU (Risk Containment Unit) Process",
      content: (
        <>
          <p>
            Our RCU team offers <strong>end-to-end fraud risk management</strong> through rigorous due diligence and monitoring.
          </p>
          <div className="mt-4 space-y-2">
            <p><span className="text-blue-600 mr-2 font-bold">✓</span><strong>Application Screening:</strong> during onboarding.</p>
            <p><span className="text-blue-600 mr-2 font-bold">✓</span><strong>Early Fraud Detection:</strong> to stop threats at inception.</p>
            <p><span className="text-blue-600 mr-2 font-bold">✓</span><strong>Address & ID Verification:</strong> via digital and physical checks.</p>
            <p><span className="text-blue-600 mr-2 font-bold">✓</span><strong>Transaction Monitoring:</strong> for anomalies and risks.</p>
          </div>
        </>
      ),
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-orange-600 mb-2">Our Services</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed">
            In today's business climate, efficient debt recovery is crucial. We offer tailored solutions to minimize debtor days and preserve client relationships. Unlike generic services, we collaborate closely to understand your needs. Our approach emphasizes professional communication, ensuring respectful and clear dialogue with debtors, relationship preservation, finding amicable solutions to maintain client connections, and safeguarding your interests through compliance and ethics, adhering to all regulations, transparent reporting, providing clear updates on our activities, and tailored strategies, adapting to changing circumstances. Partner with us to free up resources and focus on your core business. Contact us to learn more.
          </p>
        </div>

        {/* Services Cards */}
        {serviceCards.map((card, idx) => (
          <div
            key={idx}
            className={`rounded-xl shadow-md mb-12 overflow-hidden transform transition-all duration-300 hover:scale-[1.01] ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
          >
            <div className={`${idx % 2 === 0 ? 'bg-orange-500' : 'bg-blue-600'} p-5`}>
              <h2 className="text-2xl font-semibold text-white">{card.title}</h2>
            </div>
            <div className="p-6 text-gray-700 text-base space-y-3 leading-relaxed">
              {card.content}
            </div>
          </div>
        ))}

        {/* Operational Cities */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="bg-blue-600 p-5">
            <h2 className="text-2xl font-semibold text-white">Operational Cities</h2>
          </div>
          <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { region: 'West Region', cities: 'Thane (Mumbai), Pune, Nasik, Aurangabad' },
              { region: 'Center Region', cities: 'Nagpur, Akola, Amravati' },
              { region: 'South Region', cities: 'Kerala' },
              { region: 'Eastern Region', cities: 'Kolkata' }
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 p-5 rounded-lg border-l-4 border-orange-500 shadow-sm">
                <h3 className="font-semibold text-orange-600 mb-1">{item.region}</h3>
                <p className="text-gray-700">{item.cities}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
