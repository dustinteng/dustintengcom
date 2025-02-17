"use client";

import React, { useState } from "react";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { useTheme } from "@/context/ThemeContext";

const ContactSection = () => {
  const { isDarkMode } = useTheme();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

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
            <label htmlFor="name" className="block mb-2 font-semibold">
              Name
            </label>
            <input
              id="name"
              type="text"
              className={`w-full p-3 rounded border focus:ring-2 ${
                isDarkMode
                  ? "bg-darkBackground text-white border-neonBlue/75 focus:ring-neonBlue/75"
                  : "bg-lightBackground text-black border-gray-300 focus:ring-darkBlue/75"
              } focus:outline-none`}
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 font-semibold">
              Email
            </label>
            <input
              id="email"
              type="email"
              className={`w-full p-3 rounded border focus:ring-2 ${
                isDarkMode
                  ? "bg-darkBackground text-white border-neonBlue/75 focus:ring-neonBlue/75"
                  : "bg-lightBackground text-black border-gray-300 focus:ring-darkBlue/75"
              } focus:outline-none`}
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 font-semibold">
              Message
            </label>
            <textarea
              id="message"
              className={`w-full p-3 rounded border focus:ring-2 ${
                isDarkMode
                  ? "bg-darkBackground text-white border-neonBlue/75 focus:ring-neonBlue/75"
                  : "bg-lightBackground text-black border-gray-300 focus:ring-darkBlue/75"
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
                ? `bg-neonBlue/75 text-darkBackground hover:bg-darkBlue/75 active:bg-darkBackground`
                : `bg-darkBlue/75 text-white hover:bg-black active:bg-darkBlue/75`
            }`}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
        {/* Contact Info */}
        <div className="w-full md:w-1/2 md:ml-8">
          <h3 className="text-2xl font-semibold mb-4">Let&apos;s Connect</h3>
          <p className="mb-6">
            I&apos;m open to discussing new projects, creative ideas, or
            opportunities to be part of your visions. Feel free to reach out!
          </p>
          <ul>
            <li className="mb-4">
              <a
                href="mailto:dustinteng12@gmail.com"
                className={` ${
                  isDarkMode
                    ? "text-lightBlue/75 hover:text-lightBlue"
                    : "text-darkBlue/75 hover:text-black"
                }`}
              >
                <span className="mr-2">Email:</span> dustinteng12@gmail.com
              </a>
            </li>
            <li className="mb-4">
              <a
                href="tel:+12533322566"
                className={` ${
                  isDarkMode
                    ? "text-lightBlue/75 hover:text-lightBlue"
                    : "text-darkBlue/75 hover:text-black"
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
                className={` ${
                  isDarkMode
                    ? "text-lightBlue/75 hover:text-lightBlue"
                    : "text-darkBlue/75 hover:text-black"
                }`}
              >
                GitHub
              </Link>
              <Link
                href="https://www.linkedin.com/in/jantengdyantono/"
                target="_blank"
                rel="noopener noreferrer"
                className={` ${
                  isDarkMode
                    ? "text-lightBlue/75 hover:text-lightBlue"
                    : "text-darkBlue/75 hover:text-black"
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
