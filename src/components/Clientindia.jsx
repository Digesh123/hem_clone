import React from "react";

const DebtRecoverySolutions = () => {
    return (
        <div className="max-w-5xl my-10 mx-auto p-12 bg-gradient-to-r from-white to-gray-100 shadow-2xl rounded-3xl border border-gray-300">
            <h2 className="text-4xl font-extrabold text-blue-900 mb-10 text-center tracking-wide">
                Efficient Debt Recovery Solutions Across India - Hem Group
            </h2>

            {/** Section Component for Reusability */}
            <Section
                title="Nationwide Debt Recovery Expertise"
                text="Hem Group's multi-city operations ensure quick and reliable debt recovery across India. With our extensive reach of over 250 field staff and around 500+ staff working in our call center and as backend support, we deliver effective service to our clients, regardless of their location.
                Trust us to handle your debt recovery needs seamlessly."
            />

            <Section
                title="Prevent Bad Debt & Protect Your Business"
                text="Prevent bad debt before it impacts your bank and business! Monitor cash flow, set clear payment terms, and follow up on invoices regularly. Stay proactive and protect your financial stability."
                extraText="If unpaid invoices or overdue payments are affecting your cash flow, Hem Group is here to help. Our debt recovery services offer fast, efficient solutions to get your business back on track. Trust Hem Group for effective debt collection."
            />

            <Section
                title="Fast, Efficient, and Professional Debt Collection"
                text="Hem Group ensures near-zero turnaround time for debt recovery, delivering faster results and improving your cash flow. Trust us to handle your debt collection with unmatched efficiency and professionalism.
                    We educate customers on the importance of addressing their liabilities. We explain how resolving a liability will enhance their credit score and bring new opportunities. Additionally, we act as a bridge between customers and banks for quicker resolution.
                    Every moment counts—let us make it count for you!"
            />

            <Section
                title="Tailored Debt Collection Solutions"
                text="Hem Group is committed to helping you recover overdue payments quickly and effectively. Our team of experts provides tailored debt collection solutions that drive results. With years of experience and a strong industry reputation, we’re here to protect your financial stability."
            />

            <div className="mb-10 p-6 bg-white rounded-lg shadow-lg border border-gray-200 transition-transform duration-300 hover:scale-105">
                <h3 className="text-2xl font-bold text-orange-700 mb-4">Operational Cities</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-3 pl-4">
                    <li><strong>West Region:</strong> Vasai, Virar (Mumbai), Pune, Nasik, Aurangabad</li>
                    <li><strong>Center Region:</strong> Nagpur, Akola, Amravati</li>
                    <li><strong>South Region:</strong> Kerala</li>
                    <li><strong>Eastern Region:</strong> Kolkata</li>
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

export default DebtRecoverySolutions;
