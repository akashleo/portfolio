import React from "react";
import "./pages.css";

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: "Project One",
      description: "A brief description of Project One.",
      imageUrl: "https://via.placeholder.com/150", // Replace with your project image URL
    },
    {
      id: 2,
      name: "Project Two",
      description: "A brief description of Project Two.",
      imageUrl: "https://via.placeholder.com/150", // Replace with your project image URL
    },
    {
      id: 3,
      name: "Project Three",
      description: "A brief description of Project Three.",
      imageUrl: "https://via.placeholder.com/150", // Replace with your project image URL
    },
    {
      id: 4,
      name: "Project Four",
      description: "A brief description of Project Four.",
      imageUrl: "https://via.placeholder.com/150", // Replace with your project image URL
    },
  ];

  return (
    <div className="flex items-center justify-around w-[40vw] mx-auto bg-gray-800 text-white p-4 rounded-lg shadow-lg mb-10 border-2 border-whiten">
      <div className="bg-gray-800 text-white py-8 w-[100%]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Projects</h2>
          <div className="space-y-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="flex items-center bg-gray-700 p-4 rounded-lg shadow-lg"
              >
                <img
                  src={project.imageUrl}
                  alt={project.name}
                  className="w-32 h-32 object-cover rounded-lg"
                />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">{project.name}</h3>
                  <p className="text-gray-400">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
