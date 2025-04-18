import React from 'react';

function About() {
    return (
        <div className="min-h-screen  py-12">
            <div className="max-w-6xl mx-auto px-6">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-orange-600 mb-4">
                        About Us
                    </h1>
                    <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
                </div>

                {/* About Section */}
                <div className="bg-white rounded-xl shadow-lg p-8 mb-10">
                    <div className="flex flex-col md:flex-row items-center gap-10">
                        {/* Left Content */}
                        <div className="flex-1">
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Managing loans and credit cards is crucial, but turbulent circumstances can make it difficult to keep up with payments, putting individuals and SMEs in a compromising position. As a leading debt restructuring company, we are dedicated to understanding the root causes of your financial difficulties and helping you get your personal loans, SME loans, and credit cards back on track. We believe in educating our clients on financial management to prevent future crises.
                            </p>

                            <p className="text-gray-700 leading-relaxed mb-4">
                                Excessive debt from credit cards and loans is an undesirable and often unavoidable situation. However, every problem has a solution. With our extensive experience, we can provide you with the best repayment plans from your banks and financial institutions.
                            </p>

                            <p className="text-gray-700 leading-relaxed mb-4">
                                We value open, honest, and transparent relationships with our clients. Our goal is to provide you with the best possible repayment solutions from your creditors and help you make informed decisions to regain control of your loans and credit cards. We believe in offering over-indebted clients open, honest, and transparent advice, as you are the ultimate decision-makers.
                            </p>

                            <p className="text-gray-700 leading-relaxed mb-4">
                                On behalf of HEM Groups, we are committed to assisting our clients in achieving a brighter financial future. Our goal is to alleviate your debt-related concerns by providing effective and personalized debt solutions.
                            </p>
                            
                            <p className="text-gray-700 leading-relaxed">
                                We look forward to the opportunity to discuss your financial well-being.
                            </p>
                        </div>

                        {/* Right Image */}
                        <div className="flex-1 text-center">
                            <img
                                src="https://globaldebtadvisory.com/wp-content/uploads/2021/09/about-us-scaled.jpg"
                                alt="Financial Services"
                                className="w-full max-w-md rounded-lg mx-auto shadow-md"
                            />
                        </div>
                    </div>
                </div>

                {/* Group of Companies */}
                <div className="bg-white rounded-xl shadow-lg p-8 mb-10">
                    <h2 className="text-2xl font-bold mb-6 text-blue-700">
                        Group of Companies
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            "Hem Debt Consultants Pvt Ltd",
                            "Hem Enterprises",
                            "Hem Debt Management Team",
                            "Hem Debt & Credit Services",
                            "Hem Associates",
                            "Aryan Credit Services"
                        ].map((company, index) => (
                            <div key={index} className="flex items-center">
                                <span className="text-orange-500 mr-2 text-lg font-bold">✓</span>
                                <span className="text-gray-700">{company}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mission & Vision Section */}
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Our Mission */}
                    <div className="flex-1 bg-white rounded-xl shadow-lg p-6 border-t-4 border-orange-500">
                        <h2 className="text-2xl font-bold mb-4 text-orange-600">
                            Our Mission
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Improving lives through financial education. Many people struggle with financial literacy, leading to stressful situations.
                            We empower clients to manage their finances effectively while we work on settling their loans and credit card worries.
                        </p>
                    </div>

                    {/* Our Vision */}
                    <div className="flex-1 bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-600">
                        <h2 className="text-2xl font-bold mb-4 text-blue-700">
                            Our Vision
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            To be the most reliable financial partner in the India & UAE, providing tailored solutions for over-indebted individuals and SMEs.
                            Our goal is to mediate between clients and financial institutions to create sustainable repayment plans.
                        </p>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default About;