import React from "react";
import ServiceCard from "./ServiceCard"; // Import ServiceCard

const LandingPage = () => {
  return (
    <div className="w-full">
      {/* Navbar */}
      <nav className="navbar w-full fixed top-0 bg-white shadow-md py-4 px-6 flex justify-between items-center z-10">
        <h1 className="text-xl font-bold">MedView</h1>
        <ul className="flex space-x-4">
          <li><a href="#" className="hover:text-blue-500">Home</a></li>
          <li><a href="#services-section" className="hover:text-blue-500">Services</a></li>
          <li><a href="#" className="hover:text-blue-500">About</a></li>
          <li><a href="/profile" className="hover:text-blue-500">Login/Signup</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="hero w-full h-screen flex flex-col items-center justify-center bg-gray-200 text-center px-6">
        <h2 className="text-4xl font-bold">Know Your Pain, Treat It Right</h2>
        <p className="max-w-lg text-lg text-gray-700 mt-4">
          Our intelligent diagnosis system helps you identify discomfort by selecting the affected body part on a 3D model, providing instant insights and tailored treatment suggestions.
        </p>
        <a href="#services-section" className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg text-lg">
        </a>
      </div>

      {/* Services Section (Full Page) */}
      <div id="services-section" className="w-full min-h-screen flex flex-col items-center justify-center bg-white">
        <h2 className="text-3xl font-bold mb-6"></h2>
        <ServiceCard />
      </div>

      {/* Footer */}
      <footer className="w-full py-6 bg-gray-900 text-white text-center">
        &copy; 2025 MedView - All Rights Reserved
      </footer>
    </div>
  );
};

export default LandingPage;
