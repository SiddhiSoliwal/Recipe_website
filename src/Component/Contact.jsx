import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import jsPDF from "jspdf";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // PDF जनरेट करने के लिए
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Contact Form Submission", 20, 20);
    doc.setFontSize(12);
    doc.text(`Full Name: ${formData.name}`, 20, 40);
    doc.text(`Email Address: ${formData.email}`, 20, 50);
    doc.text(`Comment: ${formData.comment}`, 20, 60);
    doc.text(`Consent Given: ${formData.consent ? "Yes" : "No"}`, 20, 70);

    doc.save("Contact_Form.pdf"); // PDF को सेव करता है
  };

  return (
    <>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[50vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
        }}
      >
        <div className="absolute inset-0 bg-[#1e1d1d] opacity-20" />
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-8xl px-8">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-4xl font-bold text-black mb-4"
            >
              Reach out, and let's Create Something great together
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-[#202020]"
            >
              Bringing the joy of cooking to your kitchen since 2020
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <div className="bg-white w-full min-h-screen px-6 py-10">
        <h1 className="text-5xl font-bold text-center mb-4">
          Contact <span className="text-yellow-500">Us</span>
        </h1>

        <div className="relative w-full flex flex-col md:flex-row items-center gap-6">
          {/* Left Side - Image */}
          <div className="relative md:w-1/2 w-full">
            <img
              src="https://images.pexels.com/photos/6684782/pexels-photo-6684782.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Delicious food"
              className="w-full h-[300px] object-cover rounded-lg"
              loading="lazy"
            />
          </div>

          {/* Right Side - Contact Details */}
          <div className="md:w-1/2 w-full text-gray-800">
            <p className="text-2xl mb-4">
              Connect with culinary excellence effortlessly.
            </p>
            <p className="text-gray-500 text-xl">Phone</p>
            <p className="font-bold text-xl">9821234530</p>

            <p className="text-gray-500 text-xl">Email Address</p>
            <p className="font-bold text-xl">CulinaryDelight27@gmail.com</p>

            <p className="text-gray-500 text-xl">Location</p>
            <p className="font-bold text-xl">123 TIT Road, Ratlam, M.P (457001)</p>
          </div>
        </div>
      </div>

      {/* Google Map Section */}
      <div className="relative w-full h-[451px] text-right">
        <iframe
          className="w-full h-full"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?width=675&height=451&hl=en&q=ratlam&t=&z=14&ie=UTF8&iwloc=B&output=embed"
          title="Google Map"
        ></iframe>
      </div>

      {/* Contact Form Section */}
      <div className="flex justify-center items-center min-h-screen bg-white">
        <div className="max-w-3xl w-full p-6">
          <h2 className="text-6xl font-bold">
            Send <span className="text-yellow-500">Us</span> A Message
          </h2>

          <form className="mt-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name..."
                  className="w-full border-b border-gray-400 py-2 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block font-semibold text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address..."
                  className="w-full border-b border-gray-400 py-2 focus:outline-none"
                  required
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block font-semibold text-gray-700">
                Comment
              </label>
              <textarea
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                placeholder="Enter your comment..."
                className="w-full border-b border-gray-400 py-2 focus:outline-none"
                rows="3"
                required
              ></textarea>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="bg-black text-white py-2 px-6 rounded-lg hover:bg-yellow-800"
              >
                Save as PDF
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
