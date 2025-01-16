"use client";

import React, { useState } from "react";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { useTheme } from "@/context/ThemeContext"; // Import ThemeContext

const ContactSection = () => {
  const { isDarkMode } = useTheme(); // Access theme context for dark mode

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const serviceId = "service_pc2222"; // Your Service ID
    const templateId = "template_6t313lv"; // Your Template ID
    const publicKey = "Z3_5EeDbskCMV_69o"; // Your Public Key

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setSuccess(true);
      alert("Email sent successfully!");
      setFormData({ name: "", email: "", message: "" }); // Reset form
    } catch (error) {
      console.error("Failed to send email:", error);
      alert("Failed to send email. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className={`container py-16 transition-colors duration-300 ${
        isDarkMode ? "text-white" : "text-black"
      }`}
    >
      <h2 className="text-4xl font-bold mb-12 text-center">Get in Touch</h2>
      <div className="flex flex-col md:flex-row justify-between">
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-1/2 mb-8 md:mb-0 md:mr-8"
        >
          <div className="mb-6">
            <label className="block mb-2 font-semibold">Name</label>
            <input
              type="text"
              className={`w-full p-3 rounded border focus:ring-2 ${
                isDarkMode
                  ? "bg-darkBackground text-white border-neonBlue focus:ring-neonBlue"
                  : "bg-lightBackground text-black border-gray-300 focus:ring-darkBlue"
              } focus:outline-none`}
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 font-semibold">Email</label>
            <input
              type="email"
              className={`w-full p-3 rounded border focus:ring-2 ${
                isDarkMode
                  ? "bg-darkBackground text-white border-neonBlue focus:ring-neonBlue"
                  : "bg-lightBackground text-black border-gray-300 focus:ring-darkBlue"
              } focus:outline-none`}
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 font-semibold">Message</label>
            <textarea
              className={`w-full p-3 rounded border focus:ring-2 ${
                isDarkMode
                  ? "bg-darkBackground text-white border-neonBlue focus:ring-neonBlue"
                  : "bg-lightBackground text-black border-gray-300 focus:ring-darkBlue"
              } focus:outline-none`}
              rows={5}
              required
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            ></textarea>
          </div>
          <button
            type="submit"
            className={`w-full py-3 font-semibold rounded transition-colors duration-300 ${
              loading
                ? "bg-gray-500 cursor-not-allowed"
                : isDarkMode
                ? `bg-neonBlue text-darkBackground hover:bg-darkBlue active:bg-darkBackground`
                : `bg-darkBlue text-white hover:bg-neonBlue active:bg-darkBlue`
            }`}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
        {/* Contact Info */}
        <div className="w-full md:w-1/2 md:ml-8">
          <h3 className="text-2xl font-semibold mb-4">Let's Connect</h3>
          <p className="mb-6">
            I'm open to discussing new projects, creative ideas, or
            opportunities to be part of your visions. Feel free to reach out!
          </p>
          <ul>
            <li className="mb-4">
              <a
                href="mailto:dustinteng12@gmail.com"
                className={`flex items-center hover:text-darkBlue dark:hover:text-neonBlue focus:outline-none focus:ring-2 ${
                  isDarkMode
                    ? "text-white focus:ring-neonBlue"
                    : "text-darkBlue focus:ring-darkBlue"
                }`}
              >
                <span className="mr-2">Email:</span> dustinteng12@gmail.com
              </a>
            </li>
            <li className="mb-4">
              <a
                href="tel:+1234567890"
                className={`flex items-center hover:text-darkBlue dark:hover:text-neonBlue focus:outline-none focus:ring-2 ${
                  isDarkMode
                    ? "text-white focus:ring-neonBlue"
                    : "text-darkBlue focus:ring-darkBlue"
                }`}
              >
                <span className="mr-2">Phone:</span> +1 (253) 332-2566
              </a>
            </li>
            <li className="flex space-x-4">
              <Link
                href="https://github.com/dustinteng"
                target="_blank"
                rel="noopener noreferrer"
                className={`hover:text-darkBlue dark:hover:text-neonBlue focus:outline-none focus:ring-2 ${
                  isDarkMode
                    ? "text-white focus:ring-neonBlue"
                    : "text-darkBlue focus:ring-darkBlue"
                }`}
              >
                GitHub
              </Link>
              <Link
                href="https://www.linkedin.com/in/jantengdyantono/"
                target="_blank"
                rel="noopener noreferrer"
                className={`hover:text-darkBlue dark:hover:text-neonBlue focus:outline-none focus:ring-2 ${
                  isDarkMode
                    ? "text-white focus:ring-neonBlue"
                    : "text-darkBlue focus:ring-darkBlue"
                }`}
              >
                LinkedIn
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
