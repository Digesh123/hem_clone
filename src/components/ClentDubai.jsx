import React from "react";

const DebtCollectionServices = () => {
  return (
    <div className="max-w-5xl my-10 mx-auto p-12 bg-gradient-to-br from-white to-gray-100 shadow-2xl rounded-3xl border border-gray-300 transition-all duration-300 hover:shadow-3xl">
      <h2 className="text-4xl font-extrabold text-blue-900 mb-10 text-center tracking-wide animate-fadeIn">
        Specialized Debt Collection & Counseling Services in Dubai
      </h2>

      <Section
        title="Experienced Consultants"
        text="Our team of consultants possesses over 15 years of combined experience in providing specialized debt collection services in Dubai. We are highly trained and skilled professionals, adept at handling various financial issues, including debt management, banking disputes, trade settlements, and forfeiting matters."
        extraText="Our comprehensive approach ensures that clients receive tailored solutions that address their specific needs, ultimately leading to successful debt recovery. We would be pleased to discuss how we can assist you further."
      />

      <Section
        title="Complimentary Debt Counseling"
        text="We offer complimentary debt counseling services in the UAE to clients both within and outside the country who are facing overdue loan and credit card payments. Our debt management and counseling programs aim to assist individuals and SMEs navigating financial challenges."
      />

      <Section
        title="Understanding Financial Challenges"
        text="Economic fluctuations, changes in income, and unforeseen circumstances can lead to cash flow crises where expenses exceed income, resulting in missed loan and credit card payments. Such situations can cause significant stress and negatively impact health, relationships, and credit scores."
        extraText="We understand the importance of financial well-being and are committed to providing you with the support and guidance you need to regain control of your finances."
      />

      <div className="mb-10 p-6 bg-white rounded-lg shadow-lg border border-gray-200 transition-transform duration-300 hover:scale-105">
        <h3 className="text-2xl font-bold text-orange-700 mb-4">Our Services Include:</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-3 pl-4">
          <li>Debt Management</li>
          <li>Banking Dispute Resolution</li>
          <li>Trade Settlement Facilitation</li>
          <li>Forfeiting Matters</li>
          <li>Complimentary Debt Counseling</li>
        </ul>
      </div>
    </div>
  );
};

const Section = ({ title, text, extraText }) => (
  <section className="mb-10 p-6 bg-white rounded-lg shadow-md border border-gray-200 transition-transform duration-300 hover:scale-105">
    <h3 className="text-2xl font-bold text-orange-700 mb-4">{title}</h3>
    <p className="text-gray-700 leading-relaxed">{text}</p>
    {extraText && <p className="text-gray-700 mt-3 leading-relaxed">{extraText}</p>}
  </section>
);

export default DebtCollectionServices;
