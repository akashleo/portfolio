import React from "react";

export default function Navbar() {
  return (
    <div className="w-auto flex flex-row justify-between bg-slate-400 mx-10 my-5 px-5">
      <div>Logo</div>
      <div className="flex flex-row justify-evenly w-1/3">
        <div className="">About Me</div>
        <div>Projects</div>
        <div>Skills</div>
        <div>Contact</div>
      </div>
      <div>Resume</div>
    </div>
  );
}
