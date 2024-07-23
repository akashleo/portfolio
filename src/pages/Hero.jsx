import React from "react";
import "./pages.css";

export default function Hero() {
  return (
    <div className="hero-container flex flex-row justify-between">
      <div className="profile-image"></div>
      <div>
        <h1 className="hero-title">Your Name</h1>
        <p className="hero-subtitle">A Brief Description or Tagline</p>
      </div>
    </div>
  );
}
