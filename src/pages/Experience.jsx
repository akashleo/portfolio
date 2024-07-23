import React from "react";
import "./pages.css";

export default function Experience() {
  return (
    <div className="flex items-center justify-around w-[40vw] mx-auto bg-gray-800 text-white p-4 rounded-lg shadow-lg mb-10 border-2 border-white">
      <div className="bg-gray-800 text-white py-8 w-[100%]">
        <div className="container mx-auto px-4">
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold">Company Name</h3>
                <span className="text-gray-400">Tenure</span>
              </div>
              <ul className="list-disc pl-6 space-y-2">
                <li>Description of work experience</li>
                <li>Description of work experience</li>
                <li>Description of work experience</li>
              </ul>
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold">Another Company</h3>
                <span className="text-gray-400">Tenure</span>
              </div>
              <ul className="list-disc pl-6 space-y-2">
                <li>Description of work experience</li>
                <li>Description of work experience</li>
                <li>Description of work experience</li>
              </ul>
            </div>
            {/* Add more experience items as needed */}
          </div>
        </div>
      </div>
    </div>
  );
}
