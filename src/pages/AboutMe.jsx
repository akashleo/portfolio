import React from "react";
import "./pages.css";

export default function AboutMe() {
  return <div className="flex items-center justify-around w-[40vw] mx-auto bg-gray-800 text-white p-4 rounded-lg shadow-lg mb-10 border-2 border-white">
  <div className="bg-gray-800 text-white py-8 w-[100%]">
      <div className="container mx-auto px-4 flex items-center">
        <div className="w-1/2">
          <img
            src="https://via.placeholder.com/300" // Replace with your profile image URL
            alt="About Me"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="w-1/2 ml-8">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p className="text-gray-400">
            Hi there! My name is [Your Name] and I&apos;m a [Your Profession]. I&apos;m passionate about [Your Interests] and love to [Your Hobbies].
            <br />
            <br />
            In my free time, you can find me [Your Free Time Activities]. I&apos;m always eager to learn new things and take on exciting challenges.
            <br />
            <br />
            Feel free to reach out if you&apos;d like to chat or collaborate on a project!
          </p>
        </div>
      </div>
    </div></div>;
}
