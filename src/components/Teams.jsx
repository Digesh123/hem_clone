import React from "react";
import { BASE_URL } from "../config";

const ProfileCard = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-stretch gap-8 bg-gradient-to-br from-blue-50 to-orange-50 shadow-xl rounded-2xl overflow-hidden p-8 border border-blue-100">
      <div className="w-full md:w-1/2 text-center p-6 bg-white rounded-xl shadow-md border-t-4 border-orange-500 transition-transform hover:scale-102">
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-blue-500 rounded-full transform -translate-y-1 translate-x-1 opacity-50"></div>
          <img
            src={BASE_URL + "/team/hem1.jpeg"}
            alt="Arabinda Mitra"
            className="relative w-32 h-32 mx-auto rounded-full mb-4 border-2 border-white shadow-lg object-cover"
          />
        </div>
        <h2 className="text-2xl font-bold text-blue-800">Arabinda Mitra</h2>
        <h3 className="text-lg text-orange-600 mb-2 font-medium">Managing Director</h3>
        <div className="w-16 h-1 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-orange-400 rounded-full"></div>
        <p className="text-gray-700 text-sm leading-relaxed">
          Mr. Arabinda Mitra has 25 years of experience in Collections & AVCV, debt collection, back-end operation, credit card collection, and other collections. He started with 3 employees to now more than 500+ employees across India with multiple ventures. He is the pioneer of building Citi bank network. Arabinda Mitra is also an inspiring and motivating leader and has accountability for managing a team and developing talent. He has qualities of a strong critical thinker, creator, collaborator, and innovator who can effectively drive results.        </p>
      </div>

      <div className="w-full md:w-1/2 text-center p-6 bg-white rounded-xl shadow-md border-t-4 border-blue-500 transition-transform hover:scale-102">
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-orange-400 rounded-full transform -translate-y-1 translate-x-1 opacity-50"></div>
          <img
            src={BASE_URL + "/team/hem2.jpeg"}
            alt="Brejesh Nair"
            className="relative w-32 h-32 mx-auto rounded-full mb-4 border-2 border-white shadow-lg object-cover"
          />
        </div>
        <h2 className="text-2xl font-bold text-blue-800">Brejesh Nair </h2>
        <h3 className="text-lg text-orange-600 mb-2 font-medium">Business Analyst & Corporate Strategic Advisor</h3>
        <div className="w-16 h-1 mx-auto mb-4 bg-gradient-to-r from-orange-400 to-blue-500 rounded-full"></div>
        <p className="text-gray-700 text-sm leading-relaxed">
          Brejesh Nair specializes in providing tailored strategies to ensure quality deliverables. With over 27 years of experience in the financial sector/services, Brejesh has worked with HDFC Bank and E Serve International Ltd (CITI BANK). His leadership skills, resourcefulness in ensuring desired business requirements, and strict adherence to guidelines affirm his commitment to maintaining strong client relationships.        </p>
      </div>

      <div className="w-full md:w-1/2 text-center p-6 bg-white rounded-xl shadow-md border-t-4 border-orange-500 transition-transform hover:scale-102">
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-blue-500 rounded-full transform -translate-y-1 translate-x-1 opacity-50"></div>
          <img
            src={BASE_URL + "/team/hem3.jpeg"}
            alt="Akashaya mitra"
            className="relative w-32 h-32 mx-auto rounded-full mb-4 border-2 border-white shadow-lg object-cover"
          />
        </div>
        <h2 className="text-2xl font-bold text-blue-800">Akashaya mitra</h2>
        <h3 className="text-lg text-orange-600 mb-2 font-medium">Director</h3>
        <div className="w-16 h-1 mx-auto mb-4 bg-gradient-to-r from-orange-400 to-blue-500 rounded-full"></div>
        <p className="text-gray-700 text-sm leading-relaxed">
          Akshaya Mitra brings a results-driven approach to financial services, leveraging extensive experience to deliver impactful solutions. Known for her analytical acumen and commitment to exceeding client expectations, Akshaya excels in navigating complex financial landscapes. She is dedicated to providing clear, actionable strategies that drive growth and optimize performance.        </p>
      </div>
    </div>
  );
};

export default ProfileCard;