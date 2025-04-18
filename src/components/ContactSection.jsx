import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
    passportNumber: "",
    dob: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ensure at least one of Passport Number or DOB is filled
    if (!formData.passportNumber && !formData.dob) {
      Swal.fire({
        icon: "warning",
        title: "Validation Error",
        text: "Please provide either a Passport Number or Date of Birth.",
      });
      return;
    }

    setIsSubmitting(true);

    emailjs
      .send(
        "service_9jpiokg", // Replace with EmailJS Service ID
        "template_ihv0nhc", // Replace with EmailJS Template ID
        {
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          passportNumber: formData.passportNumber || "Not provided",
          dob: formData.dob || "Not provided",
        },
        "hEcB053p8vN6V6nd9" // Replace with EmailJS Public Key
      )
      .then(() => {
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          message: "",
          passportNumber: "",
          dob: "",
        });

        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "Your message has been successfully sent.",
          timer: 3000,
          showConfirmButton: false,
        });
      })
      .catch((error) => {
        console.error("Error sending email:", error);

        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! Please try again later.",
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 md:p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-10 rounded-2xl shadow-lg w-full max-w-5xl">
        {/* Address Section */}
        <motion.div className="bg-gray-50 p-6 rounded-xl shadow-sm"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-lg font-semibold mb-4">OUR ADDRESS</h2>

          {/* Head Office */}
          <h3 className="text-md font-semibold text-blue-500 mb-2">Head Office:</h3>
          <p className="flex items-center gap-2 text-gray-600 mb-4">
            <FaMapMarkerAlt className="text-blue-500" /> Flat No. 201, 2nd Floor, Indira Chambers, 1549-B, Sadashiv Peth, Opp. Maharashtra Mandal, Tilak Road, Pune - 411030.
          </p>
          <p className="flex items-center gap-2 text-gray-600 mb-4">
            <FaPhone className="text-blue-500" /> +91 8484058582
          </p>
          <p className="flex items-center gap-2 text-gray-600 mb-4">
            <FaPhone className="text-blue-500" /> +91 9028402097
          </p>
          <p className="flex items-center gap-2 text-gray-600">
            <FaEnvelope className="text-blue-500" /> support@hemgroups.com
          </p>

          {/* Regional Office */}
          <h3 className="text-md font-semibold text-blue-500 mt-16 mb-2">Regional Office:</h3>
          <p className="flex items-center gap-2 text-gray-600 mb-2">
            <FaMapMarkerAlt className="text-blue-500" /> Flat No. 6, Rugved CHS Ltd., Landmark Near Kirti College, Veer Savarkar Marg, Prabhadevi, Mumbai - 400028.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div className="bg-gray-50 p-6 rounded-xl shadow-sm"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-lg font-semibold mb-4">CONTACT US</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name" required className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" required className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" required className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <input type="text" name="passportNumber" value={formData.passportNumber} onChange={handleChange} placeholder="Passport Number (Optional)" className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <input type="date" name="dob" value={formData.dob} onChange={handleChange} placeholder="Date of Birth (Optional)" className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" required className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 h-24" />

            <motion.button
              whileHover={!isSubmitting ? { scale: 1.05 } : {}}
              whileTap={!isSubmitting ? { scale: 0.95 } : {}}
              className={`w-full py-2 rounded-lg shadow-md text-white ${isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* Social Media Icons */}
      <div className="flex gap-4 mt-6">
        {[
          { Icon: FaLinkedinIn, link: "https://www.linkedin.com/company/hem-groups/" },
          { Icon: FaInstagram, link: "https://www.instagram.com/hemgroup_" },
        ].map(({ Icon, link }, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-gray-200 rounded-lg cursor-pointer shadow-md hover:bg-gray-300"
            onClick={() => window.open(link, "_blank")}
          >
            <Icon className="text-gray-700" size={20} />
          </motion.div>
        ))}
      </div>

    </div>
  );
}
