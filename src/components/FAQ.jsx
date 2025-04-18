import React, { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What does a debt collection agency do?",
    answer:
      "A debt collection agency helps businesses recover unpaid debts from customers. They use various methods, including letters, phone calls, and sometimes legal action, to ensure that outstanding amounts are paid. If you're looking for an affordable debt collection agency, they can provide cost-effective solutions to help you get your money back.",
  },
  {
    question: "How does debt collection work?",
    answer:
      "Debt collection involves a structured process where agencies work to recover debts from individuals or businesses. Experienced debt collectors follow laws and regulations, starting with communication and negotiation, and moving to legal action if necessary.",
  },
  {
    question: "What are the debt collection laws?",
    answer:
      "Laws globally regulate how debts can be collected to protect both creditors' rights to recover what is owed and debtors from unfair or abusive practices.They explain how debt collectors can contact debtors, limits on charges, and the steps required before taking legal action.",
  },
  {
    question: "What is the debt recovery process?",
    answer:
      "The debt recovery process typically starts with the creditor attempting to contact the debtor. If this fails, the creditor might hire a debt recovery agency who will then send demand letters, make phone calls, and possibly initiate legal proceedings to recover the debt.",
  },
  {
    question: "Can a debt collection agency sue you?",
    answer:
      "Yes, if you don't settle your debt, a collection agency can take legal action against you. Many agencies offer a no win no fee debt collection service, meaning they only get paid if they successfully recover the debt, which may involve suing the debtor.",
  },
  {
    question: "What are the benefits of hiring a debt collection agency?",
    answer:
      "Hiring a debt collection agency can save your time and effort, increase the chances of debt recovery, and ensure compliance with legal regulations. They have expertise in negotiations and legal processes, making debt recovery more efficient.",
  },
];

const FAQItem = ({ faq, index, isOpen, toggleFAQ }) => {
  return (
    <div className="mb-4 rounded-lg overflow-hidden shadow-md">
      <div
        role="button"
        aria-expanded={isOpen}
        className={`p-4 font-semibold flex justify-between items-center cursor-pointer transition-colors duration-200 ${
          isOpen ? "bg-orange-50 border-l-4 border-blue-600" : "bg-white border-l-4 border-orange-500"
        }`}
        onClick={() => toggleFAQ(index)}
      >
        <span className="text-gray-800">{faq.question}</span>
        <span className={`flex items-center justify-center h-6 w-6 rounded-full text-white font-bold text-sm ${isOpen ? "bg-blue-600" : "bg-orange-500"}`}>
          {isOpen ? "−" : "+"}
        </span>
      </div>
      
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="p-5 bg-white text-gray-700 border-t border-gray-100">
          {faq.answer}
        </div>
      </motion.div>
    </div>
  );
};

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="p-6  min-h-screen">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-orange-600 mb-3">
            Frequently Asked Questions
          </h1>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-700">
            Find answers to common questions about our debt collection services
          </p>
        </div>

        {faqs.map((faq, index) => (
          <FAQItem key={index} faq={faq} index={index} isOpen={openIndex === index} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
