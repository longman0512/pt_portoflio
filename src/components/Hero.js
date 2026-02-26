import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title gradient-text">Viacheslav Maiatskyi</h1>
        <h2 className="hero-subtitle">Full-Stack • Backend-First</h2>
        <p className="hero-description">
          Building scalable web applications for global clients
        </p>
        
        <div className="hero-icons">
          <div className="icon-circle">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="icon-circle">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
              <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2"/>
              <line x1="12" y1="2" x2="12" y2="4" stroke="currentColor" strokeWidth="2"/>
              <line x1="12" y1="20" x2="12" y2="22" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
          <div className="icon-circle">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        <p className="hero-role">8+ Years Experience</p>
        <p className="hero-skills">
          PHP (Laravel) | Node.js | Python (Django) | React | Vue | React Native
        </p>
      </div>
      
      <div className="hero-decoration left"></div>
      <div className="hero-decoration right"></div>
    </section>
  );
};

export default Hero;
