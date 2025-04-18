import React from "react";

const PrivacyPolicy = ({ setActivePage }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 text-gray-800 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header Banner */}
        <div className="bg-orange-400 py-6 px-8">
          <h1 className="text-3xl font-bold text-white">Privacy Policy</h1>
          <p className="text-blue-100 mt-2">Effective date: February 14th, 2023</p>
        </div>

        {/* Orange Accent Bar */}
        <div className="h-2 bg-gradient-to-r from-blue-600 to-blue-600"></div>

        {/* Content */}
        <div className="p-8">
          <div className="mb-8 bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-lg">
              <span className="font-semibold text-blue-700">HEM Groups </span> ("us", "we", or "our") operates the website (the "Service").
            </p>

            <p className="mt-4">
              This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
            </p>

            <p className="mt-4">
              We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy.
            </p>
          </div>

          <div className="space-y-8">
            <Section
              title="Transfer Of Data"
              content={[
                "Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.",
                "If you are located outside India and choose to provide information to us, please note that we transfer the data, including Personal Data, to India and process it there.",
                "Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.",
                "HEM Groups will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information."
              ]}
            />

            <Section
              title="Disclosure Of Data"
              content={[
                <div key="disclosure">
                  <h3 className="text-xl font-semibold text-orange-600 mt-4 mb-2">Legal Requirements</h3>
                  <p>
                    HEM Groups may disclose your Personal Data in the good faith belief that such action is necessary to:
                  </p>
                  <ul className="list-disc list-inside mt-3 space-y-1 text-gray-700 pl-4">
                    <li>To comply with a legal obligation</li>
                    <li>To protect and defend the rights or property of HEM Groups </li>
                    <li>To prevent or investigate possible wrongdoing in connection with the Service</li>
                    <li>To protect the personal safety of users of the Service or the public</li>
                    <li>To protect against legal liability</li>
                  </ul>
                </div>
              ]}
            />

            <Section
              title="Security Of Data"
              content={[
                "The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security."
              ]}
            />

            <Section
              title="Service Providers"
              content={[
                "We may employ third party companies and individuals to facilitate our Service ('Service Providers'), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.",
                "These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose."
              ]}
            />

            <Section
              title="Analytics"
              content={[
                "We may use third-party Service Providers to monitor and analyze the use of our Service.",
                <p key="google" className="mt-2">
                  <span className="font-semibold">Google Analytics</span> is a web analytics service offered by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our Service.
                </p>,
                <p key="google-link" className="mt-2">
                  For more information on the privacy practices of Google, please visit the Google Privacy & Terms web page:
                  <a href="https://policies.google.com/privacy?hl=en" className="text-orange-500 hover:text-orange-700 font-medium ml-1">
                    Google Privacy Policy
                  </a>
                </p>
              ]}
            />

            <Section
              title="Links To Other Sites"
              content={[
                "Our Service may contain links to other sites that are not operated by us. We strongly advise you to review the Privacy Policy of every site you visit."
              ]}
            />

            <Section
              title="Children's Privacy"
              content={[
                "Our Service does not address anyone under the age of 18 ('Children'). We do not knowingly collect personally identifiable information from anyone under 18."
              ]}
            />

            <Section
              title="Changes To This Privacy Policy"
              content={[
                "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page."
              ]}
            />

            <div>
              <h2 className="text-2xl font-bold text-blue-700 flex items-center mb-4">
                <span className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a8 8 0 01-3.757 6.921 1 1 0 11-1.087-1.678A6 6 0 0114.243 5.757zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clipRule="evenodd" />
                  </svg>
                </span>
                Contact Us
              </h2>
              <div className="pl-11">
                <p className="bg-blue-50 p-4 rounded-lg border-l-4 border-orange-400">
                  If you have any questions about this Privacy Policy, please
                  <a
                    onClick={() => {
                      setActivePage('contact');
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="text-orange-500 hover:text-orange-700 font-medium ml-1">
                    Contact Us
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

// Reusable Section component for consistent styling
const Section = ({ title, content }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-blue-700 flex items-center mb-4">
        <span className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
          </svg>
        </span>
        {title}
      </h2>
      <div className="pl-11 space-y-3">
        {content.map((paragraph, index) => (
          typeof paragraph === 'string'
            ? <p key={index} className="text-gray-700">{paragraph}</p>
            : paragraph
        ))}
      </div>
    </div>
  );
};

export default PrivacyPolicy;