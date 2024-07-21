import React from 'react'
import "./pages.css";

export default function Hero() {
  return (
   <div className="hero-container">
      <h1 className="hero-title">Your Name</h1>
      <p className="hero-subtitle">A Brief Description or Tagline</p>
      <a href="#projects" className="hero-button">
        View My Work
      </a>
    </div>
  );
}
