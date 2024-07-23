import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaDatabase,
  FaCloud,
  FaAws
  
} from "react-icons/fa";
import { AiFillOpenAI } from "react-icons/ai";
import { SiGooglecloud } from "react-icons/si";
import { SiRedux } from "react-icons/si";

import "./pages.css";

export default function Skills() {
  return (
    <div className="flex items-center justify-around w-[40vw] mx-auto bg-gray-800 text-white p-4 rounded-lg shadow-lg mb-10 border-2 border-white">
      <div className="bg-gray-800 text-white py-8  w-[100%]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <FaReact className="text-blue-500 text-7xl mb-2" />
              <span>React</span>
            </div>
            <div className="flex flex-col items-center">
              <FaNodeJs className="text-green-500 text-7xl mb-2" />
              <span>Node.js</span>
            </div>
            <div className="flex flex-col items-center">
              <FaHtml5 className="text-orange-500 text-7xl mb-2" />
              <span>HTML5</span>
            </div>
            <div className="flex flex-col items-center">
              <FaCss3Alt className="text-blue-500 text-7xl mb-2" />
              <span>CSS3</span>
            </div>
            <div className="flex flex-col items-center">
              <FaJs className="text-yellow-500 text-7xl mb-2" />
              <span>JavaScript</span>
            </div>
            <div className="flex flex-col items-center">
              <FaGitAlt className="text-red-500 text-7xl mb-2" /> 
              <span>Git</span>
            </div>
            <div className="flex flex-col items-center">
              <FaDatabase className="text-purple-500 text-7xl mb-2" />
              <span>Databases</span>
            </div>
            <div className="flex flex-col items-center">
              <FaCloud className="text-blue-400 text-7xl mb-2" />
              <span>Cloud</span>
            </div>
             <div className="flex flex-col items-center">
              <AiFillOpenAI className="text-white-500 text-7xl mb-2" />
              <span>LLMs</span>
            </div>
            <div className="flex flex-col items-center">
              <SiRedux className="text-purple-500 text-7xl mb-2" />
              <span>Redux</span>
            </div>
            <div className="flex flex-col items-center">
              <SiGooglecloud className="text-white-500 text-7xl mb-2" /> 
              <span>GCP</span>
            </div>
            <div className="flex flex-col items-center">
              <FaAws className="text-white-400 text-7xl mb-2" />
              <span>AWS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
