import React from 'react';

const HeroSection = () => {
  return (
    <div className="flex items-center justify-around w-[40vw] h-[40vh] mx-auto bg-gray-800 text-white p-4 rounded-lg shadow-lg mb-10 border-2 border-white">
      {/* Profile Image */}
      <div className="flex-shrink-0">
        <img
          src="https://via.placeholder.com/100" // Replace with your profile image URL
          alt="Profile"
          className="w-36 h-36 rounded-full border-2 border-white"
        />
      </div>

      {/* Name, Bio, and Social Links */}
      <div className="ml-4">
        <h1 className="text-2xl font-bold">Your Name</h1>
        <p className="text-sm mt-1">A brief bio or tagline about yourself.</p>
        <div className="mt-2">
          <a href="https://twitter.com" className="text-blue-400 hover:underline mr-4">
            Twitter
          </a>
          <a href="https://github.com" className="text-blue-400 hover:underline mr-4">
            GitHub
          </a>
          <a href="https://linkedin.com" className="text-blue-400 hover:underline">
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
